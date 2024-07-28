import { FaBars, FaTimes } from "react-icons/fa"
import Logo from "/image/Logo.png"
import { Link } from "react-router-dom"
import { useState } from "react"



export const Nav = () => {

    const [open, setOpen] = useState(false)

    const toggleMenu = () => {
        setOpen(!open)
    }



    return (
        <>
            <div className="flex  gap-3 sticky top-0 right-0 z-50 justify-between p-2 lg:px-16 md:pb-4 shadow-black shadow-sm bg-white items-center mb-5 " >
                <div className="cursor-pointer">
                <Link to="/">  <img src={Logo} className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-black  object-cover" /></Link>
                   
                </div>
                <div className="">

                    <p className="text-base md:text-lg font-bold">SINGLES CONFRENCE <span className="text-orange-500 ">2024</span></p>
                </div>

                    <ul className={`flex flex-col md:flex-row gap-6 md:gap-5 absolute md:static  top-16 right-0 bg-white align-center justify-center text-center  p-5 md:p-1 w-2/4 md:w-fit  h-fit md:h-fit md:bg-white ${open ? 'block ' : 'hidden md:flex'}`}>
                        <li><Link to="/" className="text-base md:text-lg font-semibold hover:text-orange-500 duration-300"> Home</Link></li>
                        <li><Link to="/Register" className="text-base md:text-lg font-semibold hover:text-orange-500 duration-200"> Register</Link></li>
                        <li><Link to="/Merchandise" className="text-base md:text-lg font-semibold hover:text-orange-500 duration-200"> Merchandise</Link></li>
                        <li><Link to="/Sponsorship" className="text-base md:text-lg font-semibold hover:text-orange-500 duration-200"> Sponsorship</Link></li>
                        <li><Link to="/Blog" className="text-base md:text-lg font-semibold hover:text-orange-500 duration-200"> Blog</Link></li>
                        <li><Link to="/Contact" className="text-base md:text-lg font-semibold hover:text-orange-500 duration-200"> Contact</Link></li>
                    </ul>

                <div className="flex z-10 md:z-0 md:hidden hover:text-orange-500 duration-300 " onClick={() => toggleMenu()}>
                    {open ? <FaTimes className="text-xl cursor-pointer" /> : <FaBars className="text-xl cursor-pointer" />}
                </div>
            </div>
        </>
    )
}


