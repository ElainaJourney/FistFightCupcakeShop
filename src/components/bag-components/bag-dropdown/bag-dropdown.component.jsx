import React from 'react'
import CustomButton from '../../custom-button/custom-button.component'
import './bag-dropdown.styles.scss'

const BagDropdown = () => (
    <div className='bag-dropdown'>
        <div className='bag-items'/>
        <CustomButton>Checkout</CustomButton>
    </div>
)

export default BagDropdown