import React from "react";
import { Link } from "react-router-dom";



function Card({title, category, price, rating, thumbnail, id}){

    return (
        <div className="min-w-32 max-w-44 bg-sky-500/100 border border-gray-200 rounded-t-md mt-3 shadow-xl shadow-cyan-950 flex flex-col pb-2">
        <img className="w-full aspect-square md:h-[50%]" src={thumbnail} alt="product"/>
            <div className="px-2 pt-2 text-[15px] md:h-[50%] text-white flex flex-col justify-between">
            <h1>{title}</h1>
            <h3>category: {category}</h3>
            <h3>price: Rs.{Math.floor(price)}</h3>
            <h3>rating: {rating}</h3>
            <Link to={"product/"+ id} className="self-end mt-3 bg-fuchsia-700 border-1 border-fuchsia-700 rounded-2xl px-2 hover:bg-red-600">view details</Link>
            </div>
        </div>
    );
}


export default Card;