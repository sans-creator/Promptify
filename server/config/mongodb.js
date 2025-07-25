import mongoose from "mongoose";


const connectDB=async ()=>{

    mongoose.connection.on('connected',()=>{
        console.log('connected succesfully')
    })

    await mongoose.connect(`${process.env.MONGO_URI}/Promptify`)
}

export default connectDB;