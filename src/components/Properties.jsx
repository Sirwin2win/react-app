import React from 'react'

const Properties = (props) => {
    /*
REACT PROPS(properties)



    */
  return (
    <div>
      <h1>React Props </h1>
      <p>{props.name}</p>
      <p>{props.email}</p>
      <p>{props.age}</p>
    </div>
  )
}

export default Properties
