import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const[count,setCount]=useState(0)
    function handleIncreament(){
        setCount((ele)=>ele+1)
    }
    function handleDecrement(){
        setCount((ele)=>ele-1)

    }
    function handleReset(){
        setCount(0)
    }
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handleIncreament}>Increament</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Counter
