import "./App.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
  LayerGroup,
} from "react-leaflet";
import useGeoLocation from "./useGeoLocation";
import { eventsLocations } from "./EventsLocations";
import { eventsLocationsTheBronx } from "./EventsLocations";
import { eventsLocationsBrooklyn } from "./EventsLocations";
import { eventsLocationsQueens } from "./EventsLocations";
import { eventsLocationsManhattan } from "./EventsLocations";
import { eventsLocationsStatenIsland } from "./EventsLocations";

function MyMap() {
  const location = useGeoLocation();
  const center = [location.coordinates.lat, location.coordinates.lng];
  console.log("LOCATION", location);
  const fillBlueOptions = { fillColor: "blue" };
  const fillRedOptions = { fillColor: "red" };
  //location.setView
  const zoomButton = document.querySelector(".zoom");
  console.log("zoom to data", zoomButton);
  return (
    <div className='App'>
      <MapContainer className='map' center={[40.7192, -73.9617]} zoom={12}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {eventsLocations.map((event) => {
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
        {eventsLocationsTheBronx.map((event) => {
          return (
            <>
              <Marker position={[event.latitude, event.longitude, event.time]}>
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
        {eventsLocationsBrooklyn.map((event) => {
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
        {eventsLocationsManhattan.map((event) => {
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
        {eventsLocationsStatenIsland.map((event) => {
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
        <LayerGroup>
          <Circle center={center} pathOptions={fillBlueOptions} radius={4000} />
          <Circle
            center={center}
            pathOptions={fillRedOptions}
            radius={8000}
            stroke={false}
          />
        </LayerGroup>
      </MapContainer>
    </div>
  );
}

export default MyMap;
