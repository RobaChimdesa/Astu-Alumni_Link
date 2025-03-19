import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const FacultyCreateDiscussion = () => {
  const [discussion, setDiscussion] = useState({ title: "", content: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setDiscussion({ ...discussion, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (discussion.title && discussion.content) {
      alert("Discussion created successfully!");
      navigate("/alumni/discussions"); // Redirect back to discussion forum
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 animate-fade-in-down">
          Create a New Discussion
        </h1>

        {/* Discussion Form */}
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-xl animate-fade-in">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-gray-700 font-medium mb-2 text-sm sm:text-base md:text-lg"
              >
                Discussion Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Discussion Title"
                value={discussion.title}
                onChange={handleChange}
                className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base md:text-lg"
                required
              />
            </div>
            <div>
              <label
                htmlFor="content"
                className="block text-gray-700 font-medium mb-2 text-sm sm:text-base md:text-lg"
              >
                Discussion Content
              </label>
              <textarea
                id="content"
                name="content"
                placeholder="Discussion Content"
                value={discussion.content}
                onChange={handleChange}
                className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base md:text-lg h-40"
                required
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="submit"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] shadow-md"
              >
                Post Discussion
              </button>
              <button
                type="button"
                className="w-full sm:w-auto bg-gradient-to-r from-gray-600 to-gray-500 text-white font-semibold px-6 py-3 rounded-lg hover:from-gray-700 hover:to-gray-600 transition-all duration-300 transform hover:scale-[1.02] shadow-md"
                onClick={() => navigate("/faculty/discussions")}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FacultyCreateDiscussion;