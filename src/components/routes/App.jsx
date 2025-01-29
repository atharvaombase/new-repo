import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import AdSense from "../AdSense";
import Footer from "../Footer";

function App() {
  const [events, setEvents] = React.useState("contact");
  return (
    <div className="min-h-screen bg-storm-darker">
      <Navbar events={events} setEvents={setEvents} />
      <Outlet />
      <Footer />
      <AdSense adSlot="ca-pub-3198706909969680" />
    </div>
  );
}

export default App;
