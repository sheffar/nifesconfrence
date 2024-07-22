import { User } from "../../module/registraion.js"
export const Total_No_Of_Users = async (req, res) => {
    try {

        const usercount = await User.countDocuments()

        if (!usercount) return res.status(400).json({ message: "0" })

        return res.status(200).json({ usercount })

    } catch (e) {
        console.log(e.message)
        return res.status(500).json({ message: "Server error" })
    }
}