import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './index.css'
export default function AddRemove({ setAddCart, addCart, cardDetails }) {
    const handleRemoveCart = (props) => {
    
        setAddCart((prevState) => {
            const itemIndex = prevState.arrayCart.findIndex(cartItem => cartItem.id === props.id);
            const newarrayCart = [...prevState.arrayCart]
            const newCounter = [...prevState.Counter]
            let totalType = prevState.total
            let totalPrice = prevState.totalprice
            if (itemIndex > -1) {
                newCounter[itemIndex] -= 1
                totalPrice -= newarrayCart[itemIndex].price
                if (newCounter[itemIndex] <= 0) {
                    newarrayCart.splice(itemIndex, 1)
                    newCounter.splice(itemIndex, 1);
                    totalPrice -= props.price
                }
            }

            totalType = Math.max(totalType - 1, 0);
            // totalPrice -= newCounter[itemIndex] * newarrayCart[itemIndex].price
            return {
                arrayCart: newarrayCart,
                Counter: newCounter,
                total: totalType,
                totalprice: totalPrice
            }

        })

    }
    const handleAddCart = (props) => {
        
        setAddCart((prevState) => {
            const itemIndex = prevState.arrayCart.findIndex(cartItem => cartItem.id === props.id);
            const newarrayCart = [...prevState.arrayCart]
            const newCounter = [...prevState.Counter]
            let totalPrice = prevState.totalprice
            let totalType = prevState.total
            if (itemIndex > -1) {
                newCounter[itemIndex] += 1
                totalPrice += newarrayCart[itemIndex].price
            }
            totalType += 1
            return {
                arrayCart: newarrayCart,
                Counter: newCounter,
                total: totalType,
                totalprice: totalPrice
            }

        })

    }

    return (
        <div className='d-flex button-cart mb-3 '>
            <button id='bg-button-cart' onClick={() => handleAddCart(cardDetails)}  ><AddIcon sx={{ color: 'white' }} /></button>
            <div className='w-25 bg-light mx-3 fs-3 text-center h-75'>{addCart.Counter[addCart.arrayCart.findIndex(cartItem => cartItem.id === cardDetails.id)]} </div>
            <button id='bg-button-cart-1' onClick={() => handleRemoveCart(cardDetails)} ><RemoveIcon sx={{ color: 'white' }} /></button>
        </div>
    )
}
