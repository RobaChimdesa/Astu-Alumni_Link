import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Sidebar from "./Sidebar";

const FacultyProfile = () => {
  const [profile, setProfile] = useState({
    fullName: "Dr. Alice Johnson",
    email: "alice.johnson@astu.edu.et",
    department: "Software Engineering",
    role: "Associate Professor",
    qualification: "PhD in Computer Science",
    employmentYear: "2015",
    profilePicture: "https://via.placeholder.com/150",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [updatedProfile, setUpdatedProfile] = useState({ ...profile });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setUpdatedProfile({ ...updatedProfile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setProfile(updatedProfile);
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setUpdatedProfile({ ...updatedProfile, profilePicture: imageURL });
    }
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
          <div className="flex justify-center mb-4">
            <img
              src={updatedProfile.profilePicture}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-blue-500"
            />
          </div>

          {isEditing ? (
            <div className="space-y-4">
              <input
                type="text"
                name="fullName"
                value={updatedProfile.fullName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Full Name"
              />
              <input
                type="email"
                name="email"
                value={updatedProfile.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Email"
              />
              <select
                name="department"
                value={updatedProfile.department}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              >
                <option value="Software Engineering">Software Engineering</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Electrical Engineering">Electrical Engineering</option>
                <option value="Mechanical Engineering">Mechanical Engineering</option>
              </select>
              <input
                type="text"
                name="role"
                value={updatedProfile.role}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Role"
              />
              <input
                type="text"
                name="qualification"
                value={updatedProfile.qualification}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Qualification"
              />
              <input
                type="number"
                name="employmentYear"
                value={updatedProfile.employmentYear}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Year of Employment"
              />
              <input
                type="file"
                onChange={handleProfilePictureChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <button
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300"
                onClick={handleSave}
              >
                Save Changes
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-lg">
                <strong>Full Name:</strong> {profile.fullName}
              </p>
              <p className="text-lg">
                <strong>Email:</strong> {profile.email}
              </p>
              <p className="text-lg">
                <strong>Department:</strong> {profile.department}
              </p>
              <p className="text-lg">
                <strong>Role:</strong> {profile.role}
              </p>
              <p className="text-lg">
                <strong>Qualification:</strong> {profile.qualification}
              </p>
              <p className="text-lg">
                <strong>Employment Year:</strong> {profile.employmentYear}
              </p>
              <button
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                onClick={handleEditToggle}
              >
                Edit Profile
              </button>
            </div>
          )}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default FacultyProfile;
