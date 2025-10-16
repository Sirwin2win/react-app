import React from 'react'
import Demo from './components/Demo'
import Spread from './components/Spread'
import Home from './pages/Home'
import Thursday from './components/Thursday'




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
2. Inheritance:This talks about peoperties and methods being inherited by a child or derived class
3. Abstraction:Talks about hiding away some core functionalities of a program from the users
4. Polymorphism:Talks about a class appearing in different forms 
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
// Animal class
/* Three levels of protection
1. public
2. protected
3. private
*/
class Animal{
  #name;
  constructor(name,age,legs){
      this.#name = name
      this.age = age
      this.legs = legs
  }
  // Accessing the name property using a getter
  getName(){
    return this.#name
  }
  // Updating the name property using a setter
  setName(n){
    this.#name = n
  }

  details(){
    return `A ${this.getName()} has ${this.legs} number of legs`
  }

  move(n){
    return `A ${this.getName()} ${n}`;
  }

}

const lion = new Animal("Lion",10,4)
console.log(lion)
lion.setName('Goat')
// A child or derived class inheriting from the parent class using 'extends' keyword
// DRY Don't Repeat Yourself
class Ram extends Animal{
  constructor(name,age,legs,skin){
    super(name,age,legs)
    this.skin = skin
  }
}
const ram = new Ram('Ram',5,4,'fur')

// Another subclass
class Fish extends Animal{
    constructor(name,age,legs,skin){
    super(name,age,legs)
    this.skin = skin
  }
}

const tilapia = new Fish("Tilapia",2,0,'scale')

  return (
    <>
     <Home />
    <Thursday />
    <Spread />
    <Demo />
   
    <div>
      <h1>Hello World</h1>
      <h1>{lion.getName()}</h1>
      <h1>{ram.getName()}</h1>
      <h1>{ram.details()}</h1>
      <h1>{ram.move('walks')}</h1>
      <h1>{tilapia.move('swims')}</h1>
      {/* <p>{name}</p>
      <h1>{5*5}</h1>
      <h1>{ike.name}</h1>
      <h1>{ike.age}</h1>
      <h1>{ike.email}</h1>
      <h1>{ike.details()}</h1> */}
    </div>
    <div>{fruits}</div>
    <p>{greet()}</p>
    </>
  )
}

export default App
