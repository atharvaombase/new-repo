import React from "react";
import EventCard from "./EventCard";


const Events = () => {
  const upcomingEvents = [
    {
      title: "Web Development Workshop",
      date: "2024-03-10",
      time: "10:00 AM",
      location: "Room 101, Tech Building",
      description:
        "A 1-month workshop to learn modern web development technologies and best practices.",
      imageUrl:
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "GSoC Guidance Seminar",
      date: "2024-03-15",
      time: "2:00 PM",
      location: "Seminar Hall, Block A",
      description:
        "Get insights and tips for applying to Google Summer of Code (GSoC).",
      imageUrl:
        "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Logic Building Session",
      date: "2024-03-20",
      time: "4:00 PM",
      location: "Lab 204, CS Department",
      description:
        "Sharpen your logical thinking and problem-solving skills in this interactive session.",
      imageUrl:
        "https://images.unsplash.com/photo-1573497019527-00055f593d87?auto=format&fit=crop&q=80&w=1000",
    },
  ];

  const pastEvents = [
    {
      title: "Fun Fair - Cool Games for Students",
      date: "2024-02-20",
      time: "10:00 AM",
      location: "Open Grounds",
      description:
        "An exciting fun fair with engaging games and activities for students.",
      imageUrl:
        "https://images.unsplash.com/photo-1573164574393-7c07d9906d08?auto=format&fit=crop&q=80&w=1000",
      isPast: true,
    },
    {
      title: "API 101 with Postman",
      date: "2024-03-25",
      time: "3:00 PM",
      location: "Online",
      description:
        "Learn the basics of APIs and how to use Postman for API testing and development.",
      imageUrl:
        "https://images.unsplash.com/photo-1581091225375-4e26eeed489c?auto=format&fit=crop&q=80&w=1000",
    },
  ];

  return (
    <section id="events" className="py-20 bg-storm-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-white mb-8 text-center">
          <span className="border-b-4 border-neon pb-2 uppercase tracking-wide">
            Upcoming Events
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-28 mb-16">
          {upcomingEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>

        <h2 className="text-4xl font-extrabold text-white mb-8 text-center">
          <span className="border-b-4 border-neon pb-2 uppercase tracking-wide">
            Past Events
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
