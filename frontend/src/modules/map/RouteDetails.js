import React from 'react'
import RouteResultsContext from '../../RouteResultsContext'
import './route-details.css'

class RouteDetails extends React.Component {

  handleSubmit(e, addRouteResult, clearRouteResults) {

    e.preventDefault()
    const origin = encodeURI(this.origin.value)
    const destination = encodeURI(this.destination.value)

    clearRouteResults()

    const modes = ['driving', 'walking', 'transit', 'bicycling']
    modes.map(async mode => {

      const url = `http://localhost:3000/directions?origin=${origin}&destination=${destination}&mode=${mode}`

      const response = await fetch(url)

      addRouteResult(await response.json())
    })
  }

  render() {
    return <RouteResultsContext.Consumer>
      {({ addRouteResult, clearRouteResults }) => (
        <form onSubmit={e => this.handleSubmit(e, addRouteResult, clearRouteResults)}>
          <h1>Where would you like to go?</h1>
          <label htmlFor="origin">Origin</label>
          <input id="origin" ref={origin=>this.origin=origin} type='text' defaultValue='ba2 3dq'></input>
          <label htmlFor="destination">Destination</label>
          <input id="destination" ref={destination=>this.destination=destination} type='text' defaultValue='ba1 2el'></input>
          <button>Go</button>
        </form>
      )}
    </RouteResultsContext.Consumer>
  }

}



export default RouteDetails