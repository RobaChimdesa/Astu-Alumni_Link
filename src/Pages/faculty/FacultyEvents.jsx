import Sidebar from "./Sidebar";
import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const FacultyEvents = () => {
  const [events, setEvents] = useState([
    { id: 1, title: "Tech Talk on AI", date: "2024-04-15", location: "Auditorium", status: "Upcoming" },
    { id: 2, title: "Networking Night", date: "2024-03-30", location: "Main Hall", status: "Completed" },
  ]);

  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    location: "",
  });

  const handleChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const addEvent = (e) => {
    e.preventDefault();
    if (newEvent.title && newEvent.date && newEvent.location) {
      setEvents([...events, { ...newEvent, id: events.length + 1, status: "Upcoming" }]);
      setNewEvent({ title: "", date: "", location: "" });
      alert("Event added successfully!");
    } else {
      alert("Please fill all fields.");
    }
  };

  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen flex flex-col">
      {/* <Navbar /> */}
      <Sidebar/>
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 animate-fade-in-down">
          Faculty Event Management
        </h1>

        {/* Create Event Form */}
        <div className="mb-6 sm:mb-8 max-w-lg mx-auto">
          <input
            type="text"
            name="title"
            value={newEvent.title}
            onChange={handleChange}
            placeholder="Event Title"
            required
            className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base shadow-sm mb-4"
          />
          <input
            type="date"
            name="date"
            value={newEvent.date}
            onChange={handleChange}
            required
            className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base shadow-sm mb-4"
          />
          <input
            type="text"
            name="location"
            value={newEvent.location}
            onChange={handleChange}
            placeholder="Location"
            required
            className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base shadow-sm mb-4"
          />
          <button
            onClick={addEvent}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md"
          >
            Add Event
          </button>
        </div>

        {/* Events List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {events.length > 0 ? (
            events.map((event) => (
              <div
                key={event.id}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-l-4 border-blue-500"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2 truncate">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  <span className="font-medium">Location:</span> {event.location}
                </p>
                <p className="text-gray-700 font-semibold text-sm sm:text-base mt-1">
                  <span className="font-medium">Date:</span> {event.date}
                </p>
                <p className="text-gray-700 font-semibold text-sm sm:text-base mt-1">
                  <span className="font-medium">Status:</span>{" "}
                  <span className={event.status === "Upcoming" ? "text-green-600" : "text-gray-600"}>
                    {event.status}
                  </span>
                </p>
                <button
                  className="mt-4 w-full bg-gradient-to-r from-gray-600 to-gray-500 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:from-gray-700 hover:to-gray-600 transition-all duration-300 shadow-md"
                  onClick={() => deleteEvent(event.id)}
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center text-sm sm:text-base col-span-full py-6">
              No events available.
            </p>
          )}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default FacultyEvents;