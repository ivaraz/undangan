import React from "react";
import Hero from "../sections/Hero";
import Couple from "../sections/Couple";
import EventDetails from "../sections/EventDetails";
import Gallery from "../sections/Gallery";
import Map from "../sections/Map";
import RSVP from "../sections/RSVP";
import Wishes from "../sections/Wishes";

const Invitation = () => {
  return (
    <main>
      <Hero />
      <Couple />
      <EventDetails />
      <Gallery />
      <Map />
      <RSVP />
      <Wishes />
    </main>
  );
};

export default Invitation;
