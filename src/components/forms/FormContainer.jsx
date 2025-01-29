import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import JoinForm from "./JoinForm";
import ConstactForm from "./ContactForm";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./form.css";

const FormContainer = () => {
  const location = useLocation();
  const [events, setEvents] = useState("contact"); // Default value is "contact"

  // Set the initial state of events based on the passed state
  useEffect(() => {
    if (location.state?.action) {
      setEvents(location.state.action); // Set to "join" if that's the passed state
    }
  }, [location.state]);

  return (
    <>
      <section
        id="connect"
        className="connectsec bg-storm-darker button-container py-20 text-center"
      >
        <button
          aria-label="Contact Us"
          className={`form-button ${events === "contact" ? "active" : ""}`}
          onClick={() => setEvents("contact")}
        >
          Contact us
        </button>

        <button
          aria-label="Join us"
          className={`form-button ${events === "join" ? "active" : ""}`}
          onClick={() => setEvents("join")}
        >
          Join us
        </button>
      </section>

      <SwitchTransition mode="out-in">
        <CSSTransition
          key={events} // This ensures the animation runs when the `events` value changes
          timeout={300}
          classNames="fade"
        >
          <div>
            {events === "join" ? (
              <section id="join" className="py-16 bg-storm-darker">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-4xl font-extrabold text-white mb-8 text-center">
                    <span className="border-b-4 border-neon pb-2 uppercase tracking-wide">
                      Join Our Society
                    </span>
                  </h2>
                  <JoinForm className="decreased-top-margin" />
                </div>
              </section>
            ) : (
              <section id="contact" className="py-16 bg-storm-dark">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-4xl font-extrabold text-white mb-8 text-center">
                    <span className="border-b-4 border-neon pb-2 uppercase tracking-wide">
                      Contact Us
                    </span>
                  </h2>
                  <ConstactForm />
                </div>
              </section>
            )}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </>
  );
};

export default FormContainer;
