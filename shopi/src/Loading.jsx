import React from "react";
import { ImSpinner9  } from "react-icons/im";

function Loading() {

    return (
        <div className="flex flex-col items-center justify-center text-3xl text-blue-400 md:text-5xl animate-spin p-3">
            <ImSpinner9  />
        </div>
    )
    
}



export default Loading;