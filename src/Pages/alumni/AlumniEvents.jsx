import Sidebar from "./Sidebar";
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
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
  };

  const handleRegister = (eventId, event) => {
    if (!registeredEvents.includes(eventId)) {
      setRegisteredEvents([...registeredEvents, eventId]);
      alert(`You have successfully registered for ${event.title}!`);
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
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen flex flex-col ">
      {/* <Navbar /> */}
      <Sidebar />
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 animate-fade-in-down">
          Upcoming Events
        </h1>

        {/* Search Bar */}
        <div className="mb-6 sm:mb-8 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Search events by title or location..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base shadow-sm"
          />
        </div>

        {/* Event Listings */}
        <div className="ml-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <div
                key={event.id}
                className=" bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-l-4 border-blue-500"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2 truncate">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  <span className="font-medium">Location:</span> {event.location}
                </p>
                <p className="text-gray-700 font-semibold text-sm sm:text-base mt-1">
                  <span className="font-medium">Date:</span>{" "}
                  {new Date(event.date).toLocaleDateString()}
                </p>
                <button
                  className={`mt-4 w-full bg-gradient-to-r ${registeredEvents.includes(event.id)
                      ? "from-gray-600 to-gray-500 cursor-not-allowed"
                      : "from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                    } text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all duration-300 shadow-md`}
                  onClick={() => handleRegister(event.id, event)}
                  disabled={registeredEvents.includes(event.id)}
                >
                  {registeredEvents.includes(event.id) ? "Registered" : "Register Now"}
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center text-sm sm:text-base col-span-full py-6">
              No events found matching your search.
            </p>
          )}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default AlumniEvents;