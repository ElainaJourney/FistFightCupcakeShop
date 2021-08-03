import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router'

import { selectBagItems } from '../../../redux/bag/bag.selectors'
import { toggleBagHidden } from '../../../redux/bag/bag.actions'

import CustomButton from '../../custom-button/custom-button.component'
import BagItem from '../bag-item/bag-item.component'

import './bag-dropdown.styles.scss'

const BagDropdown = ({ bagItems, history, dispatch }) => (
    <div className='bag-dropdown'>
        <div className='bag-items'>
            {
            bagItems.length ?
            bagItems.map(bagItem => <BagItem key={bagItem.id} item={bagItem}/>)
            : <span>There's nothing here!</span>
        }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleBagHidden())
            }}>Checkout</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    bagItems: selectBagItems
})

export default withRouter(connect(mapStateToProps)(BagDropdown))