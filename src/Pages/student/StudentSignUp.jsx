// import React, { useState } from "react";
// import Footer from "../../Components/Footer";

// const StudentSignUp = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     studentId: "",
//     phoneNumber: "",
//     admissionYear: "",
//     graduationYear: "",
//     department: "",
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
//           Student Sign Up
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
//               <label htmlFor="studentId" className="block text-gray-700 font-medium mb-2">
//                 Student ID
//               </label>
//               <input
//                 type="text"
//                 id="studentId"
//                 name="studentId"
//                 placeholder="Enter your student ID"
//                 required
//                 className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600"
//                 onChange={handleChange}
//               />
//             </div>

//             <div>
//               <label htmlFor="phoneNumber" className="block text-gray-700 font-medium mb-2">
//                 Phone Number
//               </label>
//               <input
//                 type="text"
//                 id="phoneNumber"
//                 name="phoneNumber"
//                 placeholder="Enter your phone number"
//                 required
//                 className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600"
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           {/* Academic Information Section */}
//           <div className="space-y-4">
//             <h2 className="text-xl font-semibold text-blue-600 mb-2">Academic Information</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <label htmlFor="admissionYear" className="block text-gray-700 font-medium mb-2">
//                   Admission Year
//                 </label>
//                 <input
//                   type="number"
//                   id="admissionYear"
//                   name="admissionYear"
//                   placeholder="e.g., 2020"
//                   required
//                   className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600"
//                   onChange={handleChange}
//                 />
//               </div>

//               <div>
//                 <label htmlFor="graduationYear" className="block text-gray-700 font-medium mb-2">
//                   Graduation Year
//                 </label>
//                 <input
//                   type="number"
//                   id="graduationYear"
//                   name="graduationYear"
//                   placeholder="e.g., 2024"
//                   required
//                   className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600"
//                   onChange={handleChange}
//                 />
//               </div>
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

// export default StudentSignUp;





// import React, { useState } from "react";
// import Footer from "../../Components/Footer";

// const StudentSignUp = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     studentId: "",
//     phoneNumber: "",
//     admissionYear: "",
//     graduationYear: "",
//     department: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [error, setError] = useState("");
//   const [message, setMessage] = useState("");
//   const [isVerifying, setIsVerifying] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Verify Student Before Registration
//   const verifyStudent = async () => {
//     setIsVerifying(true);
//     setError("");
//     setMessage("");

//     try {
//       const response = await fetch("http://127.0.0.1:8000/api/verify-student/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           email: formData.email,
//           student_id: formData.studentId,
//         }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setMessage("Student verification successful! You can proceed.");
//         return true;
//       } else {
//         setError(data.message || "Verification failed. Please check your details.");
//         return false;
//       }
//     } catch (error) {
//       setError("Server error. Please try again later.");
//       return false;
//     } finally {
//       setIsVerifying(false);
//     }
//   };

//   // Handle Registration Form Submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setMessage("");

//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords do not match!");
//       return;
//     }

//     const isVerified = await verifyStudent();
//     if (!isVerified) return;

//     setIsSubmitting(true);
//     try {
//       const response = await fetch("http://127.0.0.1:8000/api/register-student/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setMessage("Registration successful! You can now log in.");
//         setFormData({
//           fullName: "",
//           email: "",
//           studentId: "",
//           phoneNumber: "",
//           admissionYear: "",
//           graduationYear: "",
//           department: "",
//           password: "",
//           confirmPassword: "",
//         });
//       } else {
//         setError(data.message || "Registration failed. Please try again.");
//       }
//     } catch (error) {
//       setError("Server error. Please try again later.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-gray-50 to-blue-50">
//       <div className="flex flex-col items-center justify-center flex-grow p-6">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-8">
//           Student Sign Up
//         </h1>

//         <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-xl shadow-xl space-y-6">
//           {/* Full Name */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">Full Name</label>
//             <input
//               type="text"
//               name="fullName"
//               placeholder="Enter your full name"
//               required
//               className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
//               onChange={handleChange}
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">Campus Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your campus email"
//               required
//               className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
//               onChange={handleChange}
//             />
//           </div>

