import express from "express"
const adminroute = express.Router()

import { registedrUsers } from "../../controller/admin/registeredUsers.js"
import { Total_No_Of_Users } from "../../controller/admin/totalUsers.js"

adminroute.get("/users", registedrUsers)//ROUTE TO GET ALL TEH REGISTERED USERS
adminroute.get("/total", Total_No_Of_Users)// TOTAL NUMBER OF USERS

export default adminroute


