import React,{useState, useCallback} from 'react'

const UseCallBack = () => {
    const [count, setCount] = useState(0)
    /* useMemo()
useCallback() hook is used to return a memoized(cashed) function. This is a case
where the function is only re-created when the dependencies are changed 
rather than on every re-render of the component
Syntax
const handleClick = useCallback(()=>{
    
    },[])
    */
const handleClick = useCallback(()=>{
    console.log("Button Clicked")
    },[])
console.log("Return a reference to handleclick :", handleClick)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count +1)}>Re-render</button>     
        <button onClick={handleClick}>click me</button>
    </div>
  )
}

export default UseCallBack
