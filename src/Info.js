import React from 'react'
import './Info.css';

function Info() {
    return (
        <div className='info'>
            <div className='info__contact'>
                <h2>Kontakt</h2>
                <p>Telefon: 734 536 912</p>
                <p>Messenger: <a href='https://m.me/krzysztof.bluszcz'>Krzysztof Bluszcz</a></p>
            </div>
            <div className='info__hours'>
                <h2>Godziny kontaktu</h2>
                <p>Od poniedziałku do soboty, 7:00 - 19:00</p>
            </div>
        </div>
    )
}

export default Info
