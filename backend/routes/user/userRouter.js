import express from "express"
import { submitInfo } from "../../controller/user/submitInfo.js"
const router = express.Router()


router.post("/submit", submitInfo)
 



export default router
