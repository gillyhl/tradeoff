import React, { Component } from 'react'
import InsightModeGraph from './InsightModeGraph'

class Insights extends Component {
  render() {
    const { comparatorType, insights } = this.props
    // console.log(comparatorType)
    // console.log(insights)
    return (
      <div>
        <h1>{comparatorType} Insights</h1>
        <ul>
          {insights[comparatorType].text.map(i => (
            <li key={i}>{i}</li>
          ))}
        </ul>
        <InsightModeGraph mode="walking" percentage={50} />
      </div>
    )
  }
}

export default Insights
