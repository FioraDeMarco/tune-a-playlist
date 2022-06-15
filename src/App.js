import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { L } from "leaflet";
import useGeoLocation from "./useGeoLocation";
import React, { useState, useEffect, Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/app")
      .then((response) => {
        this.setState({ items: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { items } = this.state;
    return (
      <div className='soundathon'>
        <h3>Welcome to Soundathon!</h3>

        <h5>See where your favorite local artists are playing tonight!</h5>
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        <br />
        <div className='app'></div>
      </div>
    );
  }
}

export default App;
