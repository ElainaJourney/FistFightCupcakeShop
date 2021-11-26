import React from 'react'
import { useDispatch } from 'react-redux'

import CustomButton from '../custom-button/custom-button.component'
import { addItem } from '../../redux/bag/bag.actions'

import { CollectionItemContainer, ItemFooterContainer, ItemImageContainer, ItemNameContainer, ItemPriceContainer } from './collection-item.styles'

const CollectionItem = ({ item }) => {
    const { name, price, imageUrl } = item;
    const dispatch = useDispatch()
    const addItemHandler = item => dispatch(addItem(item))
    return (
    <CollectionItemContainer>
        <ItemImageContainer
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            />
        <ItemFooterContainer>
            <ItemNameContainer>{name}</ ItemNameContainer>
            <ItemPriceContainer>{price}</ ItemPriceContainer>
        </ ItemFooterContainer>
        <CustomButton onClick={() => addItemHandler(item)} inverted>Add to bag</CustomButton>
    </ CollectionItemContainer>
)}

export default CollectionItem