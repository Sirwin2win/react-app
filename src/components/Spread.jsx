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
  return (
    <div>
        <h1>{num}</h1>
        <h1>{add(1,2,3,4,5)}</h1>
        <h1>{add(1,2,3,4,5,10)}</h1>
    </div>
  )
}

export default Spread