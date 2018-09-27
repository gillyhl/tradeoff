import React, { Component } from 'react'

class Insights extends Component {
  render() {
    const { comparatorType, insights } = this.props
    return (
      <div>
        <h1>{comparatorType} Insights</h1>
        <ul>
          {insights[comparatorType].map(i => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Insights
