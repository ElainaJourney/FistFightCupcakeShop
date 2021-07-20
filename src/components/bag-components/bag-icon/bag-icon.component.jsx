import React from 'react'
import { connect } from 'react-redux'

import { toggleBagHidden } from '../../../redux/bag/bag.actions'
import { ReactComponent as ShoppingIcon } from '../../../assets/images/shoppingbag.svg'

import './bag-icon.styles.scss'

const BagIcon = ({ toggleBagHidden }) => (
    <div className='bag-icon' onClick={toggleBagHidden}>
        <ShoppingIcon className = 'shopping-icon' />
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({

    toggleBagHidden: () => dispatch(toggleBagHidden())
})
export default connect(null, mapDispatchToProps)(BagIcon)