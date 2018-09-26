import React from 'react'
import styled from 'styled-components'
import {color} from '../../theme'
import withRouteResultsContext from '../../withRouteResultsContext'

const RouteResultButton = styled.section`

  ul {
    list-style: none;
    padding: 1em;
    margin: 0;
    transition: 0.4s background;
    cursor: pointer;
    position: relative;
    height: 13rem;
    background-color: ${props => props.isSelected ? color.hover : 'inherit'};

    ::after {
      content: ${props => props.isSelected ? '\'➖\'' : '\'➕\''};
      font-size: 3rem;
      float: right;
      position: absolute;
      line-height: 15rem;
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
const StyledEmoji=styled.li`
  font-size: 2rem;
`
const modeEmoji = {
  driving:"🚗",
  walking:"👣",
  bicycling:"🚴",
  transit:"🚅"
}

const RouteResult = ({ ...rest, context }) => {
  const routeResultClickHandler = e => {
    context.toggleComparator({...rest})
  }

  const isSelected = !!context.comparators.find(comparator => comparator.mode === rest.mode)

  return <RouteResultButton onClick={routeResultClickHandler} isSelected={isSelected}>
    <ul>
      <StyledEmoji>{modeEmoji[rest.mode]}</StyledEmoji>
      <li><strong>Duration:</strong> {rest.duration.text}</li>
      <li><strong>Distance:</strong> {rest.distance.text}</li>
      <li><strong>Cost:</strong> &pound;{rest.cost / 100}</li>
      <li><strong>Calories:</strong> {rest.calories}</li>
    </ul>
  </RouteResultButton>
}

export default withRouteResultsContext(RouteResult)