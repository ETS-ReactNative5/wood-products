import React from 'react'
import Product from './Product';
import ul_wlkp_6r_nads_pow from '../Pictures/Ule_odkladowe/ul_wlkp_6r_nads_pow.png'
import ul_wlkp_6r_nads_pow2 from '../Pictures/Ule_odkladowe/ul_wlkp_6r_nads_pow2.png'
import ul_wlkp_6r_nads_pow3 from '../Pictures/Ule_odkladowe/ul_wlkp_6r_nads_pow3.png'
import ul_miniplus from '../Pictures/Ule_odkladowe/ul_miniplus.png'

function BargainBarnItems() {
    return (
        <div className='store__products'>

            <Product
                id='ul_wlkp_6r'
                title='Ul odkładowy wielkopolski zwykły 6R'
                image='https://pszczelnictwo.com.pl/system/product_pictures/pictures/000/043/553/large/43553.jpg?1600937487'
                price={70}
                availble={true}
            />

            <Product
                id='ul_wlkp_8r'
                title='Ul odkładowy wielkopolski zwykły 8R'
                image='https://www.polhp.pl/wp-content/uploads/2020/03/9003Ul20Wielkopolski20%E2%80%9320drewniany20klepkowy20ocieplany.jpg'
                price={75}
                availble={true}
            />

            <Product
                id='ul_wlkp_6r_nads_powlk'
                title='Ul odkłodowy wielkopolski 6R z nadstawką i powałką'
                image='https://pszczelnictwo.com.pl/system/product_pictures/pictures/000/043/553/large/43553.jpg?1600937487'
                price={135}
                availble={true}
            />

            <Product
                id='ul_wlkp_8r_nads'
                title='Ul odkładowy wielkopolski 8R z nadstawką'
                image={ul_wlkp_6r_nads_pow}
                price={110}
                availble={true}
            />

            <Product
                id='ul_wrsz_6r'
                title='Ul odkładowy warszawski zwykły 6R'
                image='https://lyson.com.pl/7257-large_default/ul-6-ramkowy-do-wychowu-pakietow-dadant-niemalowany.jpg'
                price={70}
                availble={true}
            />

            <Product
                id='ul_wrsz_8r'
                title='Ul odkładowy warszawski zwykły 8R'
                image='https://lyson.com.pl/7257-large_default/ul-6-ramkowy-do-wychowu-pakietow-dadant-niemalowany.jpg'
                price={75}
                availble={true}
            />

            <Product
                id='ul_dadnat_8r'
                title='Ul odkładowy dadant gniazdowy 8R'
                image='https://lh3.googleusercontent.com/proxy/DKXYHhLLYagXlfG6HkU8MuFL8q1aDSd6AGDRfaF_biGQGY2KAB5A5kn84RidkU2Pwm_nUIoq-B4IVnlooWv3U7_h3edLNDwTr46fDuLsLpkZG-_IMsCFPao'
                price={80}
                availble={true}
            />

            <Product
                id='ul_dadnat_nads'
                title='Ul odkładowy dadant gniazdowy z nadstawką'
                image='https://lyson.com.pl/9140/ul-6-ramkowy-do-wychowu-pakietow-wielkopolski-niemalowany.jpg'
                price={110}
                availble={true}
            />

            <Product
                id='ul_dadnat__1/2_nads'
                title='Ul odkładowy dadant 1/2 z nadstawką'
                image='https://lyson.com.pl/9140/ul-6-ramkowy-do-wychowu-pakietow-wielkopolski-niemalowany.jpg'
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
