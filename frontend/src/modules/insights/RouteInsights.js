import React from 'react'
import styled from 'styled-components'
import withRouteResultsContext from '../../withRouteResultsContext'

const StyledInsightContainer = styled.section`
  h1 {
    font-size: 2em;
  }
`

const RouteInsights = ({ context: { comparators, insights } }) => {

  if(comparators.length < 2) {
    return <h1>Select Preferred Travel Methods</h1>
  }

  return <StyledInsightContainer>
    <h1>Time Insights</h1>
    <ul>
      {insights.time.map(i => <li key={i}>{i}</li>)}
    </ul>
    <h1>Cost Insights</h1>
    <ul>
      {insights.cost.map(i => <li key={i}>{i}</li>)}
    </ul>
    <h1>Environmental Insights</h1>
    <ul>
      {insights.co2.map(i => <li key={i}>{i}</li>)}
    </ul>
  </StyledInsightContainer>
}

export default withRouteResultsContext(RouteInsights)

