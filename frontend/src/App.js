import React, { Component } from 'react';
import './App.css';
import Map from './modules/map/Map'
import Main from './modules/layout/Main'
import Sidebar from './modules/layout/Sidebar'
import RouteResultsContext from './RouteResultsContext'

class App extends Component {

  constructor(props) {

    super(props)

    this.addRouteResult = (routeResult) => {
      this.setState({
        routeResults: [
          ...this.state.routeResults,
          routeResult
        ]
      })
    }

    this.clearRouteResults = () => {
      this.setState({
        routeResults: []
      })
    }

    this.state = {
      routeResults: []
    }

  }

  render() {
    return (
      <RouteResultsContext.Provider value={{
        results: this.state.routeResults,
        addRouteResult: this.addRouteResult,
        clearRouteResults: this.clearRouteResults
      }}>
        <Main />
        <Sidebar />
        <Map />
      </RouteResultsContext.Provider>
    )
  }
}

export default App;
