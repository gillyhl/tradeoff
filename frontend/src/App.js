import React, { Component } from 'react';
import './App.css';
import Map from './modules/map/Map'
import Main from './modules/layout/Main'
import Sidebar from './modules/layout/Sidebar'
import RouteResultsContext from './RouteResultsContext'
import { timeInsights } from './services/timeInsightService'
import { costInsights } from './services/costInsightService'

const WORKING_DAYS_PER_YEAR = 228

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
      const comparators = exists ? this.state.comparators.filter(x => x.mode !== comparator.mode) : [
        ...this.state.comparators,
        comparator
      ]
      this.setState({
        comparators,
        insights: {
          time: timeInsights(comparators, WORKING_DAYS_PER_YEAR),
          cost: costInsights(comparators, WORKING_DAYS_PER_YEAR)
        }
      })
    }

    this.clearRouteResults = () => {
      this.setState({
        routeResults: [],
        comparators: [],
        insights: {}
      })
    }

    this.state = {
      routeResults: [],
      comparators: [],
      insights: {},
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
