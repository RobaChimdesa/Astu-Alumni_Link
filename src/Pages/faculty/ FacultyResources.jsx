
import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

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
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">
          Faculty Resource Management
        </h1>

        {/* Upload Resource Form */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Upload New Resource</h2>
          <form onSubmit={addResource} className="space-y-4">
            <input
              type="text"
              name="title"
              value={newResource.title}
              onChange={handleChange}
              placeholder="Resource Title"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <select
              name="type"
              value={newResource.type}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Resource Type</option>
              <option value="PDF">PDF</option>
              <option value="Video">Video</option>
              <option value="Presentation">Presentation</option>
              <option value="Document">Document</option>
            </select>
            <input
              type="url"
              name="link"
              value={newResource.link}
              onChange={handleChange}
              placeholder="Resource Link"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Upload Resource
            </button>
          </form>
        </div>

        {/* Resource List */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Uploaded Resources</h2>
          {resources.length > 0 ? (
            <ul className="space-y-4">
              {resources.map((resource) => (
                <li
                  key={resource.id}
                  className="flex justify-between items-center p-4 bg-blue-100 rounded-md"
                >
                  <span>
                    <strong>{resource.title}</strong> - {resource.type} -{" "}
                    <a href={resource.link} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">
                      View Resource
                    </a>
                  </span>
                  <button
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
                    onClick={() => deleteResource(resource.id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 text-center">No resources uploaded yet.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FacultyResources;
