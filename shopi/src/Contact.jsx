import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";



function Contact() {
     let navigate= useNavigate();


     function handleBack(){
       navigate("/");
    }

    return(
        <div className="flex flex-col w-full">
             <IoMdArrowRoundBack className="fixed top-16 left-5 text-2xl" onClick={handleBack}/>
            <img src="/vite.svg" className="w-full h-[60%] object-cover"/>
            <div className="flex flex-col sm:flex-row justify-around w-full mt-6 gap-5 px-5 text-center">
               <div>
                <h1>E-MAIL</h1>
                <p>rishabhkukreti@gmail.com</p>
                </div>
               <div> 
                <h1>PHONE NO.</h1>
                <p>6397098201</p>
                </div>
               <div> 
                <h1>ADDRESS</h1>
                <p>Rishikesh, Tehri Garhwal, Uttarakhand</p>
                </div>
            </div>
        </div>
    )
}


export default Contact;