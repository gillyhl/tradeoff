import React, { Component } from 'react';
import './App.css';
import Map from './modules/map/Map'
import Header from './modules/layout/Header'
import Sidebar from './modules/layout/Sidebar'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <Map />
      </div>
    );
  }
}

export default App;
