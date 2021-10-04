import React from 'react'
import { connect } from 'react-redux'

import CustomButton from '../custom-button/custom-button.component'
import { addItem } from '../../redux/bag/bag.actions'

import { CollectionItemContainer, ItemFooterContainer, ItemImageContainer, ItemNameContainer, ItemPriceContainer } from './collection-item.styles'

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
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
        <CustomButton onClick={() => addItem(item)} inverted>Add to bag</CustomButton>
    </ CollectionItemContainer>
)}
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem) 