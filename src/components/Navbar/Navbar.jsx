import { LuShoppingCart } from "react-icons/lu";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";



function Navbar() {
  return (
    <>
   <nav className=" bg-[#000000] ">
   <div className="container  w-[1200px] mx-auto  flex items-center justify-between py-[15px] ">
        <div className="nav_logo">
            <NavLink to={"/"}><img src="/imgs/navbar_logo.svg" alt="" /></NavLink>
        </div>
        <ul className=" flex items-center gap-[40px]  ">
            <li  className="  text-[#FFFFFF]  text-[18px] font-normal " ><NavLink to={"/"} >HOME</NavLink></li>
            <li  className="  text-[#FFFFFF]  text-[18px] font-normal " ><NavLink to={"/detail"} >DETAILS</NavLink></li>
            <li  className=" cursor-pointer text-[#FFFFFF]  text-[18px] font-normal " >KITCHEN &  DINING</li>
            <li  className=" cursor-pointer text-[#FFFFFF]  text-[18px] font-normal " >CONTACT</li>
        </ul>
        <div className="icons flex items-center gap-[60px] ">
        <LuShoppingCart  className=" cursor-pointer text-[20px] text-white " />
        <FaRegCircleUser  className=" cursor-pointer text-[20px] text-white " />
        <CiSearch  className=" cursor-pointer text-[20px] text-white " />



        </div>
    </div>
   </nav>
    
    </>
  )
}

export default Navbar