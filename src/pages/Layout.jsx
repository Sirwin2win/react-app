import React,{useContext} from 'react'
import { Link, Outlet } from 'react-router-dom'
import './style.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { FaToggleOn } from "react-icons/fa";
import ThemeContext from '../ThemeContext'


const Layout = () => {
  const {theme, toggleTheme} =  useContext(ThemeContext)
  return (
    <div style={{background:theme, color:"red"}}>{theme}
      <FaToggleOn onClick={toggleTheme} style={{color:'red'}} />
        {/* <ul>
            <li><Link className='demo' to={'/'}>Home</Link></li>
            <li><Link className='demo' to={'/about'}>About</Link></li>
            <li><Link className='demo' to={'/contact'}>Contact</Link></li>
            <li><Link className='demo' to={'/product'}>Products</Link></li>
            <li><Link className='demo' to={'/blog'}>Blog</Link></li>
        </ul> */}
        
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout