// import React, { useState } from "react";
// import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
// import Navbar from "../../Components/Navbar";
// import Footer from "../../Components/Footer";

// const ManageInternships = () => {
//   // Sample internship data
//   const [internships, setInternships] = useState([
//     {
//       id: 1,
//       title: "Software Engineering Intern",
//       company: "Google",
//       location: "California, USA",
//       duration: "3 Months",
//       deadline: "April 30, 2024",
//     },
//     {
//       id: 2,
//       title: "Data Science Intern",
//       company: "Microsoft",
//       location: "Remote",
//       duration: "6 Months",
//       deadline: "May 15, 2024",
//     },
//   ]);

//   const [newInternship, setNewInternship] = useState({
//     title: "",
//     company: "",
//     location: "",
//     duration: "",
//     deadline: "",
//   });

//   const [editIndex, setEditIndex] = useState(null);

//   // Handle input change
//   const handleChange = (e) => {
//     setNewInternship({ ...newInternship, [e.target.name]: e.target.value });
//   };

//   // Add new internship
//   const handleAdd = () => {
//     if (newInternship.title && newInternship.company) {
//       setInternships([...internships, { ...newInternship, id: internships.length + 1 }]);
//       setNewInternship({ title: "", company: "", location: "", duration: "", deadline: "" });
//     } else {
//       alert("Please fill in all fields.");
//     }
//   };

//   // Edit internship
//   const handleEdit = (index) => {
//     setNewInternship(internships[index]);
//     setEditIndex(index);
//   };

//   // Save edited internship
//   const handleSave = () => {
//     const updatedInternships = [...internships];
//     updatedInternships[editIndex] = newInternship;
//     setInternships(updatedInternships);
//     setNewInternship({ title: "", company: "", location: "", duration: "", deadline: "" });
//     setEditIndex(null);
//   };

//   // Delete internship
//   const handleDelete = (id) => {
//     setInternships(internships.filter((internship) => internship.id !== id));
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Navbar />
//       <div className="max-w-6xl mx-auto px-6 py-12">
//         <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">Manage Internships</h1>

//         {/* Add Internship Form */}
//         <div className="bg-white p-6 rounded-lg shadow-md mb-6">
//           <h2 className="text-xl font-semibold text-gray-700 mb-4">{editIndex !== null ? "Edit Internship" : "Add Internship"}</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <input type="text" name="title" placeholder="Internship Title" value={newInternship.title} onChange={handleChange} className="p-3 border rounded-md" />
//             <input type="text" name="company" placeholder="Company" value={newInternship.company} onChange={handleChange} className="p-3 border rounded-md" />
//             <input type="text" name="location" placeholder="Location" value={newInternship.location} onChange={handleChange} className="p-3 border rounded-md" />
//             <input type="text" name="duration" placeholder="Duration" value={newInternship.duration} onChange={handleChange} className="p-3 border rounded-md" />
//             <input type="date" name="deadline" placeholder="Application Deadline" value={newInternship.deadline} onChange={handleChange} className="p-3 border rounded-md" />
//           </div>
//           <button onClick={editIndex !== null ? handleSave : handleAdd} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
//             {editIndex !== null ? "Save Changes" : <><FaPlus className="inline mr-2" /> Add Internship</>}
//           </button>
//         </div>

//         {/* Internship Table */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-xl font-semibold text-gray-700 mb-4">Internship Listings</h2>
//           <table className="w-full border-collapse border border-gray-300">
//             <thead>
//               <tr className="bg-blue-600 text-white">
//                 <th className="border border-gray-300 p-3">Title</th>
//                 <th className="border border-gray-300 p-3">Company</th>
//                 <th className="border border-gray-300 p-3">Location</th>
//                 <th className="border border-gray-300 p-3">Duration</th>
//                 <th className="border border-gray-300 p-3">Deadline</th>
//                 <th className="border border-gray-300 p-3">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {internships.map((internship, index) => (
//                 <tr key={internship.id} className="text-center">
//                   <td className="border border-gray-300 p-3">{internship.title}</td>
//                   <td className="border border-gray-300 p-3">{internship.company}</td>
//                   <td className="border border-gray-300 p-3">{internship.location}</td>
//                   <td className="border border-gray-300 p-3">{internship.duration}</td>
//                   <td className="border border-gray-300 p-3">{internship.deadline}</td>
//                   <td className="border border-gray-300 p-3 flex justify-center space-x-2">
//                     <button onClick={() => handleEdit(index)} className="text-blue-600 hover:text-blue-800">
//                       <FaEdit />
//                     </button>
//                     <button onClick={() => handleDelete(internship.id)} className="text-red-600 hover:text-red-800">
//                       <FaTrash />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default ManageInternships;

