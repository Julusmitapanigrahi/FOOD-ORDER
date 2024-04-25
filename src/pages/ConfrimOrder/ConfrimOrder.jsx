import React from 'react'
import './ConfrimOrder.css'
import { assets } from '../../assets/assets'
function ConfrimOrder() {
    return (
        <div className='confrim'>
            <img src={assets.sucessfuly_icon} alt="" />
            <h1> Order Sucessful ! </h1>
            <p>Thank you so much for your Order.</p>
        </div>
    )
}

export default ConfrimOrder
