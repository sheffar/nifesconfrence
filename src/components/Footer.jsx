import { Link } from "react-router-dom"
import  footerlogo  from "/image/NIFESLOGOCLEAR.png"
export const Footer = () => {
    return (
        <>
            <div className="w-full flex flex-col md:flex-row  justify-center md:justify-between px-2 md:px-28 py-4  bg-slate-400/20">
                <div className="">
                    <ul className="flex flex-col gap-3 md:gap-5 items-center justify-center h-full">
                        <li className="text-sm font-semibold hover:text-orange-500 duration-300"><Link to=""> Meeting Info</Link></li>
                        <li className="text-sm font-semibold hover:text-orange-500 duration-300"><Link to=""> Free Transportation</Link></li>
                        <li className="text-sm font-semibold hover:text-orange-500 duration-300"><Link to=""> Join Our FaceBook Community</Link></li>
                        <li className="text-sm font-semibold hover:text-orange-500 duration-300"><Link to=""> Join Our Whatsapp Community</Link></li>
                        <li className="text-sm font-semibold hover:text-orange-500 duration-300"><Link to=""> Join Our Telegram Community</Link></li>
                    </ul>
                </div>

                <div className=" flex gap-3 md:gap-5 flex-col text-center justify-center items-center">
                <img src={footerlogo}  className="w-24 h-24 object-cover border-2"/>
                    <p className="text-sm  font-bold">Nigeria Fellowship Of Evangelical Student</p>
                    <p className="text-sm  font-semibold">...building tomorrow's leaders today</p>
                    <p className="text-sm  font-bold">© NIFES UNIZIK 2024</p>

                </div>
            </div>
        </>
    )
}
