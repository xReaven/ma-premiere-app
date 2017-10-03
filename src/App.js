import React, { Component } from 'react';
import './App.css';
import Entete from './components/Entete'
import MenuRecapitulatif from './components/MenuRecapitulatif'
import Corps from './components/Corps'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Entete />
        <MenuRecapitulatif />
        <Corps />
      </div>
    );
  }
}

export default App;
