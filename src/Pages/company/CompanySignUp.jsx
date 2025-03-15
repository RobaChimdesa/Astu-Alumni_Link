import React, { useState } from "react";
import Footer from "../../Components/Footer";

const CompanySignUp = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    industryType: "",
    location: "",
    companySize: "",
    website: "",
    companyDescription: "",
    hrName: "",
    hrContact: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    setError("");
    alert("Company Registration Successful!");
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-gray-50 to-blue-50">
      <div className="flex flex-col items-center justify-center flex-grow p-6">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-8 animate-fade-in-down">
          Company Sign Up
        </h1>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white p-8 rounded-xl shadow-xl space-y-6 transform transition-all duration-300 animate-fade-in"
        >
          {/* Company Information Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Company Information</h2>
            <div>
              <label htmlFor="companyName" className="block text-gray-700 font-medium mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                placeholder="Enter company name"
                required
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Company Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter company email"
                required
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="industryType" className="block text-gray-700 font-medium mb-2">
                Industry Type
              </label>
              <select
                id="industryType"
                name="industryType"
                required
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-gray-600 placeholder-gray-400"
                onChange={handleChange}
              >
                <option value="">Select Industry Type</option>
                <option value="IT & Software">IT & Software</option>
                <option value="Finance & Banking">Finance & Banking</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="location" className="block text-gray-700 font-medium mb-2">
                Company Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Enter company location"
                required
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="companySize" className="block text-gray-700 font-medium mb-2">
                Company Size
              </label>
              <select
                id="companySize"
                name="companySize"
                required
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-gray-600 placeholder-gray-400"
                onChange={handleChange}
              >
                <option value="">Select Company Size</option>
                <option value="Small (1-50 employees)">Small (1-50 employees)</option>
                <option value="Medium (51-500 employees)">Medium (51-500 employees)</option>
                <option value="Large (500+ employees)">Large (500+ employees)</option>
              </select>
            </div>

            <div>
              <label htmlFor="website" className="block text-gray-700 font-medium mb-2">
                Company Website (Optional)
              </label>
              <input
                type="url"
                id="website"
                name="website"
                placeholder="Enter company website"
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="companyDescription" className="block text-gray-700 font-medium mb-2">
                Company Description
              </label>
              <textarea
                id="companyDescription"
                name="companyDescription"
                placeholder="Enter a brief company description"
                required
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 h-32 resize-none"
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          {/* HR Contact Information Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">HR Contact Information</h2>
            <div>
              <label htmlFor="hrName" className="block text-gray-700 font-medium mb-2">
                HR Representative Name
              </label>
              <input
                type="text"
                id="hrName"
                name="hrName"
                placeholder="Enter HR representative name"
                required
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="hrContact" className="block text-gray-700 font-medium mb-2">
                HR Contact Number
              </label>
              <input
                type="tel"
                id="hrContact"
                name="hrContact"
                placeholder="Enter HR contact number"
                required
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Password Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Create Password</h2>
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

            <div>
              <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                required
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600"
                onChange={handleChange}
              />
            </div>
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
            Register
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default CompanySignUp;