import React from 'react'
import RouteResult from './RouteResult'
import RouteResultsContext from '../../RouteResultsContext'

const RouteResultList = () => {
  return <RouteResultsContext.Consumer>
    {({ results }) => (
      results && results.map((result, i) => { console.log(result); return <RouteResult {...result} key={i} />})
    )}
    </RouteResultsContext.Consumer>
}

export default RouteResultList