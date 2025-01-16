import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Events from "./components/events/Events";
import Team from "./components/team/Team";
import Footer from "./components/Footer";
import FormContainer from "./components/forms/FormContainer";

function App() {
  const [events, setEvents] = React.useState("contact");
  return (
    <div className="min-h-screen bg-storm-darker">
      <Navbar events={events} setEvents={setEvents} />
      <Hero />
      <Events />
      <Team />
      <hr className="my-8 border-neon" /> {/* Add this line */}
      <FormContainer events={events} setEvents={setEvents}></FormContainer>
      <Footer />
    </div>
  );
}

export default App;
