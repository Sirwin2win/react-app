import React from 'react'

const About = () => {
// const car = {color:'red',fontSize:'30px'}
/*
REACT EVENT HANDLER
An event is an reaction in our software caused by an 
action by a user e.g click, mouseover, keydown etc
Usually, when a user click a button that has a function attached to, the function
is called. That function is called an event handler
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
  return (
    <div >
  <button onClick={greet}>Click me!</button>
  <br />
  <button onClick={details} value='5'>Click me!</button>
  <button onClick={()=>square(6)} value='5'>Click Square!</button>
    </div>
  )
}

export default About