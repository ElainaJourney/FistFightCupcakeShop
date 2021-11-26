import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { toggleBagHidden } from '../../../redux/bag/bag.actions'
import { selectBagItems, selectBagItemsCount } from '../../../redux/bag/bag.selectors'

import { BagIconContainer, ItemCountContainer, ShoppingIcon } from './bag-icon.styles'


const BagIcon = () => {
    const dispatch = useDispatch()
    const itemCount = useSelector(selectBagItemsCount)
    const toggleBagHiddenHandler = () => dispatch(toggleBagHidden())
    return (
    <BagIconContainer onClick={toggleBagHiddenHandler}>
        <ShoppingIcon />
        <ItemCountContainer>{itemCount}</ ItemCountContainer>
    </ BagIconContainer>
)}

export default BagIcon