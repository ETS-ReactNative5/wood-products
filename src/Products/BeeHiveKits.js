import React from 'react'
import Product from './Product';
import brak_zdjecia from '../Pictures/brak_zdjecia.png'
import regal from '../Pictures/Regal_do_ramek/regal.png'

function BeeHiveKits() {
    return (
        <div className='store__frames'>
            <Product
                id='rgl_wlkp_gnizd'
                title='Regał wielkopolski gniazdowy'
                image={regal}
                price={46}
                availble={true}
            />
            <Product
                id='rgl_wrsz'
                title='Regał warszawski zwykły'
                image={regal}
                price={49}
                availble={true}
            />



            <Product
                id='rgl_wrsz_pszrz'
                title='Regał warszawski poszerzany'
                image={regal}
                price={49}
                availble={true}
            />
            <Product
                id='rgl_dadant_gnizd'
                title='Regał dadant gniazdowy'
                image={regal}
                price={49}
                availble={true}
            />
        </div>
    )
}

export default BeeHiveKits
