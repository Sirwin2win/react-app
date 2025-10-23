import React from 'react'
import Properties from '../components/Properties'

const Contact = () => {
    const styles = {
        color:'blue',
        fontSize:'40px',
        fontWeight:900,
        // 'margin-left':'500px'
    }
  return (
    <div>
        <p style={styles}>Contact Us Page</p>
        <Properties name="Peter Doe" email="peterdoe@gmail.com" age={30} />
    </div>
  )
}

export default Contact