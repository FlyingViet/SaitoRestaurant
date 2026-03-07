import React from 'react'
import PropTypes from 'prop-types'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const LOCATIONS = [
  {
    position: [35.205189, -89.843314],
    text: "Saito 1 — 6600 Stage Rd #101, Memphis, TN 38134",
  },
  {
    position: [35.20474489378353, -89.73692327346642],
    text: "Saito 2 — 9775 US-64 #103, Arlington, TN 38002",
  },
]

const LeafletMap = ({ position, zoom }) => (
  <MapContainer center={position} zoom={zoom}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles by <a href="https://www.hotosm.org/" target="_blank">HOT</a>'
    />
    {LOCATIONS.map(loc => (
      <Marker key={loc.text} position={loc.position}>
        <Popup>{loc.text}</Popup>
      </Marker>
    ))}
  </MapContainer>
)

LeafletMap.propTypes = {
  position: PropTypes.array,
  zoom: PropTypes.number,
}

LeafletMap.defaultProps = {
  position: [35.205189, -89.843314],
  zoom: 11,
}

export default LeafletMap
