import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Fetch = () => {
const[data,setData]=useState([])
const[loading,setloading]=useState(true)
    useEffect(()=>{
        fetchData()
    },[])
 async function fetchData(){
    setloading(true)
    try {
        const responce=await fetch("https://jsonplaceholder.typicode.com/posts")
        const checkRes=await responce.json()
        //console.log(checkRes)
        setData(checkRes)
        setloading(false)
    } catch (error) {
        console.log(error.message)
    }
 }
console.log(loading);
if(loading){
    return(
        <div>Loading...</div>
    )
}
  return (
    
    <div>
     {data.map((item)=>(
        <div key={item.id}>
        <h2>{item.title}</h2>
        <p>{item.body}</p>
        </div>
     ))}
    </div>
  )
}


export default Fetch
