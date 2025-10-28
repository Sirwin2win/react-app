import React,{useState} from 'react'

const MultipleForm = () => {
    const [data, setData] = useState({
        name:'',
        email:'',
        phone:'',
        password:''
    })
    const handleChange = function(e){
        const name = e.target.name
        const value = e.target.value
        setData((prevData)=>{
            return {...prevData,[name]:value}
    })
    }
const handleSubmit = function(e){
    e.preventDefault()
    console.log(data)
}

  return (
    <div>
      <form>
        <input type='text' value={data.name} name='name' onChange={handleChange} />
        <input type='text' value={data.email} name='email' onChange={handleChange} />
        <input type='text' value={data.phone} name='phone' onChange={handleChange} />
        <input type='password' value={data.password} name='password' onChange={handleChange} />
        <input type='submit' onClick={handleSubmit} />
      </form>
      <h1>{data.name}</h1>
      <h1>{data.email}</h1>
      <h1>{data.phone}</h1>
      <h1>{data.password}</h1>
    </div>
  )
}

export default MultipleForm
