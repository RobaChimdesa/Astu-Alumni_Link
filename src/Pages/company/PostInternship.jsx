import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const PostInternship = () => {
  const [internshipData, setInternshipData] = useState({
    title: "",
    company: "Tech Innovations Inc.",
    location: "",
    duration: "",
    description: "",
    requirements: "",
    applyLink: "",
  });

  const handleChange = (e) => {
    setInternshipData({ ...internshipData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Internship posted successfully!");
    console.log(internshipData);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">
          Post an Internship
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="title"
              value={internshipData.title}
              onChange={handleChange}
              placeholder="Internship Title"
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              name="location"
              value={internshipData.location}
              onChange={handleChange}
              placeholder="Location (e.g., Addis Ababa)"
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              name="duration"
              value={internshipData.duration}
              onChange={handleChange}
              placeholder="Duration (e.g., 3 months)"
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <textarea
              name="description"
              value={internshipData.description}
              onChange={handleChange}
              placeholder="Internship Description"
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <textarea
              name="requirements"
              value={internshipData.requirements}
              onChange={handleChange}
              placeholder="Internship Requirements"
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <input
              type="url"
              name="applyLink"
              value={internshipData.applyLink}
              onChange={handleChange}
              placeholder="Application Link (URL)"
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Post Internship
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostInternship;
