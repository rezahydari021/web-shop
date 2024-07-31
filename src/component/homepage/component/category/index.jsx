import React from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'
export default function Category(props) {
  const navigate=useNavigate()
const handleclick =(categoryId)=>{
  navigate(`products/${categoryId}`)
}
  return (
    <div className='p-4 text-center mx-auto'>
      {props.id < 6 &&
        <>
          <div className='box-category' onClick={()=>handleclick(props.id)}><img src={props.image} /></div>
          <p className='mt-5'>{props.name}</p>
        </>
      }
    </div>

  )
}
