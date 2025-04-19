import React, { useState } from "react";
import Footer from "../../Components/Footer";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link for navigation

const StudentSignUp = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    student_id: "",
    phone_number: "",
    admission_year: "",
    graduation_year: "",
    department: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    console.log("Form Data Submitted:", formData);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/register/student/",
        {
          full_name: formData.full_name,
          email: formData.email,
          student_id: formData.student_id,
          phone_number: formData.phone_number,
          admission_year: parseInt(formData.admission_year),
          graduation_year: parseInt(formData.graduation_year),
          department: formData.department,
          password: formData.password,
          password2: formData.confirmPassword,
        }
      );

      setSuccess("The student has been successfully registered.");
      setFormData({
        full_name: "",
        email: "",
        student_id: "",
        phone_number: "",
        admission_year: "",
        graduation_year: "",
        department: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      const errorMessage =
        err.response?.data?.student_id?.[0] ||
        err.response?.data?.phone_number?.[0] ||
        err.response?.data?.non_field_errors?.[0] ||
        err.response?.data?.email?.[0] ||
        "Student registration failed. Please try again later.";
      setError(errorMessage);
      console.error("Error Response:", err.response?.data);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-gray-50 to-blue-50">
      <div className="flex flex-col items-center justify-center flex-grow p-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-8 animate-fade-in-down">
          Student Sign Up
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white p-8 rounded-xl shadow-xl space-y-6 transform transition-all duration-300 animate-fade-in"
        >
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Personal Information</h2>
            <div>
              <label htmlFor="full_name" className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                value={formData.full_name}
                placeholder="Enter your full name"
                required
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Campus Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="Enter your campus email"
                required
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="student_id" className="block text-gray-700 font-medium mb-2">
                Student ID (e.g., ugr/22682/13)
              </label>
              <input
                type="text"
                id="student_id"
                name="student_id"
                value={formData.student_id}
                placeholder="e.g., ugr/22682/13 or ugr/22682/1"
                required
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="phone_number" className="block text-gray-700 font-medium mb-2">
                Phone Number (e.g., +251912345678)
              </label>
              <input
                type="text"
                id="phone_number"
                name="phone_number"
                value={formData.phone_number}
                placeholder="e.g., +251912345678 (+2519 + 8 digits)"
                required
                autoComplete="tel"
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Academic Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="admission_year" className="block text-gray-700 font-medium mb-2">
                  Admission Year
                </label>
                <input
                  type="number"
                  id="admission_year"
                  name="admission_year"
                  value={formData.admission_year}
                  placeholder="e.g., 2020"
                  required
                  className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="graduation_year" className="block text-gray-700 font-medium mb-2">
                  Graduation Year
                </label>
                <input
                  type="number"
                  id="graduation_year"
                  name="graduation_year"
                  value={formData.graduation_year}
                  placeholder="e.g., 2024 or 2025"
                  required
                  className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="department" className="block text-gray-700 font-medium mb-2">
                Department
              </label>
              <select
                id="department"
                name="department"
                value={formData.department}
                required
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-gray-600 placeholder-gray-400"
                onChange={handleChange}
              >
                <option value="">Select Department</option>
                <option value="Computer Science">Computer Science (5 years)</option>
                <option value="Software Engineering">Software Engineering (5 years)</option>
                <option value="Electrical Engineering">Electrical Engineering (5 years)</option>
                <option value="Mechanical Engineering">Mechanical Engineering (5 years)</option>
                <option value="Civil Engineering">Civil Engineering (4 years)</option>
                <option value="Biomedical Engineering">Biomedical Engineering (4 years)</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Create Password</h2>
            <div>
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                Password (min 8 chars, with letter, number, special char)
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                placeholder="Enter your password"
                required
                autoComplete="new-password"
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                placeholder="Confirm your password"
                required
                autoComplete="new-password"
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600"
                onChange={handleChange}
              />
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center bg-red-50 p-2 rounded-md animate-pulse">
              {error}
            </p>
          )}
          {success && (
            <div className="text-green-500 text-sm text-center bg-green-50 p-2 rounded-md animate-pulse">
              <p>{success}</p>
              <Link
                to="/signin"
                className="text-blue-600 underline hover:text-blue-800 transition-colors duration-200"
              >
                Click here to log in
              </Link>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] shadow-md"
          >
            Register
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default StudentSignUp;