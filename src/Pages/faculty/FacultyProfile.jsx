import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Sidebar from "./Sidebar";

const FacultyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [facultyData, setFacultyData] = useState({
    profilePicture: "https://via.placeholder.com/150",
    fullName: "Dr. John Doe",
    email: "johndoe@astu.edu.et",
    department: "Computer Science",
    role: "Professor",
  });

  const handleChange = (e) => {
    setFacultyData({ ...facultyData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* <Navbar /> */}
      <Sidebar/>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">
          Faculty Profile
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-md">
          {/* Profile Picture */}
          <div className="flex flex-col items-center mb-6">
            <img
              src={facultyData.profilePicture}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover"
            />
            <h2 className="text-2xl font-semibold mt-4">{facultyData.fullName}</h2>
            <p className="text-gray-600">{facultyData.role} - {facultyData.department}</p>
          </div>

          {/* Profile Details */}
          {!isEditing ? (
            <div className="text-gray-700 text-lg space-y-4">
              <p><strong>Email:</strong> {facultyData.email}</p>
              <p><strong>Department:</strong> {facultyData.department}</p>
              <p><strong>Role:</strong> {facultyData.role}</p>
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
                name="fullName"
                value={facultyData.fullName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
              <input
                type="email"
                name="email"
                value={facultyData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
              <input
                type="text"
                name="department"
                value={facultyData.department}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
              <input
                type="text"
                name="role"
                value={facultyData.role}
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
      {/* <Footer /> */}
    </div>
  );
};

export default FacultyProfile;
