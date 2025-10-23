import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import 'bootstrap/dist/css/bootstrap.min.css'
import Blog from './pages/Blog'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<Layout />}>
      <Route index element={<Home name="Mary Doe" />} />
      <Route path={'/about'} element={<About />} />
      <Route path={'/contact'} element={<Contact />} />
      <Route path={'/product'} element={<Products />} />
      <Route path={'/blog'} element={<Blog />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App