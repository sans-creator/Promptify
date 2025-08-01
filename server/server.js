import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'
import paymentRoutes from './routes/paymentRoutes.js'

const PORT=process.env.PORT || 4000
const app=express()


app.use(express.json())
app.use(cors()) //middleware
app.use(express.urlencoded({ extended: true }))
await connectDB()


app.use('/api/user',userRouter)
app.use('/api/image',imageRouter)
app.use('/api/payment', paymentRoutes);
app.get('/',(req,res)=>res.send("api donw"))

app.listen(PORT,()=> console.log('Server ruuning on port'+ PORT))