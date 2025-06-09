import React, { memo, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import logoimage from "./logo.png";

function Navbar(){
    const [barClick, setbarClick]= useState(false);


    function handelBarClick() {
        setbarClick(!barClick);
    }

    return (
        <div className="bg-blue-500/90 py-2 pr-5 flex justify-between text-white text-[18px]">
            <div className="sm:hidden">
                <FaBars onClick={handelBarClick} className="text-[30px] ml-4"/>
                {barClick && <div className="fixed bg-white flex flex-col mt-3 w-full gap-3 text-black z-1000" onClick={()=>{setbarClick(false)}}>
                <Link to="/" className="hover:bg-gray-300 pl-5 py-1 ">HOME</Link>
                <Link to="/contact" className="hover:bg-gray-300 pl-5 py-1 ">CONTACT</Link>
                <Link to="/cart" className="hover:bg-gray-300 pl-5 py-1 ">CART</Link></div>}

                </div>
            <div className="space-x-4 hidden self-center sm:block ml-4">
                <Link to="/" className="hover:text-gray-700">HOME</Link>
                <Link to="/contact" className="hover:text-gray-700">CONTACT</Link>
                <Link to="/cart" className="hover:text-gray-700">CART</Link>
            </div>
            <img src={logoimage} className="w-12 rounded-full hover:animate-pulse"/>
        </div>
    )

}


export default memo(Navbar);