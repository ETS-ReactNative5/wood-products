import React from 'react'
import './Store.css'
import StoreCategories from './StoreCategories';
import Frames from './Products/Frames.js';
import HiveComponents from './Products/HiveComponents';
import BeeHiveKits from './Products/BeeHiveKits';
import BargainBarnItems from './Products/BargainBarnItems';
import NucBoxesSupplies from './Products/NucBoxesSupplies';
import RojniceTransportery from './Products/RojniceTransportery';

// route between categories
const products = (i) => {
    switch (i) {
        case 'Frames':
            return <Frames />;
        case 'HiveComponents':
            return <HiveComponents />;
        case 'BeeHiveKits':
            return <BeeHiveKits />;
        case 'BargainBarnItems':
            return <BargainBarnItems />;
        case 'NucBoxesSupplies':
            return <NucBoxesSupplies />;
        case 'RojniceTransportery':
            return <RojniceTransportery />;
        default:
            return <Frames />;
    }
}



function Store({ items }) {
    return (
        <div className='store'>
            <div className='store__left'>
                <StoreCategories />
            </div>
            <div className='store__right'>
                {products(items)}
            </div>
        </div>

    )
}

export default Store;
