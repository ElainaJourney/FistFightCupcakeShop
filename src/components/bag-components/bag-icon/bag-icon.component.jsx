import React from 'react'
import { connect } from 'react-redux'

import { toggleBagHidden } from '../../../redux/bag/bag.actions'
import { ReactComponent as ShoppingIcon } from '../../../assets/images/shoppingbag.svg'

import './bag-icon.styles.scss'

const BagIcon = ({ toggleBagHidden, itemCount }) => (
    <div className='bag-icon' onClick={toggleBagHidden}>
        <ShoppingIcon className = 'shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({

    toggleBagHidden: () => dispatch(toggleBagHidden())
})

const mapStateToProps = ({ bag: { bagItems } }) => ({
    itemCount: bagItems.reduce((accumalatedQuantity, bagItem) => accumalatedQuantity + bagItem.quantity,
     0)
})
export default connect(mapStateToProps, mapDispatchToProps)(BagIcon)