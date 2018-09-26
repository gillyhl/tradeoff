import React from 'react'
import styled from 'styled-components'
import {color} from '../../theme'
import withRouteResultsContext from '../../withRouteResultsContext'

const RouteResultButton = styled.section`

  ul {
    list-style: none;
    padding: 0.5em;
    transition: 0.4s background;
    cursor: pointer;
    position: relative;
    height: 10rem;

    ::after {
      content: '+';
      font-size: 4rem;
      float: right;
      position: absolute;
      line-height: 10rem;
      top: 0;
      right: 1rem;
    }

    :hover {
      background-color: ${color.hover};
    }
  }

  li{
    padding:0.5em;
  }


`

const RouteResult = ({ ...rest, context }) => {
  const routeResultClickHandler = e => {
    context.addComparator({...rest})
  }

  return <RouteResultButton onClick={routeResultClickHandler}>
    <ul>
      <li><strong>Mode:</strong> {rest.mode}</li>
      <li><strong>Duration:</strong> {rest.duration}</li>
      <li><strong>Distance:</strong> {rest.distance}</li>
      <li><strong>Cost:</strong> &pound;{rest.cost / 100}</li>
      <li><strong>Calories:</strong> {rest.calories}</li>
    </ul>
  </RouteResultButton>
}

export default withRouteResultsContext(RouteResult)