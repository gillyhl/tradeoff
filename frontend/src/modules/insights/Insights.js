import React, { Component } from 'react'
import styled from 'styled-components'
import InsightModeGraph from './InsightModeGraph'
import emojiModesConstant from '../../emojiModesConstant'
import { color } from '../../theme'

const StyledInsightWrapper = styled.div`
  margin-bottom: 4rem;
`

const ModeGraphRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 2rem;
  div.key {
    margin-left: 0.5rem;
    padding-right: 0.5rem;
    border-right: 2px solid ${color.white};
  }
`

const StyledParagraph = styled.p`
  color: ${color.primary};
`
class Insights extends Component {
  render() {
    const { comparatorType, insights } = this.props
    return (
      <StyledInsightWrapper>
        {insights[comparatorType].values.map(i => (
          <ModeGraphRow>
            <div className="key">{emojiModesConstant[i.mode]}</div>
            <InsightModeGraph mode={comparatorType} percentage={i.percentage} key={i.mode} />
          </ModeGraphRow>
        ))}
        <StyledParagraph>{insights[comparatorType].text[0]}</StyledParagraph>
      </StyledInsightWrapper>
    )
  }
}

export default Insights
