import React, { Component } from 'react';
import './App.css';
import Map from './modules/map/Map'
import Main from './modules/layout/Main'
import Sidebar from './modules/layout/Sidebar'
import RouteResultsContext from './RouteResultsContext'
import addSeconds from 'date-fns/add_seconds'
import distanceInWords from 'date-fns/distance_in_words'

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

    const timeInsights = (comparators) => {
      const sortTime = (a,b) => b.duration.value - a.duration.value
      return comparators
        .sort(sortTime)
        .map((comparator, i, array) => array.filter(x => x.mode !== comparator.mode)
          .map(comparatorInsight => {
            const deltaInSeconds = (comparatorInsight.duration.value - comparator.duration.value) * 228 * 2
            const startDate = new Date()
            startDate.setHours(0,0,0,0);
            const endDate = addSeconds(startDate, deltaInSeconds);

            const timeString = distanceInWords(startDate, endDate)
            const isFaster = deltaInSeconds > 0

            return isFaster && `${comparator.mode} will ${isFaster ? 'save' : 'cost'} you ${timeString} in comparison to ${comparatorInsight.mode}`
          }))
          .reduce((acc, curr) => [ ...acc, ...curr], [])
          .filter(
            x => x
          )
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
          time: timeInsights(comparators)
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
