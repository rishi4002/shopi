import React from "react";
import image from "./404.png";
import { Link } from "react-router";

function Notfound() {
    

    return(
        <div className="w-full flex flex-col items-center justify-center space-y-3">
            <img src={image} className="min-w-52 max-w-96"/>
            <h1 className="font-bold">Go back to home page.</h1>
            <Link to="/" className="bg-sky-500/100 px-3 py-1 rounded-xl text-white font-bold hover:bg-red-500 border-2 border-white">Home</Link>
        </div>
    )
}


export default Notfound;