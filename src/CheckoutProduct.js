import React from 'react'
import { useStateValue } from './StateProvider'
import './CheckoutProduct.css'

function CheckoutProduct({ id, title, image, price, availble, quantity }) {

    const [, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BUSKET',
            id
        })
    }

    return (
        <div className='checkoutProduct'>
            <div className='checkoutProduct__left'>
                <img
                    src={image}
                    alt=''
                    className='checkoutProduct__image'
                />
            </div>
            <div className='checkoutProduct__mid'>
                <h3 className='checkoutProduct__title'>
                    {title}
                </h3>
                {availble ? <span className='checkoutProduct__avail' role='img' aria-label="x">Dostępny ✔</span> : <span className='checkoutProduct__unavail' role='img' aria-label="x">Niedostępne❌, dłuższy czas dostawy</span>}
                <p>
                    Ilość: {quantity}
                </p>


            </div>
            <div className='checkoutProduct__right'>
                <p>
                    Cena: {price % 1 ? price + '0' : price}zł
                </p>
                <button className='checkoutProduct__button' onClick={removeFromBasket}>Usuń</button>
            </div>

        </div>
    )
}

export default CheckoutProduct