import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const ManageInternships = () => {
  const [internships, setInternships] = useState([
    {
      id: 1,
      title: "Software Engineering Intern",
      company: "Google",
      location: "California, USA",
      duration: "3 Months",
      deadline: "2024-04-30",
    },
    {
      id: 2,
      title: "Data Science Intern",
      company: "Microsoft",
      location: "Remote",
      duration: "6 Months",
      deadline: "2024-05-15",
    },
  ]);

  const [newInternship, setNewInternship] = useState({
    title: "",
    company: "",
    location: "",
    duration: "",
    deadline: "",
  });

  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setNewInternship({ ...newInternship, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (newInternship.title && newInternship.company) {
      setInternships([...internships, { ...newInternship, id: internships.length + 1 }]);
      setNewInternship({ title: "", company: "", location: "", duration: "", deadline: "" });
    } else {
      alert("Please fill in all required fields (Title and Company).");
    }
  };

  const handleEdit = (index) => {
    setNewInternship(internships[index]);
    setEditIndex(index);
  };

  const handleSave = () => {
    const updatedInternships = [...internships];
    updatedInternships[editIndex] = newInternship;
    setInternships(updatedInternships);
    setNewInternship({ title: "", company: "", location: "", duration: "", deadline: "" });
    setEditIndex(null);
  };

  const handleDelete = (id) => {
    setInternships(internships.filter((internship) => internship.id !== id));
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 max-w-[90rem] mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 tracking-tight animate-fade-in-down">
          Manage Internships
        </h1>

        {/* Add/Edit Internship Form Card */}
        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 animate-fade-in-up max-w-7xl mx-auto mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4 sm:mb-6 tracking-wide">
            {editIndex !== null ? "Edit Internship" : "Add Internship"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <input
              type="text"
              name="title"
              placeholder="Internship Title *"
              value={newInternship.title}
              onChange={handleChange}
              className="p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-sm sm:text-base"
            />
            <input
              type="text"
              name="company"
              placeholder="Company *"
              value={newInternship.company}
              onChange={handleChange}
              className="p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-sm sm:text-base"
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={newInternship.location}
              onChange={handleChange}
              className="p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-sm sm:text-base"
            />
            <input
              type="text"
              name="duration"
              placeholder="Duration"
              value={newInternship.duration}
              onChange={handleChange}
              className="p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-sm sm:text-base"
            />
            <input
              type="date"
              name="deadline"
              value={newInternship.deadline}
              onChange={handleChange}
              className="p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-sm sm:text-base"
            />
          </div>
          <button
            onClick={editIndex !== null ? handleSave : handleAdd}
            className="mt-4 sm:mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-5 sm:px-6 py-2 sm:py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.05] hover:shadow-lg text-sm sm:text-base flex items-center space-x-2"
          >
            {editIndex !== null ? (
              "Save Changes"
            ) : (
              <>
                <FaPlus /> <span>Add Internship</span>
              </>
            )}
          </button>
        </div>

        {/* Internships Table Card */}
        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 animate-fade-in-up max-w-7xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4 sm:mb-6 tracking-wide">
            Internship Listings
          </h2>
          {internships.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md">
                    <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200 rounded-tl-xl">
                      Title
                    </th>
                    <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200">
                      Company
                    </th>
                    <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200">
                      Location
                    </th>
                    <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200">
                      Duration
                    </th>
                    <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200">
                      Deadline
                    </th>
                    <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200 rounded-tr-xl">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {internships.map((internship, index) => (
                    <tr
                      key={internship.id}
                      className={`transition-colors duration-200 border border-gray-200 ${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      } hover:bg-blue-100 hover:shadow-md`}
                    >
                      <td className="p-3 sm:p-4 text-gray-800 text-sm sm:text-base font-medium border border-gray-200">
                        {internship.title}
                      </td>
                      <td className="p-3 sm:p-4 text-gray-800 text-sm sm:text-base font-medium border border-gray-200">
                        {internship.company}
                      </td>
                      <td className="p-3 sm:p-4 text-gray-800 text-sm sm:text-base font-medium border border-gray-200">
                        {internship.location}
                      </td>
                      <td className="p-3 sm:p-4 text-gray-800 text-sm sm:text-base font-medium border border-gray-200">
                        {internship.duration}
                      </td>
                      <td className="p-3 sm:p-4 text-gray-800 text-sm sm:text-base font-medium border border-gray-200">
                        {internship.deadline}
                      </td>
                      <td className="p-3 sm:p-4 border border-gray-200">
                        <div className="flex space-x-2 sm:space-x-3">
                          <button
                            onClick={() => handleEdit(index)}
                            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-4 sm:px-5 py-2 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.05] hover:shadow-lg text-sm sm:text-base flex items-center space-x-1"
                          >
                            <FaEdit /> <span>Edit</span>
                          </button>
                          <button
                            onClick={() => handleDelete(internship.id)}
                            className="bg-gradient-to-r from-red-500 to-rose-600 text-white font-semibold px-4 sm:px-5 py-2 rounded-lg hover:from-red-600 hover:to-rose-700 transition-all duration-300 transform hover:scale-[1.05] hover:shadow-lg text-sm sm:text-base flex items-center space-x-1"
                          >
                            <FaTrash /> <span>Delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-center text-gray-600 text-sm sm:text-base font-medium animate-fade-in">
              No internships available to manage.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ManageInternships;