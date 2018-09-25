import React, { Component } from 'react';
import './App.css';
import Map from './modules/map/Map'
import RouteDetails from './modules/map/RouteDetails'
class App extends Component {
  render() {
    return (
<div>
<RouteDetails>

</RouteDetails>
      <Map />
      </div>
    );
  }
}

export default App;
