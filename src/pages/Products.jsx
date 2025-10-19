import React from 'react'
// import Prod from './myStyle.module.css'
import {today,greet} from '../components/Expo'
import Area from '../components/DefExpo'
import { name,age,email } from '../components/AllInOneExpo'

const Products = () => {
    // Modularity programming involves using files as modules
    /*
There are two ways of exporting files
1. Named export: single line export or all in one export
2. default export


    */
  return (
    <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{email}</h1>
        {/* <h1 style={Prod.backing}>New Arrivals</h1> */}
        <p>{today}</p>
        <p>{greet()}</p>
        <p>{Area(4,5)}</p>
    </div>
  )
}

export default Products