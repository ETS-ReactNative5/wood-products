import React from 'react'
import { Link } from 'react-router-dom';
import './StoreCategories.css';

function StoreCategories() {
    return (
        <div className='storeCategories'>
            <h1>Kategorie</h1>
            <Link to='/store/frames' className='storeCategories__link'>
                <p>Zatwory</p>
            </Link>
            <Link to='/store/hiveComponents' className='storeCategories__link'>
                <p>Podkarmiaczki ramkowe</p>
            </Link>
            <Link to='/store/beeHiveKits' className='storeCategories__link'>
                <p>Regał do ramek</p>
            </Link>
            <Link to='/store/bargainBarnItems' className='storeCategories__link'>
                <p>Ule odkładowe</p>
            </Link>
            <Link to='/store/nucBoxesSupplies' className='storeCategories__link'>
                <p>Powałki i przegonki</p>
            </Link>
        </div>
    )
}

export default StoreCategories
