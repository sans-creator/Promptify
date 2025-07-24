import express from 'express'
import {registerUser, loginUser} from '../controller/userController.js'
// import userAuth from '../middlewares/auth.js'

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
// userRouter.get('/credits', userAuth, userCredits)
export default userRouter



//http://localhost:4000/api/user/register==>registerUser controller function will be executed

//localhost:4000/api/user/login==>loginUser controller function will be executed
