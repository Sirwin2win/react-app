import React from 'react'

const Thursday = () => {
    /*
Es6 Array methods e.g map(), find(), findIndex(), filter()
const fruits = ["Apple","Banana","Cherry","Orange"]
i = index; v= values e.g Apple; a= fruits(entire array itself)
map((i,v,a)=>{
    return v
    })
    1. map() method loops through the array and renders the values using the
     anonymous function declered withing the map
     2. find() searches for the actual element specified within the
     anonymous function
     3. findIndex() behaves exactly like the find() method, only that 
     it returns the index instead of the actual value
     4. filter() accepts a predicate function(i.e a function that returns true 
     or false) which returns elements that meets a certain condition
     ) 
    */
   const fruits = ["Apple","Banana","Cherry","Orange", "Grapes"]
   const person = [
    {id:1, name:"Mary Doe",email:'marydoe@gmail.com'},
    {id:2, name:"Jane Doe",email:'janedoe@gmail.com'},
    {id:3, name:"Peter Doe",email:'peterdoe@gmail.com'},
    {id:4, name:"Joel Doe",email:'joeldoe@gmail.com'},
   ]
   const res = fruits.findIndex((v)=>{
    return v=="Grapes"
   })
   const fil = fruits.filter((v)=>{
    return v !="Banana"
   })
   const num = [1,2,3,4,5,6,7,8,9]
   const even = num.filter((v)=>{
    return v%2===0
   })
   const odd = num.filter((v)=>{
    return v%2!=0
   })
  return (
    <div>
        {/* Using map() method on array of values */}
     {fruits.map((v)=>(
     <div>
        <p>{v}</p>
     </div>
     ))} 

{/* Using map() method on array of objects */}
     {person.map((v)=>(
        <div key={v.id}>
            <h1>{v.name}</h1>
            <p>{v.email}</p>
            <p>{v.id}</p>
        </div>
     ))}

     {/* Using find method on the array of values */}
    <p style={{color:'red'}}> {res}</p>
    <p style={{color:'orange'}}> {fil}</p>
    <p style={{color:'orange'}}> {even}</p>
    <p style={{color:'orange'}}> {odd}</p>
    </div>
  )
}

export default Thursday
