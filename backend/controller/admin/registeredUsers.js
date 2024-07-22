import { User } from "../../module/registraion.js"
export const registedrUsers = async (req, res)=>{

    try{
        const user = await User.find().select("fullname phonenumber maritalstatus gender nameofschool").sort({date: -1})

        if(!user) return res.status(400).json({message: "There is no registered person!"})

        return res.status(200).json({user})

    }catch(e){
        console.log(e.message)
        return res.status(500).json({message: "Sever error"})
    }
}