//           {/* Student ID */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">Student ID</label>
//             <input
//               type="text"
//               name="studentId"
//               placeholder="Enter your student ID"
//               required
//               className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
//               onChange={handleChange}
//             />
//           </div>

//           {/* Phone Number */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
//             <input
//               type="text"
//               name="phoneNumber"
//               placeholder="Enter your phone number"
//               required
//               className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
//               onChange={handleChange}
//             />
//           </div>

//           {/* Academic Information */}
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-700 font-medium mb-2">Admission Year</label>
//               <input
//                 type="number"
//                 name="admissionYear"
//                 required
//                 className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                 onChange={handleChange}
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700 font-medium mb-2">Graduation Year</label>
//               <input
//                 type="number"
//                 name="graduationYear"
//                 required
//                 className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           {/* Department */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">Department</label>
//             <select
//               name="department"
//               required
//               className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
//               onChange={handleChange}
//             >
//               <option value="">Select Department</option>
//               <option value="Computer Science">Computer Science</option>
//               <option value="Software Engineering">Software Engineering</option>
//               <option value="Electrical Engineering">Electrical Engineering</option>
//               <option value="Mechanical Engineering">Mechanical Engineering</option>
//               <option value="Civil Engineering">Civil Engineering</option>
//               <option value="Biomedical Engineering">Biomedical Engineering</option>
//             </select>
//           </div>

//           {/* Password & Confirm Password */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">Password</label>
//             <input
//               type="password"
//               name="password"
//               required
//               className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
//               onChange={handleChange}
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-2">Confirm Password</label>
//             <input
//               type="password"
//               name="confirmPassword"
//               required
//               className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
//               onChange={handleChange}
//             />
//           </div>

//           {/* Messages */}
//           {error && <p className="text-red-500">{error}</p>}
//           {message && <p className="text-green-500">{message}</p>}

//           {/* Submit Button */}
//           <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg">
//             {isSubmitting ? "Registering..." : "Register"}
//           </button>
//         </form>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default StudentSignUp;


import React, { useState } from "react";
import axios from "axios";

const StudentSignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    studentId: "",
    phoneNumber: "",
    admissionYear: "",
    graduationYear: "",
    department: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate Password Match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setError("");
    
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register/", formData);
      if (response.data.status === "success") {
        setSuccessMessage("Registration successful! Redirecting to login...");
        setTimeout(() => {
          window.location.href = "/signin"; // Redirect to login page
        }, 2000);
      }
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-gray-50 to-blue-50">
      <div className="flex flex-col items-center justify-center flex-grow p-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-8">
          Student Sign Up
        </h1>

        <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-xl shadow-xl space-y-6">
          {/* Personal Information */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input type="text" name="fullName" required className="input-field" onChange={handleChange} />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Campus Email</label>
            <input type="email" name="email" required className="input-field" onChange={handleChange} />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Student ID</label>
            <input type="text" name="studentId" required className="input-field" onChange={handleChange} />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
            <input type="text" name="phoneNumber" required className="input-field" onChange={handleChange} />
          </div>

          {/* Academic Information */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Admission Year</label>
            <input type="number" name="admissionYear" required className="input-field" onChange={handleChange} />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Graduation Year</label>
            <input type="number" name="graduationYear" required className="input-field" onChange={handleChange} />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Department</label>
            <select name="department" required className="input-field" onChange={handleChange}>
              <option value="">Select Department</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Software Engineering">Software Engineering</option>
              <option value="Electrical Engineering">Electrical Engineering</option>
              <option value="Mechanical Engineering">Mechanical Engineering</option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Biomedical Engineering">Biomedical Engineering</option>
            </select>
          </div>

          {/* Password Section */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input type="password" name="password" required className="input-field" onChange={handleChange} />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Confirm Password</label>
            <input type="password" name="confirmPassword" required className="input-field" onChange={handleChange} />
          </div>

          {error && <p className="text-red-500">{error}</p>}
          {successMessage && <p className="text-green-500">{successMessage}</p>}

          <button type="submit" className="btn-primary">Register</button>
        </form>
      </div>
    </div>
  );
};

export default StudentSignUp;
