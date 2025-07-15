import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function ProductDetails() {

  let urlParameters=useParams()
  let navigateTo=useNavigate()
  // console.log(urlParameters);
  let id=urlParameters.id
  let [product,setProduct]=useState()
  async function fetchProductById(){
    let response=await fetch(`https://fakestoreapi.com/products/${id}`,{method:"get"})
    let product=await response.json()
    setProduct(product)

  }
  useEffect(()=>{
    fetchProductById()
  },[])
  
  return (
//     <div>
//       <div className='d-flex justify-content-center'>
// {product &&
// <div className="card" style={{"width":17+"rem"}}>
// <img src={product.image} className="card-img-top" alt="..."/>
// <div className="card-body">
// <h5 className="card-title">{product.title.slice(0,20)}</h5>
// <p className="card-text">{product.description.slice(0,100)}...</p>
// <Link className="btn btn-primary" >Add to Cart</Link>
// </div>
// <button onClick={()=>{navigateTo("/products")}} className="btn btn-warning">All
// Products</button>
// </div>}
// </div>
//     </div>
<div className='d-flex justify-content-center mt-3'>
{product &&
      <div className="card " style={{"width":80+"rem"}}>
  <div className="row g-0">
    <div className="col-md-3">
      <img src={product.image} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-5">
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}.</p>
        {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
        <div>  <Link className="btn btn-primary" >Add to Cart</Link></div>
        <button onClick={()=>{navigateTo("/products")}} className="btn btn-warning mt-3 ">All
         Products</button>
      </div>
    </div>
  </div>
</div>}
</div>
  )
}
