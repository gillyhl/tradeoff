import React, { Component } from 'react';
import './App.css';
import Map from './modules/map/Map'
import Header from './modules/layout/Header'
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Map />
      </div>
    );
  }
}

export default App;
