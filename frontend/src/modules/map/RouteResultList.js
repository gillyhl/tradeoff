import React from 'react'
import RouteResult from './RouteResult'
import withRouteResultsContext from '../../withRouteResultsContext'

const RouteResultList = ({ context }) => {
  return <div>
      {context.results && context.results.map((result, i) => <RouteResult {...result} key={i} />)}
    </div>
}

export default withRouteResultsContext(RouteResultList)