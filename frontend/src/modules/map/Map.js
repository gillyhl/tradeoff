import React from 'react'
import L from 'leaflet'
import { Map as LeafletMap, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import RouteResultList from './RouteResultList'

const results = [
  {
    duration: 145,
    mode: 'WALKING',
    distance: 3.14,
    cost: 217,
    calories: 1000
  },
  {
    duration: 213,
    mode: 'CHOOCHOO',
    distance: 420,
    cost: 1578,
    calories: 23
  }
]

const Map = () => <LeafletMap
  center={[51.382139, -2.364]}
  zoom={12}>
  <TileLayer
    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
  <RouteResultList results={results} />
</LeafletMap>



export default Map