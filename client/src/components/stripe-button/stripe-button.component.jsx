import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeCheckoutButton = ({ price, name }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51K3l3FBBUXN28gI9XkyvDWBuBDRddofGQ6y5w9vUcu0OiP3qQnmBiQI3PW3xxDSLgkVxh9FmaUlJUea0XYAqst1B00tKYyYU8a'

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert("Payment Successful")
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error))
            alert('There was a problem with your payment.')
        })
    }

    return (
        <StripeCheckout 
            label='Checkout'
            name='Fistfight Cupcake'
            billingAddress
            shippingAddress
            image=''
            description={`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel='Checkout'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton