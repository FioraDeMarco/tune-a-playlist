// import "./App.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { L } from "leaflet";
import useGeoLocation from "./useGeoLocation";
import React, { useState, useEffect, Component } from "react";
import Map from "./Map";
import { Link } from "react-router-dom";

//import axios, { Axios } from "axios";
// const express = require("express");
// const app = express();
//const cors = require("cors");
// app.use(cors());

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  //app.use(cors())
  componentDidMount() {
    // fetch("https://api.seatgeek.com/2/venues");
    // fetch("https://www.eventbrite.com/oauth/authorize?");
    // res.header("Access-Control-Allow-Origin", "true")

    fetch(
      "https://www.eventbrite.com/oauth/authorize?response_type=token&client_id=6XSP4NDBIQGSVUDHGB&redirect_uri=http://localhost:3000/app",
      // { mode: "no-cors" }
      {
        mode: "no-cors",
        headers: {
          authorization: "NYHFH3VPU5IRSEOF2WR4",
          // "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
    //   // axios.get()
  }
  render() {
    const { items } = this.state;
    //const { isLoaded, items } = this.state;

    // if (!isLoaded) {
    //   return <div>Loading...</div>;
    // } else {
    return (
      <div className="soundathon">
        <h3>Welcome to Soundathon!</h3>
        {/* <div>Data has been loaded</div> */}
        {/* <Link to={"/map"}>Map</Link> */}
        {/* <Map /> */}
        <h5>See where your favorite local artists are playing tonight!</h5>
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        <br />
        <div className="app"></div>
      </div>
    );
  }
}
//}

export default App;
