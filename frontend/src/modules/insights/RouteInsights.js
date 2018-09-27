import React from 'react'
import styled from 'styled-components'
import withRouteResultsContext from '../../withRouteResultsContext'
import Insights from './Insights'

const StyledInsightContainer = styled.section`
  h1 {
    font-size: 2em;
  }
`

const RouteInsights = ({ context: { comparators, insights } }) => {
  if (comparators.length < 2) {
    return <h1>Select at least two travel methods</h1>
  }

  const comparator = comparators[0]

  return (
    <StyledInsightContainer>
      <p>For you journey between,</p>
      <p>{`${comparator.start_address} and ${comparator.end_address}`}</p>
      {Object.keys(insights).map(comparator => (
        <Insights comparatorType={comparator} insights={insights} />
      ))}
    </StyledInsightContainer>
  )
}

export default withRouteResultsContext(RouteInsights)
