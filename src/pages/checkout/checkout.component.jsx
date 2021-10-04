import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CheckoutItem from '../../components/checkout-components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

import { selectBagItems, selectBagTotal } from '../../redux/bag/bag.selectors'
import { CheckoutContainer, CheckoutHeaderContainer, HeaderBlockContainer } from './checkout.styles'

const Checkout = ({ bagItems, total }) => (
    <CheckoutContainer>
        <CheckoutHeaderContainer>
            <HeaderBlockContainer>
                <span>Product</span>
            </ HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Description</span>
            </ HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Quantity</span>
            </ HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Price</span>
            </ HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Delete</span>
            </ HeaderBlockContainer>
        </ CheckoutHeaderContainer>
        {bagItems.map(bagItem => (<CheckoutItem key={bagItem.id} bagItem={bagItem} />))}
        <div className='total'><span>Total: ${total}</span></div>
        <div className='test-warning'>
            This is just a test: 4242 4242 4242 4242 - 1/22 - 123
        </div>
        <StripeCheckoutButton price={total} />
    </ CheckoutContainer>
)
const mapStateToProps = createStructuredSelector({
    bagItems: selectBagItems,
    total: selectBagTotal
})

export default connect(mapStateToProps)(Checkout)