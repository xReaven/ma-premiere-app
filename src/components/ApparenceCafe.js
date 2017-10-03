import React from 'react';

const ApparenceCafe = ({cafe}) => {
    return (
        <div>
            <div className={`infoGamme ` + cafe.gamme + `Color`}>
                {cafe.gamme}
            </div>
            <div className='gammeContainer'>
                <div className={`gamme ` + cafe.gamme + `Bg`}></div>
            </div>
            <div className={`nomCafe ` + cafe.gamme + `Color`}>
                <p>{cafe.nom.substr(0, 1).toUpperCase() + cafe.nom.substr(1)}</p>
            </div>
            <div className='photoCafe'>
                <img src={require('../images/' + cafe.photo)} alt={`capsule ` + cafe.nom}/>
            </div>
        </div>
    );
};

export default ApparenceCafe;