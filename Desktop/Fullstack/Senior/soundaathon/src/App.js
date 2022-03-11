import "./App.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { L } from "leaflet";
import useGeoLocation from "./useGeoLocation";
import { useState, useEffect } from "react";
import Map from "./Map";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="soundathon">
      <h6>Welcome to Soundathon!</h6>

      {/* <Link to={"/map"}>Map</Link> */}
      <Map />
      <br />
    </div>
  );
}

export default App;
