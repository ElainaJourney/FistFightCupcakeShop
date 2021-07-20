import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth } from '../../firebase/firebase.utils'
import BagDropdown from '../bag-components/bag-dropdown/bag-dropdown.component'
import BagIcon from '../bag-components/bag-icon/bag-icon.component'
import cupcake from "../../assets/images/cupcake.png"
import hero from "../../assets/images/hero.png"
import './header.styles.scss'

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <img className='logo' src={cupcake} alt='logo'/>
        </Link>
        <div className='hero-container'>
            <img className='hero' src={hero}/>
        </div>
        <div className='options'>
            <Link className='option' to='/shop'>shop</Link>
            <Link className='option' to='/vlog'>vlog</Link>
            <Link className='option' to='/prompts'>prompts</Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>sign out</div>
                :
                <Link className='option' to='signin'>sign in</Link>
            }
            <BagIcon/>
        </div>
        {hidden ? null : <BagDropdown/>}
    </div>
)

const mapStateToProps = ({user: { currentUser }, bag: { hidden }}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header)