import React from 'react';
import './CartItems.css'

const CartItems = (props) => {
    return (
        <div className='row cart-items'>
            <div className='col-3'>
                <img className='w-100' src={props.item.image} alt=""/>
            </div>
            <div className="col-6">
                <div className='cart-item-title'>
                {props.item.title}
                </div>
                <input  className="cart-item-quantity" type="text" value={props.item.quantity}disabled></input>
                <button className="cart-qt-btn"onClick={()=>props.handleCart(prop.item)}>X</button>
            </div>
            
            
            
            {/* thsi is cart items */}
        </div>
    );
};

export default CartItems;