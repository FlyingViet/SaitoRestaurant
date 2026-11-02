import React from "react"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import iconUrl from "leaflet/dist/images/marker-icon.png"
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png"
import shadowUrl from "leaflet/dist/images/marker-shadow.png"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { LOCATIONS, fullAddress } from "../data/site"

// Fix default marker icons broken by webpack 5
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({ iconUrl, iconRetinaUrl, shadowUrl })

const bounds = LOCATIONS.map((loc) => loc.position)

const LeafletMap = () => (
  <MapContainer
    bounds={bounds}
    boundsOptions={{ padding: [48, 48], maxZoom: 13 }}
    scrollWheelZoom={false}
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles by <a href="https://www.hotosm.org/" target="_blank">HOT</a>'
    />
    {LOCATIONS.map((loc) => (
      <Marker key={loc.id} position={loc.position}>
        <Popup>
          <strong>{loc.name}</strong>
          <br />
          {fullAddress(loc)}
        </Popup>
      </Marker>
    ))}
  </MapContainer>
)

export default LeafletMap
