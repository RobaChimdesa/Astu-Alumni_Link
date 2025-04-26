import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../../Components/Footer";
import axios from "axios";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.email || !formData.password) {
      setError("All fields are required!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/api/login/", {
        email: formData.email,
        password: formData.password,
      });

      console.log("Full Response:", response.data);

      localStorage.setItem("accessToken", response.data.access);
      localStorage.setItem("refreshToken", response.data.refresh);
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("userRole", response.data.role);
      localStorage.setItem("userEmail", response.data.email);
      localStorage.setItem("userName", response.data.full_name);

      setSuccess("Login Successful! Redirecting...");
      const roleToPath = {
        student: "/dashboard-student",
        alumni: "/dashboard-alumni",
        faculty: "/dashboard-faculty",
        admin: "/dashboard-admin",
        company: "/dashboard-company",
      };
      const role = response.data.role;
      const redirectPath = roleToPath[role] || "/";
      console.log("Role Received:", role);
      console.log("Redirect Path:", redirectPath);
      setTimeout(() => {
        console.log("Navigating to:", redirectPath);
        navigate(redirectPath);
      }, 1500);
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "Login failed. Please try again later.";
      setError(errorMessage);
      console.error("Login Error:", err.response?.data);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-gray-50 to-blue-50">
      <div className="flex flex-col items-center justify-center flex-grow p-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-8 animate-fade-in-down">
          Sign In
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-xl shadow-xl space-y-6 transform transition-all duration-300 animate-fade-in"
        >
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              required
              autoComplete="email"
              className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600"
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              required
              autoComplete="current-password"
              className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600"
              onChange={handleChange}
            />
          </div>

          <div className="text-right">
            <Link
              to="/password/reset"
              className="text-blue-600 hover:underline text-sm font-semibold"
            >
              Forgot Password?
            </Link>
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center bg-red-50 p-2 rounded-md animate-pulse">
              {error}
            </p>
          )}
          {success && (
            <p className="text-green-500 text-sm text-center bg-green-50 p-2 rounded-md animate-pulse">
              {success}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] shadow-md"
          >
            Sign In
          </button>

          <p className="text-gray-600 text-sm text-center">
            Don't have an account?{" "}
            <Link to="/signup/student" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
              Sign Up as Student
            </Link>{" "}
            |{" "}
            <Link to="/signup/alumni" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
              Alumni
            </Link>{" "}
            |{" "}
            <Link to="/signup/faculty" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
              Faculty
            </Link>{" "}
            |{" "}
            <Link to="/signup/company" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
              Company
            </Link>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;

