// import "./App.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { L } from "leaflet";
import useGeoLocation from "./useGeoLocation";
import React, { useState, useEffect, Component } from "react";
import Map from "./Map";
import { Link } from "react-router-dom";
import axios from "axios";

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
      // isLoaded: false,
    };
  }

  componentDidMount() {
    /* fetches the necessary jsonblob information to be outputted in read.js in order to acquire the necessary data for the movies to be outputted to the screen at the localhost port specified below in the url. An error message to pop up in case something goes wrong. */
    axios
      .get("http://localhost:3000/app")
      .then((response) => {
        this.setState({ items: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // componentDidMount() {
  //   // fetch("https://api.seatgeek.com/2/venues");
  //   // fetch("https://www.eventbrite.com/oauth/authorize?");_
  //   // res.header("Access-Control-Allow-Origin", "true")
  //   // const cors_api_host = 'cors-anywhere.herokuapp.com'
  //   fetch(
  //     "https://www.eventbrite.com/oauth/authorize?response_type=token&client_id=2YCSYBBPC5NKYEV3QLATK3NYETYIGQZSZRLHNAL5USKK6Q3BGR",
  //     {
  //       // mode: "no-cors",
  //       headers: {
  //         authorization: "NYHFH3VPU5IRSEOF2WR4",
  //         "Access-Control-Allow-Origin": true,
  //       },
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((json) => {
  //       this.setState({
  //         isLoaded: true,
  //         items: json,
  //       });
  //     });
  // }

  //https://www.eventbrite.com/platform/api/"
  // async componentDidMount() {
  //   const myHeader =new Headers ('Access-Control-Allow-Origin", "true')
  //   const url =
  //     "https://www.eventbrite.com/oauth/authorize?response_type=token&client_id=2YCSYBBPC5NKYEV3QLATK3NYETYIGQZSZRLHNAL5USKK6Q3BGR&redirect_uri=/http://localhost:3000";
  //   const response = await fetch(url, { mode: "no-cors" });
  //   const data = await response.json();
  //   console.log(data);
  // }
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
