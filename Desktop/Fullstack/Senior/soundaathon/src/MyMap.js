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
import { eventsLocations } from "./EventsLocations";
import { eventsLocationsTheBronx } from "./EventsLocations";
import { eventsLocationsBrooklyn } from "./EventsLocations";
import { eventsLocationsQueens } from "./EventsLocations";
import { eventsLocationsManhattan } from "./EventsLocations";
import { eventsLocationsStatenIsland } from "./EventsLocations";

// const location = useGeoLocation();
//locationadd event listener set zoom set bounds
function MyMap() {
  const location = useGeoLocation();
  const center = [location.coordinates.lat, location.coordinates.lng];
  const fillBlueOptions = { fillColor: "blue" };
  const fillRedOptions = { fillColor: "red" };
  //location.setView
  const zoomButton = document.querySelector(".zoom");
  console.log("zoom to data", zoomButton);
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

//-------------------TRYING FOR LOCATION
//-------------------TRYING FOR LOCATION
//-------------------TRYING FOR LOCATION
//-------------------TRYING FOR LOCATION
//-------------------TRYING FOR LOCATION
//-------------------TRYING FOR LOCATION

// import React, { useEffect } from "react";
// import "./App.css";
// import L from "leaflet";
// import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
// import useGeoLocation from "./useGeoLocation";
// import { eventsLocations } from "./EventsLocations";

// function MyMap() {
//   const location = useGeoLocation();
//   let range = [];
//   // function withinRange() {
//   //   for (let i = 0; i < eventsLocations.length; i++) {
//   //     // let eventLatitude = eventsLocations.latitude[i];
//   //     console.log("i", i);
//   //     if (
//   //       eventsLocations.latitude < location.coordinates.lat + 2 &&
//   //       eventsLocations.longitude < location.coordinates.lng + 2
//   //     ) {
//   //       //range.push(eventsLocations.latitude, eventsLocations.longitude);
//   //       range.push(eventsLocations.latitude);
//   //       range.push(eventsLocations.longitude);
//   //     }
//   //   }
//   //   return range;
//   // }
//   function withinRange() {
//     if (
//       eventsLocations.latitude < location.coordinates.lat &&
//       eventsLocations.longitude < location.coordinates.lng
//     ) {
//       range.push(eventsLocations.latitude, eventsLocations.longitude);
//     }
//     return range;
//   }
//   let ranges = eventsLocations.filter((event) => {
//     return withinRange(event);
//   });
//   // withinRange(eventsLocations);
//   // withinRange();
//   console.log("ranges", ranges);
//   //console.log("range", withinRange(eventsLocations));
//   //console.log("range", eventsLocations);
//   console.log("my lat", location.coordinates.lat);
//   console.log("my lng", location.coordinates.lng);
//   console.log("eventslocations", eventsLocations);

//   return (
//     <div className="MyMap">
//       <MapContainer
//         className="mymapcontainer"
//         center={[40.7192, -73.9617]}
//         zoom={13}
//       >
//         {location.loaded && !location.error && (
//           <Marker
//             position={[location.coordinates.lat, location.coordinates.lng]}
//           >
//             <Popup>YOU ARE HERE</Popup>
//           </Marker>
//         )}
//         {withinRange(eventsLocations).map((event) => {
//           return (
//             <>
//               <Marker position={[event.latitude, event.longitude]}>
//                 <Popup>
//                   Soundathon Event
//                   <br />
//                   {event.band} playing at {event.venue} at {event.time}!
//                 </Popup>
//               </Marker>
//             </>
//           );
//         })}
//         {/* <Marker position={withinRange(eventsLocations)}>
//           <Popup>Local</Popup>
//         </Marker> */}
//       </MapContainer>
//     </div>
//   );
// }

// export default MyMap;

//-------------------TRYING FOR LOCATION

// let mapContainer;

// useEffect(() => {
//   const initialState = {
//     lng: 11,
//     lat: 49,
//     zoom: 4,
//   };

//   const map = L.map(mapContainer).setView(
//     [initialState.lat, initialState.lng],
//     initialState.zoom
//   );

//   // the attribution is required for the Geoapify Free tariff plan
//   map.attributionControl
//     .setPrefix("")
//     .addAttribution(
//       'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © OpenStreetMap <a href="https://www.openstreetmap.org/copyright" target="_blank">contributors</a>'
//     );

//   var myAPIKey =
//     "5cd134075d56422182711d85ea86f19e44bee9bb397551ce87be12ac43edeaaf";
//   const mapStyle = "https://maps.geoapify.com/v1/styles/osm-carto/style.json";

//   const gl = L.mapboxGL({
//     style: `${mapStyle}?apiKey=${myAPIKey}`,
//     accessToken: "no-token",
//   }).addTo(map);
// }, [mapContainer]);

// return (
//   // <div className="map-container" ref={(el) => (mapContainer = el)}></div>
//   <div>Lameeee</div>
// );
