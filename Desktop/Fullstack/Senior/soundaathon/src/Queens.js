import "./App.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  Circle,
  CircleMarker,
  FeatureGroup,
  LayerGroup,
} from "react-leaflet";
import { L } from "leaflet";
import useGeoLocation from "./useGeoLocation";
import { useState, useEffect } from "react";
import { eventsLocationsQueens } from "./EventsLocations";

// const LeafIcon = L.Icon.extend({
//   options: {
//     iconSize: [38, 95],
//     shadowSize: [50, 64],
//     iconAnchor: [22, 94],
//     shadowAnchor: [4, 62],
//     popupAnchor: [-3, -76],
//   },
// });

function Queens() {
  const location = useGeoLocation();
  const center = [location.coordinates.lat, location.coordinates.lng];
  //L.circle([location.coordinates.lat, location.coordinates.lng]);
  const fillBlueOptions = { fillColor: "blue" };
  const fillRedOptions = { fillColor: "red" };
  const greenOptions = { color: "green", fillColor: "green" };
  const purpleOptions = { color: "purple" };

  return (
    <div className="App">
      <MapContainer className="map" center={[40.7094, -73.9232]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {eventsLocationsQueens.map((event) => {
          return (
            <>
              <Marker position={[event.latitude, event.longitude]}>
                <Popup>
                  Soundathon Event
                  <br />
                  {event.band} playing at {event.venue} at {event.time}!
                  <br />
                  {event.link}
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
        {/* <LayerGroup>
          <Circle center={center} pathOptions={fillBlueOptions} radius={4000} />
          <Circle
            center={center}
            pathOptions={fillRedOptions}
            radius={8000}
            stroke={false}
          />
          <LayerGroup>
            <Circle
              center={[51.51, -0.08]}
              pathOptions={greenOptions}
              radius={100}
            />
          </LayerGroup>
        </LayerGroup> */}
      </MapContainer>
    </div>
  );
}

export default Queens;
