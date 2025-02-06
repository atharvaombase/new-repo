import Hero from "../Hero";
import Events from "../events/Events";
import Team from "../team/Team";
import AdSense from "../AdSense";
import FacultyList from "../Faculty/FacultyList";
import React from "react";
const Homepage = () => {
  return (
    <div className="min-h-screen bg-storm-darker">
      <Hero />
      {/* <AdSense adSlot="ca-pub-3198706909969680" /> */}
      <Events />
      {/* <AdSense adSlot="ca-pub-3198706909969680" /> */}
      <Team />
      <AdSense adSlot="ca-pub-3198706909969680" />
      <FacultyList />
    </div>
  );
};
export default Homepage;
