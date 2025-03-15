import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [userType, setUserType] = useState(""); // Store user type selection
  const navigate = useNavigate(); // Hook for navigation

  const handleSignUp = () => {
    if (userType) {
      navigate(`/signup/${userType}`); // Redirect based on user type
    } else {
      alert("Please select a user type.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-50 to-blue-50 px-4 py-12">
      <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-xl animate-fade-in-down">
        {/* Motivational Section */}
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
          Join ASTUALUMNILINK Today!
        </h1>
        <p className="text-gray-600 text-center mb-8 max-w-md mx-auto leading-relaxed">
          Connect with alumni, students, faculty, and industry professionals. Expand your network, explore opportunities, and collaborate to build a stronger ASTU community.
        </p>

        {/* User Role Information */}
        <h2 className="text-2xl font-semibold text-blue-600 mb-6 text-center">
          Choose Your Role
        </h2>
        <div className="mb-8 space-y-4">
          {[
            { role: "🎓 Student", desc: "Find mentors, internships, and job opportunities." },
            { role: "👩‍🎓 Alumni", desc: "Connect with students, share knowledge, and offer mentorship." },
            { role: "📚 Faculty", desc: "Guide students and collaborate with alumni & industry partners." },
            { role: "🏢 Company", desc: "Post jobs, recruit top talent, and offer internships." },
          ].map(({ role, desc }, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-blue-500"
            >
              <strong className="text-blue-600">{role}:</strong>
              <p className="text-gray-600 mt-1">{desc}</p>
            </div>
          ))}
        </div>

        {/* Role Selection Dropdown */}
        <label htmlFor="userType" className="block text-gray-700 font-medium mb-2 text-center">
          Select User Type
        </label>
        <select
          id="userType"
          className="w-full p-4 border border-gray-200 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-gray-600"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
        >
          <option value="">-- Choose User Type --</option>
          <option value="student">Student</option>
          <option value="alumni">Alumni</option>
          <option value="faculty">Faculty</option>
          <option value="company">Company</option>
        </select>

        {/* Continue Button */}
        <button
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-6 py-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] shadow-md"
          onClick={handleSignUp}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SignUp;