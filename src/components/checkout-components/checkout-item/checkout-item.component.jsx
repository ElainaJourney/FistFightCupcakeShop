import React from 'react'

import './checkout-item.styles.scss'

const CheckoutItem = ({ bagItem: {name, price, imageUrl, quantity}}) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl}/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <div className='delete-button'>&#10005;</div>
    </div>
)

export default CheckoutItem