import React from 'react'

class RouteDetails extends React.Component {

  async handleSubmit(e) {

    e.preventDefault()
    console.log(this.origin.value)
    const origin = encodeURI(this.origin.value)
    const destination = encodeURI(this.destination.value)
    const url = `http://localhost:3000/directions?origin=${origin}&destination=${destination}`

    const response = await fetch(url)
    console.log(await response.json())

  }

  render() {
    return <form onSubmit={(e) => this.handleSubmit(e)}>
        <h1>Where would you like to go?</h1>
        <label htmlFor="origin">Origin</label>
        <input id="origin" ref={origin=>this.origin=origin} type='text' defaultValue='ba2 3dq'></input>
        <label htmlFor="destination">Destination</label>
        <input id="destination" ref={destination=>this.destination=destination} type='text' defaultValue='ba1 2el'></input>
        <button>Go</button>
      </form>

  }

}



export default RouteDetails