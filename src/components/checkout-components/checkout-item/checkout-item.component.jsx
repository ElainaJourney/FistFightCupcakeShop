import React from 'react'
import { connect } from 'react-redux'

import { clearItemFromBag, addItem, removeItem } from '../../../redux/bag/bag.actions'

import './checkout-item.styles.scss'

const CheckoutItem = ({ bagItem, clearItem, addItem, removeItem }) => {
    const { name, quantity, imageUrl, price } = bagItem
    return(
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl}/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'><div className='arrow' onClick={() => removeItem(bagItem)}>&#10094;</div><span className='value'>{quantity}</span><div className='arrow' onClick={() => addItem(bagItem)}>&#10095;</div></span>
        <span className='price'>{price}</span>
        <div className='delete-button' onClick={() => clearItem(bagItem)}>&#10005;</div>
    </div>
)}
const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromBag(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)