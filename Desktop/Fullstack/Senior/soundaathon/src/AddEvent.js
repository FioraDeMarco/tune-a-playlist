import React, { Component } from "react";
import { useState, useCallback } from "react";
import EventsLocations, { eventsLocations } from "./EventsLocations";

class AddEvent extends React.Component {
  constructor() {
    super();
    this.state = {
      band: "",
      venue: "",
      latitude: "",
      longitude: "",
      time: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    eventsLocations.push({ ...this.state });
    this.props.history.push("/map");
  }

  render() {
    return (
      <form id="new-event-form" onSubmit={this.handleSubmit}>
        <input
          placeholder="Enter Band name"
          name="band"
          onChange={this.handleChange}
          value={this.state.band}
        />
        <br />
        <br />
        <input
          placeholder="Enter Venue name"
          name="venue"
          onChange={this.handleChange}
          value={this.state.venue}
        />
        <br />
        <br />
        <input
          placeholder="Enter latitude"
          name="latitude"
          onChange={this.handleChange}
          value={this.state.latitude}
        />
        <br />
        <br />
        <input
          placeholder="Enter longitude"
          name="longitude"
          onChange={this.handleChange}
          value={this.state.longitude}
        />
        <br />
        <br />
        <input
          placeholder="Enter Event Time"
          name="time"
          onChange={this.handleChange}
          value={this.state.time}
        />
        <br />
        <br />

        <button type="submit" onClick={this.handleSubmit}>
          Add Event
        </button>
      </form>
    );
  }
}

export default AddEvent;

// HK Kitchen & Draft House/Coordinates
// 40.8290° N, 73.8244° W
// import React from "react";
// import { useState, useCallback } from "react";
// import EventsLocations, { eventsLocations } from "./EventsLocations";

// function AddEvent() {
//   const [eventsLocations, setEventsLocations] = useState([]);

//   //   function handleChange(e) {
//   //     eventsLocations.setState({
//   //       [e.target.name]: e.target.value,
//   //     });
//   //   }
//   const addEntryClick = (e) => {
//     setEventsLocations([...eventsLocations, e.target.value]);
//   };

//   const { id, band, venue, latitude, longitude } = eventsLocations;
//   return (
//     // <form onSubmit={(e) => addEntryClick(e)}>
//     //   <input
//     //     type="Submit"
//     //     value="Add"
//     //     name="AddEvent"
//     //     // onChange={handleChange}
//     //   />
//     //   Add
//     <form onSubmit={(e) => addEntryClick(e)}>
//       <div>
//         {/* {eventsLocations.map((event) => ( */}
//         <div key={id}>
//           <label>Band</label>
//           <input
//             type="text"
//             placeholder="Enter Band name"
//             name="Band"
//             // onChange={handleChange}
//             value={band}
//           />
//           <br />
//           <br />
//           <label>Venue</label>
//           <input
//             type="text"
//             placeholder="Enter Venue"
//             name="Band"
//             // onChange={handleChange}
//             value={venue}
//           />
//           <br />
//           <br />
//           <label>Latitdue</label>
//           <input
//             type="text"
//             placeholder="Enter Latitude"
//             name="Band"
//             // onChange={handleChange}
//             value={latitude}
//           />
//           <br />
//           <br />
//           <label>Longitude</label>
//           <input
//             type="text"
//             placeholder="Enter Longitude"
//             name="Band"
//             // onChange={handleChange}
//             value={longitude}
//           />
//           <br />
//           <br />
//           <button type="submit">Submit</button>
//           {/* <input>{id}</input>
//             <input>{band}</input>
//             <input>{venue}</input>
//             <input>{latitude}</input>
//             <input>{longitude}</input> */}
//         </div>
//         {/* ))} */}
//       </div>
//     </form>
//   );
// }
// export default AddEvent;

//------------
//------------
//------------
//------------
//------------
//------------
//------------
//------------
//------------
//------------
//------------
//------------
//------------
//------------
//------------
//------------
// add text change name value on change for input
// solution for todo list
// FIRST ATTEMPT
// function AddEvent() {
//   const [eventsLocations, setEventsLocations] = useState([]);
//   //   this.setState((prevState) => ({
//   //     eventsLocations: [{ id: 3, title: "C" }, ...prevState.eventsLocations],
//   //   }));
//   const addEntryClick = () => {
//     setEventsLocations([...eventsLocations, `Entry ${eventsLocations.length}`]);
//   };
//   const { id, band, venue, latitude, longitude } = eventsLocations;
//   return (
//     <div>
//       <div key={id}></div>
//       <input type="button" onClick={addEntryClick} value="Add" />,
//       <div>
//         {eventsLocations.map((entry) => (
//           <div>{entry}</div>
//         ))}
//       </div>
//     </div>
//   );
// }
// export default AddEvent;

//------SECOND ATTEMPT
// import e from "express";
// import React from "react";
// import { useState, useCallback } from "react";
// import EventsLocations, { eventsLocations } from "./EventsLocations";

// function AddEvent() {
//   const [eventsLocations, setEventsLocations] = useState([]);
//   //   this.setState((prevState) => ({
//   //     eventsLocations: [{ id: 3, title: "C" }, ...prevState.eventsLocations],
//   //   }));
//   handleChange(e) {
//     eventsLocations.setState({
//         [e.target.name]: e.target.value
//     });
// };
//   const addEntryClick = (e) => {
//     setEventsLocations([...eventsLocations, e.target.value]);
//   };

//   const { id, band, venue, latitude, longitude } = eventsLocations;
//   return (
//     <form onSubmit={(e) => addEntryClick(e)}>
//       <input type="Submit" value="Add" name="AddEvent" onChange={handleChange}/>,
//       <div>
//         {eventsLocations.map((event) => (
//           <div key={id}>
//             <input>{id}</input>
//             <input>{band}</input>
//             <input>{venue}</input>
//             <input>{latitude}</input>
//             <input>{longitude}</input>
//           </div>
//         ))}
//       </div>
//     </form>
//   );
// }
// export default AddEvent;
