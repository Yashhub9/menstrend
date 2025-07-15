import React, { useEffect, useState } from 'react'
import slider4 from './images/slider4.jpg'
import slider2 from './images/slider2.jpg'
import slider3 from './images/slider3.jpg'
import { Link, useNavigate } from 'react-router-dom'

export default function Home() {

  let [products,setProduct]=useState(null)
       async function fetchProducts(){
          
          let response=await fetch("https://fakestoreapi.com/products", {method:"get"})
          let responseObject=await response.json();
      
          console.log(responseObject)
          
          setProduct(responseObject)
      
        }
        useEffect(()=>{
          fetchProducts()
        },[])
    
  
  let navigateTo=useNavigate()
  return (
    
    <div>
      <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" onClick={()=>{navigateTo("/products")}} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" onClick={()=>{navigateTo("/products")}} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" onClick={()=>{navigateTo("/products")}} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={slider4} className="d-block  w-100" style={{"height":35+"rem"}} alt="error loading image"/>
    </div>
    <div className="carousel-item">
      <img src={slider2} className="d-block w-100 " style={{"height":35+"rem"}} alt="error loading image"/>
    </div>
    <div className="carousel-item">
      <img src={slider3} className="d-block w-100 " style={{"height":35+"rem"}} alt="error loading image"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div>
  <marquee className='bg-dark text-white' ><i>Trendy Shop Stop</i></marquee>
</div>

      <div className='container'>
      <div className='row'>
      {products && products.map(product =>{
        return (
          <div className='col-3 gy-3' key={product.id}>
          <div className="card" style={{"width":18+"rem"} } >
          <img src={product.image} className="card-img-top" alt="..." style={{"height":18+"rem"} }  />
          <div className="card-body">
            <h5 className="card-title">{product.title.slice(0,20)}..</h5>
            <p className="card-text">{product.description.slice(0,50)}...</p>  
            <Link  className="btn btn-primary" to={`/product/${product.id}`}>View More</Link>
          </div>
          
        </div>
        
        </div>
        
        )
      })}

  </div> 
  </div>
    </div>    
  )
}
