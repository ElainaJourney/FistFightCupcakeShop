import styled, { css } from 'styled-components'

export const ItemPriceContainer = styled.span`
    width: 10%;
`

export const ItemNameContainer = styled.span`
    width: 90%;
    margin-bottom: 15px;
`

export const ItemImageContainer = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
`
export const ItemFooterContainer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`
const customHoverStyles = css`
    button {
        opacity: 0.85;
        display: flex;
    }
    ${ItemImageContainer} {
        opacity: 0.8;
      }
`
export const CollectionItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    button {
        width: 80%;
        opacity: 0.7;
        position: absolute;
        top: 255px;
        display: none;
      }
    &:hover {
        ${customHoverStyles}
      }
    @media screen and (max-width: 800px) {
        width: 40vw;
        button {
            display: block;
            min-width: unset;
        }
        &hover {
            ${ItemImageContainer} {
                opacity: unset;
            }
            button {
                opacity: unset;
            }
        }
    }
`