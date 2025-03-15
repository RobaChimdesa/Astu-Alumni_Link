import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const eventListings = [
  { id: 1, title: "ASTU Alumni Networking Night", location: "Addis Ababa", date: "2024-04-10" },
  { id: 2, title: "Career Development Seminar", location: "Adama", date: "2024-04-15" },
  { id: 3, title: "Tech Innovation Meetup", location: "Hawassa", date: "2024-04-25" },
];

const AlumniEvents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleRegister = (eventId, event) => {
    if (!registeredEvents.includes(eventId)) {
      setRegisteredEvents([...registeredEvents, eventId]);
      alert("You have successfully registered for this event!");
      navigate("/alumni/event-registration", { state: event });
    } else {
      alert("You have already registered for this event.");
    }
  };

  const filteredEvents = eventListings.filter(
    (event) =>
      event.title.toLowerCase().includes(searchTerm) ||
      event.location.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 animate-fade-in-down">
          Upcoming Events
        </h1>

        {/* Events Card */}
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-xl animate-fade-in">
          {/* Events Header */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-gray-200 pb-4 sm:pb-6">
            <div className="text-center sm:text-left flex-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
                Event Listings
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-2">
                Browse and register for upcoming alumni events
              </p>
            </div>
            <div className="w-full sm:w-auto max-w-lg">
              <input
                type="text"
                placeholder="Search events by title or location..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base md:text-lg"
              />
            </div>
          </div>

          {/* Events Details */}
          <div className="mt-4 sm:mt-6 space-y-6">
            {filteredEvents.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filteredEvents.map((event) => (
                  <div
                    key={event.id}
                    className="bg-white p-4 sm:p-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-700 truncate">
                      {event.title}
                    </h3>
                    <p className="text-gray-800 text-sm sm:text-base md:text-lg mt-1">
                      {event.location}
                    </p>
                    <p className="text-gray-800 text-sm sm:text-base md:text-lg">
                      {new Date(event.date).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 text-sm sm:text-base md:text-lg text-center">
                No events found matching your search.
              </p>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8 justify-center">
              {filteredEvents.map((event) => (
                <button
                  key={event.id}
                  className={`w-full sm:w-auto bg-gradient-to-r ${
                    registeredEvents.includes(event.id)
                      ? "from-gray-600 to-gray-500 cursor-not-allowed"
                      : "from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  } text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md`}
                  onClick={() => handleRegister(event.id, event)}
                  disabled={registeredEvents.includes(event.id)}
                >
                  {registeredEvents.includes(event.id) ? "Registered" : "Register Now"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AlumniEvents;