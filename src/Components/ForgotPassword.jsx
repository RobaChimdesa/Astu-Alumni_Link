import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// import Footer from "../../Components/Footer";
import Footer from "../Components/Footer";

import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email) {
      setError("Email is required!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/api/password/reset/", {
        email,
      });
      setSuccess("Password reset email sent! Check your inbox.");
      setTimeout(() => navigate("/signin"), 3000);
    } catch (err) {
      const errorMessage =
        err.response?.data?.detail || "Failed to send reset email. Please try again.";
      setError(errorMessage);
      console.error("Reset Error:", err.response?.data);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-gray-50 to-blue-50">
      <div className="flex flex-col items-center justify-center flex-grow p-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-8 animate-fade-in-down">
          Forgot Password
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600"
            />
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
            Send Reset Email
          </button>

          <p className="text-gray-600 text-sm text-center">
            Back to{" "}
            <Link to="/signin" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
              Sign In
            </Link>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPassword;