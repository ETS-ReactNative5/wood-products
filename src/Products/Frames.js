import React from 'react'
import Product from './Product';
import brak_zdjecia from '../Pictures/brak_zdjecia.png'
import ztw_dadant from '../Pictures/Zatwory/ztw_dadant.png'
import ztw_styr from '../Pictures/Zatwory/ztw_styr.png'
import mata_ocpl from '../Pictures/Zatwory/mata_ocpl.png'
import ztw_wlkp_18_ocpl from '../Pictures/Zatwory/ztw_wlkp_18_ocpl.png'
import ztw_wlkp_ocpl from '../Pictures/Zatwory/ztw_wlkp_ocpl.png'
import ztw_wlkp from '../Pictures/Zatwory/ztw_wlkp.png'
import ztw_wrsz from '../Pictures/Zatwory/ztw_wrsz.png'
import ztw_wrsz_ocpl from '../Pictures/Zatwory/ztw_wrsz_ocpl.png'
import ztw_wrsz_pszrz from '../Pictures/Zatwory/ztw_wrsz_pszrz.png'
import ztw_wlkp_18 from '../Pictures/Zatwory/ztw_wlkp_18.png'
import ztw_wlkp_1_2_ocpl from '../Pictures/Zatwory/ztw_wlkp_1_2_ocpl.png'

function Frames() {
    return (
        <div className='store__frames'>

            <Product
                id='ztw_wlkp'
                title='Zatwór wielkopolski zwykły'
                image={ztw_wlkp}
                price={6}
                availble={true}
            />
            <Product
                id='ztw_wlkp_ocpl'
                title='Zatwór wielkopolski ocieplany'
                image={ztw_wlkp_ocpl}
                price={12}
                availble={true}
            />



            <Product
                id='ztw_wlkp_18'
                title='Zatwór wielkopolski 18 zwykły'
                image={ztw_wlkp_18}
                price={5.5}
                availble={true}
            />
            <Product
                id='ztw_wlkp_18_ocpl'
                title='Zatwór wielkopolski 18 ocieplany'
                image={ztw_wlkp_18_ocpl}
                price={10}
                availble={true}
            />



            <Product
                id='ztw_wlkp_1_2'
                title='Zatwór wielkopolski 1/2 zwykły'
                image={brak_zdjecia}
                price={5.5}
                availble={true}
            />
            <Product
                id='ztw_wlkp_1_2_ocpl'
                title='Zatwór wielkopolski 1/2 ocieplany'
                image={ztw_wlkp_1_2_ocpl}
                price={10}
                availble={true}
            />



            <Product
                id='ztw_wrsz'
                title='Zatwór warszawski zwykły'
                image={ztw_wrsz}
                price={7.5}
                availble={true}
            />
            <Product
                id='ztw_wrsz_ocpl'
                title='Zatwór warszawski ocieplany'
                image={ztw_wrsz_ocpl}
                price={12}
                availble={true}
            />

            <Product
                id='ztw_wrsz_pszrz'
                title='Zatwór warszawski poszerzany'
                image={ztw_wrsz_pszrz}
                price={9}
                availble={true}
            />

            <Product
                id='ztw_wrsz_pszrz_ocpl'
                title='Zatwór warszawski poszerzany ocieplany'
                image={ztw_wrsz_ocpl}
                price={14}
                availble={true}
            />

            <Product
                id='ztw_dadant'
                title='Zatwór dadant zwykły'
                image={ztw_dadant}
                price={10}
                availble={true}
            />

            <Product
                id='ztw_dadant_ocpl'
                title='Zatwór dadant ocieplany'
                image={brak_zdjecia}
                price={14}
                availble={true}
            />

            <Product
                id='ztw_lngs_1/1'
                title='Zatwór langstroth 1/1 zwykły'
                image={brak_zdjecia}
                price={10}
                availble={true}
            />

            <Product
                id='ztw_lngs_1/1_ocpl'
                title='Zatwór langstroth 1/1 ocieplany'
                image={brak_zdjecia}
                price={14}
                availble={true}
            />

            <Product
                id='ztw_styr'
                title='Zatwór styropianowy'
                image={ztw_styr}
                price={10}
                availble={true}
            />

            <Product
                id='mata_ocpl'
                title='Mata ocieplająca górna'
                image={mata_ocpl}
                price={20}
                availble={true}
            />

        </div>
    )
}

export default Frames
