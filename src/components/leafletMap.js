import React from 'react'
import PropTypes from 'prop-types'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

class LeafletMap extends React.Component {

  static propTypes = {
    /** Latitude and Longitude of the map centre in an array, eg [51, -1] **/
    position: PropTypes.array,

    /** Initial zoom level for the map (default 13) **/
    zoom: PropTypes.number,

    /** If set, will display a marker, which when clicked will display this text **/
    markerText: PropTypes.string
  }

  static defaultProps = {
    position: [35.205189,-89.843314],
    zoom: 20,
    markerText: "Saito 1"
  }


  render() {
    var saito2Props = {
      position: [35.20474489378353, -89.73692327346642],
      marketText: "Saito Restaurant 2, 9775 US-64 #103, Arlington, TN 38002"
    }  

    var saito3Props = {
      position: [35.05308958022539, -89.73346294457404],
      marketText: "Saito Restaurant 3, 2130 W Poplar, Suite 107, Collierville, TN 38017"
    }
      return (
        <Map center={this.props.position} zoom={this.props.zoom}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
          />
          {this.props.markerText !== "" &&
          <Marker position={this.props.position}>
            <Popup>{this.props.markerText}</Popup>
          </Marker>
          }
          <Marker position={saito2Props.position}>
            <Popup>{saito2Props.marketText}</Popup>
          </Marker>
          <Marker position={saito3Props.position}>
            <Popup>{saito3Props.marketText}</Popup>
          </Marker>
        </Map>
      );
  }
}

export default LeafletMap