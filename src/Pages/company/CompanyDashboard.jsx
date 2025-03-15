import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const CompanyDashboard = () => {
  const dashboardItems = [
    { to: "/company/profile", text: "Company Profile", emoji: "🏢" },
    { to: "/company/post-job", text: "Post Job Listing", emoji: "📢" },
    { to: "/company/view-applications", text: "View Applications", emoji: "📄" },
    { to: "/company/internships", text: "Post Internships", emoji: "🎓" },
    { to: "/company/notifications", text: "Notifications", emoji: "🔔" },
    { to: "/company/event", text: "Event", emoji: "📅" },
  

  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-blue-700 text-center mb-6">
          Company Dashboard
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Post jobs, manage applications, and connect with top talent.
        </p>

        {/* Dashboard Navigation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dashboardItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4 hover:bg-blue-100 transition duration-300"
            >
              <span className="text-3xl">{item.emoji}</span>
              <span className="text-lg font-semibold">{item.text}</span>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CompanyDashboard;
