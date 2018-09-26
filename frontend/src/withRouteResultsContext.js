import React from 'react'
import RouteResultsContext from './RouteResultsContext'

export default WrappedComponent => props => (<RouteResultsContext.Consumer>
  {
    context => <WrappedComponent context={context} {...props} />
  }
</RouteResultsContext.Consumer>)