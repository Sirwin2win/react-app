import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

const New = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        let url = 'https://dummyjson.com/products'
        fetch(url)
        .then(res=>res.json())
        .then(json=> setProducts(json.products))
    },[])
    // console.log(products)
  return (
    <div className='container'>
      <h1>New Arrivals</h1>
      <div className="row">
        {products.map((product)=>(
            <div className="col-sm-4 my-3" key={product.id}>
                <div className="card" style={{width: '18rem'}}>
  <img src={product.thumbnail} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p> */}
    <Link to={`/new/${product.id}`} className="btn btn-primary">Go somewhere</Link>
  </div>
</div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default New
