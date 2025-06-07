import React from "react";

function Boxloading(){

    return (
       <div className="min-w-46 max-w-[800px] mx-4 md:mx-20 bg-gray-200 
         rounded-t-md shadow-xl shadow-cyan-950 mt-10 animate-pulse
         md:w-full md:flex md:flex-row">

      {/* Image Placeholder */}
      <div className="bg-gray-300 w-[80%] h-[200px] m-auto rounded mt-3 
                      md:w-[50%] md:ml-3  md:mt-6 md:h-[60%]">
      </div>

      {/* Text Placeholders */}
      <div className="md:flex md:flex-col md:pl-4 w-full md:w-[50%]">
        <div className="bg-gray-400 w-[80%] h-5 mt-6 m-auto rounded md:w-[70%] md:ml-2"></div>
        <div className="bg-gray-300 w-[80%] h-5 mt-2 m-auto rounded md:w-[50%] md:ml-2 hidden md:block"></div>
        <div className="bg-gray-300 w-[80%] h-5 mt-2 m-auto rounded md:w-[50%] md:ml-2  hidden md:block"></div>
        <div className="bg-gray-400 w-[80%] h-5 mt-4 m-auto rounded md:w-[70%] md:ml-2"></div>
        <div className="bg-gray-300 w-[80%] h-5 mt-2 m-auto rounded md:w-[50%] md:ml-2 hidden md:block"></div>
        <div className="bg-gray-300 w-[80%] h-5 mt-2 m-auto rounded md:w-[50%] md:ml-2  hidden md:block"></div>
        <div className="bg-gray-400 w-[80%] h-5 mt-4 m-auto rounded md:w-[70%] md:ml-2"></div>
        <div className="bg-gray-400 w-[80%] h-5 mt-4 mb-6 m-auto rounded md:w-[70%] md:ml-2"></div>
      </div>
    </div>
    )
}


export default Boxloading;