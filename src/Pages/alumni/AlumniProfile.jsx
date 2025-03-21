import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Sidebar from "./Sidebar";

const AlumniProfile = () => {
  const [profile, setProfile] = useState({
    fullName: "John Doe",
    email: "johndoe@astu.edu.et",
    graduationYear: "2018",
    department: "Computer Science",
    employmentStatus: "Employed",
    jobTitle: "Software Engineer",
    jobLocation: "Addis Ababa",
    profilePicture: "https://via.placeholder.com/150",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [updatedProfile, setUpdatedProfile] = useState({ ...profile });

  const handleEditChange = (e) => {
    setUpdatedProfile({ ...updatedProfile, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUpdatedProfile({ ...updatedProfile, profilePicture: imageUrl });
    }
  };

  const handleSave = () => {
    setProfile(updatedProfile);
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen flex flex-col">
      {/* <Navbar /> */}
      <Sidebar/>
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 animate-fade-in-down">
          Your Profile
        </h1>

        {/* Profile Card */}
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-xl animate-fade-in">
          {/* Profile Header */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-gray-200 pb-4 sm:pb-6">
            <div className="relative">
              {isEditing ? (
                <label className="cursor-pointer">
                  <img
                    src={updatedProfile.profilePicture}
                    alt="Profile"
                    className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover shadow-md"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                  <span className="absolute bottom-0 right-0 bg-blue-600 text-white text-xs px-2 py-1 rounded-full transform translate-x-1 translate-y-1 hover:bg-blue-700 transition-colors duration-300">
                    Change
                  </span>
                </label>
              ) : (
                <img
                  src={profile.profilePicture}
                  alt="Profile"
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover shadow-md"
                />
              )}
            </div>
            <div className="text-center sm:text-left flex-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
                {profile.fullName}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg">{profile.email}</p>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg">{profile.graduationYear}</p>
            </div>
          </div>

          {/* Profile Details */}
          <div className="mt-4 sm:mt-6 space-y-6">
            {!isEditing ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { label: "Department", value: profile.department },
                  { label: "Employment Status", value: profile.employmentStatus },
                  ...(profile.employmentStatus === "Employed"
                    ? [
                      { label: "Job Title", value: profile.jobTitle },
                      { label: "Job Location", value: profile.jobLocation },
                    ]
                    : []),
                ].map((item, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="text-sm sm:text-base md:text-lg font-medium text-gray-700">
                      {item.label}:
                    </span>
                    <span className="text-gray-800 text-base sm:text-lg md:text-xl">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-gray-700 font-medium mb-2 text-sm sm:text-base md:text-lg"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={updatedProfile.fullName}
                    onChange={handleEditChange}
                    className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base md:text-lg"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2 text-sm sm:text-base md:text-lg"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={updatedProfile.email}
                    onChange={handleEditChange}
                    className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base md:text-lg"
                  />
                </div>
                <div>
                  <label
                    htmlFor="graduationYear"
                    className="block text-gray-700 font-medium mb-2 text-sm sm:text-base md:text-lg"
                  >
                    Graduation Year
                  </label>
                  <input
                    type="number"
                    id="graduationYear"
                    name="graduationYear"
                    value={updatedProfile.graduationYear}
                    onChange={handleEditChange}
                    className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base md:text-lg"
                  />
                </div>
                <div>
                  <label
                    htmlFor="department"
                    className="block text-gray-700 font-medium mb-2 text-sm sm:text-base md:text-lg"
                  >
                    Department
                  </label>
                  <select
                    id="department"
                    name="department"
                    value={updatedProfile.department}
                    onChange={handleEditChange}
                    className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-gray-600 text-sm sm:text-base md:text-lg"
                  >
                    <option value="Computer Science">Computer Science</option>
                    <option value="Software Engineering">Software Engineering</option>
                    <option value="Electrical Engineering">Electrical Engineering</option>
                    <option value="Mechanical Engineering">Mechanical Engineering</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="employmentStatus"
                    className="block text-gray-700 font-medium mb-2 text-sm sm:text-base md:text-lg"
                  >
                    Employment Status
                  </label>
                  <select
                    id="employmentStatus"
                    name="employmentStatus"
                    value={updatedProfile.employmentStatus}
                    onChange={handleEditChange}
                    className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-gray-600 text-sm sm:text-base md:text-lg"
                  >
                    <option value="Employed">Employed</option>
                    <option value="Unemployed">Unemployed</option>
                  </select>
                </div>
                {updatedProfile.employmentStatus === "Employed" && (
                  <>
                    <div>
                      <label
                        htmlFor="jobTitle"
                        className="block text-gray-700 font-medium mb-2 text-sm sm:text-base md:text-lg"
                      >
                        Job Title
                      </label>
                      <input
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        value={updatedProfile.jobTitle}
                        onChange={handleEditChange}
                        className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base md:text-lg"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="jobLocation"
                        className="block text-gray-700 font-medium mb-2 text-sm sm:text-base md:text-lg"
                      >
                        Job Location
                      </label>
                      <input
                        type="text"
                        id="jobLocation"
                        name="jobLocation"
                        value={updatedProfile.jobLocation}
                        onChange={handleEditChange}
                        className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base md:text-lg"
                      />
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8 justify-center">
              {!isEditing ? (
                <button
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] shadow-md"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Profile
                </button>
              ) : (
                <>
                  <button
                    className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold px-6 py-3 rounded-lg hover:from-green-700 hover:to-green-600 transition-all duration-300 transform hover:scale-[1.02] shadow-md"
                    onClick={handleSave}
                  >
                    Save Changes
                  </button>
                  <button
                    className="w-full sm:w-auto bg-gradient-to-r from-gray-600 to-gray-500 text-white font-semibold px-6 py-3 rounded-lg hover:from-gray-700 hover:to-gray-600 transition-all duration-300 transform hover:scale-[1.02] shadow-md"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default AlumniProfile;