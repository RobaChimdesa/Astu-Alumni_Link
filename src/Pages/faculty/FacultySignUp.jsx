// import React, { useState } from "react";
// import Footer from "../../Components/Footer";

// const FacultySignUp = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     employmentYear: "",
//     qualification: "",
//     campusRole: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords do not match!");
//       return;
//     }
//     setError("");
//     alert("Registration Successful!");
//     console.log(formData);
//   };

//   return (
//     <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-gray-50 to-blue-50">
//       <div className="flex flex-col items-center justify-center flex-grow p-6">
//         {/* Title */}
//         <h1 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-8 animate-fade-in-down">
//           Faculty Sign Up
//         </h1>

//         {/* Form */}
//         <form
//           onSubmit={handleSubmit}
//           className="w-full max-w-lg bg-white p-8 rounded-xl shadow-xl space-y-6 transform transition-all duration-300 animate-fade-in"
//         >
//           {/* Personal Information Section */}
//           <div className="space-y-4">
//             <h2 className="text-xl font-semibold text-blue-600 mb-2">Personal Information</h2>
//             <div>
//               <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 id="fullName"
//                 name="fullName"
//                 placeholder="Enter your full name"
//                 required
//                 className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600"
//                 onChange={handleChange}
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
//                 Campus Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Enter your campus email"
//                 required
//                 className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600"
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           {/* Professional Information Section */}
//           <div className="space-y-4">
//             <h2 className="text-xl font-semibold text-blue-600 mb-2">Professional Information</h2>
//             <div>
//               <label htmlFor="employmentYear" className="block text-gray-700 font-medium mb-2">
//                 Year of Employment
//               </label>
//               <input
//                 type="number"
//                 id="employmentYear"
//                 name="employmentYear"
//                 placeholder="e.g., 2015"
//                 required
//                 className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600"
//                 onChange={handleChange}
//               />
//             </div>

//             <div>
//               <label htmlFor="qualification" className="block text-gray-700 font-medium mb-2">
//                 Qualification
//               </label>
//               <select
//                 id="qualification"
//                 name="qualification"
//                 required
//                 className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-gray-600 placeholder-gray-400"
//                 onChange={handleChange}
//               >
//                 <option value="">Select Qualification</option>
//                 <option value="Bachelor's Degree">Bachelor's Degree</option>
//                 <option value="Master's Degree">Master's Degree</option>
//                 <option value="PhD">PhD</option>
//               </select>
//             </div>

//             <div>
//               <label htmlFor="campusRole" className="block text-gray-700 font-medium mb-2">
//                 Role in Campus
//               </label>
//               <select
//                 id="campusRole"
//                 name="campusRole"
//                 required
//                 className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-gray-600 placeholder-gray-400"
//                 onChange={handleChange}
//               >
//                 <option value="">Select Role in Campus</option>
//                 <option value="Professor">Professor</option>
//                 <option value="Lecturer">Lecturer</option>
//                 <option value="Researcher">Researcher</option>
//                 <option value="Administrator">Administrator</option>
//               </select>
//             </div>
//           </div>

//           {/* Password Section */}
//           <div className="space-y-4">
//             <h2 className="text-xl font-semibold text-blue-600 mb-2">Create Password</h2>
//             <div>
//               <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 placeholder="Enter your password"
//                 required
//                 className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600"
//                 onChange={handleChange}
//               />
//             </div>

//             <div>
//               <label htmlFor="confirmPassword" className="block text-gutter-gray-700 font-medium mb-2">
//                 Confirm Password
//               </label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 placeholder="Confirm your password"
//                 required
//                 className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600"
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           {/* Error Message */}
//           {error && (
//             <p className="text-red-500 text-sm text-center bg-red-50 p-2 rounded-md animate-pulse">
//               {error}
//             </p>
//           )}

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] shadow-md"
//           >
//             Register
//           </button>
//         </form>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default FacultySignUp;

import React, { useState } from "react";
import Footer from "../../Components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";

const FacultySignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    employmentYear: "",
    qualification: "",
    campusRole: "",
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
    try {
      const response = await axios.post("http://localhost:8000/api/register/faculty/", {
        full_name: formData.fullName,
        email: formData.email,
        employment_year: parseInt(formData.employmentYear),
        qualification: formData.qualification,
        campus_role: formData.campusRole,
        password: formData.password,
        password2: formData.confirmPassword,
      });

      setSuccess("The faculty has been successfully registered.");
      setFormData({
        fullName: "",
        email: "",
        employmentYear: "",
        qualification: "",
        campusRole: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      const errorMessage =
        err.response?.data?.non_field_errors?.[0] ||
        err.response?.data?.email?.[0] ||
        "Faculty registration failed. Please try again later.";
      setError(errorMessage);
      console.error("Error Response:", err.response?.data);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-gray-50 to-blue-50">
      <div className="flex flex-col items-center justify-center flex-grow p-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-8 animate-fade-in-down">
          Faculty Sign Up
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white p-8 rounded-xl shadow-xl space-y-6 transform transition-all duration-300 animate-fade-in"
        >
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Personal Information</h2>
            <div>
              <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
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
                autoComplete="email"
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Professional Information</h2>
            <div>
              <label htmlFor="employmentYear" className="block text-gray-700 font-medium mb-2">
                Year of Employment
              </label>
              <input
                type="number"
                id="employmentYear"
                name="employmentYear"
                value={formData.employmentYear}
                placeholder="e.g., 2015"
                required
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="qualification" className="block text-gray-700 font-medium mb-2">
                Qualification
              </label>
              <select
                id="qualification"
                name="qualification"
                value={formData.qualification}
                required
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-gray-600 placeholder-gray-400"
                onChange={handleChange}
              >
                <option value="">Select Qualification</option>
                <option value="Bachelor's Degree">Bachelor's Degree</option>
                <option value="Master's Degree">Master's Degree</option>
                <option value="PhD">PhD</option>
              </select>
            </div>

            <div>
              <label htmlFor="campusRole" className="block text-gray-700 font-medium mb-2">
                Role in Campus
              </label>
              <select
                id="campusRole"
                name="campusRole"
                value={formData.campusRole}
                required
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-gray-600 placeholder-gray-400"
                onChange={handleChange}
              >
                <option value="">Select Role in Campus</option>
                <option value="Professor">Professor</option>
                <option value="Lecturer">Lecturer</option>
                <option value="Researcher">Researcher</option>
                <option value="Administrator">Administrator</option>
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
                placeholder="e.g., Passw0rd!"
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

export default FacultySignUp;