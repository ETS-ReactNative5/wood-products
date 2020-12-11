import React from 'react'
import Product from './Product';
import ztw_dadant from '../Pictures/Zatwory/ztw_dadant.png'
import ztw_styr from '../Pictures/Zatwory/ztw_styr.png'
import mata_ocpl from '../Pictures/Zatwory/mata_ocpl.png'
import ztw_wlkp_18_ocpl from '../Pictures/Zatwory/ztw_wlkp_18_ocpl.png'
import ztw_wlkp_ocpl from '../Pictures/Zatwory/ztw_wlkp_ocpl.png'
import ztw_wlkp from '../Pictures/Zatwory/ztw_wlkp.png'
import ztw_wrsz from '../Pictures/Zatwory/ztw_wrsz.png'
import ztw_wrsz_ocpl from '../Pictures/Zatwory/ztw_wrsz_ocpl.png'
import ztw_wrsz_pszrz from '../Pictures/Zatwory/ztw_wrsz_pszrz.png'

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
                image='https://pszczelnictwo.com.pl/system/product_pictures/pictures/000/040/777/list/40777.jpg?1536570718'
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
                id='ztw_wlkp_1/2'
                title='Zatwór wielkopolski 1/2 zwykły'
                image='https://lyson.com.pl/6841/przegroda-zaciesniajaca-wielkopolska-12-styropianowa.jpg'
                price={5.5}
                availble={true}
            />
            <Product
                id='ztw_wlkp_1/2_ocpl'
                title='Zatwór wielkopolski 1/2 ocieplany'
                image='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQp-6z3jQrI3nxGWzRipeuWRg-ibeKa6Pcul2cYvRP23q7T7WZXWS2WiJkJIMLMbUgLF_YueuldXJX43C2eb7iWER3wFK9kCNck9xbSGqIFfK5eCDBC0TlZ&usqp=CAE'
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
                image='https://static2.redcart.pl/templates/images/thumb/24385/800/9999/pl/0/templates/images/products/24385/ddce7baf0cbbe0446997e432ae48bf9c.jpeg'
                price={14}
                availble={true}
            />

            <Product
                id='ztw_lngs_1/1'
                title='Zatwór langstroth 1/1 zwykły'
                image='https://www.polhp.pl/wp-content/uploads/2020/05/317KZatw%C3%B3rDadant-300x300.jpg'
                price={10}
                availble={true}
            />

            <Product
                id='ztw_lngs_1/1_ocpl'
                title='Zatwór langstroth 1/1 ocieplany'
                image='https://www.polhp.pl/wp-content/uploads/2020/05/317KZatw%C3%B3rDadant-300x300.jpg'
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
