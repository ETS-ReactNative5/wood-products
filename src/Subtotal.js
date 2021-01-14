import React from 'react'
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import './Subtotal.css'

function Subtotal() {
    const [{ basket }] = useStateValue();

    // get all products and add prices
    let items = basket.reduce((a, b) => parseInt(a, 10) + parseInt(b.quantity, 10), 0);
    let price = basket.reduce((a, b) => a + b.price, 0);

    return (
        <div className='subtotal'>
            <h2>Podsumowanie ({items} rzeczy + 25zł przesyłka): {price % 1 ? price + 25 + '0' : price + 25}zł</h2>
            <Link to='/order'>
                <button className='subtotal__order'>Zamawiam</button>
            </Link>
        </div>
    )
}

export default Subtotal
