import React from 'react';

import { BagItemContainer, ItemImage, ItemDetailContainer, ItemNameContainer, ItemPriceContainer } from './bag-item.styles';


const BagItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <BagItemContainer>
        <ItemImage src={imageUrl} alt='item' />
        <ItemDetailContainer>
            <ItemNameContainer>{name}</ ItemNameContainer>
            <ItemPriceContainer>{quantity} x ${price}</ ItemPriceContainer>
        </ ItemDetailContainer>
    </ BagItemContainer>
)

export default BagItem