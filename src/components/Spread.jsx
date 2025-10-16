import React from 'react'

const Spread = () => {
    /*
The Spread operator makes a copy of either the array or the object. It goes
with a three dots(...)
    */
   const arr1 = [1,2,3,4]
   const arr2 = [4,5,6,7]
   const num = [...arr1,...arr2]
   // Summing up arguments of a function irrespective of the size
   const add = function(...n){
    let result = 0
    for(let i = 0; i<n.length; i++){
        result += n[i]
    }
    return result
   }
   // Using Spread Operator on Objects
   const car1 = {
    name:"toyota",
    color:"red"
   }
   const car2 = {
    year:2025,
    color:'blue'
   }
   const car = {
    ...car1,
    ...car2
   }
   console.log(car)
   // Ternary Operation
   /*
Ternary is a short form of if...else statement.
syntax
condition?true:false
   */
  const isConnected = false
  /*
The Short Circuit. It useses &&
This only checks for truthy. If the condition is true, the next code runs, else
    nothing happens
  */
 const isOnline = false
  return (
    <div>
        {/* Ternary started */}
        {isConnected ?<h>Indeed You're connected</h>:<h1>You're not connected</h1>}
        {/* Ternary ended */}
        <h1>{num}</h1>
        <h1>{add(1,2,3,4,5)}</h1>
        {/* short circuit started */}
        {isOnline && <h1>Truely you are ONLINE</h1>}
        {/* short circuit ended */}
        <h1>{add(1,2,3,4,5,10)}</h1>
    </div>
  )
}

export default Spread