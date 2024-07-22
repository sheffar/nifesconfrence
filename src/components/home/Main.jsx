import { Link } from "react-router-dom"
import { FaRegAddressBook, FaMoneyBill, FaCreditCard } from "react-icons/fa"


export const MainContent = () => {
    return (
        <>
            <div className=" hide md:mb-40 w-full md:w-1/2 lg:w-1/3  mx-auto mt-16 px-6 md:px-10 md:p-10 py-4 flex flex-col bg-gray-200/20  justify-center text-center align-center gap-4 ">
                <Link to="/Register" className="group p-2 border-black border-2 text-center item-center justify-between flex px-5 bg-white rounded-full font-bold  hover:bg-orange-500 duration-300" >REGISTER <FaRegAddressBook className="mt-0.5 group-hover:translate-x-2 duration-300" /> </Link>
                <Link to="/Merchandise" className=" group p-2 border-black border-2 text-center item-center justify-between flex px-5 bg-white  rounded-full font-bold  hover:bg-orange-500 duration-300">MERCHANDISE  <FaMoneyBill className="group-hover:translate-x-2 duration-300 mt-0.5" /> </Link>
                <Link to="/Sponsorship" className="p-2 group border-black border-2 text-center item-center justify-between flex px-5 bg-white  rounded-full font-bold  hover:bg-orange-500 duration-300">SPONSORSHIP <FaCreditCard className="group-hover:translate-x-2 duration-300 mt-0.5" /></Link>
            </div>

        </>
    )
}
