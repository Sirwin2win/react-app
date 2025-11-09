import React from 'react'
import logo from '../assets/images/logo.jpg'
import ReducingHook from '../hooker/ReducingHook'
import ReducerWithDispatch from '../hooker/ReducerWithDispatch'
import UseCallBack from '../hooker/UseCallBack'
import UseMemo from '../hooker/UseMemo'

const Blog = () => {
    const day = new Date().getDay()
    const bag = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
    const shoe = "https://i.imgur.com/QkIa5tT.jpeg"
  return (
    <div>
      <UseMemo />
      <UseCallBack />
      <ReducingHook />
      <ReducerWithDispatch />
      <h1>Blog Page Goes</h1>
      <p>{day}</p>
      <img src={logo} alt='' />
      <img src={bag} alt='' />
      <img src={shoe} alt='' />
    </div>
  )
}

export default Blog
