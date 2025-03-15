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
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">
          Faculty Event Management
        </h1>

        {/* Create Event Form */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Create New Event</h2>
          <form onSubmit={addEvent} className="space-y-4">
            <input
              type="text"
              name="title"
              value={newEvent.title}
              onChange={handleChange}
              placeholder="Event Title"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              name="date"
              value={newEvent.date}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="location"
              value={newEvent.location}
              onChange={handleChange}
              placeholder="Location"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Add Event
            </button>
          </form>
        </div>

        {/* Events List */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Upcoming & Past Events</h2>
          {events.length > 0 ? (
            <ul className="space-y-4">
              {events.map((event) => (
                <li
                  key={event.id}
                  className="flex justify-between items-center p-4 bg-blue-100 rounded-md"
                >
                  <span>
                    <strong>{event.title}</strong> - {event.date} - {event.location} -{" "}
                    <span className={`font-bold ${event.status === "Upcoming" ? "text-green-700" : "text-gray-500"}`}>
                      {event.status}
                    </span>
                  </span>
                  <button
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
                    onClick={() => deleteEvent(event.id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 text-center">No events available.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FacultyEvents;
