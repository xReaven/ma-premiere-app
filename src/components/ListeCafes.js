import React from 'react';
import Cafe from './Cafe';

const filtreParCapsule = (cafe1, cafe2) => {
    if(cafe1.nbCapsules > cafe2.nbCapsules)
        return -1;
    else if(cafe1.nbCapsules < cafe2.nbCapsules)
        return 1;
    else
        return 0;
};

class ListeCafes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            listeCafesFiltre: props.cafes.sort(filtreParCapsule)
        }
    }

    veutTrier = (id, nbCaps) => {
        this.state.listeCafesFiltre.forEach((cafe)=>{
           if(cafe.id === id) {
               cafe.nbCapsules = nbCaps
           }
        });
        const listeFiltree = this.state.listeCafesFiltre.sort(filtreParCapsule);
        this.setState({listeCafesFiltre:listeFiltree});
    }

    render() {
        const cafes = this.state.listeCafesFiltre;
        return (
            <div className='cafesContainer'>
                { cafes.map(cafe =>
                    <Cafe cafe={cafe} key={cafe.id} onValueChange={this.veutTrier}/>
                )}
            </div>
        )
    }
}

export default ListeCafes;