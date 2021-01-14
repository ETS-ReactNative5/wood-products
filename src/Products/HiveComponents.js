import React from 'react'
import Product from './Product';
import pdkrm_wrsz_25 from '../Pictures/Podkarmiaczki_ramkowe/pdkrm_wrsz_25.png'
import pdkrm_wlkp_powlk_10R from '../Pictures/Podkarmiaczki_ramkowe/pdkrm_wlkp_powlk_10R.png'
import pdkrm_dadant_36 from '../Pictures/Podkarmiaczki_ramkowe/pdkrm_dadant_36.png'
import pdkrm_wlkp_25 from '../Pictures/Podkarmiaczki_ramkowe/pdkrm_wlkp_25.png'
import pdkrm_wrsz_pszrz_25 from '../Pictures/Podkarmiaczki_ramkowe/pdkrm_wrsz_pszrz_25.png'

function HiveComponents() {
    return (
        <div className='store__frames'>
            <Product
                id='pdkrm_wlkp_25'
                title='Podkarmiaczka wielkopolska ramkowa 2.5l'
                image={pdkrm_wlkp_25}
                price={19}
                availble={true}
            />
            <Product
                id='pdkrm_wrsz_25'
                title='Podkarmiaczka warszawska zwykła ramkowa 2.5l'
                image={pdkrm_wrsz_25}
                price={22}
                availble={true}
            />

            <Product
                id='pdkrm_wrsz_pszrz_25'
                title='Podkarmiaczka warszawska poszerzana ramkowa 3.6l'
                image={pdkrm_wrsz_pszrz_25}
                price={22}
                availble={true}
            />
            <Product
                id='pdkrm_dadant_36'
                title='Podkarmiaczka dadant ramkowa 3.6l'
                image={pdkrm_dadant_36}
                price={22}
                availble={true}
            />

            <Product
                id='pdkrm_lngs_25'
                title='Podkarmiaczka langstroth 2.5l'
                image='https://www.nastavky.cz/wp-content/uploads/produkty/1429097534krmitko.png'
                price={19}
                availble={true}
            />

            <Product
                id='pdkrm_wlkp_powlk_10R'
                title='Podkarmiaczka powałkowa wielkopolska 10R'
                image={pdkrm_wlkp_powlk_10R}
                price={55}
                availble={true}
            />
        </div>
    )
}

export default HiveComponents
