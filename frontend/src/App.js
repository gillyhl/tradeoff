import React, { Component } from 'react';
import './App.css';
import Map from './modules/map/Map'
import Header from './modules/layout/Header'
import Sidebar from './modules/layout/Sidebar'
import RouteReseultsContext from './RouteResultsContext'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      routeResults: []
    }
  }

  addRouteResult(routeResult){
    this.setState({
      routeResults:[
        ...this.state.routeResults,
        routeResult
      ]
    })
  }


  render() {
    return (
      <RoutesResultsContext.Provider value={{
        results:this.state.routeResults
      }} >
        <Header />
        <Sidebar />
        <Map />
      </RoutesResultsContext.Provider>
    );
  }
}

export default App;
