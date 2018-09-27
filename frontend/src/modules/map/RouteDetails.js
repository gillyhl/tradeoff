import React from 'react'
import styled from 'styled-components'
import withRouteResultsContext from '../../withRouteResultsContext'
import { color } from '../../theme'

const StyledRouteDetails = styled.form`
  h1 {
    padding: 0;
    margin: 0;
  }

  input {
    margin: 0.5em 1em;
    padding: 0.5em;
  }

  button {
    padding: 0.6em;
    background-color: ${color.yellow};
    border: none;
    font-weight: bolder;
    width: 100px;
  }
`

class RouteDetails extends React.Component {
  handleSubmit(e) {
    const { addRouteResult, clearRouteResults } = this.props.context

    e.preventDefault()
    const origin = encodeURI(this.origin.value)
    const destination = encodeURI(this.destination.value)

    clearRouteResults()

    const modes = ['driving', 'walking', 'transit', 'bicycling']
    modes.map(async mode => {
      const url = `/directions?origin=${origin}&destination=${destination}&mode=${mode}`

      const response = await fetch(url)

      addRouteResult(await response.json())
    })
  }

  render() {
    return (
      <StyledRouteDetails onSubmit={e => this.handleSubmit(e)}>
        <h1>What route do you want to examine??</h1>
        <label htmlFor="origin">Origin</label>
        <input
          id="origin"
          ref={origin => (this.origin = origin)}
          type="text"
          defaultValue="bs3 5ed"
        />
        <label htmlFor="destination">Destination</label>
        <input
          id="destination"
          ref={destination => (this.destination = destination)}
          type="text"
          defaultValue="ba1 2el"
        />
        <button>Go</button>
      </StyledRouteDetails>
    )
  }
}

export default withRouteResultsContext(RouteDetails)
