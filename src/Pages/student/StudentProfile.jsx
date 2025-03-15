import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const StudentProfile = () => {
  // Sample student data with a placeholder image
  const [studentData, setStudentData] = useState({
    fullName: "John Doe",
    email: "john.doe@astu.edu.et",
    studentId: "ASTU12345",
    admissionYear: "2021",
    graduationYear: "2025",
    department: "Computer Science",
    phoneNumber: "0912345678",
    profileImage: "https://via.placeholder.com/150", // Placeholder image
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(studentData);

  const handleEditChange = (e) => {
    setEditedData({ ...editedData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setEditedData({ ...editedData, profileImage: imageUrl });
    }
  };

  const handleSave = () => {
    setStudentData(editedData);
    setIsEditing(false);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen flex flex-col">
      <Navbar />
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
                    src={editedData.profileImage}
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
                  src={studentData.profileImage}
                  alt="Profile"
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover shadow-md"
                />
              )}
            </div>
            <div className="text-center sm:text-left flex-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">{studentData.fullName}</h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg">{studentData.email}</p>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg">{studentData.studentId}</p>
            </div>
          </div>

          {/* Profile Details */}
          <div className="mt-4 sm:mt-6 space-y-6">
            {!isEditing ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { label: "Admission Year", value: studentData.admissionYear },
                  { label: "Graduation Year", value: studentData.graduationYear },
                  { label: "Department", value: studentData.department },
                  { label: "Phone Number", value: studentData.phoneNumber },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="text-sm sm:text-base md:text-lg font-medium text-gray-700">{item.label}:</span>
                    <span className="text-gray-800 text-base sm:text-lg md:text-xl">{item.value}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base md:text-lg">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={editedData.fullName}
                    onChange={handleEditChange}
                    className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base md:text-lg"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base md:text-lg">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={editedData.email}
                    onChange={handleEditChange}
                    className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base md:text-lg"
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base md:text-lg">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={editedData.phoneNumber}
                    onChange={handleEditChange}
                    className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base md:text-lg"
                  />
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
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
      <Footer />
    </div>
  );
};

export default StudentProfile;