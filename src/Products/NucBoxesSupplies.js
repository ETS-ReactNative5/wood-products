import React from 'react'
import Product from './Product';
import brak_zdjecia from '../Pictures/brak_zdjecia.png'
import powk_wlkp_10R_1P from '../Pictures/Powalki_i_przegonki/powk_wlkp_10R_1P.png'
import powk_wlkp_10R_3P from '../Pictures/Powalki_i_przegonki/powk_wlkp_10R_3P.png'
import kol_dyst_wlkp_10R from '../Pictures/Powalki_i_przegonki/kol_dyst_wlkp_10R.png'
import kol_dyst_wlkp_12R from '../Pictures/Powalki_i_przegonki/kol_dyst_wlkp_10R.png'
import kol_dyst_dadant_10R from '../Pictures/Powalki_i_przegonki/kol_dyst_wlkp_10R.png'
import krt_odgr_wlkp_10R from '../Pictures/Powalki_i_przegonki/krt_odgr_wlkp_10R.png'
import krt_odgr_wlkp_12R from '../Pictures/Powalki_i_przegonki/krt_odgr_wlkp_12R.png'
import przgn_wlkp_10R from '../Pictures/Powalki_i_przegonki/przgn_wlkp_10R.png'

function NucBoxesSupplies() {
    return (
        <div className='store__frames'>
            <Product
                id='powk_wlkp_10R_1P'
                title='Powałka wielkopolska 10R z jednym pajączkiem'
                image={powk_wlkp_10R_1P}
                price={38}
                availble={true}
            />
            <Product
                id='powk_wlkp_10R_3P'
                title='Powałka wielkopolska 10R z trzema pajączkami'
                image={powk_wlkp_10R_3P}
                price={41}
                availble={true}
            />



            <Product
                id='powk_wlkp_10R_5P'
                title='Powałka wielkopolska 10R z pięcioma pajączkami'
                image={brak_zdjecia}
                price={44}
                availble={true}
            />
            <Product
                id='powk_wlkp_12R_1P'
                title='Powałka wielkopolska 12R z jednym pajączkiem'
                image={powk_wlkp_10R_1P}
                price={41}
                availble={true}
            />
            <Product
                id='powk_wlkp_12R_3P'
                title='Powałka wielkopolska 12R z trzema pajączkami'
                image={powk_wlkp_10R_3P}
                price={44}
                availble={true}
            />
            <Product
                id='powk_wlkp_12R_5P'
                title='Powałka wielkopolska 12R z pięcioma pajączkami'
                image={brak_zdjecia}
                price={47}
                availble={true}
            />
            <Product
                id='powk_dadant_10R_1P'
                title='Powałka dadant 10R z jednym pajączkiem'
                image={powk_wlkp_10R_1P}
                price={41}
                availble={true}
            />
            <Product
                id='powk_dadant_12R_3P'
                title='Powałka dadant 10R z trzema pajączkami'
                image={powk_wlkp_10R_3P}
                price={44}
                availble={true}
            />
            <Product
                id='powk_dadant_12R_5P'
                title='Powałka dadant 10R z pięcioma pajączkami'
                image={brak_zdjecia}
                price={47}
                availble={true}
            />
            <Product
                id='przgn_wlkp_10R'
                title='Przegonka wielkopolska 10R'
                image={przgn_wlkp_10R}
                price={44}
                availble={true}
            />
            <Product
                id='przgn_wlkp_12R'
                title='Przegonka wielkopolska 12R'
                image={brak_zdjecia}
                price={47}
                availble={true}
            />
            <Product
                id='przgn_dadant_10R'
                title='Przegonka dadant 10R'
                image={brak_zdjecia}
                price={47}
                availble={true}
            />

            <Product
                id='kol_dyst_wlkp_10R'
                title='Kołnierz dystansowy wielkopolski 10R'
                image={kol_dyst_wlkp_10R}
                price={22}
                availble={true}
            />

            <Product
                id='kol_dyst_wlkp_12R'
                title='Kołnierz dystansowy wielkopolski 12R'
                image={kol_dyst_wlkp_12R}
                price={24}
                availble={true}
            />

            <Product
                id='kol_dyst_dadant_10R'
                title='Pierścień dystansowy dadant 10R'
                image={kol_dyst_dadant_10R}
                price={24}
                availble={true}
            />

            {/* <Product
                id='krt_odgr_wlkp_10R'
                title='Krata odgrodowa wielkopolska 10R'
                image={krt_odgr_wlkp_10R}
                price={38}
                availble={true}
            />

            <Product
                id='krt_odgr_wlkp_12R'
                title='Krata odgrodowa wielkopolska 12R'
                image={krt_odgr_wlkp_12R}
                price={42}
                availble={true}
            />

            <Product
                id='krt_odgr_dadant_10R'
                title='Krata odgrodowa dadant 10R'
                image={krt_odgr_wlkp_12R}
                price={42}
                availble={true}
            /> */}
        </div>
    )
}

export default NucBoxesSupplies
