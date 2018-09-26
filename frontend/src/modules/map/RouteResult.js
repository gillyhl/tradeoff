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
    background-color: ${props => props.isSelected ? color.hover : 'inherit'};

    ::after {
      content: ${props => props.isSelected ? '\'➖\'' : '\'➕\''};
      font-size: 3rem;
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
    context.toggleComparator({...rest})
  }

  const isSelected = !!context.comparators.find(comparator => comparator.mode === rest.mode)

  return <RouteResultButton onClick={routeResultClickHandler} isSelected={isSelected}>
    <ul>
      <li><strong>Mode:</strong> {rest.mode}</li>
      <li><strong>Duration:</strong> {rest.duration.text}</li>
      <li><strong>Distance:</strong> {rest.distance.text}</li>
      <li><strong>Cost:</strong> &pound;{rest.cost / 100}</li>
      <li><strong>Calories:</strong> {rest.calories}</li>
    </ul>
  </RouteResultButton>
}

export default withRouteResultsContext(RouteResult)