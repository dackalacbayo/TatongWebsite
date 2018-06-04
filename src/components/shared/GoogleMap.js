import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
  <div>
    <label className="col-form-label">
      <h1>
        <i className="fas red fa-map-marker-alt style-shadow" />
      </h1>
      {text}
    </label>
  </div>
);

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 14.584114,
      lng: 121.062705
    },
    zoom: 11
  };

  render() {
    var { height } = this.props
    return (
      <div style={{ height: (height), width: "100%" }} className="mb-5 pb-5">
      <div className="single-contact-info d-flex h-auto mb-5 pb-5">
        <div className="contact-icon mr-15 ">
          <div className="address icon-box mb-4">
            <h2 className="featurette-heading py-2 pl-2">
              <i className="address fas fa-map-marker-alt" />
            </h2>
          </div>
        </div>
        <h1 className="text-left lead black small ml-4">
          <label className="col-form-label text-uppercase">
            Address
          </label>
          <br />
          3201 Antel Global Corporate Center, J. Vargas Ave.,
          Ortigas Center, Pasig City
        </h1>
      </div>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBpgAnwP6W1kwXhYmncsoEFOf7ixz77Nqo" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={14.584114} lng={121.062705} text={""} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
