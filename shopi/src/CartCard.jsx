
import React from "react";



function CartCard({title, category, price, thumbnail, id, count, remove}){

function handleRemove() {
    remove(id);
}

    return (
        <div className="min-w-32 max-w-46 bg-gray-100 rounded-t-md mt-3 shadow-xl shadow-gray-400 flex flex-col pb-2 sm:max-w-[400px] sm:flex-row sm:mt-5">
        <img className="w-full aspect-square sm:w-[50%]" src={thumbnail} alt="product"/>
            <div className="px-2 pt-2 text-[15px] sm:w-[50%] flex flex-col justify-between">
            <h1>{title}</h1>
            <h3>Category: {category}</h3>
            <h3>Price: Rs.{count*(Math.floor(price))}</h3>
            <h3>Quantity: {count}</h3>
            <button onClick={handleRemove} className=" self-end mx-3 border-1 border-gray-300 rounded bg-sky-500/100 px-2 text-white hover:bg-red-500 sm:py-1 ">Remove</button>
         </div>
        </div>
    );
}


export default CartCard;