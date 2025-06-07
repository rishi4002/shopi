import { useState , useEffect, useMemo} from "react";
import { getproductlist } from "./Apis";
import Card from "./Card";
import Loading from "./Loading";
import { CiSearch } from "react-icons/ci";

function Productlist(){


    const [allProducts, setAllProducts]= useState([]);
    const [isProduct, setisProduct]= useState(true);
    const [query, setQuery]= useState("default");
    const [search, setsearch]= useState('');
    
    
    useEffect(() => {
        setTimeout(()=>{
        const products= getproductlist();
        products.then((data)=>{
        setAllProducts(data);
        setisProduct(true);
        }).catch(()=>{
            setisProduct(false);
        })
         }, 1000);
    }, []);

    const filterdata= useMemo(()=> {
        return allProducts.filter((e)=> {return e.title.toLowerCase().includes(search.toLowerCase());})
    },[search,allProducts])

    const Productdata= useMemo(()=> {
        if (query === "default") {
            return filterdata;
        }

         switch (query) {
            case "pricelow":
                return [...filterdata].sort((a,b)=> a.price-b.price);
            case "pricehigh":
                return [...filterdata].sort((a,b)=> b.price-a.price);
            case "rating":
                return [...filterdata].sort((a,b)=> b.rating-a.rating);
            default:
                return filterdata;
                
         }
    },[query, filterdata])

   

    if (isProduct === false) {
        return (
            <div className="text-xl md:text-2xl text-blue-500/90 flex items-center justify-center">
                <p>Product not found.</p>
            </div>
        )
    }
    return (
        <>
           {allProducts.length === 0 ? <Loading/> :<div className="bg-white mt-10 p-10 m-auto flex flex-col">
            <div className="flex flex-col gap-4 mb:4 md:flex-row md:justify-between">
            <div className="flex relative">
                <input type="text" id="search" onChange={(e)=> setsearch(e.target.value)} className="border-b-blue-700 border-1 rounded-2xl w-42 px-2 py-1"/>
                <CiSearch className="self-center absolute text-xl ml-36"/>
             </div>
             <select value={query} id="sorting" onChange={(e)=> setQuery(e.target.value)} className="border-1 border-b-blue-700 rounded-2xl px-2 py-1 w-42">
                    <option value="default">Default</option>
                    <option value="pricelow">Low to high price</option>
                    <option value="pricehigh">High to low price</option>
                    <option value="rating">High to low rating</option>
                </select>
            </div>
        
         {Productdata.length === 0? (<p className="mt-6 self-center text-blue-500/90 text-[18px] md:text-2xl">Product not found...</p>): 
         (<div className="md:grid md:grid-cols-3 gap-2"> 
            {Productdata.map((item)=>{return <Card key={item.id} title={item.title} category={item.category} price={item.price} rating={item.rating} 
        thumbnail={item.thumbnail} id={item.id}/>})}</div>)}
        </div> }
       </>
    )
}

export default Productlist;