import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<Layout />}>
      <Route index element={<Home />} />
      <Route path={'/about'} element={<About />} />
      <Route path={'/contact'} element={<Contact />} />
      <Route path={'/product'} element={<Products />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App