import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("All fields are required!");
      return;
    }

    setError("");

    // Simulating user authentication & redirecting based on role
    const userRole = getUserRole(formData.email);

    if (userRole) {
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("userRole", userRole);
      alert("Login Successful!");
      navigate(getRedirectPath(userRole));
    } else {
      setError("Invalid email or password.");
    }
  };

  // Mock function to determine role (replace with backend authentication)
  const getUserRole = (email) => {
    if (email.includes("@student.astu.edu")) return "student";
    if (email.includes("@alumni.astu.edu")) return "alumni";
    if (email.includes("@faculty.astu.edu")) return "faculty";
    if (email.includes("@company.com")) return "company";
    if (email.includes("@admin.astu.edu")) return "admin";
    return null;
  };

  // Redirect paths based on role
  const getRedirectPath = (role) => {
    switch (role) {
      case "student":
        return "/dashboard-student";
      case "alumni":
        return "/dashboard-alumni";
      case "faculty":
        return "/dashboard-faculty";
      case "company":
        return "/dashboard-company";
      case "admin":
        return "/admin-panel";
      default:
        return "/";
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-gray-50 to-blue-50">
      <div className="flex flex-col items-center justify-center flex-grow p-6">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-8 animate-fade-in-down">
          Sign In
        </h1>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-xl shadow-xl space-y-6 transform transition-all duration-300 animate-fade-in"
        >
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600"
              onChange={handleChange}
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600"
              onChange={handleChange}
            />
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm text-center bg-red-50 p-2 rounded-md animate-pulse">
              {error}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] shadow-md"
          >
            Sign In
          </button>

          {/* Sign Up Link */}
          <p className="text-gray-600 text-sm text-center">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
              Sign Up
            </a>
          </p>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default SignIn;