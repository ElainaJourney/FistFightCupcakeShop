import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import cupcake from '../../assets/images/cupcake.png'


export const HeaderContainer = styled.div`
    height: 70px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    background-color: #ffafff;
    padding: 0 40px;
`
export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding-top: 5px;
`

export const Logo = styled.img`
    width: 60px;
    height: 60px;
`

export const OptionsContainer = styled.div`
    height: 100%;
    width: 50%;
    padding-right: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`