import React, { useState, useEffect, Component } from "react";
import Map from "./Map";
import { Link } from "react-router-dom";
import EventsLocations, {
  eventsLocations,
  eventsLocationsQueens,
} from "./EventsLocations";

class BandInfo extends Component {
  render() {
    return (
      <div>
        {eventsLocations.map((event) => {
          return (
            <div>
              <h3>{event.band}</h3>
              <h3>{event.description}</h3>
            </div>
          );
        })}
        {eventsLocationsQueens.map((event) => {
          return (
            <div>
              <h3>{event.band}</h3>
              <h3>{event.description}</h3>
            </div>
          );
        })}
      </div>
    );
  }
}
export default BandInfo;
