import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import { FaCheck, FaTrash } from "react-icons/fa";

const ManageEvents = () => {
  const [events, setEvents] = useState([
    { id: 1, title: "Tech Networking Summit", date: "2024-07-15", organizer: "TechCorp", status: "Pending" },
    { id: 2, title: "Alumni Meet & Greet", date: "2024-08-01", organizer: "ASTU Alumni Office", status: "Approved" },
    { id: 3, title: "Career Fair", date: "2024-09-10", organizer: "ASTU Career Center", status: "Pending" },
  ]);

  const approveEvent = (id) => {
    setEvents(events.map(event => event.id === id ? { ...event, status: "Approved" } : event));
  };

  const deleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">
          Manage Event Listings
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-3 border">Event Title</th>
                <th className="p-3 border">Date</th>
                <th className="p-3 border">Organizer</th>
                <th className="p-3 border">Status</th>
                <th className="p-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map(event => (
                <tr key={event.id} className="border text-center">
                  <td className="p-3 border">{event.title}</td>
                  <td className="p-3 border">{event.date}</td>
                  <td className="p-3 border">{event.organizer}</td>
                  <td className={`p-3 border font-semibold ${event.status === "Approved" ? "text-green-600" : "text-yellow-600"}`}>
                    {event.status}
                  </td>
                  <td className="p-3 border flex justify-center space-x-4">
                    {event.status === "Pending" && (
                      <button
                        className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition duration-300"
                        onClick={() => approveEvent(event.id)}
                      >
                        <FaCheck />
                      </button>
                    )}
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition duration-300"
                      onClick={() => deleteEvent(event.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageEvents;
