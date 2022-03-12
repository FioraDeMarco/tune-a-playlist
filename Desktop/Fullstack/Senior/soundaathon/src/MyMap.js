// import React, { useEffect } from "react";
// import "./App.css";
// import L from "leaflet";
// import {} from "mapbox-gl-leaflet";

// function MyMap() {
//   let mapContainer;

//   useEffect(() => {
//     const initialState = {
//       lng: 11,
//       lat: 49,
//       zoom: 4,
//     };

//     const map = L.map(mapContainer).setView(
//       [initialState.lat, initialState.lng],
//       initialState.zoom
//     );

//     // the attribution is required for the Geoapify Free tariff plan
//     map.attributionControl
//       .setPrefix("")
//       .addAttribution(
//         'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © OpenStreetMap <a href="https://www.openstreetmap.org/copyright" target="_blank">contributors</a>'
//       );

//     var myAPIKey =
//       "5cd134075d56422182711d85ea86f19e44bee9bb397551ce87be12ac43edeaaf";
//     const mapStyle = "https://maps.geoapify.com/v1/styles/osm-carto/style.json";

//     const gl = L.mapboxGL({
//       style: `${mapStyle}?apiKey=${myAPIKey}`,
//       accessToken: "no-token",
//     }).addTo(map);
//   }, [mapContainer]);

//   return (
//     <div className="map-container" ref={(el) => (mapContainer = el)}></div>
//   );
// }

// export default MyMap;
