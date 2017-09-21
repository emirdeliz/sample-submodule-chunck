import React from 'react';
import { Map as MapLeaflet, TileLayer, WMSTileLayer } from 'react-leaflet';
import LeafletCss from 'leaflet/dist/leaflet.css';
import Style from './Map.style.scss';

class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 5,
      bluemarble: false,
    };
  }

  componentWillMount() {
    LeafletCss.use();
    Style.use();
  }

  componentWillUnmount() {
    LeafletCss.unuse();
    Style.unuse();
  }

  onClick = () => {
    this.setState({
      bluemarble: !this.state.bluemarble,
    });
  }

  render() {
    return (
      <div className="map">
        <MapLeaflet
          center={[this.state.lat, this.state.lng]}
          zoom={10}
          style={{ flex: 1 }}
        >
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <WMSTileLayer
            layers={this.state.bluemarble ? 'nasa:bluemarble' : 'ne:ne'}
            url="https://demo.boundlessgeo.com/geoserver/ows"
          />
        </MapLeaflet>
      </div>
    );
  }
}

export default Map;
