import React from 'react'

const Demo = () => {
    /*
An arrow function AKA anonnymous function is a short syntax function that we can
on the fly
    */
   const greet = function(){
    return 'Good day Sir';
   }
   const greet2 = ()=> "Happy Weekend";
   const square = n => n**2;
   const check = function(arr,res){
        let con = []
      for(let i = 0; i<arr.length; i ++){
        if(res(arr[i])){
            con.push(arr[i])
        }
      }
      return con
   }

   const num = [1,2,3,4,5,6,7]
   const even = n => n%2!=0
   // Array and Object destructuring
   /*
Destructuring entails assigning array elements to variables without having to
loop through the array
e.g const food = ['rice','beans','yam']
we can assign those food elements into different varaibles e.g
const [a,b,c] = food
Thereby, a=rice; b=beans; c=yam.
For objects, it happens in a similar way, just that we destructure the keys of
the objects
   */
   const fruits = ["Apple","Banana","Cherry"]
   const [d,t,r] = fruits
   fruits[0]
   fruits[1]
   fruits[2]
   // Object desctructuring 
   const student = {
    name:"Peter Doe",
    age:30,
    email:'peterdoe@gmail.com',
    car:{
      model:2025,
      color:'red'
    }
   }
   const {name,age,email,car:{model,color}} = student
  return (
    <>
    <div>
        <h1>Hello Demo</h1>
        <p>{greet()}</p>
        <p>{check(3,5)}</p>
        <b>{greet2()}</b>
        <br />
        <h1>{check(num,even)}</h1>
        <h1>{name}</h1>
        <h1>{model}</h1>
        <h1>{color}</h1>
        <h1>{age}</h1>
        <h1>{email}</h1>
        <h1>{d}</h1>
        <h1>{t}</h1>
        <h1>{r}</h1>
    </div>
    </>
    
  )
}

export default Demo