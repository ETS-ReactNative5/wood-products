import React, { useState } from 'react'
import { useStateValue } from './StateProvider';
import './ProductDetails.css'
import { Link } from 'react-router-dom'
import './Store.css'

function ProductDetails() {
    const qty = document.querySelector('.details__quantity');
    const [{ details, basket }, dispatch] = useStateValue();
    const [multiplier, iM] = useState(0);
    console.log(basket)
    function setInputFilter(textbox, inputFilter) {
        ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
            if (qty) {
                textbox.addEventListener(event, function () {
                    if (inputFilter(this.value)) {
                        this.oldValue = this.value;
                        this.oldSelectionStart = this.selectionStart;
                        this.oldSelectionEnd = this.selectionEnd;
                    } else if (this.hasOwnProperty("oldValue")) {
                        this.value = this.oldValue;
                        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                    } else {
                        this.value = "";
                    }
                });
            }

        });
    }

    setInputFilter(qty, function (value) {
        return /^-?\d*$/.test(value);
    });

    const addToBasket = () => {
        document.querySelector('.details__alert').style.display = 'flex';
        document.querySelector('.details__block').style.display = 'block';
        details.map(item => (
            dispatch({
                type: 'ADD_TO_BASKET',
                item: {
                    id: item.id,
                    title: item.title,
                    image: item.image,
                    price: item.price * multiplier,
                    availble: item.availble,
                    quantity: multiplier,
                }
            })))
    }
    let increaseMultiplier = (event) => {
        iM(event.target.value);
    }



    return (

        <div className='details'>
            <div className='details__block'></div>
            <div className='details__alert'>
                <p>Przedmioty został dodane<br />do koszyka</p>
                <div className='details__alert__buttons'>
                    <Link to='/store'><button className='details__alert__buttons__store'>Wróć do sklepu</button></Link>
                    <Link to='/checkout'><button className='details__alert__buttons__basket'>Przejdź do koszyka</button></Link>
                </div>

            </div>
            {details.map(item => (
                <div className='details__card'>
                    <img
                        className='details__img'
                        src={item.image}
                        alt=''
                    />
                    <div className='details__info'>
                        <h3 className='details__title'>
                            {item.title}
                        </h3>
                        <label>Ilość: </label>
                        <input className='details__quantity' onChange={increaseMultiplier} type='text' min='1' maxLength='2' />
                        <p className='details__price'>
                            Cena: {(item.price * multiplier) % 1 ? item.price * multiplier + '0' : item.price * multiplier}zł
                        </p>
                        {multiplier <= 0 ? <button className='details__buttonOff'>Dodaj do koszyka</button> : <button className='details__button' onClick={addToBasket}>Dodaj do koszyka</button>}
                    </div>
                </div>
            ))}
            {details.length !== 0 ?
                <div className='details__description'>
                    <p>
                        {/* This beehive winter wrap has velcro closures for a snug fit on 10 frame hives. Made from marine-grade vinyl-coated polyester, it has 1/2" thick R4 rigid Owens-Corning insulating foam, which is impervious to mice and snakes.<br /><br /> This hive wrap helps retain the heat of the bees' cluster, keeping the colony warmer in cold northern temps. Made in the USA. Inside dimensions: 16-1/2" wide by 20" long by 17" tall. Covers two 9.5" deeps with room for the telescoping cover.<br /><br /> Hive not included. */}
                    </p>
                </div>
                :
                <div className='details__description'>
                    <Link to='/store'>
                        <button className='details__button'>Wróć do sklepu</button>
                    </Link>
                </div>}
        </div>
    )
}

export default ProductDetails