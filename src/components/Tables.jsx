import {useState} from 'react'

const Tables = () => {
    /*
Hook are what we use to hook/tap into the state and lifecycle of react which 
originally came with class components> A way of functional component accessing
the features of react e.g state , lifecycle
1. useState: This is a function that returns a variable and a method that
updates that variable
const car = {
year:2025
}
car.year
    */
   const [colo, setColo] = useState('red')// Initialize State in react
   const [name, setName] = useState('')
   
// Here, colo is the variable while setColo is the method that updates colo
// useState is usually initialized with an initial value e.g 'red'
    const image = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
    const title = "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    const desc = "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
    const [img, setImg] = useState(image)
    // Initializing state for objects
    const [stud, setStud] = useState({
        email:'',
        matNo:0,
        favColor:''
    })

    const [car, setCar] = useState({
      name:"Toyota",
      year:2025
    })

    const changeName = function(){
      setCar((prevCar)=>{
        return {...prevCar, name:"Hunda"}
      })
    }
    const changeYear = function(){
      setCar((prevCar)=>{
        return {...prevCar, year:2026}
      })
    }

  return (
    <div className='container'>
      <h1>{car.name}</h1>
      <h1>{car.year}</h1>
      <button onClick={changeName}>Change Car Name</button>
      <button onClick={changeYear}>Change Car Year</button>
        <h1 style={{color:colo}}>{colo}</h1>
        <h1 style={{color:colo}}>{name}</h1>
        <h1 style={{color:colo}}>{stud.matNo}</h1>
        <h1 style={{color:colo}}>{stud.email}</h1>
        <h1 style={{color:stud.favColor}}>{stud.favColor}</h1>
        <button onClick={()=>setColo('blue')}>Change Color to blue</button>
        <button onClick={()=>setColo('lime')}>Change Color to lime</button>
        <button onClick={()=>setName('Mary Doe')}>Change Name</button>
        <button onClick={()=>setStud({email:'marydoe@gmail.com',matNo:58452121,favColor:'orange'})}>Change Stud</button>
       
        <div className="row my-5">
            <div className="col-sm-4">
                
        {/* Card Started */}
    <div className="card" style={{width: "18rem"}}>
  <img src={image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{desc}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        {/* Card Ended */}
            </div>
            <div className="col-sm-4">
                
        {/* Card Started */}
    <div className="card" style={{width: "18rem"}}>
  <img src={image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{desc}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        {/* Card Ended */}
            </div>
            <div className="col-sm-4">
                
        {/* Card Started */}
    <div className="card" style={{width: "18rem"}}>
  <img src={img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{desc}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        {/* Card Ended */}
            </div>
            
        </div>
         <button onClick={()=>setImg('https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png')}>Change Img</button>
      <table className='table table-bordered table-dark table-hover table-striped'>
        <thead>
        <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
        </tr>
        </thead>
        <tbody>

        <tr>
            <td>1</td>
            <td>Peter Doe</td>
            <td>peterdoe@gmail.com</td>
        </tr>
        <tr>
            <td>1</td>
            <td>Peter Doe</td>
            <td>peterdoe@gmail.com</td>
        </tr>
        <tr>
            <td>1</td>
            <td>Peter Doe</td>
            <td>peterdoe@gmail.com</td>
        </tr>
        <tr>
            <td>1</td>
            <td>Peter Doe</td>
            <td>peterdoe@gmail.com</td>
        </tr>
        <tr>
            <td>1</td>
            <td>Peter Doe</td>
            <td>peterdoe@gmail.com</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Tables
