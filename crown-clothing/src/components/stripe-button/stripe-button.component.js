import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HzL0FJiXji2zZe9ANxZMMQmIr31PORg044kIf3sSbaEm08vyZ9NvCWxmGQu5b8lk80JAV3V8e3QhZlH6boMIf4C00Jxz9bFjO'

    const onToken = token => {
        console.log(token);
        alert('Payment successful!');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CROWN Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}        
        />
    )
}

export default StripeCheckoutButton;