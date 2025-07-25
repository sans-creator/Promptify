import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken' //token for user-auth
import razorpay from 'razorpay'
import 'dotenv/config'
import transactionModel from "../models/transactionModel.js";


const registerUser = async(req, res)=>{
    try {
        const {name, email, password} = req.body;

        if(!name || !email || !password){
            return res.json({success:false, message: "Missing details"});
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const userData = {
            name,
            email,
            password: hashedPassword
        }

        const newUser = new userModel(userData)
        const user = await newUser.save()

        //token will be sent in response to enable login and registration for user

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)

        res.json({success:true, token, user: {name: user.name}});


    } catch (error) {
        console.log(error)
        res.json({success:false, message: error.message});
    }
}




const loginUser = async (req, res) =>{
    try {
        const {email, password} = req.body;
        const user = await userModel.findOne({email})

        if(!user){
            return res.json({success:false, message:'user does not exists'});
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(isMatch){
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)
            
            res.json({success:true, token, user: {name: user.name}});

        }else{
            return res.json({success:false, message:'invalid credentials'});
        }
    } catch (error) {
        console.log(error);
        res.json({success:false, message: error.message});
    }
}



const userCredits = async(req, res) => {
    try {
        console.log("Request body:", req.body);

        const {userId}=req.body
        if (!userId) {
            return res.status(400).json({
                success: false,
                message: "User ID is missing in request. Token might be invalid."
            });
        }

        const user=await userModel.findById(userId)

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        res.json({
            success:true,
            credits:user.creditBalance, 
            user:{
                name:user.name
            }
        })
        
    } catch (error) {
        console.log(error);
        res.json({success:false, message: error.message});
        
    }
}


const razorpayInstance = new razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET


})

const paymentRazorpay = async (req, res) => {
    try {
        const { userId, planId } = req.body;
        const userData = await userModel.findById(userId);

        if (!userId|| !planId) {
            return res.json({ success: false, message: "Missing Details" });
        }

        if (!userData) {
            return res.json({ success: false, message: "User not found" });
        }
        let credits,plan,amount,date 

        switch (planId) {
            case "Basic":
                plan='Basic'
                credits =100
                amount=10
                break;

            case "Advanced":
                plan='Advanced'
                credits =500
                amount=50
                break;
                
            case "Business":
                plan='Business'
                credits =5000
                amount=250
                break;    

            default:
                return res.json({ success: false, message: "Invalid Plan" });
                break;
        }

        date=Date.now()
        

        const transactionData={
            userId,
            plan,
            amount,
            credits,
            date
        
        }

        const newTransaction=await transactionModel.create(transactionData)

        const options = {
            amount: amount*100 ,
            currency: process.env.CURRENCY,
            receipt: newTransaction._id,
        }



        await razorpayInstance.orders.create(options,(error,order)=>{
            if (error){
                console.log(error);
                return res.json({success:false, message: error.message})

            }
            res.json({
                success:true,
                order,
                newTransaction
            })

        })
        


    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });

    }
}


        

export {registerUser,loginUser,userCredits,paymentRazorpay}
