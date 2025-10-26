import React from 'react'
import styles from './myStyle.module.css'
import Tables from '../components/Tables'

const Home = (props) => {
    /*
    ASSIGNMENT FOR TODAY 10/16/2025
    1. Write an array of numbers from 11 to 20(included)
    i) Using the filter method to return all the even numbers
    ii) return all the odd numbers
    iii) return all numbers greater than 15
    iv) retuen all numbers less than 16
    2. const parent =[
    {id:1, name:"Ikenna Doe",age:12},
    {id:2, name:"Uche Doe",age:13},
    {id:3, name:"Ude Doe",age:14},
    ]
    Loop through the parent array and render the values into html elements
    3. const food = ["Rice","Beans","Yam","Akpu"]
    i) Using the find() method to locate "Akpu"
    ii) USing the findIndex() method to get the index of "Akpu"
    */
  return (
    <div>
      <Tables />
      <h1 className='text-danger'>Hello Home Page</h1>
      <p className={styles.k1}>Paragraph {props.name}</p>
    </div>
  )
}

export default Home
