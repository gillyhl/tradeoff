import React, { Component } from 'react'
import InsightModeGraph from './InsightModeGraph'
import emojiModesConstant from '../../emojiModesConstant'

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
          <div>
            <div>{emojiModesConstant[i.mode]}</div>
            <InsightModeGraph mode={comparatorType} percentage={i.percentage} key={i.mode} />
          </div>
        ))}
      </div>
    )
  }
}

export default Insights
