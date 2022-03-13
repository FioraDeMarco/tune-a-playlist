import "./App.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  CircleMarker,
} from "react-leaflet";
import { L } from "leaflet";
import useGeoLocation from "./useGeoLocation";
import { useState, useEffect } from "react";
import { eventsLocationsManhattan } from "./EventsLocations";

function Manhattan() {
  const location = useGeoLocation();
  // function findNearbySound() {
  //   const near = []
  //   if({[event.latitude]})

  // }

  return (
    <div className="App">
      <MapContainer className="map" center={[40.7192, -73.9617]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {eventsLocationsManhattan.map((event) => {
          return (
            <>
              <Marker position={[event.latitude, event.longitude]}>
                <Popup>
                  Soundathon Event
                  <br />
                  {event.band} playing at {event.venue} at {event.time}!
                </Popup>
              </Marker>
            </>
          );
        })}
        {location.loaded && !location.error && (
          <Marker
            position={[location.coordinates.lat, location.coordinates.lng]}
          >
            <Popup>YOU ARE HERE</Popup>
          </Marker>
        )}
        {/* <CircleMarker
          center={[location.coordinates.lat, location.coordinates.lng]}
          // color={location.blue()}
          radius={location.computeMarkerSize(1)}
        >
          <Popup>
            <span>Radius is for: {location} </span>
          </Popup>
        </CircleMarker> */}
      </MapContainer>
    </div>
  );
}

export default Manhattan;
