import React, { Component } from 'react'
import InsightModeGraph from './InsightModeGraph'

class Insights extends Component {
  render() {
    const { comparatorType, insights } = this.props
    return (
      <div>
        <h1>{comparatorType} Insights</h1>
        <ul>
          {insights[comparatorType].map(i => console.log(i) && <li key={i.text}>{i.text}</li>)}
        </ul>
        <InsightModeGraph mode="walking" percentage={50} />
      </div>
    )
  }
}

export default Insights
