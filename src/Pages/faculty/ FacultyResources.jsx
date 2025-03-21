import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Sidebar from "./Sidebar";

const FacultyResources = () => {
  const [resources, setResources] = useState([
    { id: 1, title: "Introduction to AI", type: "PDF", link: "https://example.com/ai.pdf" },
    { id: 2, title: "Software Engineering Principles", type: "Video", link: "https://example.com/se-video.mp4" },
  ]);

  const [newResource, setNewResource] = useState({
    title: "",
    type: "",
    link: "",
  });

  const handleChange = (e) => {
    setNewResource({ ...newResource, [e.target.name]: e.target.value });
  };

  const addResource = (e) => {
    e.preventDefault();
    if (newResource.title && newResource.type && newResource.link) {
      setResources([...resources, { ...newResource, id: resources.length + 1 }]);
      setNewResource({ title: "", type: "", link: "" });
      alert("Resource uploaded successfully!");
    } else {
      alert("Please fill all fields.");
    }
  };

  const deleteResource = (id) => {
    setResources(resources.filter((resource) => resource.id !== id));
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen flex flex-col">
      {/* <Navbar /> */}
      <Sidebar/>
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 animate-fade-in-down">
          Faculty Resource Management
        </h1>

        {/* Resources Card */}
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-xl animate-fade-in">
          <div className="space-y-4 sm:space-y-6">
            {/* Upload Resource Form */}
            <div>
              <label
                htmlFor="title"
                className="block text-gray-700 font-medium mb-2 text-sm sm:text-base md:text-lg"
              >
                Resource Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={newResource.title}
                onChange={handleChange}
                placeholder="Resource Title"
                required
                className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base md:text-lg"
              />
            </div>
            <div>
              <label
                htmlFor="type"
                className="block text-gray-700 font-medium mb-2 text-sm sm:text-base md:text-lg"
              >
                Resource Type
              </label>
              <select
                id="type"
                name="type"
                value={newResource.type}
                onChange={handleChange}
                required
                className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-gray-600 text-sm sm:text-base md:text-lg"
              >
                <option value="">Select Resource Type</option>
                <option value="PDF">PDF</option>
                <option value="Video">Video</option>
                <option value="Presentation">Presentation</option>
                <option value="Document">Document</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="link"
                className="block text-gray-700 font-medium mb-2 text-sm sm:text-base md:text-lg"
              >
                Resource Link
              </label>
              <input
                type="url"
                id="link"
                name="link"
                value={newResource.link}
                onChange={handleChange}
                placeholder="Resource Link"
                required
                className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base md:text-lg"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={addResource}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] shadow-md"
              >
                Upload Resource
              </button>
            </div>

            {/* Resource List */}
            <div className="mt-6 sm:mt-8">
              {resources.length > 0 ? (
                <div className="space-y-4 sm:space-y-6">
                  {resources.map((resource) => (
                    <div
                      key={resource.id}
                      className="bg-white p-4 sm:p-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="flex-1">
                          <span className="text-base sm:text-lg md:text-xl font-medium text-gray-700 truncate block">
                            {resource.title}
                          </span>
                          <span className="text-gray-600 text-sm sm:text-base md:text-lg">
                            {resource.type} -{" "}
                            <a
                              href={resource.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              View Resource
                            </a>
                          </span>
                        </div>
                        <button
                          className="w-full sm:w-auto bg-gradient-to-r from-gray-600 to-gray-500 text-white font-semibold px-6 py-3 rounded-lg hover:from-gray-700 hover:to-gray-600 transition-all duration-300 transform hover:scale-[1.02] shadow-md"
                          onClick={() => deleteResource(resource.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 text-sm sm:text-base md:text-lg text-center">
                  No resources uploaded yet.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default FacultyResources;