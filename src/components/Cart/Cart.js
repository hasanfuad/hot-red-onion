import React, {useState, useEffect} from 'react';
import CartItems from "../CartItems/CartItems"
import './Cart.css'




const Cart = () => {
    const stripePromise = loadStripe('pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG');
    
    const [price, setPrice]= useState(true);
    const [cart, setCart] = useState([[]]);

    useEffect(()=>{
        const currentCart = JSON.parse(sessionStorage.getItem('cart'));
        if(currentCart){
            setCart(currentCart);
        }
    },[])

    const handleCart = item =>{
        const newCart = cart.filter(el=> el.title !== item.title)
        setCart(newCart);
        sessionStorage.setItem('cart',JSON.stringify(newCart))
    }

    const empCart = () => {
        setPrice(false)
        setCart([])
    }
    
    return (
        <div className='text-left cart-block'>
            <small>From: <span>Rajshahi</span></small>
            <br/>
            <small>Will be arrived in an hour. Thanks for the patience!</small>
            {
                price && <div>
                    <div>Total: <strong>$
                    {cart?(cart.reduce((a,b)=>a+(b.price*b.quantity),0)).toFixedd(2):'0.00'}</strong>
                    </div>
                </div>
            }
            {
                cart? cart.map(item => {
                    return <CartItem key={item.id} item={item} handleCart={handleCart}></CartItem>
                }): ''
            }
            <Element stripe={stripePromise}>
                <CheckoutForm
                deactBtn={!props.formComplete || !cart.length}
                delivaryDetails={props.delivaryDetails}
                cart={cart}
                empCart={emptyCart}
                />
            </Element>
        </div>
    );
};

export default Cart;