import React from 'react'
import './routeresult.css'

const RouteResult = ({ duration, mode, distance, cost, calories }) => {
  return <section>
    <ul>
      <li><strong>Mode:</strong> {mode}</li>
      <li><strong>Duration:</strong> {duration}</li>
      <li><strong>Distance:</strong> {distance}</li>
      <li><strong>Cost:</strong> &pound;{cost / 100}</li>
      <li><strong>Calories:</strong> {calories}</li>
    </ul>
  </section>
}

export default RouteResult