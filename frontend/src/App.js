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

    this.toggleComparator = comparator => {
      const exists = this.state.comparators.find(comparatorItem => comparatorItem.mode === comparator.mode)
      if (exists) {
        this.setState({
          comparators: this.state.comparators.filter(x => x.mode !== comparator.mode)
        })
      } else {
        this.setState({
          comparators: [
            ...this.state.comparators,
            comparator
          ]
        })
      }
    }

    this.clearRouteResults = () => {
      this.setState({
        routeResults: [],
        comparators: []
      })
    }

    this.state = {
      routeResults: [],
      comparators: [],
      toggleComparator: this.toggleComparator,
      addRouteResult: this.addRouteResult,
      clearRouteResults: this.clearRouteResults
    }

  }

  render() {
    return (
      <RouteResultsContext.Provider value={this.state}>
        <Main />
        <Sidebar />
        <Map />
      </RouteResultsContext.Provider>
    )
  }
}

export default App;
