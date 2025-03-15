import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const CompanyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [companyData, setCompanyData] = useState({
    logo: "https://via.placeholder.com/150",
    name: "Tech Innovations Inc.",
    email: "contact@techinnovations.com",
    industry: "Software Development",
    location: "Addis Ababa, Ethiopia",
    website: "https://techinnovations.com",
    description: "A leading software company specializing in AI-driven solutions.",
  });

  const handleChange = (e) => {
    setCompanyData({ ...companyData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    alert("Company profile updated successfully!");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">
          Company Profile
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-md">
          {/* Company Logo */}
          <div className="flex flex-col items-center mb-6">
            <img
              src={companyData.logo}
              alt="Company Logo"
              className="w-32 h-32 rounded-full object-cover"
            />
            <h2 className="text-2xl font-semibold mt-4">{companyData.name}</h2>
            <p className="text-gray-600">{companyData.industry}</p>
          </div>

          {/* Profile Details */}
          {!isEditing ? (
            <div className="text-gray-700 text-lg space-y-4">
              <p><strong>Email:</strong> {companyData.email}</p>
              <p><strong>Industry:</strong> {companyData.industry}</p>
              <p><strong>Location:</strong> {companyData.location}</p>
              <p><strong>Website:</strong> <a href={companyData.website} className="text-blue-600 hover:underline">{companyData.website}</a></p>
              <p><strong>Description:</strong> {companyData.description}</p>
              <button
                className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={companyData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
              <input
                type="email"
                name="email"
                value={companyData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
              <input
                type="text"
                name="industry"
                value={companyData.industry}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
              <input
                type="text"
                name="location"
                value={companyData.location}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
              <input
                type="text"
                name="website"
                value={companyData.website}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
              <textarea
                name="description"
                value={companyData.description}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300"
              >
                Save Changes
              </button>
              <button
                type="button"
                className="w-full bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition duration-300 mt-2"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CompanyProfile;
