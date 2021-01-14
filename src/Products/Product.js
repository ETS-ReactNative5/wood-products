import React from 'react'
import "./Product.css"
import { Link } from 'react-router-dom';
import { useStateValue } from "../StateProvider.js";


function Product({ id, title, image, price, availble }) {
    const [, dispatch] = useStateValue();

    const send = () => {
        dispatch({
            type: 'SEND_PRODUCT',
            item: {
                id,
                title,
                image,
                price,
                availble
            }
        })
    };

    return (
        <Link to='/product/details' onClick={send}>
            <div className='product'>
                <div className='product__img'>
                    {
                        image ?
                            <img
                                src={image}
                                alt='Brak zdjęcia'
                            />
                            :
                            <p>Brak zdjęcia</p>
                    }

                </div>

                <h3 className='product__title'>
                    {title}
                </h3>
                <p className='product__price'>
                    Cena: {price % 1 ? price + '0' : price}zł
                </p>
                {/* {availble ? <h2 classNamjnhmyujtrhe='product__avail'>Dostępny</h2> : <h2 className='product__unavail'>Niedostępny</h2>} */}
                {/* {!availble ? <p>Dodatkowy czas realizacji</p> : <p>Normalny czas realizacji</p>} */}

            </div>
        </Link>


    )
}

export default Product