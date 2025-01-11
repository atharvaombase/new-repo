import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Events from "./components/events/Events";
import Team from "./components/team/Team";
import ContactForm from "./components/forms/ContactForm";
import JoinForm from "./components/forms/JoinForm";
import Footer from "./components/Footer";

function App() {
  

  return (
    <div className="min-h-screen bg-storm-darker">
      <Navbar />
      <Hero />
      <Events />
      <Team />

      <section id="join" className="py-20 bg-storm-darker">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-white mb-8 text-center">
            <span className="border-b-4 border-neon pb-2 uppercase tracking-wide">
              Join Our Society
            </span>
          </h2>
          
          <JoinForm />
        </div>
      </section>

      <section id="contact" className="py-20 bg-storm-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-white mb-8 text-center">
            <span className="border-b-4 border-neon pb-2 uppercase tracking-wide">
              Contact Us
            </span>
          </h2>
          
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
   
  );
}

export default App;
