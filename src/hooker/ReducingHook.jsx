import React,{useReducer} from 'react'

const ReducingHook = () => {
    const initialState = {
        count:0
    }
    const [info,dispatch] = useReducer(reducer, initialState)
     function reducer(state,action){
        switch(action.type){
            case 'increase':
                return {...state,count:state.count+1}
                break
            case 'decrease':
                return {...state,count:state.count-1}
                break
            default:
                return "No type match"
        }
     }
    /*
useReducer is used when there are more complex state logic to handle.

core components of useReducer
1. Initial State: This is the initial value of the state
2. Reducer function: a function that receives the state variable and an action
object with type and payload properties
3. dispatch method: This is a function called to update the state

    */
  return (
    <div>
      <h1>{info.count}</h1>
      <button onClick={()=> dispatch({type:'increase'})}>+</button>
      <button onClick={()=> dispatch({type:'decrease'})}>-</button>
    </div>
  )
}

export default ReducingHook
