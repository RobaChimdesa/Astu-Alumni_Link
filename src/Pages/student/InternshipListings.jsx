import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Sidebar from "./Sidebar";
const internshipsData = [
  { id: 1, title: "Software Development Intern", company: "TechCorp", location: "Addis Ababa", deadline: "March 30, 2024" },
  { id: 2, title: "Marketing Intern", company: "Adama Marketing Ltd", location: "Adama", deadline: "April 10, 2024" },
  { id: 3, title: "Mechanical Engineering Intern", company: "Hawassa Engineering", location: "Hawassa", deadline: "April 20, 2024" },
  { id: 4, title: "Electrical Engineering Intern", company: "Dire Dawa Electric", location: "Dire Dawa", deadline: "April 25, 2024" },
];

const InternshipListings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredInternships, setFilteredInternships] = useState(internshipsData);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    setFilteredInternships(
      internshipsData.filter(
        (internship) =>
          internship.title.toLowerCase().includes(value) ||
          internship.company.toLowerCase().includes(value) ||
          internship.location.toLowerCase().includes(value)
      )
    );
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen flex flex-col">
      {/* <Navbar /> */}
      <Sidebar/>
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 animate-fade-in-down">
          Internship Listings
        </h1>

        {/* Search Bar */}
        <div className="mb-6 sm:mb-8 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Search by title, company, or location..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base shadow-sm"
          />
        </div>

        {/* Internship Listings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 ml-24">
          {filteredInternships.length > 0 ? (
            filteredInternships.map((internship) => (
              <div
                key={internship.id}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-l-4 border-blue-500"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2 truncate">{internship.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base"><span className="font-medium">Company:</span> {internship.company}</p>
                <p className="text-gray-600 text-sm sm:text-base"><span className="font-medium">Location:</span> {internship.location}</p>
                <p className="text-gray-700 font-semibold text-sm sm:text-base mt-1"><span className="font-medium">Deadline:</span> {internship.deadline}</p>
                <button
                  className="mt-4 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md"
                  onClick={() => alert(`Application submitted for ${internship.title}`)}
                >
                  Apply Now
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center text-sm sm:text-base col-span-full py-6">No internships found matching your search.</p>
          )}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default InternshipListings;