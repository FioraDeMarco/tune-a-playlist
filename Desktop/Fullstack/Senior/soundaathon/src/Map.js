import "./App.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { L } from "leaflet";
import useGeoLocation from "./useGeoLocation";
import { useState, useEffect } from "react";
import { eventsLocations } from "./EventsLocations";
import { eventsLocationsTheBronx } from "./EventsLocations";
import { eventsLocationsBrooklyn } from "./EventsLocations";
import { eventsLocationsQueens } from "./EventsLocations";
import { eventsLocationsManhattan } from "./EventsLocations";
import { eventsLocationsStatenIsland } from "./EventsLocations";

// const LeafIcon = L.Icon.extend({
//   options: {
//     iconSize: [38, 95],
//     shadowSize: [50, 64],
//     iconAnchor: [22, 94],
//     shadowAnchor: [4, 62],
//     popupAnchor: [-3, -76],
//   },
// });

// const eventsLocations = [
//   {
//     band: "Grey Day",
//     venue: "Cutting-Room",
//     latitude: 40.74292,
//     longitude: -73.99052,
//   },
//   {
//     band: "Artic Donkeys",
//     venue: "Rockwood Music Hall",
//     latitude: 40.72234,
//     longitude: -73.98856,
//   },
//   {
//     band: "Peppers",
//     venue: "Music Hall of Williamsburg",
//     latitude: 40.7192,
//     longitude: -73.9617,
//   },
// ];

// const location = useGeoLocation();

function Map() {
  // const map = useMap();
  // const [latitude, setLatitude] = useState(0);
  // const [longitude, setLongitude] = useState(0);
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(({ coords }) => {
  //     const { latitude, longitude } = coords;
  //     setLatitude(latitude);
  //     setLongitude(longitude);
  //     map.setView([latitude, longitude], 13);
  //   });
  // }, [map]);
  const location = useGeoLocation();
  //   const circle = L.circle([location], {
  //     color: "red",
  //     fillColor: "#f03",
  //     fillOpacity: 0.5,
  //     radius: 15,
  //   }).addTo(map);

  return (
    <div className="App">
      <MapContainer className="map" center={[40.7192, -73.9617]} zoom={12}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {eventsLocations.map((event) => {
          return (
            <>
              <Marker position={[event.latitude, event.longitude]}>
                <Popup>
                  Soundathon Event
                  <br />
                  {event.band} playing at {event.venue} at {event.time}!
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
      </MapContainer>
    </div>
  );
}

// <Marker position={[40.72234, -73.98856]}>
//   <Popup>
//     Soundathon Event
//     <br /> Artic Donkeys playing at Rockwood Music Hall at 8pm!
//   </Popup>
// </Marker>

// <Marker position={[40.74292, -73.99052]}>
//   <Popup>
//     Soundathon Event <br /> Grey Day playing at the Cutting Room tonight
//     at 9!
//   </Popup>
// </Marker>
// <Marker position={[40.7192, -73.9617]}>
//   <Popup>
//     Soundathon Event
//     <br /> 'Peppers' Playing at the Music Hall of Williamsburg tonight
//     5pm!
//   </Popup>
// </Marker>
// <Marker position={[40.7556, -73.9286]}>
//   <Popup>
//     Soundathon Event
//     <br /> Cage the Hamster Playing at the Peco's Wyckoff Avenue tonight
//     5pm!
//   </Popup>
// </Marker>
// <Marker position={[40.7253224, -73.9842582]}>
//   <Popup>
//     Soundathon Event
//     <br /> CBGB at the Peco's Wyckoff Avenue tonight 5pm!
//   </Popup>
// </Marker>
// <Marker position={[40.7253224, -73.9842582]}>
//   <Popup>
//     Soundathon Event
//     <br /> Rolling Tunes Playing at Rockwood Music Hall tonight 5pm!
//   </Popup>
// </Marker>
// {location.loaded && !location.error && (
//   <Marker
//     position={[location.coordinates.lat, location.coordinates.lng]}
//   >
//     <Popup>YOU ARE HERE</Popup>
//   </Marker>
// )}
{
  /* <Marker position={[latitude, longitude]}>
  <Popup>Home</Popup>
</Marker> 

//       {/* <Marker position={[latitude, longitude]}>
//         <Popup>Home</Popup>
//       </Marker> */
}

//     )};
// }

export default Map;
