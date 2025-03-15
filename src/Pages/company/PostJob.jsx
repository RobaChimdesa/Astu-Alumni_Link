import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const PostJob = () => {
  const [jobData, setJobData] = useState({
    title: "",
    company: "Tech Innovations Inc.",
    location: "",
    jobType: "",
    description: "",
    requirements: "",
    applyLink: "",
  });

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Job posted successfully!");
    console.log(jobData);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">
          Post a Job
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="title"
              value={jobData.title}
              onChange={handleChange}
              placeholder="Job Title"
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              name="location"
              value={jobData.location}
              onChange={handleChange}
              placeholder="Location (e.g., Addis Ababa)"
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <select
              name="jobType"
              value={jobData.jobType}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            >
              <option value="">Select Job Type</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Internship">Internship</option>
            </select>
            <textarea
              name="description"
              value={jobData.description}
              onChange={handleChange}
              placeholder="Job Description"
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <textarea
              name="requirements"
              value={jobData.requirements}
              onChange={handleChange}
              placeholder="Job Requirements"
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <input
              type="url"
              name="applyLink"
              value={jobData.applyLink}
              onChange={handleChange}
              placeholder="Application Link (URL)"
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Post Job
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostJob;
