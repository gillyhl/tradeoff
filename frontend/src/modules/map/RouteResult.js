import React from 'react'
import styled from 'styled-components'
import {color} from '../../theme'

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

const RouteResult = ({ duration, mode, distance, cost, calories }) => {
  return <RouteResultButton>
    <ul>
      <li><strong>Mode:</strong> {mode}</li>
      <li><strong>Duration:</strong> {duration}</li>
      <li><strong>Distance:</strong> {distance}</li>
      <li><strong>Cost:</strong> &pound;{cost / 100}</li>
      <li><strong>Calories:</strong> {calories}</li>
    </ul>
  </RouteResultButton>
}

export default RouteResult