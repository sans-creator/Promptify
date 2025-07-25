import { generateImage } from "../controller/imageController.js";
import userAuth from '../middlewares/auth.js'

import express from "express"

const imageRouter = express.Router()


imageRouter.post('/generate-image', userAuth, generateImage)

export default imageRouter;