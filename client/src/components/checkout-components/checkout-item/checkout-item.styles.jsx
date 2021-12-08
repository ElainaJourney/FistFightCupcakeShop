import styled, { css } from "styled-components";

const imageStyles = css`
    img {
        width: 100%;
        height: 100%;
    }
`
const spanStyles = css`
        width: 23%;
`

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`
export const CheckoutImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;
    ${imageStyles}
`
export const NameContainer = styled.span`
    ${spanStyles}
`
export const QuantityContainer = styled.span`
    display: flex;
    ${spanStyles}
`
export const PriceContainer = styled.span`
    ${spanStyles}
`
export const ArrowContainer = styled.div`
    cursor: pointer;
`
export const ValueContainer = styled.span`
    margin: 0 10px;
`
export const DeleteButtonContainer = styled.div`
    cursor: pointer;
    padding-left: 12px;
`