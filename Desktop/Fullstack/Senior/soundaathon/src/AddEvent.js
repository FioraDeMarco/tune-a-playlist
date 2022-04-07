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
