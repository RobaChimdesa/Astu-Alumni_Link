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



import React, { useState } from "react";
import Footer from "../../Components/Footer";

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

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setError("");
    setSuccess("");

    try {
      const response = await fetch("http://localhost:8000/api/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: formData.full_name,
          email: formData.email,
          student_id: formData.student_id,
          phone_number: formData.phone_number,
          admission_year: formData.admission_year,
          graduation_year: formData.graduation_year,
          department: formData.department,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Registration Successful! Please verify your email.");
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
      } else {
        setError(data.email || data.student_id || data.error || "Registration failed!");
      }
    } catch (err) {
      setError("Failed to connect to server. Please try again.");
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
            <input type="text" name="full_name" value={formData.full_name} placeholder="Full Name" required className="w-full p-4 border border-gray-200 rounded-lg" onChange={handleChange} />
            <input type="email" name="email" value={formData.email} placeholder="Campus Email" required className="w-full p-4 border border-gray-200 rounded-lg" onChange={handleChange} />
            <input type="text" name="student_id" value={formData.student_id} placeholder="Student ID" required className="w-full p-4 border border-gray-200 rounded-lg" onChange={handleChange} />
            <input type="text" name="phone_number" value={formData.phone_number} placeholder="Phone Number" required className="w-full p-4 border border-gray-200 rounded-lg" onChange={handleChange} />
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Academic Information</h2>
            <input type="number" name="admission_year" value={formData.admission_year} placeholder="Admission Year" required className="w-full p-4 border border-gray-200 rounded-lg" onChange={handleChange} />
            <input type="number" name="graduation_year" value={formData.graduation_year} placeholder="Graduation Year" required className="w-full p-4 border border-gray-200 rounded-lg" onChange={handleChange} />
            <input type="text" name="department" value={formData.department} placeholder="Department" required className="w-full p-4 border border-gray-200 rounded-lg" onChange={handleChange} />
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Create Password</h2>
            <input type="password" name="password" value={formData.password} placeholder="Password" required className="w-full p-4 border border-gray-200 rounded-lg" onChange={handleChange} />
            <input type="password" name="confirmPassword" value={formData.confirmPassword} placeholder="Confirm Password" required className="w-full p-4 border border-gray-200 rounded-lg" onChange={handleChange} />
          </div>

          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}

          <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-4 rounded-lg hover:bg-blue-700">
            Register
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default StudentSignUp;
