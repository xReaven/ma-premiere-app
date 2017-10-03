import React from 'react';
import ApparenceCafe from "./ApparenceCafe";

const decrementeCafe = nbCapsActuelle => {
    if (nbCapsActuelle === 0) {
        return {nbCapsules: 0}
    } else {
        return {nbCapsules: nbCapsActuelle - 1}
    }
};
const incrementeCafe = nbCapsActuelle => {
    if (nbCapsActuelle === 100) {
        return {nbCapsules: 100}
    } else {
        return {nbCapsules: nbCapsActuelle + 1}
    }
};
const changeNbCaps = nbCapsVoulu => {
    if (/^\d+$/.test(nbCapsVoulu)) {
        if (nbCapsVoulu >= 100) {
            return 100
        } else if (nbCapsVoulu < 0) {
            return 0
        } else {
            return parseInt(nbCapsVoulu, 10)
        }
    } else {
        return 0
    }
};

class Cafe extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nbCapsules: props.cafe.nbCapsules
        };
    }

    onValueChange = (nouvelleValeur) => {
        this.setState({nbCapsules: nouvelleValeur}, () => {
            this.props.onValueChange(this.props.cafe.id, this.state.nbCapsules); // c'est ce que je passe dans l'appel du composant dans ListeCafes, donc ça donnera veutTrier();
        });
    };

    veutDecrementer = () => this.setState(decrementeCafe(this.state.nbCapsules));
    veutIncrementer = () => this.setState(incrementeCafe(this.state.nbCapsules));
    veutChangerNbCaps = e => this.onValueChange(changeNbCaps(e.target.value));

    render() {
        const total = Math.round(100 * (this.state.nbCapsules * this.props.cafe.prix)) / 100;
        return (
            <div className='cafe'
                 onMouseLeave={() => this.props.onValueChange(this.props.cafe.id, this.state.nbCapsules)}>
                <ApparenceCafe cafe={this.props.cafe}/>
                <div className='compteurCafe'>
                    <button type='button' onClick={this.veutDecrementer}>-</button>
                    <input type='text' placeholder='0...99' value={this.state.nbCapsules}
                           onChange={this.veutChangerNbCaps}/>
                    <label> x10</label>
                    <button type='button' onClick={this.veutIncrementer}>+</button>
                    <div className='prix'>
                        {this.props.cafe.prix + `/u soit ` + Math.round(total * 100)/10 + `€`}
                    </div>
                </div>
            </div>
        );
    }

}

export default Cafe;