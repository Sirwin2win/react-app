import React, { useReducer, useState } from 'react'

const ReducerWithDispatch = () => {
    const initialState = {
        name:"",
        email:""
    }
    const [info, dispatch] = useReducer(reducer,initialState)

    function reducer(state,action){
        switch(action.type){
            case 'changeName':
                return {...state,name: state.name = action.payload}
                break;
            case 'changeEmail':
                return {...state, email:state.email = action.payload}
                break;
            default:
                return "No match found"
        }
    }
  return (
    <div>
        <h1>{info.name}</h1>
        <h1>{info.email}</h1>
        <button onClick={()=>dispatch({type:'changeName',payload:"Mary Doe"})}>Change Name</button>
        <button onClick={()=>dispatch({type:'changeEmail',payload:"marydoe@gmail.com"})}>Change Email</button>
      
    </div>
  )
}

export default ReducerWithDispatch
