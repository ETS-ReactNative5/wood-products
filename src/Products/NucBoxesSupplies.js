import React from 'react'
import Product from './Product'
import powk_wlkp_10R_1P from '../Pictures/Powalki_i_przegonki/powk_wlkp_10R_1P.png'
import powk_wlkp_10R_3P from '../Pictures/Powalki_i_przegonki/powk_wlkp_10R_3P.png'
import prsc_dyst_wlkp_10R from '../Pictures/Powalki_i_przegonki/prsc_dyst_wlkp_10R.png'
import przgn_wlkp_10R from '../Pictures/Powalki_i_przegonki/przgn_wlkp_10R.png'

function NucBoxesSupplies() {
    return (
        <div className='store__frames'>
            <Product
                id='powk_wlkp_10R_1P'
                title='Powałka wielkopolska 10R z jednym pajączkiem'
                image={powk_wlkp_10R_1P}
                price={28}
                availble={true}
            />
            <Product
                id='powk_wlkp_10R_3P'
                title='Powałka wielkopolska 10R z trzema pajączkami'
                image={powk_wlkp_10R_3P}
                price={30}
                availble={true}
            />



            <Product
                id='powk_wlkp_10R_5P'
                title='Powałka wielkopolska 10R z pięcioma pajączkami'
                image='https://a.allegroimg.com/s400/116884/7a12f5c844feb6b20d1fea39fdc9/Powalka-Wielkopolska-10-ramkow-Drewniana-5-otworow'
                price={33}
                availble={true}
            />
            <Product
                id='powk_wlkp_12R_1P'
                title='Powałka wielkopolska 12R z jednym pajączkiem'
                image={powk_wlkp_10R_1P}
                price={30}
                availble={true}
            />
            <Product
                id='powk_wlkp_12R_3P'
                title='Powałka wielkopolska 12R z trzema pajączkami'
                image={powk_wlkp_10R_3P}
                price={33}
                availble={true}
            />
            <Product
                id='powk_wlkp_12R_5P'
                title='Powałka wielkopolska 12R z pięcioma pajączkami'
                image='https://a.allegroimg.com/s400/116884/7a12f5c844feb6b20d1fea39fdc9/Powalka-Wielkopolska-10-ramkow-Drewniana-5-otworow'
                price={35}
                availble={true}
            />
            <Product
                id='powk_dadant_10R_1P'
                title='Powałka dadant 10R z jednym pajączkiem'
                image={powk_wlkp_10R_1P}
                price={30}
                availble={true}
            />
            <Product
                id='powk_dadant_12R_3P'
                title='Powałka dadant 12R z trzema pajączkami'
                image={powk_wlkp_10R_3P}
                price={33}
                availble={true}
            />
            <Product
                id='powk_dadant_12R_5P'
                title='Powałka dadant 12R z pięcioma pajączkami'
                image='https://a.allegroimg.com/s400/116884/7a12f5c844feb6b20d1fea39fdc9/Powalka-Wielkopolska-10-ramkow-Drewniana-5-otworow'
                price={35}
                availble={true}
            />
            <Product
                id='przgn_wlkp_10R'
                title='Przegonka wielkopolska 10R'
                image={przgn_wlkp_10R}
                price={33}
                availble={true}
            />
            <Product
                id='przgn_wlkp_12R'
                title='Przegonka wielkopolska 12R'
                image='https://pszczelnictwo.com.pl/system/product_pictures/pictures/000/029/565/large/29565.jpg?1487771744'
                price={34}
                availble={true}
            />
            <Product
                id='przgn_dadant_10R'
                title='Przegonka dadant 10R'
                image='https://pszczelnictwo.com.pl/system/product_pictures/pictures/000/029/565/large/29565.jpg?1487771744'
                price={34}
                availble={true}
            />

            <Product
                id='prsc_dyst_wlkp_10R'
                title='Pierścień dystansowy wielkopolski 10R'
                image={prsc_dyst_wlkp_10R}
                price={14}
                availble={true}
            />
        </div>
    )
}

export default NucBoxesSupplies
