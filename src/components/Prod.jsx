import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const Prod = () => {
    /*
useEffect hook is used for handling any side effect action within the react
application. Side effects like making interactions with things that are
not part of the application e.g external Api calls, etc
    */
   const [products, setProducts] = useState([])

   useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setProducts(json))
   },[])

  return (
    <div className='container'>
      <h5 className='text-center mt-5 text-primary'>New Arrivals</h5>
      <div className="row my-5">
        {products.map((product)=>(
          <div className='col-sm-4' key={product.id}>
            <div class="card" style={{width: "18rem"}}>
  <img src={product.image} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">{product.title}</h5>
    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p> */}
    <Link to={`/product/${product.id}`} class="btn btn-primary">Go somewhere</Link>
  </div>
</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Prod
