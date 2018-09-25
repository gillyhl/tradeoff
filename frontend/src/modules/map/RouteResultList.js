import React from 'react'
import RouteResult from './RouteResult'

const RouteResultList = ({ results }) => {
  return <div>
    {results.map(result => <RouteResult {...result} />)}
  </div>
}

export default RouteResultList