import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Sidebar from "./Sidebar";

const AlumniResources = () => {
  const [resources, setResources] = useState([
    { id: 1, title: "Resume Writing Guide", file: "resume_guide.pdf" },
    { id: 2, title: "Job Interview Tips", file: "job_interview_tips.pdf" },
  ]);

  const [newResource, setNewResource] = useState({ title: "", file: null });
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setNewResource({ ...newResource, file: e.target.files[0] });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (!newResource.title || !newResource.file) {
      setError("Please provide both title and file.");
      return;
    }
    setError("");

    const newEntry = {
      id: resources.length + 1,
      title: newResource.title,
      file: newResource.file.name,
    };

    setResources([...resources, newEntry]);
    setNewResource({ title: "", file: null });
    alert("Resource uploaded successfully!");
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen flex flex-col">
      {/* <Navbar /> */}
      <Sidebar/>
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 animate-fade-in-down">
          Alumni Resources
        </h1>

        {/* Upload Resource Form */}
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-xl animate-fade-in mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6">
            Upload a Resource
          </h2>
          <form onSubmit={handleUpload} className="space-y-4 sm:space-y-6">
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
                placeholder="Resource Title"
                value={newResource.title}
                onChange={(e) =>
                  setNewResource({ ...newResource, title: e.target.value })
                }
                className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base md:text-lg"
                required
              />
            </div>
            <div>
              <label
                htmlFor="file"
                className="block text-gray-700 font-medium mb-2 text-sm sm:text-base md:text-lg"
              >
                Resource File
              </label>
              <input
                type="file"
                id="file"
                onChange={handleFileChange}
                className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-gray-600 text-sm sm:text-base md:text-lg"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm sm:text-base">{error}</p>}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] shadow-md"
            >
              Upload Resource
            </button>
          </form>
        </div>

        {/* Resource Listings */}
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-xl animate-fade-in">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6">
            Available Resources
          </h2>
          {resources.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {resources.map((resource) => (
                <div
                  key={resource.id}
                  className="flex flex-col justify-between bg-gray-100 p-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <span className="text-gray-800 text-sm sm:text-base md:text-lg font-medium truncate">
                    {resource.title}
                  </span>
                  <a
                    href={`/${resource.file}`}
                    download
                    className="mt-4 w-full bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:from-green-700 hover:to-green-600 transition-all duration-300 transform hover:scale-[1.02] shadow-md text-center text-sm sm:text-base"
                  >
                    Download
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-sm sm:text-base md:text-lg text-center py-6">
              No resources available.
            </p>
          )}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default AlumniResources;