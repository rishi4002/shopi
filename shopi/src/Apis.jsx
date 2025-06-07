import axios from "axios";
import React from "react";

export function getproductlist(){
    return axios.get('https://dummyjson.com/products').then((Response) => {return Response.data.products});
}

export function getproduct(id){
    return axios.get('https://dummyjson.com/products/' + id).then((Response) => { return Response.data});
} 