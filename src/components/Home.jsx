import React from 'react'
import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { getAllData } from '../Redux/action'
import './style.css'

const Home = () => {
    const { todos }=useSelector((state)=>state)
    const[value,setValue]=useState('')
    console.log(todos)
    const dispatch=useDispatch()

    const fetchData = async() =>{
        try {
            let res= await fetch(` http://localhost:8080/products`)
        let data=await res.json()
        const action = getAllData(data)
        dispatch(action)
        // console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

useEffect(()=>{
    fetchData()
},[])

const handleAdd = () =>{
    const payload={
        item:value,
      status:false
      }
    console.log(payload)
    fetch(`http://localhost:8080/products`,{
        method:"POST",
        body:JSON.stringify(payload),
        headers :{
            "content-Type":"application/json"
        }
    }).then((res)=>{
        res.json().then((res)=>{
            // console.log(res)
            fetchData()
        })
    }).catch((error)=>{
        console.log(error)
    })
    setValue('')
}
const handleToggle = (payload) =>{
        // console.log(payload)
        payload.status=!payload.status
        fetch(`http://localhost:8080/products/${payload.id}`,{
            method:"PUT",
            body:JSON.stringify(payload),
            headers :{
                "content-Type":"application/json"
            }
        }).then((res)=>{
            res.json().then((res)=>{
                console.log(res)
                fetchData()
            })
        }).catch((error)=>{
            console.log(error)
        })
            
    
}
const handleDelete = (payload) =>{
    console.log(payload)
    fetch(`http://localhost:8080/products/${payload}`,{
        method:"DELETE"
    }).then((res)=>{
        res.json().then((res)=>{
            console.log(res)
            fetchData()
        })
    }).catch((error)=>{
        console.log(error)
    })
}

const navigate=useNavigate()

const handleDetails = (id) =>{
    navigate(`/home/${id}`)
}
  return (
    <div>
        <h1>ToDo List</h1>
    <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} placeholder='Add Your Item'/>
    <button onClick={handleAdd}>Add</button>
    {
      todos.map((ele)=>{
        console.log(ele)
        return(
          <div key={ele.id} className='box'>
            <p>{ele.item}</p>
            {ele.status ? <p>Completed</p> : <p>Not Completed</p>}
            <button onClick={()=>handleToggle(ele)}>Toggle</button>
            <button onClick={()=>handleDetails(ele.id)}>Details</button>
            <button onClick={()=>handleDelete(ele.id)}>Delete</button>
          </div>
        )
      })
    }
  </div>
  )
}

export default Home