import React from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'


const ItemDetails = () => {
    const {id}=useParams()
    const { todos }=useSelector((state)=>state)

    let data=todos.filter((todos)=>todos.id == id)
    console.log(data)
    // const get =
  return (
    <div>{data.map((ele)=><p>{ele.item}</p>)}</div>
  )
}

export default ItemDetails