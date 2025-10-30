import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'



const NewDetail = () => {
    const {id} = useParams()
    const [product, setProduct] = useState(0)
    const url = `https://dummyjson.com/products/${id}`
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(json=>setProduct(json))
    },[])
    if(!product){
        return <p>No products found</p>
    }
 
  return (
    <div>
      <h1>New Detail Page</h1>
      <div className="row">
        <div className="col-sm-5">
            {product.images.map((v)=>(
                <img src={v} alt='' style={{height:'400px', width:'400px'}} key={v} />
            ))}
        </div>
        <div className="col-sm-7 mt-5">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
           
            <div className="row">
                <div className="col-sm-4">${product.price}</div>
                <div className="col-sm-4">{product.rating}</div>
                <div className="col-sm-4">{product.stock}</div>
            </div>
             <i>{product.warrantyInformation}</i>
        </div>
      </div>
    </div>
  )
}

export default NewDetail
