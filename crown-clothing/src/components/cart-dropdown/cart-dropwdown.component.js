import React from 'react';

import CustomButton from '../custom-buttom/custom-buttom.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className="cart-items"></div>
        <CustomButton>go to checkout</CustomButton>
    </div>
)


export default CartDropdown;