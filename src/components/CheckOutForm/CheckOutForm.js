import React from 'react';
import {Link} from 'react-router-dom';
import{
    CardElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';

const CheckOutForm = () => {
    const Cardstyle = {
        style:{
            fontSize: '18px',
            color: '#424770',
            '::placeholder':{
                color: '#aab7c4',
            },
        },
        invalid: {
            color: '#9e2146',
    },  
    }
    }

    const [paymentError ,setPaymentError] = useState(null);
    const [paymentSuccessful , setPaymentSuccessful] = useState(null);
    const [orderedId, setOrderedId] = useState('')

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event)=>{
        event.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });
        if(error){
            setPaymentError(error.message)
            setPaymentSuccessful(null);
        }
        else{
            const orderDetail= {
                ...props.deliveryDetails,
                order: props.cart,
                paymentId: paymentMethod.id,
                last5: paymentMethod.card.last5
            }
            fetch('')

        }
    }
    return (
        <div>
            <h3>This checkoutform</h3>
        </div>
    );
};

export default CheckOutForm;