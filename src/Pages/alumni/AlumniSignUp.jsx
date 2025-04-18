// import React, { useState } from "react";
// import Footer from "../../Components/Footer";

// const AlumniSignUp = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     alumniId: "",
//     graduationYear: "",
//     department: "",
//     status: "",
//     jobTitle: "",
//     jobLocation: "",
//     jobField: "",
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
//           Alumni Sign Up
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

//             <div>
//               <label htmlFor="alumniId" className="block text-gray-700 font-medium mb-2">
//                 Alumni ID
//               </label>
//               <input
//                 type="text"
//                 id="alumniId"
//                 name="alumniId"
//                 placeholder="Enter your alumni ID"
//                 required
//                 className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600"
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           {/* Academic Information Section */}
//           <div className="space-y-4">
//             <h2 className="text-xl font-semibold text-blue-600 mb-2">Academic Information</h2>
//             <div>
//               <label htmlFor="graduationYear" className="block text-gray-700 font-medium mb-2">
//                 Graduation Year
//               </label>
//               <input
//                 type="number"
//                 id="graduationYear"
//                 name="graduationYear"
//                 placeholder="e.g., 2018"
//                 required
//                 className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600"
//                 onChange={handleChange}
//               />
//             </div>

//             <div>
//               <label htmlFor="department" className="block text-gray-700 font-medium mb-2">
//                 Department
//               </label>
//               <select
//                 id="department"
//                 name="department"
//                 required
//                 className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-gray-600 placeholder-gray-400"
//                 onChange={handleChange}
//               >
//                 <option value="">Select Department</option>
//                 <option value="Computer Science">Computer Science</option>
//                 <option value="Software Engineering">Software Engineering</option>
//                 <option value="Electrical Engineering">Electrical Engineering</option>
//                 <option value="Mechanical Engineering">Mechanical Engineering</option>
//                 <option value="Civil Engineering">Civil Engineering</option>
//                 <option value="Biomedical Engineering">Biomedical Engineering</option>
//               </select>
//             </div>
//           </div>

//           {/* Employment Information Section */}
//           <div className="space-y-4">
//             <h2 className="text-xl font-semibold text-blue-600 mb-2">Employment Information</h2>
//             <div>
//               <label htmlFor="status" className="block text-gray-700 font-medium mb-2">
//                 Employment Status
//               </label>
//               <select
//                 id="status"
//                 name="status"
//                 required
//                 className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-gray-600 placeholder-gray-400"
//                 onChange={handleChange}
//               >
//                 <option value="">Select Employment Status</option>
//                 <option value="Employed">Employed</option>
//                 <option value="Unemployed">Unemployed</option>
//               </select>
//             </div>

//             {formData.status === "Employed" && (
//               <div className="space-y-4">
//                 <div>
//                   <label htmlFor="jobTitle" className="block text-gray-700 font-medium mb-2">
//                     Job Title
//                   </label>
//                   <input
//                     type="text"
//                     id="jobTitle"
//                     name="jobTitle"
//                     placeholder="Enter your job title"
//                     required
//                     className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600"
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="jobLocation" className="block text-gray-700 font-medium mb-2">
//                     Job Location
//                   </label>
//                   <input
//                     type="text"
//                     id="jobLocation"
//                     name="jobLocation"
//                     placeholder="Enter your job location"
//                     required
//                     className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600"
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="jobField" className="block text-gray-700 font-medium mb-2">
//                     Job Field
//                   </label>
//                   <select
//                     id="jobField"
//                     name="jobField"
//                     required
//                     className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-gray-600 placeholder-gray-400"
//                     onChange={handleChange}
//                   >
//                     <option value="">Select Job Field</option>
//                     <option value="Same as Learned Department">Same as Learned Department</option>
//                     <option value="Other Fields">Other Fields</option>
//                   </select>
//                 </div>
//               </div>
//             )}
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
//               <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
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

