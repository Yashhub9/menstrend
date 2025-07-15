import React from 'react'
import { Link } from 'react-router-dom'

export default function Products(props) {
  let products= props.productsValue
  return (
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
  )
}

