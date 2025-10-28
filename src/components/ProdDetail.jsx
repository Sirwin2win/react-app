import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { FaEye , FaStar } from "react-icons/fa";


const ProdDetail = () => {
    const {id} = useParams()
    const [product, setProduct] = useState(0)

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(json=>setProduct(json))
    },[])
    console.log(product)
    if(!product){
        return <h1>No products found</h1>
    }
  return (
    <div>
     <div class="card mb-3" style={{maxWidth: '540px'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={product.image} class="img-fluid rounded-start" alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{product.title}</h5>
        <p class="card-text">{product.description}</p>
        <div className="row">
            <div className="col-sm-4">${product.price}</div>
            <div className="col-sm-4"><FaStar className='text-warning' />:{product.rating.rate}</div>
            <div className="col-sm-4"><FaEye />:{product.rating.count}</div>
        </div>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default ProdDetail
