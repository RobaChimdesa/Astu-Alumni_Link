import React, { useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const ManageInternships = () => {
  // Sample internship data
  const [internships, setInternships] = useState([
    {
      id: 1,
      title: "Software Engineering Intern",
      company: "Google",
      location: "California, USA",
      duration: "3 Months",
      deadline: "April 30, 2024",
    },
    {
      id: 2,
      title: "Data Science Intern",
      company: "Microsoft",
      location: "Remote",
      duration: "6 Months",
      deadline: "May 15, 2024",
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

  // Handle input change
  const handleChange = (e) => {
    setNewInternship({ ...newInternship, [e.target.name]: e.target.value });
  };

  // Add new internship
  const handleAdd = () => {
    if (newInternship.title && newInternship.company) {
      setInternships([...internships, { ...newInternship, id: internships.length + 1 }]);
      setNewInternship({ title: "", company: "", location: "", duration: "", deadline: "" });
    } else {
      alert("Please fill in all fields.");
    }
  };

  // Edit internship
  const handleEdit = (index) => {
    setNewInternship(internships[index]);
    setEditIndex(index);
  };

  // Save edited internship
  const handleSave = () => {
    const updatedInternships = [...internships];
    updatedInternships[editIndex] = newInternship;
    setInternships(updatedInternships);
    setNewInternship({ title: "", company: "", location: "", duration: "", deadline: "" });
    setEditIndex(null);
  };

  // Delete internship
  const handleDelete = (id) => {
    setInternships(internships.filter((internship) => internship.id !== id));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">Manage Internships</h1>

        {/* Add Internship Form */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">{editIndex !== null ? "Edit Internship" : "Add Internship"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="title" placeholder="Internship Title" value={newInternship.title} onChange={handleChange} className="p-3 border rounded-md" />
            <input type="text" name="company" placeholder="Company" value={newInternship.company} onChange={handleChange} className="p-3 border rounded-md" />
            <input type="text" name="location" placeholder="Location" value={newInternship.location} onChange={handleChange} className="p-3 border rounded-md" />
            <input type="text" name="duration" placeholder="Duration" value={newInternship.duration} onChange={handleChange} className="p-3 border rounded-md" />
            <input type="date" name="deadline" placeholder="Application Deadline" value={newInternship.deadline} onChange={handleChange} className="p-3 border rounded-md" />
          </div>
          <button onClick={editIndex !== null ? handleSave : handleAdd} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            {editIndex !== null ? "Save Changes" : <><FaPlus className="inline mr-2" /> Add Internship</>}
          </button>
        </div>

        {/* Internship Table */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Internship Listings</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="border border-gray-300 p-3">Title</th>
                <th className="border border-gray-300 p-3">Company</th>
                <th className="border border-gray-300 p-3">Location</th>
                <th className="border border-gray-300 p-3">Duration</th>
                <th className="border border-gray-300 p-3">Deadline</th>
                <th className="border border-gray-300 p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {internships.map((internship, index) => (
                <tr key={internship.id} className="text-center">
                  <td className="border border-gray-300 p-3">{internship.title}</td>
                  <td className="border border-gray-300 p-3">{internship.company}</td>
                  <td className="border border-gray-300 p-3">{internship.location}</td>
                  <td className="border border-gray-300 p-3">{internship.duration}</td>
                  <td className="border border-gray-300 p-3">{internship.deadline}</td>
                  <td className="border border-gray-300 p-3 flex justify-center space-x-2">
                    <button onClick={() => handleEdit(index)} className="text-blue-600 hover:text-blue-800">
                      <FaEdit />
                    </button>
                    <button onClick={() => handleDelete(internship.id)} className="text-red-600 hover:text-red-800">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ManageInternships;
