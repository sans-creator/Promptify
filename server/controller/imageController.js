import userModel from "../models/userModel.js";
import FormData from "form-data"
import axios from 'axios'
import mongoose from 'mongoose';


export const generateImage = async (req, res) => {
    try {

        const {userId,prompt}=req.body

        const user=await userModel.findById(userId)


        if(!user||!prompt){
            return res.json({
                success:false,
                message:"Missing Details"
            })
        }

        if (user.creditBalance === 0 || user.creditBalance < 0) {
            return res.json({ success: false, message: "No credit Balance", creditBalance: user.creditBalance });
        }

        const formData = new FormData();
        formData.append('prompt', prompt);

        const { data } = await axios.post('https://clipdrop-api.co/text-to-image/v1', formData, {
            headers: {
                'x-api-key': process.env.CLIPDROP_API,
            },
            responseType: 'arraybuffer'
        });
        console.log(data);

        const base64Image = Buffer.from(data, 'binary').toString('base64');
        const resultImage = `data:image/png;base64,${base64Image}`;


        //deducting userCredit

        await userModel.findByIdAndUpdate(user._id, { creditBalance: user.creditBalance - 1 });

//sending response
        res.json({
            success: true,
            message: "Image Generated",
            creditBalance: user.creditBalance - 1,
            resultImage,
            // generationId: newGeneration._id
        });








        
    } catch (error) {
        console.log(error);
        res.json({success:false, message: error.message});
        
    }
}