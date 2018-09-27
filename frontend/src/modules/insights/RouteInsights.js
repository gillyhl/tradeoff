import React from 'react'
import styled from 'styled-components'
import withRouteResultsContext from '../../withRouteResultsContext'
import Insights from './Insights'
import { size } from '../../theme'

const StyledInsightContainer = styled.section`
  max-height: calc(100vh - ${size.padding} - ${size.padding});
  overflow-y: scroll;

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
      <h1>
        For your journey between {`${comparator.start_address} and ${comparator.end_address}`}
      </h1>
      {Object.keys(insights)
        .filter(comparator => insights[comparator].values.some(value => value.percentage))
        .map(comparator => (
          <Insights comparatorType={comparator} insights={insights} key={comparator} />
        ))}
    </StyledInsightContainer>
  )
}

export default withRouteResultsContext(RouteInsights)
