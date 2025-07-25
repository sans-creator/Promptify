import jwt from 'jsonwebtoken'

const userAuth = async(req, res, next) => {  //middleware will  be executd before controller function whenever we will hit the api

    const {token}=req.headers;


    if(!token){
        return res.json({
            success:false,
            message:"Not Authorized. Login Again"
        })
    }

    try {
        const tokenDecode=jwt.verify(token , process.env.JWT_SECRET);


        if(tokenDecode.id){
            if (!req.body) {
                req.body = {};
            }
            req.body.userId=tokenDecode.id
        }
        else{
            return res.json({
                success:false,
                message:"Not Authorized.Login Agian"
            })

        }

        next();
        
    } catch (error) {
        res.json({success:false, message: error.message});
        
    }

   
};

export default userAuth;