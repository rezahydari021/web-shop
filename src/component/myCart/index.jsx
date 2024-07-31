import React, { useState } from 'react'
import myimage from '../../img/1.webp'
import './index.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link, useNavigate } from 'react-router-dom'
import AddRemove from '../Add&Removebutton';
export default function MyCart({ setAddCart, addCart }) {
  const navigate = useNavigate()

  return (
    <div className='p-3 row justify-content-between'>
      <div className='col-lg-8'>
        <div>
          <p className='fs-3'>My cart</p>
          <div className='border border-secondary border-bottom'></div>
        </div>

        <div>
          {
            addCart.arrayCart.map((item, i) => (
              item && (

                <div className='d-flex mb-2 border-secondary border-bottom' onClick={() => { navigate(`/product/${item.id}`) }}>
                  <div className='mt-3 mb-3'>
                    <img src={item.images[0]} width='120px' height='120px' />
                  </div>
                  <div className='w-100 px-3 d-md-flex justify-content-between fs-5'>
                    <div>
                      <p className='fs-4'>{item.title}</p>
                      <p className='fs-5'>${item.price}</p>
                    </div>
                    <div className='d-flex justify-content-between h-50' onClick={(e) => e.stopPropagation()} >
                      <AddRemove addCart={addCart} setAddCart={setAddCart} cardDetails={item}/>
                      <p className='mx-5'>${item.price * addCart.Counter[i]} </p>
                    </div>
                  </div>
                </div>

              )))

          }
        </div>
        {addCart.arrayCart == 0 &&
          <div className='text-center mt-5 mb-5'>
            <p className='fs-3'>cart is empty</p>
          </div>
        }
        <div>
          <p>Enter a promo code</p>
          <p>Add a note</p>
          <div className='border-secondary border-bottom d-lg-none'></div>

        </div>
      </div>
      <div className='col-lg-3'>


        {!addCart.arrayCart[0] == 0 &&
          <>
            <div className='d-none d-lg-block'>
              <p className='fs-5'>Order summary</p>
              <div className='border border-secondary border-bottom'></div>
            </div>
            <div>
              <div className='border-secondary border-bottom'>
                <div className='d-flex justify-content-between'>
                  <p>Subtotal</p>
                  <p>${addCart.totalprice}</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <div >
                    <p>Delivery</p>
                    <p>country</p>
                  </div>
                  <p>FREE</p>
                </div>
              </div>

              <div className='d-flex justify-content-between'>
                <p>Total</p>
                <p>${addCart.totalprice}</p>
              </div>
              <div className='text-center ' id='button-buy'><button>checkout</button></div>
            </div>
          </>
        }
      </div>
    </div>
  )
}
