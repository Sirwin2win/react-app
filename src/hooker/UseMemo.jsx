import React,{useMemo,useState} from 'react'

const UseMemo = () => {
    /*
useMemo() hook behaves exactly like the useCallback(). Just that useMemo() returns
a memoized(cashed) value while a useCallback() retuens a memoized(cashed) function
const value = useMemo(()=>{
    
    },[])
    */
const [count, setCount] = useState(0)
const [input , setInput] = useState('')
    const value = useMemo(()=>{

        let info = 0
        for(let i = 0; i<1000000000;i++){
            info +=i
        }
    return info
    },[])
  return (
    <div>
        <h1>{count}</h1>
      <button onClick={()=>setCount(count + 1)}>Increment</button>
      <input type='text' onChange={(e)=>setInput(e.target.value)} value={input} />
      <p>useMemo function value: {value}</p>
    </div>
  )
}

export default UseMemo
