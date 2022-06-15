import "./App.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import useGeoLocation from "./useGeoLocation";
import { eventsLocationsTheBronx } from "./EventsLocations";

function Bx() {
  const location = useGeoLocation();

  return (
    <div className='App'>
      <MapContainer className='map' center={[40.8483, -73.8552]} zoom={12}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
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

export default Bx;
