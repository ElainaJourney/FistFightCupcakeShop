import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51Jdyz7Ig8O3KxHFUUfr3TNJ3U0Ezliq03Jd2f1F6ROf6zmRUURciXJjbsDoq3KlhhqLmSeFXmAxAGchURm7qZ0cf008L1NQ7Xo'

    const onToken = token => {
        console.log(token)
        alert("Thank You!")
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