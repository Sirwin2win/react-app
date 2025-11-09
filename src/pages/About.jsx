import React,{useRef, useState, useEffect} from 'react'
import laptop5 from '../assets/images/laptop5.avif'

const About = () => {
  const refVal = useRef(0)
  const [data, setData] = useState('')
// const car = {color:'red',fontSize:'30px'}
/*
REACT EVENT HANDLER
An event is an reaction in our software caused by an 
action by a user e.g click, mouseover, keydown etc
Usually, when a user click a button that has a function attached to, the function
is called. That function is called an event handler
*/
/*
useRef Hook
This hook is used to manage a data that does cause a re-render of the component
and also it is used to directly change the DOM element
The useRef returns an object that has only one property called current. It
it this current property that actually holds value of any type.
const refObject = {
current:"Ford"
}
*/
const greet = function(){
  alert("Good day, Sir")
}
const details = function(e){
  console.log(e.target.value)
}
const square = function(n){
  alert(n**2)
}
useEffect(()=>{
  refVal.current++
})
const handleFocus = function(){
  refVal.current.focus()
}
  return (
 <div>
  
    <input type='text' ref={refVal} />
    <input type='text' onChange={(e)=>setData(e.target.value)} value={data} />
    <button onClick={handleFocus}>Cause Focus</button>
 
  <h1>Number of renders : {refVal.current}</h1>
  {/* <div style={{height:'300px', width:'100%',backgroundImage:`url(${laptop5})`}}></div>
     <div >
  <button onClick={greet}>Click me!</button>
  <br />
  <button onClick={details} value='5'>Click me!</button>
  <button onClick={()=>square(6)} value='5'>Click Square!</button>
    </div> */}
    <label htmlFor='name'>Name : </label>
    <input type='text' id='name' />
 </div>
  )
}

export default About