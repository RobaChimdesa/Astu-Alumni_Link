import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const EventRegistration = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const event = location.state || { title: "Sample Event", location: "TBD", date: "TBD" };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phoneNumber) {
      setError("All fields are required!");
      return;
    }
    setError("");
    alert(`You have successfully registered for ${event.title}!`);
    navigate("/alumni/events"); // Redirect back to event listings
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">
          Register for {event.title}
        </h1>
        <p className="text-lg text-center text-gray-700 mb-4">
          Location: <strong>{event.location}</strong> | Date: <strong>{event.date}</strong>
        </p>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Confirm Registration
          </button>
        </form>

        <button
          onClick={() => navigate("/alumni/events")}
          className="mt-6 w-full bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition duration-300"
        >
          Back to Events
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default EventRegistration;
