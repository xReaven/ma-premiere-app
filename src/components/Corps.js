import React from 'react';
import ListeCafes from './ListeCafes'

import ListeDesCafes from '../data/cafes.json';

const Corps = () => {
    return (
        <div className='corps'>
            <div className='title'>
                <p>Liste des cafés</p>
            </div>
            <ListeCafes cafes={ListeDesCafes}/>
        </div>
    );
};

export default Corps;