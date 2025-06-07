import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";

function Navbar(){
    const [barClick, setbarClick]= useState(false);


    function handelBarClick() {
        setbarClick(!barClick);
    }
    return (
        <div className="bg-blue-500/90 py-3 pr-5 flex justify-between  text-white text-[18px]">
            <div className="sm:hidden">
                <FaBars onClick={handelBarClick} className="text-[30px] ml-4"/>
                {barClick && <div className="fixed bg-white flex flex-col mt-3 w-full gap-3 text-black z-1000" onClick={()=>{setbarClick(false)}}>
                <Link to="/" className="hover:bg-gray-300 pl-5 py-1 ">HOME</Link>
                <Link to="/contact" className="hover:bg-gray-300 pl-5 py-1 ">CONTACT</Link>
                <Link to="/cart" className="hover:bg-gray-300 pl-5 py-1 ">CART</Link></div>}

                </div>
            <div className="space-x-4 hidden sm:block ml-4">
                <Link to="/">HOME</Link>
                <Link to="/contact">CONTACT</Link>
                <Link to="/cart">CART</Link>
            </div>
            <img src="/vite.svg" className=""/>
        </div>
    )

}


export default Navbar;