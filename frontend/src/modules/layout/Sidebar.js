import React from 'react'
import './sidebar.css'
import RouteResultList from '../map/RouteResultList'

const results = [
  {
    id: 1,
    duration: 145,
    mode: 'WALKING',
    distance: 3.14,
    cost: 217,
    calories: 1000
  },
  {
    id: 2,
    duration: 213,
    mode: 'CHOOCHOO',
    distance: 420,
    cost: 1578,
    calories: 23
  }
]

const Sidebar = () => {
  return <section className='sidebar'>
    <RouteResultList results={results} />
  </section>
}

export default Sidebar