import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import router from "./routes/user/userRouter.js";
import adminroute from "./routes/admin/adminRoute.js";
import cors from 'cors'

const app = express();
dotenv.config()

const port = process.env.PORT || 4000;


// Body parser middleware to handle form submissions
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())






// Route
app.use('/', router);

app.use("/admin", adminroute)

const startsever = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
            .then(() => {
                console.log("Connected to MongoDB!");
            });

        app.listen(port, () => {
            console.log(`app  listening on ${port}`);
        })
    } catch (e) {
        console.log(e.message + "Error connecting to Database")
    }
}
startsever()   