import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Events from "./components/events/Events";
import Team from "./components/team/Team";
import Footer from "./components/Footer";
import FormContainer from "./components/forms/FormContainer";
import AdSense from "./components/AdSense";

function App() {
  const [events, setEvents] = React.useState("contact");
  return (
    <Router>
      <div className="min-h-screen bg-storm-darker">
        <Navbar events={events} setEvents={setEvents} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <AdSense adSlot="ca-pub-3198706909969680" />
                <Events />
                <AdSense adSlot="ca-pub-3198706909969680" />
                <Team />
              </>
            }
          />
          <Route path="/team/events" element={<FormContainer />} />
        </Routes>
        <Address></Address>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
