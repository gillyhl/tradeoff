import React from 'react'
import styled from 'styled-components'
import withRouteResultsContext from '../../withRouteResultsContext'

// const ComparisonGrid = styled.section`

//   display: grid;
//   grid-template-cols: ${props => props.comparators.length + 1};
//   grid-template-rows: 4;

// `

// const KeyColumn = styled.div`
//   grid-cols: 1 / 2;
// `

// const ComparatorColumn = styled.div`
// `

const RouteInsights = ({ context: { comparators, insights } }) => {

  if(comparators.length < 2) {
    return <h1>Select Preferred Travel Methods</h1>
  }

  return <ul>
    {insights.time.map(i => <li key={i}>{i}</li>)}
  </ul>
}

export default withRouteResultsContext(RouteInsights)

