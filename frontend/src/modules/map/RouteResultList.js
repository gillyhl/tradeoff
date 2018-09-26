import React from 'react'
import RouteResult from './RouteResult'
import withRouteResultsContext from '../../withRouteResultsContext'

const RouteResultList = ({ context }) => {
  return <div>
      {context.routeResults && context.routeResults.map((result, i) => <RouteResult {...result} key={i} />)}
    </div>
}

export default withRouteResultsContext(RouteResultList)