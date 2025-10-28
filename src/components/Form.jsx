import {useState} from 'react'

const Form = () => {
const [name, setName] = useState('')
const handleChange = function(e){
    setName(e.target.value)
    // console.log(e.target.type)
}
const handleSubmit = function(e){
    e.preventDefault()
    alert(name)
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={handleChange}/>
        <input type='submit'  />
      </form>
      <h1>{name}</h1>
    </div>
  )
}

export default Form
