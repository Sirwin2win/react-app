import React from 'react'

const App = () => {
  const name = "Peter Doe"
const fruits = ["Apple","Banana","Orange"]
const greet = function(){
  return "Good day Sir"
}
/*
Class is like a function that holds the definition of properties of an object. We do not use the classes directly 
rather we initialize objects that uses those properties and methods
1. Encapsulation: This enables a class to manage its properties and methods by itself. Using getters and setters
2. Inheritance:
3. Abstraction:
4. Polymorphism:
*/
class Person{
  constructor(name,age,email){
    this.name = name
    this.age = age
    this.email = email
  }
  details(){
    return `My name is ${this.name}, I am ${this.age} years old. My email address is ${this.email}`
  }
}
const ike = new Person('Ikedichi', 23, "ikedi@gmail.com")
ike.name = "Uche"
  return (
    <>
    <div>
      <h1>Hello World</h1>
      <p>{name}</p>
      <h1>{5*5}</h1>
      <h1>{ike.name}</h1>
      <h1>{ike.age}</h1>
      <h1>{ike.email}</h1>
      <h1>{ike.details()}</h1>
    </div>
    <div>{fruits}</div>
    <p>{greet()}</p>
    </>
  )
}

export default App
