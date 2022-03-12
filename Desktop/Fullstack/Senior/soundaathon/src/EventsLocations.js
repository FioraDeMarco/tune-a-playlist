import React from "react";
import { useState, useCallback } from "react";
import AddEvent from "./AddEvent";
import { Link } from "react-router-dom";
export const eventsLocations = [
  {
    id: 1,
    band: "Grey Day",
    venue: "Cutting-Room",
    latitude: 40.74292,
    longitude: -73.99052,
    // url: "http://thecuttingroomnyc.com/",
    // url: <Link to={"http://thecuttingroomnyc.com/"} />,
    link: "http://thecuttingroomnyc.com/",
    time: "10pm",
  },
  {
    id: 2,
    band: "Artic Donkeys",
    venue: "Rockwood Music Hall",
    latitude: 40.72234,
    longitude: -73.98856,
    url: "http://thecuttingroomnyc.com/",
    time: "7pm",
  },
  {
    id: 3,
    band: "Peppers",
    venue: "Music Hall of Williamsburg",
    latitude: 40.7192,
    longitude: -73.9617,
    link: "https://www.musichallofwilliamsburg.com/",
    time: "9pm",
  },
  {
    id: 4,
    band: "CBGB",
    venue: "Drom",
    latitude: 40.7253224,
    longitude: -73.9842582,
    url: "http://thecuttingroomnyc.com/",
    time: "8pm",
  },
  {
    id: 5,
    band: "Rolling Tunes",
    venue: "Rockwood Music Hall",
    latitude: 40.7556,
    longitude: -73.9286,
    url: "http://thecuttingroomnyc.com/",
    time: "10pm",
  },
  {
    id: 6,
    band: "Cage the Hamster",
    venue: "Peco's Wyckoff Avenue",
    latitude: 40.6972,
    longitude: -73.906,
    url: "http://thecuttingroomnyc.com/",
    time: "7pm",
  },
];

export const eventsLocationsQueens = [
  {
    band: "Pebble Temple Pilots",
    venue: "terraza 7",
    latitude: 40.747322473789,
    longitude: -73.881793383051,
    time: "9pm",
  },
  {
    band: "Mikel",
    venue: "The Shillelagh Tavern",
    latitude: 40.742054,
    longitude: -73.769417,
    time: "8pm",
  },

  {
    band: "Gold Zepplin",
    venue: "Queens Brewery",
    latitude: 40.695,
    longitude: -73.9039,
    time: "10pm",
  },
  {
    band: "Roosevelt",
    venue: "Dylans Forrest Hills",
    latitude: 40.7104,
    longitude: -73.8491,
    time: "7pm",
  },

  {
    band: "22 Pilots",
    venue: "Queens Theatre",
    latitude: 40.7443,
    longitude: -73.8444,
    time: "9pm",
  },

  {
    band: "Blue Stripe",
    venue: "House of Yes",
    latitude: 40.7068,
    longitude: -73.9236,
    time: "8pm",
  },
  {
    band: "Ladybugs",
    venue: "A+ Roof Bar",
    latitude: 40.758804609592424,
    longitude: -73.8344800462895,
    time: "10pm",
  },
];

export const eventsLocationsBrooklyn = [
  {
    band: "Alice in Chain",
    venue: "Gold Sounds",
    latitude: 40.7027,
    longitude: -73.9295,
    time: "7pm",
  },
  {
    band: "Kyga",
    venue: "Our Wicked Lady",
    latitude: 40.70937,
    longitude: -73.933333,
    time: "8pm",
  },
  {
    band: "Allman Sisters Band",
    venue: "Union Pool",
    latitude: 40.715,
    longitude: -73.9516,
    time: "10pm",
  },

  {
    band: "Toys and Roses",
    venue: "Elsewhere",
    latitude: 40.7094,
    longitude: -73.9232,
    time: "7pm",
  },
  {
    band: "Nirvan",
    venue: "Bossa Nova Civic Club",
    latitude: 40.7005456,
    longitude: -73.9257976,
    time: "9pm",
  },
  {
    band: "Pavlovs Bell",
    venue: "Brooklyn Steel",
    latitude: 40.7194,
    longitude: -73.9388,
    time: "8pm",
  },
  {
    band: "Glass Beach",
    venue: "Knitting Factory",
    latitude: 40.7142,
    longitude: -73.9558,
    time: "10pm",
  },
];

export const eventsLocationsManhattan = [
  {
    band: "Surrounder",
    venue: "Smalls",
    latitude: 40.7344,
    longitude: -74.0028,
    time: "7pm",
  },
  {
    band: "Tedeshi Trucks Band",
    venue: "Spyscape",
    latitude: 40.7653,
    longitude: -73.9837,
    time: "9pm",
  },
  {
    band: "Shin Guardians",
    venue: "Mezzrow",
    latitude: 40.7346,
    longitude: -74.0019,
    time: "8pm",
  },
  {
    band: "",
    venue: "The Bitter End",
    latitude: 40.7284,
    longitude: -73.9992,
    time: "10pm",
  },

  {
    band: "Las Nubes",
    venue: "Terminal 5",
    latitude: 40.7697,
    longitude: -73.9927,
    time: "9pm",
  },
  {
    band: "Iggy Paps",
    venue: "Bowery Electric",
    latitude: 40.7257,
    longitude: -73.9918,
    time: "9pm",
  },

  {
    band: "Sleepy Dog",
    venue: "Chelsae Music Hall",
    latitude: 40.742352,
    longitude: -74.00621,
    time: "8pm",
  },
  {
    band: "Tov Lo",
    venue: "Village Underground",
    latitude: 40.7307,
    longitude: -74.0009,
    time: "10pm",
  },
];

export const eventsLocationsTheBronx = [
  {
    band: "Widespread Panic",
    venue: "An Beal Bocht Cafe",
    latitude: 40.887375,
    longitude: -73.904953,
    time: "7pm",
  },
  {
    band: "Government Mule",
    venue: "Allertone Showcase",
    latitude: 40.8655,
    longitude: -73.8494,
    time: "9pm",
  },

  {
    band: "Blue Floyd",
    venue: "Shrine",
    latitude: 40.85028,
    longitude: -73.90611,
    time: "8pm",
  },
  {
    band: "Fallen Bees",
    venue: "Marina Del Rey",
    latitude: 40.8141,
    longitude: -73.8149,
    time: "10pm",
  },
  {
    band: "Ross De Marco",
    venue: "Morris Park Inn",
    latitude: 40.8483,
    longitude: -73.8552,
    time: "7pm",
  },
];

export const eventsLocationsStatenIsland = [
  {
    band: "Love Pistons",
    venue: "Rosebank Tavern",
    latitude: 40.6125,
    longitude: -74.0651,
    time: "9pm",
  },

  {
    band: "Ramones",
    venue: "Mother Pugs Saloon",
    latitude: 40.6256315,
    longitude: -74.1352689,
    time: "8pm",
  },
  {
    band: "The Stooges",
    venue: "Liedys Shore Inn",
    latitude: 40.6445602,
    longitude: -74.0970553,
    time: "10pm",
  },
];
