import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

import { selectBagItems } from '../../../redux/bag/bag.selectors'
import { toggleBagHidden } from '../../../redux/bag/bag.actions'

import CustomButton from '../../custom-button/custom-button.component'
import BagItem from '../bag-item/bag-item.component'

import { BagDropdownContainer, BagItemsContainer } from './bag-dropdown.styles'

const BagDropdown = () => {
    const bagItems = useSelector(selectBagItems)
    const dispatch = useDispatch()
    const history = useHistory()
    return (
    <BagDropdownContainer>
        <BagItemsContainer>
            {
            bagItems.length ?
            bagItems.map(bagItem => <BagItem key={bagItem.id} item={bagItem}/>)
            : <span>There's nothing here!</span>
        }
        </ BagItemsContainer>
        <CustomButton onClick={() => {
            history.push('/checkout')
            dispatch(toggleBagHidden())
            }}>Checkout</CustomButton>
    </ BagDropdownContainer>
)}

export default BagDropdown