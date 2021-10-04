import styled from "styled-components";

import shoppingbag from '../../../assets/images/shoppingbag.svg'

export const BagIconContainer = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    filter: invert(1);
`

export const ShoppingIcon = styled.div`
    background-image: url(${shoppingbag});
    background-size: contain;
    width: 24px;
    height: 24px;
`

export const ItemCountContainer = styled.span`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
`