import React from 'react'
import Product from './Product';
import brak_zdjecia from '../Pictures/brak_zdjecia.png'
import klat_zander from '../Pictures/Rojnice_i_transportery/klat_zander.png'
import roj_wlkp from '../Pictures/Rojnice_i_transportery/roj_wlkp.png'
import roj_dadant from '../Pictures/Rojnice_i_transportery/roj_wlkp.png'
import roj_wrsz_poszrz from '../Pictures/Rojnice_i_transportery/roj_wrsz_poszrz.png'
import roj_wrsz from '../Pictures/Rojnice_i_transportery/roj_wrsz.png'

function RojniceTransportery() {
    return (
        <div className='store__frames'>
            <Product
                id='roj_wlkp'
                title='Rojnica wielkopolska'
                image={roj_wlkp}
                price={95}
                availble={true}
                description={'Rojnica wielkopolska na 8 ramek wielkopolskich gniazdowych.'}
            />
            <Product
                id='roj_dadant'
                title='Rojnica dadant'
                image={roj_dadant}
                price={110}
                availble={true}
            />
            <Product
                id='roj_wrsz_poszrz'
                title='Rojnica warszawska poszerzana'
                image={roj_wrsz_poszrz}
                price={110}
                availble={true}
            />
            <Product
                id='roj_wrsz'
                title='Rojnica warszawska zwykła'
                image={roj_wrsz}
                price={100}
                availble={true}
            />
            <Product
                id='klat_zander'
                title='Klateczka Zander'
                image={klat_zander}
                price={5}
                availble={true}

            />
        </div>
    )
}

export default RojniceTransportery
