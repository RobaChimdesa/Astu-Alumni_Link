import React, { useState } from "react";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { FaUserGraduate, FaChalkboardTeacher, FaUsers, FaBuilding, FaBriefcase, FaUserClock } from "react-icons/fa";

const MoreStatus = () => {
  // Sample Data
  const [userStats, setUserStats] = useState({
    students: 500,
    faculty: 120,
    alumni: 400,
    companies: 180,
    employedAlumni: 280,
    unemployedAlumni: 120,
  });

  // Data for Bar Chart
  const barData = [
    { name: "Students", value: userStats.students },
    { name: "Faculty", value: userStats.faculty },
    { name: "Alumni", value: userStats.alumni },
    { name: "Companies", value: userStats.companies },
  ];

  // Data for Pie Chart
  const pieData = [
    { name: "Employed Alumni", value: userStats.employedAlumni },
    { name: "Unemployed Alumni", value: userStats.unemployedAlumni },
  ];

  const COLORS = ["#4CAF50", "#FF5733"];

  return (
    <div className="bg-gray-100 min-h-screen">
   
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">User Status & Statistics</h1>

        {/* User Statistics Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
            <FaUserGraduate className="text-blue-700 text-4xl" />
            <div>
              <h2 className="text-xl font-semibold text-gray-700">Total Students</h2>
              <p className="text-2xl font-bold">{userStats.students}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
            <FaChalkboardTeacher className="text-green-600 text-4xl" />
            <div>
              <h2 className="text-xl font-semibold text-gray-700">Total Faculty</h2>
              <p className="text-2xl font-bold">{userStats.faculty}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
            <FaUsers className="text-purple-600 text-4xl" />
            <div>
              <h2 className="text-xl font-semibold text-gray-700">Total Alumni</h2>
              <p className="text-2xl font-bold">{userStats.alumni}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
            <FaBuilding className="text-orange-600 text-4xl" />
            <div>
              <h2 className="text-xl font-semibold text-gray-700">Total Companies</h2>
              <p className="text-2xl font-bold">{userStats.companies}</p>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Bar Chart */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">User Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#007BFF" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Alumni Employment Status</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={80} label>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreStatus;
