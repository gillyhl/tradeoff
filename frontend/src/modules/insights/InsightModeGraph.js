import React from 'react'
import styled from 'styled-components'
import emojiModesConstant from '../../emojiModesConstant'

const InsightModeGraphWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const InsightModeGraph = ({ mode, percentage }) => (
  <InsightModeGraphWrapper>
    {Array.from(
      {
        length: percentage
      },
      (item, index) => (
        <div key={index}>{emojiModesConstant[mode]}</div>
      )
    )}
  </InsightModeGraphWrapper>
)

export default InsightModeGraph
