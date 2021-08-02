import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { toggleBagHidden } from '../../../redux/bag/bag.actions'
import { selectBagItemsCount } from '../../../redux/bag/bag.selectors'

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

const mapStateToProps = createStructuredSelector({
    itemCount: selectBagItemsCount
})
export default connect(mapStateToProps, mapDispatchToProps)(BagIcon)