import React from "react";
import { Calendar, Clock, MapPin } from "lucide-react";

const EventCard = ({
  title,
  date,
  time,
  location,
  description,
  imageUrl,
  isPast = false,
}) => {
  return (
    <div className="bg-storm-dark rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        {!isPast && (
          <span className="inline-block px-3 py-1 text-sm font-semibold text-black bg-neon rounded-full mb-2">
            Upcoming
          </span>
        )}
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="space-y-2 text-sm text-gray-400">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-neon" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2 text-neon" />
            <span>{time}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-neon" />
            <span>{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
