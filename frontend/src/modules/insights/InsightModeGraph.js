import React from 'react'
import styled from 'styled-components'
import comparatorTypeConstant from '../../comparatorTypesConstant'

const InsightModeGraphWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 2rem;
  div {
    margin-left: 0.5rem;
  }
`

const InsightModeGraph = ({ mode, percentage }) => (
  <InsightModeGraphWrapper>
    {Array.from(
      {
        length: percentage / 10
      },
      (item, index) => (
        <div key={index}>{comparatorTypeConstant[mode]}</div>
      )
    )}
  </InsightModeGraphWrapper>
)

export default InsightModeGraph
