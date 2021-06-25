import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import cupcake from "../../assets/images/cupcake.png"
import hero from "../../assets/images/hero.png"
import './header.styles.scss'

const Header = ({ currentUser }) => (
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
        </div>
    </div>
)
export default Header