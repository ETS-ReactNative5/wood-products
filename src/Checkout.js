import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal';
import './Checkout.css'

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                {basket.length !== 0 ? <h1>Twoje przedmioty:</h1> : <h1>Twój koszyk jest pusty.</h1>}

                {basket.map(item => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        availble={item.availble}
                        quantity={item.quantity}
                    />
                ))}
            </div>
            <div className='checkout__right'>
                {basket.length !== 0 ? <Subtotal /> : ''}
            </div>
        </div>
    )
}

export default Checkout
