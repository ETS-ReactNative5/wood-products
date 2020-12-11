import React from 'react'
import Product from './Product'
import regal from '../Pictures/Regal_do_ramek/regal.jpg'

function BeeHiveKits() {
    return (
        <div className='store__frames'>
            <Product
                id='rgl_wlkp_gnizd'
                title='Regał wielkopolski gniazdowy'
                image='https://pszczelnictwo.com.pl/system/product_pictures/pictures/000/040/501/large/40501.jpg?1508759781'
                // image={regal}
                price={35}
                availble={true}
            />
            <Product
                id='rgl_wrsz'
                title='Regał warszawski zwykły'
                image='https://pszczelnictwo.com.pl/system/product_pictures/pictures/000/040/501/large/40501.jpg?1508759781'
                // image={regal}
                price={38}
                availble={true}
            />



            <Product
                id='rgl_wrsz_pszrz'
                title='Regał warszawski poszerzany'
                image='https://pszczelnictwo.com.pl/system/product_pictures/pictures/000/040/501/large/40501.jpg?1508759781'
                // image={regal}
                price={38}
                availble={true}
            />
            <Product
                id='rgl_dadant_gnizd'
                title='Regał dadant gniazdowy'
                image='https://pszczelnictwo.com.pl/system/product_pictures/pictures/000/040/501/large/40501.jpg?1508759781'
                // image={regal}
                price={38}
                availble={true}
            />
        </div>
    )
}

export default BeeHiveKits
