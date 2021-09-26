import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CheckoutItem from '../../components/checkout-components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

import { selectBagItems, selectBagTotal } from '../../redux/bag/bag.selectors'

import './checkout.styles.scss'

const Checkout = ({ bagItems, total }) => (
    <div className='checkout'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Delete</span>
            </div>
        </div>
        {bagItems.map(bagItem => (<CheckoutItem key={bagItem.id} bagItem={bagItem} />))}
        <div className='total'><span>Total: ${total}</span></div>
        <div className='test-warning'>
            This is just a test: 4242 4242 4242 4242 - 1/22 - 123
        </div>
        <StripeCheckoutButton price={total} />
</div>
)
const mapStateToProps = createStructuredSelector({
    bagItems: selectBagItems,
    total: selectBagTotal
})

export default connect(mapStateToProps)(Checkout)