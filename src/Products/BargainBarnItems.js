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
                price={87}
                availble={true}
            />

            <Product
                id='ul_dadnat_6r'
                title='Ul odkładowy dadant zwykły 6R'
                image={ul_wlkp_6r}
                price={110}
                availble={true}
            />

            <Product
                id='ul_wrsz_6r'
                title='Ul warszawski zwykły 6R'
                image={ul_wrsz_6r}
                price={87}
                availble={true}
            />

            <Product
                id='ul_wrsz_6r_posz'
                title='Ul warszawski poszerzany 6 ramkowy'
                image={ul_wrsz_6r}
                price={110}
                availble={true}
            />

            {/* <Product
                id='ul_wlkp_8r'
                title='Ul odkładowy wielkopolski zwykły 8R'
                image={ul_wlkp_8r}
                price={83}
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
                price={76}
                availble={true}
            />

            <Product
                id='ul_wrsz_8r'
                title='Ul odkładowy warszawski zwykły 8R'
                image={ul_wrsz_8r}
                price={83}
                availble={true}
            />

            <Product
                id='ul_wrsz_6r_posz'
                title='Ul odkładowy warszawski poszerzany 6 ramkowy'
                image={brak_zdjecia}
                price={83}
                availble={true}
            />

            <Product
                id='ul_wrsz_8r_posz'
                title='Ul odkładowy warszawski poszerzany 8 ramkowy'
                image={brak_zdjecia}
                price={88}
                availble={true}
            />

            <Product
                id='ul_dadnat_6r'
                title='Ul odkładowy dadant gniazdowy 6R'
                image={brak_zdjecia}
                price={87}
                availble={true}
            />

            <Product
                id='ul_dadnat_8r'
                title='Ul odkładowy dadant gniazdowy 8R'
                image={ul_dadnat_8r}
                price={91}
                availble={true}
            />

            <Product
                id='ul_dadnat_nads_6R'
                title='Ul odkładowy dadant z nadstawką 6R'
                image={brak_zdjecia}
                price={106}
                availble={true}
            />

            <Product
                id='ul_dadnat_nads_8R'
                title='Ul odkładowy dadant z nadstawką 8R'
                image={brak_zdjecia}
                price={114}
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
                price={105}
                availble={true}
            /> */}
        </div>
    )
}

export default BargainBarnItems
