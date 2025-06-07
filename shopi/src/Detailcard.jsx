import React, { useEffect, useState } from "react";
import { getproduct } from "./Apis";
import { useNavigate, useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import Boxloading from "./Boxloading";

function Detailcard(){
    const [Product, setProduct] = useState("");
    const [inputNum, setinputNum]= useState(0);
    const [noProduct, setnoProduct]= useState(false);
    const [apiWorks, setapiWorks]= useState(true);
   
   
    const params= useParams();
    const id= params.id;
    let navigate= useNavigate();

    useEffect(()=>{
        setTimeout(()=> {const product= getproduct(id);
        product.then((Response)=> {
            setProduct(Response);
        }).catch(()=>{
            setapiWorks(false);
        })
    },2000);
        
    },[])

    function handleBack(){
       navigate("/");
    }

    function handelInput(e) {
        setinputNum(e.target.value);
    }

    function handelCount(){ 
         const cart = JSON.parse(localStorage.getItem("cart") || "{}") 
if (inputNum > 0) {
    let newCart= {...cart, [id]:  (Number(cart[id]) || 0 ) + Number(inputNum)};
    localStorage.setItem("cart", JSON.stringify(newCart));
    setinputNum(0);
    setnoProduct(false);
}
else setnoProduct(true);
 }

 if (apiWorks === false) {
    return <div className="text-xl sm:text-2xl text-sky-500/100 flex items-center h-full">
        <h1>Check your internet connection Please..</h1>
    </div>
 }

    return (
        <>{(Product == "")? <Boxloading/>:
            <div> 
                <IoMdArrowRoundBack className="fixed top-16 left-5 text-2xl" onClick={handleBack}/>
         <div className="min-w-35 max-w-[800px] rounded-md md:flex m-12 pb-10">
           <div className="w-full max-h-1/2 md:max-w-60 md:h-full">
            <img className="max-h-52 object-contain m-auto" src={Product.thumbnail} alt="product"/>
            <div className="hidden md:flex mt-5">
                {Product.images.map((image, index)=> {
                    return <img src= {image} alt="image" key={index}  className="max-w-20"/>
                })}
            </div>
            </div>
            <div className="py-3 text-[15px] flex flex-col md:h-full space-y-4 px-5">
            <h1>Product: {Product.title}</h1>
            <h3>Caregory: {Product.category} </h3>
            <p>Description: {Product.description}</p>
            <h3>Price: Rs. {Math.floor(Product.price)}</h3>
            <h3>Rating: {Product.rating} </h3>
            <h3>Availability: {Product.availabilityStatus}</h3>
            <h3>Brand: {Product.brand}</h3>
            <h3>Discount: {Product.discountPercentage}%</h3>
            <h3>Warranty: {Product.warrantyInformation}</h3>
            
           <div className="flex justify-between items-center">
            <div className="flex flex-col gap-1">
                <label htmlFor="count">Quantity</label>
                <input type="number" id="count" className="border-1 pl-2 py-1 w-12 rounded-xl" min="0"  value={inputNum} onChange={handelInput}/> 
            </div>
            <button className=" border-1 px-5 py-1 rounded-xl bg-blue-500/90 text-white hover:bg-red-500 " onClick={handelCount}>Add to cart</button>
           </div>
           {noProduct && <div className="m-2 text-red-500">Please select quentity.</div>} 
            </div>
            </div>

        </div>}
        </>
    )
}


export default Detailcard;