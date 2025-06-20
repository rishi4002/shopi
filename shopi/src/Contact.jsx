import  { memo, useCallback } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import logoImage from "./logo.png";



function Contact() {
    
    let navigate= useNavigate();


    const handleBack= useCallback(function (){
       navigate("/");
    },[]);

    return(
        <div className="flex flex-col w-full">
             <IoMdArrowRoundBack className="fixed top-16 left-5 text-2xl" onClick={handleBack}/>
            <img src={logoImage} className="w-full h-[60%] object-contain bg-white mask-l-from-40% mask-b-from-70% "/>
            <div className="flex flex-col sm:flex-row justify-around w-full mt-6 gap-5 px-5 text-center">
               <div>
                <h1>E-MAIL</h1>
                <p>rishabhkukreti@gmail.com</p>
                </div>
               <div> 
                <h1>PHONE NO.</h1>
                <p>0000111101</p>
                </div>
               <div> 
                <h1>ADDRESS</h1>
                <p>Tehri Garhwal, Uttarakhand</p>
                </div>
            </div>
        </div>
    )
}


export default memo(Contact);