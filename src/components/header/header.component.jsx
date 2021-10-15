import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import BagDropdown from '../bag-components/bag-dropdown/bag-dropdown.component'
import { selectBagHidden } from '../../redux/bag/bag.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { signoutStart } from '../../redux/user/user.actions'

import BagIcon from '../bag-components/bag-icon/bag-icon.component'
import cupcake from "../../assets/images/cupcake.png"

import { HeaderContainer, LogoContainer, Logo, OptionsContainer, OptionLink} from './header.styles'

const Header = ({ currentUser, hidden, signoutStart }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo src={cupcake} alt='logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>shop</OptionLink>
            <OptionLink to='/vlog'>vlog</OptionLink>
            <OptionLink to='/prompts'>prompts</OptionLink>
            {
                currentUser ?
                <OptionLink as='div' onClick={signoutStart}>sign out</OptionLink>
                :
                <OptionLink to='signin'>sign in</OptionLink>
            }
            <BagIcon/>
        </OptionsContainer>
        {hidden ? null : <BagDropdown/>}
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectBagHidden
})

const mapDispatchToProps = dispatch => ({
    signoutStart: () => dispatch(signoutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)