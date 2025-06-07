import  { useEffect, useMemo, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { getproductlist } from "./Apis";
import CartCard from "./CartCard";
import Boxloading from "./Boxloading";


function Cart() {

    const [Products, setProducts]= useState([]);
    const navigate= useNavigate();
    const [apiWorks, setapiWorks]= useState(true);
    const [cartData, setcartData] = useState(JSON.parse(localStorage.getItem("cart") || "{}")) ;

    useEffect(()=>{
      setTimeout(() => {
            getproductlist().then((response)=>{
              setProducts(response);
            }).catch(()=>{
                setapiWorks(false);
            })
           }, 2000);
    },[])

  
    function removeHandler(removedId) {
     
    const newCart= {...cartData};
    delete newCart[removedId];

     localStorage.setItem("cart",JSON.stringify(newCart));
      setcartData(newCart);
    }

 
   const cartKeys= Object.keys(cartData);

      const cartProducts= useMemo(()=>{
        return Products.filter((product)=> {
        for (let i = 0; i < cartKeys.length; i++) {
            if (cartKeys[i] == product.id) {
              return true;
            }
                    }
      })    
    },[Products,cartData]);

      const productWithCount= useMemo(()=>{
       
        return cartProducts.map((item)=>{
            for (let i = 0; i < cartKeys.length; i++) {
            if (cartKeys[i] == item.id) 
              {
                return {count: cartData[cartKeys[i]], ...item}
            }
                    }
      })
 },[cartProducts] );

    
function handleBack(){
       navigate("/");
    }


    if (apiWorks === false) {
    return <div className="text-xl sm:text-2xl text-sky-500/100 flex items-center h-full">
        <h1>Check your internet connection Please..</h1>
    </div>
 }
 
    return(
        
        <>
        {(Products.length === 0) ? <Boxloading/>: <div>
            <IoMdArrowRoundBack className="fixed top-16 left-5 text-2xl" onClick={handleBack}/>
            {productWithCount.length===0 ? <div className="text-xl sm:text-2xl text-sky-500/100 flex items-center h-full"><p>nothing in the cart.</p></div>: 
                <div className="mt-10 p-10 m-auto flex flex-col"> 
                {productWithCount.map((item)=>{
                   return <CartCard key={item.id} title={item.title} category={item.category} price={item.price} thumbnail={item.thumbnail} id={item.id} count={item.count} remove={removeHandler}/>
              
                })
                }
                 </div>}
       </div>
              }
              </>
    )
    
}


export default Cart;