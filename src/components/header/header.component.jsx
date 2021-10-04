import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { auth } from '../../firebase/firebase.utils'

import BagDropdown from '../bag-components/bag-dropdown/bag-dropdown.component'
import { selectBagHidden } from '../../redux/bag/bag.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'

import BagIcon from '../bag-components/bag-icon/bag-icon.component'
import cupcake from "../../assets/images/cupcake.png"

import { HeaderContainer, LogoContainer, Logo, OptionsContainer, OptionLink} from './header.styles'

const Header = ({ currentUser, hidden }) => (
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
                <OptionLink as='div' onClick={() => auth.signOut()}>sign out</OptionLink>
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

export default connect(mapStateToProps)(Header)