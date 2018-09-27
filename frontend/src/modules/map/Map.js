import React from 'react'
import { Map as LeafletMap, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const Map = () => (
  <LeafletMap center={[51.382139, -2.364]} zoom={12}>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
  </LeafletMap>
)

export default Map
