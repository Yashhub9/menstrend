import React, { useEffect, useState } from 'react'
import Products from './Products'


export default function ProductApiCall() {
  let [products,setProduct]= useState(null)

  async function fetchProducts(){
    
    let response=await fetch("https://fakestoreapi.com/products", {method:"get"})
    let responseObject=await response.json();

    console.log(responseObject)
    
    setProduct(responseObject)

  }
  useEffect(()=>{
    fetchProducts()
  },[])

  return (
    <div className='container'>
      <Products productsValue={products}/>
      
    </div>  
  )
}
