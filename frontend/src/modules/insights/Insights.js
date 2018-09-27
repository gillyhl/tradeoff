import React, { Component } from 'react'
import InsightModeGraph from './InsightModeGraph'

class Insights extends Component {
  render() {
    const { comparatorType, insights } = this.props
    console.log(insights)
    return (
      <div>
        <h1>{comparatorType} Insights</h1>
        <ul>
          {insights[comparatorType].text.map(i => (
            <li key={i}>{i}</li>
          ))}
        </ul>
        {insights[comparatorType].values.map(i => (
          <InsightModeGraph mode={i.mode} percentage={i.percentage} key={i.mode} />
        ))}
      </div>
    )
  }
}

export default Insights
