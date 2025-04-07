import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const Focus = () => {
 const[userData,setUserData]=useState("")
 const inputRef=useRef()
 useEffect(()=>{
    inputRef.current.focus()
 })
 function hanldleSubmit(e){
    e.preventDefault()
   console.log(userData)
   setUserData("")
 }
 function handleChange(e){
    const name=e.target.value
    setUserData(name)
    
 }
  return (
    <div>
      <form onSubmit={hanldleSubmit}>
        <input type="text" placeholder='Enter Your Name' ref={inputRef} value={userData} name="userData" onChange={handleChange}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Focus
