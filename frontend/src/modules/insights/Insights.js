import React, { Component } from 'react'
import styled from 'styled-components'
import InsightModeGraph from './InsightModeGraph'
import emojiModesConstant from '../../emojiModesConstant'
import { color } from '../../theme'

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

class Insights extends Component {
  render() {
    const { comparatorType, insights } = this.props
    return (
      <div>
        <h1>{comparatorType} Insights</h1>
        {/* <ul>
          {insights[comparatorType].text.map(i => (
            <li key={i}>{i}</li>
          ))}
        </ul> */}
        {insights[comparatorType].values.map(i => (
          <ModeGraphRow>
            <div className="key">{emojiModesConstant[i.mode]}</div>
            <InsightModeGraph mode={comparatorType} percentage={i.percentage} key={i.mode} />
          </ModeGraphRow>
        ))}
      </div>
    )
  }
}

export default Insights
