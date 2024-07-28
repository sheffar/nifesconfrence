import { User } from "../../module/registraion.js";

export const submitInfo = async (req, res) => {

    const { fullname, phonenumber, maritalstatus, gender, staetoforigin, nameofschool, courseofstudy, levelinschool, lodge } = req.body

    if (!fullname || !phonenumber || !maritalstatus || !gender || !staetoforigin || !nameofschool
        || !courseofstudy || !levelinschool || !lodge) {
        return res.status(400).json({
            message: " All fileds are required"
        })
    }



    let user;
    try {
        user = await User.findOne({
            fullname

        })

        if (user) return res.status(400).json({ message: `${fullname} You've  already registered` })

    } catch (e) {
        console.log(e.message)
        return res.status(500).json({ message: "Error occured while trying to verfiy your details" })
    }

    try {
        await User.create({
            fullname,
            phonenumber,
            maritalstatus,
            gender,
            staetoforigin,
            nameofschool,
            courseofstudy,
            levelinschool,
            lodge,
            date: Date.now()

        })

        return res.status(200).json({ message: "Registration was successfull" })

    } catch (e) {

        console.log(e.message)
        return res.status(500).json({ message: "Error occured saving you info, try again" })
    }

}