import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectBagItems } from '../../../redux/bag/bag.selectors'

import CustomButton from '../../custom-button/custom-button.component'
import BagItem from '../bag-item/bag-item.component'

import './bag-dropdown.styles.scss'

const BagDropdown = ({ bagItems }) => (
    <div className='bag-dropdown'>
        <div className='bag-items'>
            {bagItems.map(bagItem => <BagItem key={bagItem.id} item={bagItem}/>)}
        </div>
        <CustomButton>Checkout</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    bagItems: selectBagItems
})

export default connect(mapStateToProps)(BagDropdown)