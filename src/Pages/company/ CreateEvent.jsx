import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const CreateEvent = () => {
  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    registrationLink: "",
  });

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Event created successfully!");
    console.log(eventData);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">
          Create an Event
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="title"
              value={eventData.title}
              onChange={handleChange}
              placeholder="Event Title"
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <input
              type="date"
              name="date"
              value={eventData.date}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              name="location"
              value={eventData.location}
              onChange={handleChange}
              placeholder="Location (e.g., Addis Ababa)"
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <textarea
              name="description"
              value={eventData.description}
              onChange={handleChange}
              placeholder="Event Description"
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <input
              type="url"
              name="registrationLink"
              value={eventData.registrationLink}
              onChange={handleChange}
              placeholder="Registration Link (URL)"
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Create Event
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateEvent;
