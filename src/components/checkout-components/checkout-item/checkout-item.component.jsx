import React from 'react'
import { useDispatch } from 'react-redux'

import { clearItemFromBag, addItem, removeItem } from '../../../redux/bag/bag.actions'

import { CheckoutItemContainer, CheckoutImageContainer, NameContainer, QuantityContainer, ArrowContainer, ValueContainer, PriceContainer, DeleteButtonContainer } from './checkout-item.styles'

const CheckoutItem = ({ bagItem }) => {
    const { name, quantity, imageUrl, price } = bagItem
    const dispatch = useDispatch()
    const clearItemHandler = item => dispatch(clearItemFromBag(item))
    const addItemHandler = item => dispatch(addItem(item))
    const removeItemHandler = item => dispatch(removeItem(item))
    return(
    <CheckoutItemContainer>
        <CheckoutImageContainer>
            <img src={imageUrl}/>
        </ CheckoutImageContainer>
        <NameContainer>{name}</ NameContainer>
        <QuantityContainer>
            <ArrowContainer onClick={() => removeItemHandler(bagItem)}>&#10094;</ ArrowContainer>
            <ValueContainer>{quantity}</ ValueContainer>
            <ArrowContainer onClick={() => addItemHandler(bagItem)}>&#10095;</ ArrowContainer>
        </QuantityContainer>
        <PriceContainer>{price}</ PriceContainer>
        <DeleteButtonContainer onClick={() => clearItemHandler(bagItem)}>&#10005;</ DeleteButtonContainer>
    </ CheckoutItemContainer>
)}

export default CheckoutItem