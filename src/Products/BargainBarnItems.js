import React from 'react'
import Product from './Product';
import brak_zdjecia from '../Pictures/brak_zdjecia.png'
import ul_wlkp_6r_nads_pow from '../Pictures/Ule_odkladowe/ul_wlkp_6r_nads_pow.png'
import ul_wlkp_6r_nads_pow2 from '../Pictures/Ule_odkladowe/ul_wlkp_6r_nads_pow2.png'
import ul_wlkp_6r_nads_pow3 from '../Pictures/Ule_odkladowe/ul_wlkp_6r_nads_pow3.png'
import ul_wlkp_6r from '../Pictures/Ule_odkladowe/ul_wlkp_6r.png'
import ul_wlkp_8r from '../Pictures/Ule_odkladowe/ul_wlkp_8r.png'
import ul_wrsz_6r from '../Pictures/Ule_odkladowe/ul_wrsz_6r.png'
import ul_wrsz_8r from '../Pictures/Ule_odkladowe/ul_wrsz_8r.png'
import ul_dadnat_1_2_nads from '../Pictures/Ule_odkladowe/ul_dadnat_1_2_nads.png'
import ul_dadnat_8r from '../Pictures/Ule_odkladowe/ul_dadnat_8r.png'
import ul_miniplus from '../Pictures/Ule_odkladowe/ul_miniplus.png'

function BargainBarnItems() {
    return (
        <div className='store__products'>

            <Product
                id='ul_wlkp_6r'
                title='Ul odkładowy wielkopolski zwykły 6R'
                image={ul_wlkp_6r}
                price={70}
                availble={true}
            />

            <Product
                id='ul_wlkp_8r'
                title='Ul odkładowy wielkopolski zwykły 8R'
                image={ul_wlkp_8r}
                price={75}
                availble={true}
            />

            <Product
                id='ul_wlkp_6r_nads_pow'
                title='Ul odkłodowy wielkopolski 6R z nadstawką i powałką'
                image={ul_wlkp_6r_nads_pow}
                price={135}
                availble={true}
            />

            <Product
                id='ul_wlkp_8r_nads'
                title='Ul odkładowy wielkopolski 8R z nadstawką'
                image={brak_zdjecia}
                price={110}
                availble={true}
            />

            <Product
                id='ul_wrsz_6r'
                title='Ul odkładowy warszawski zwykły 6R'
                image={ul_wrsz_6r}
                price={70}
                availble={true}
            />

            <Product
                id='ul_wrsz_8r'
                title='Ul odkładowy warszawski zwykły 8R'
                image={ul_wrsz_8r}
                price={75}
                availble={true}
            />

            <Product
                id='ul_dadnat_8r'
                title='Ul odkładowy dadant gniazdowy 8R'
                image={ul_dadnat_8r}
                price={80}
                availble={true}
            />

            <Product
                id='ul_dadnat_nads'
                title='Ul odkładowy dadant gniazdowy z nadstawką'
                image={brak_zdjecia}
                price={110}
                availble={true}
            />

            <Product
                id='ul_dadnat_1_2_nads'
                title='Ul odkładowy dadant 1/2 z nadstawką'
                image={ul_dadnat_1_2_nads}
                price={85}
                availble={true}
            />

            <Product
                id='ul_miniplus'
                title='Ul typu miniplus. Dębnica/korpus/ podkarmiaczka/daszek.'
                image={ul_miniplus}
                price={125}
                availble={true}
            />
        </div>
    )
}

export default BargainBarnItems
