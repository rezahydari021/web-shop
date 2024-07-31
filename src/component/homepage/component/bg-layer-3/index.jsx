import React from 'react'
import './index.css'
import { Button } from '@mui/material'
import { Description, Title } from '@mui/icons-material'
export default function BG_Layer_3({title,price,description,text,box,idStyle}) {
    return (
        <div className='container-fuild heightss z-0 ' id={idStyle} >
            <div className='box-text z-1  p-4'>
                <p className='fs-5 fw-bold ' >{title}</p>
                <p id='size-text' className=''>{price}</p>
                <p className='fs-4 w-50 fw-bold'>{description}</p>
                <p className='fs-6 '>{text}</p>
                <div className='position-relative'><button class="button-bg-0 position-relative">Shop</button></div>
            </div>
            {

          box && <div className='box d-flex justify-content-center align-items-center' >
                <p className='fs-2 fw-bold w-50 '>Best Price</p>
            </div>
            }
        </div>
    )
}
