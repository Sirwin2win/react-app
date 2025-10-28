import React from 'react'
import Properties from '../components/Properties'
import Form from '../components/Form'
import MultipleForm from '../components/MultipleForm'

const Contact = () => {
    const styles = {
        color:'blue',
        fontSize:'40px',
        fontWeight:900,
        // 'margin-left':'500px'
    }
  return (
    <div>
      {/* <Form /> */}
      <MultipleForm />
        <p style={styles}>Contact Us Page</p>
        <Properties name="Peter Doe" email="peterdoe@gmail.com" age={30} />
    </div>
  )
}

export default Contact