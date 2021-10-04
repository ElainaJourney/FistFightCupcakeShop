import React from 'react'
import { connect } from 'react-redux'

import { clearItemFromBag, addItem, removeItem } from '../../../redux/bag/bag.actions'

import { CheckoutItemContainer, CheckoutImageContainer, NameContainer, QuantityContainer, ArrowContainer, ValueContainer, PriceContainer, DeleteButtonContainer } from './checkout-item.styles'

const CheckoutItem = ({ bagItem, clearItem, addItem, removeItem }) => {
    const { name, quantity, imageUrl, price } = bagItem
    return(
    <CheckoutItemContainer>
        <CheckoutImageContainer>
            <img src={imageUrl}/>
        </ CheckoutImageContainer>
        <NameContainer>{name}</ NameContainer>
        <QuantityContainer>
            <ArrowContainer onClick={() => removeItem(bagItem)}>&#10094;</ ArrowContainer>
            <ValueContainer>{quantity}</ ValueContainer>
            <ArrowContainer onClick={() => addItem(bagItem)}>&#10095;</ ArrowContainer>
        </QuantityContainer>
        <PriceContainer>{price}</ PriceContainer>
        <DeleteButtonContainer onClick={() => clearItem(bagItem)}>&#10005;</ DeleteButtonContainer>
    </ CheckoutItemContainer>
)}
const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromBag(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)