// export default AlumniSignUp;

import React, { useState } from "react";
import Footer from "../../Components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";

const AlumniSignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    alumniId: "",
    graduationYear: "",
    department: "",
    status: "",
    jobTitle: "",
    jobLocation: "",
    jobField: "",
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
      const response = await axios.post(
        "http://localhost:8000/api/register/alumni/",
        {
          full_name: formData.fullName,
          email: formData.email,
          alumni_id: formData.alumniId,
          phone_number: null, // Optional field, not in your form yet
          graduation_year: parseInt(formData.graduationYear),
          department: formData.department,
          status: formData.status,
          job_title: formData.jobTitle,
          job_location: formData.jobLocation,
          job_field: formData.jobField,
          password: formData.password,
          password2: formData.confirmPassword,
        }
      );

      setSuccess("The alumni has been successfully registered.");
      setFormData({
        fullName: "",
        email: "",
        alumniId: "",
        graduationYear: "",
        department: "",
        status: "",
        jobTitle: "",
        jobLocation: "",
        jobField: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      const errorMessage =
        err.response?.data?.alumni_id?.[0] ||
        err.response?.data?.email?.[0] ||
        err.response?.data?.non_field_errors?.[0] ||
        "Alumni registration failed. Please try again later.";
      setError(errorMessage);
      console.error("Error Response:", err.response?.data);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-gray-50 to-blue-50">
      <div className="flex flex-col items-center justify-center flex-grow p-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-8 animate-fade-in-down">
          Alumni Sign Up
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
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="alumniId" className="block text-gray-700 font-medium mb-2">
                Alumni ID
              </label>
              <input
                type="text"
                id="alumniId"
                name="alumniId"
                value={formData.alumniId}
                placeholder="e.g., ugr/22682/13"
                required
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Academic Information</h2>
            <div>
              <label htmlFor="graduationYear" className="block text-gray-700 font-medium mb-2">
                Graduation Year
              </label>
              <input
                type="number"
                id="graduationYear"
                name="graduationYear"
                value={formData.graduationYear}
                placeholder="e.g., 2018"
                required
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600"
                onChange={handleChange}
              />
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
                <option value="Computer Science">Computer Science</option>
                <option value="Software Engineering">Software Engineering</option>
                <option value="Electrical Engineering">Electrical Engineering</option>
                <option value="Mechanical Engineering">Mechanical Engineering</option>
                <option value="Civil Engineering">Civil Engineering</option>
                <option value="Biomedical Engineering">Biomedical Engineering</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Employment Information</h2>
            <div>
              <label htmlFor="status" className="block text-gray-700 font-medium mb-2">
                Employment Status
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                required
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-gray-600 placeholder-gray-400"
                onChange={handleChange}
              >
                <option value="">Select Employment Status</option>
                <option value="Employed">Employed</option>
                <option value="Unemployed">Unemployed</option>
              </select>
            </div>

            {formData.status === "Employed" && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="jobTitle" className="block text-gray-700 font-medium mb-2">
                    Job Title
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    placeholder="Enter your job title"
                    required
                    className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="jobLocation" className="block text-gray-700 font-medium mb-2">
                    Job Location
                  </label>
                  <input
                    type="text"
                    id="jobLocation"
                    name="jobLocation"
                    value={formData.jobLocation}
                    placeholder="Enter your job location"
                    required
                    className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="jobField" className="block text-gray-700 font-medium mb-2">
                    Job Field
                  </label>
                  <select
                    id="jobField"
                    name="jobField"
                    value={formData.jobField}
                    required
                    className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-gray-600 placeholder-gray-400"
                    onChange={handleChange}
                  >
                    <option value="">Select Job Field</option>
                    <option value="Same as Learned Department">Same as Learned Department</option>
                    <option value="Other Fields">Other Fields</option>
                  </select>
                </div>
              </div>
            )}
          </div>

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

export default AlumniSignUp;