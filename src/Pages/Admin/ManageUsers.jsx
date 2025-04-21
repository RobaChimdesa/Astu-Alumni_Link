import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheck, FaTrash } from "react-icons/fa";
import axios from "axios";
import Sidebar from "./Sidebar";

const ManageUsers = () => {
  const [companies, setCompanies] = useState({
    pending: [],
    approved: [],
    rejected: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCompanies = async () => {
      const token = localStorage.getItem("accessToken");
      console.log("Access Token:", token);
      if (!token) {
        setError("Please log in as an admin.");
        setLoading(false);
        setTimeout(() => navigate("/signin"), 2000);
        return;
      }

      try {
        const response = await axios.get("http://localhost:8000/api/companies/pending/", {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("API Response:", response.data);
        const groupedCompanies = {
          pending: [],
          approved: [],
          rejected: [],
        };
        response.data.forEach((company) => {
          const companyData = {
            id: company.user_id,
            name: company.company_name,
            role: "Company",
            email: company.email,
            status: company.status,
            industry_type: company.industry_type,
            created_at: company.created_at,
          };
          groupedCompanies[company.status].push(companyData);
        });
        setCompanies(groupedCompanies);
        setLoading(false);
      } catch (err) {
        setError("Failed to load: " + (err.response?.data?.message || err.message));
        setLoading(false);
        console.error("Fetch Error:", err.response?.data);
      }
    };
    fetchCompanies();
  }, [navigate]);

  const handleAction = async (id, action) => {
    const token = localStorage.getItem("accessToken");
    setError("");
    setSuccess("");
    try {
      const response = await axios.post(
        "http://localhost:8000/api/admin/approve-user/",
        { user_id: id, action },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSuccess(response.data.message);
      setCompanies((prev) => {
        const newCompanies = { ...prev };
        const sourceStatus = action === "approve" ? ["pending", "rejected"] : ["pending", "approved"];
        const targetStatus = action === "approve" ? "approved" : "rejected";
        for (const status of sourceStatus) {
          const company = newCompanies[status].find((c) => c.id === id);
          if (company) {
            newCompanies[status] = newCompanies[status].filter((c) => c.id !== id);
            newCompanies[targetStatus].push({ ...company, status: targetStatus });
            break;
          }
        }
        return newCompanies;
      });
    } catch (err) {
      setError("Failed to " + action + ": " + (err.response?.data?.message || err.message));
      console.error("Action Error:", err.response?.data);
    }
  };

  const renderCompanyList = (status, companies) => (
    <details className="mb-4" open={status === "pending"}>
      <summary className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-3 rounded-lg cursor-pointer font-semibold text-lg">
        {status.charAt(0).toUpperCase() + status.slice(1)} Companies ({companies.length})
      </summary>
      <div className="bg-white p-4 rounded-b-lg shadow-md">
        {companies.length === 0 ? (
          <p className="text-gray-600">No {status} companies.</p>
        ) : (
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left text-sm font-semibold border border-gray-200">Name</th>
                <th className="p-3 text-left text-sm font-semibold border border-gray-200">Email</th>
                <th className="p-3 text-left text-sm font-semibold border border-gray-200">Industry</th>
                <th className="p-3 text-left text-sm font-semibold border border-gray-200">Created At</th>
                <th className="p-3 text-left text-sm font-semibold border border-gray-200">Actions</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company, index) => (
                <tr
                  key={company.id}
                  className={`border border-gray-200 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-blue-100`}
                >
                  <td className="p-3 text-sm border border-gray-200">{company.name}</td>
                  <td className="p-3 text-sm border border-gray-200">{company.email}</td>
                  <td className="p-3 text-sm border border-gray-200">{company.industry_type}</td>
                  <td className="p-3 text-sm border border-gray-200">
                    {new Date(company.created_at).toLocaleDateString()}
                  </td>
                  <td className="p-3 border border-gray-200">
                    <div className="flex space-x-2">
                      {company.status === "pending" && (
                        <>
                          <button
                            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-lg hover:from-green-600 hover:to-emerald-700 flex items-center space-x-1 text-sm"
                            onClick={() => handleAction(company.id, "approve")}
                          >
                            <FaCheck /> <span>Approve</span>
                          </button>
                          <button
                            className="bg-gradient-to-r from-red-500 to-rose-600 text-white px-3 py-1 rounded-lg hover:from-red-600 hover:to-rose-700 flex items-center space-x-1 text-sm"
                            onClick={() => handleAction(company.id, "reject")}
                          >
                            <FaTrash /> <span>Reject</span>
                          </button>
                        </>
                      )}
                      {company.status === "approved" && (
                        <>
                          <button
                            className="bg-green-300 text-white px-3 py-1 rounded-lg cursor-not-allowed opacity-50 flex items-center space-x-1 text-sm"
                            disabled
                          >
                            <FaCheck /> <span>Approved</span>
                          </button>
                          <button
                            className="bg-gradient-to-r from-red-500 to-rose-600 text-white px-3 py-1 rounded-lg hover:from-red-600 hover:to-rose-700 flex items-center space-x-1 text-sm"
                            onClick={() => handleAction(company.id, "reject")}
                          >
                            <FaTrash /> <span>Reject</span>
                          </button>
                        </>
                      )}
                      {company.status === "rejected" && (
                        <>
                          <button
                            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-lg hover:from-green-600 hover:to-emerald-700 flex items-center space-x-1 text-sm"
                            onClick={() => handleAction(company.id, "approve")}
                          >
                            <FaCheck /> <span>Approve</span>
                          </button>
                          <button
                            className="bg-red-300 text-white px-3 py-1 rounded-lg cursor-not-allowed opacity-50 flex items-center space-x-1 text-sm"
                            disabled
                          >
                            <FaTrash /> <span>Rejected</span>
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </details>
  );

  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 min-h-screen flex flex-col">
      <Sidebar />
      <div className="flex-1 max-w-[90rem] mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 tracking-tight animate-fade-in-down">
          Manage Users
        </h1>
        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 animate-fade-in-up max-w-7xl mx-auto">
          {loading ? (
            <p className="text-center text-gray-600">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : success ? (
            <p className="text-center text-green-500 mb-4">{success}</p>
          ) : (
            <>
              {renderCompanyList("pending", companies.pending)}
              {renderCompanyList("approved", companies.approved)}
              {renderCompanyList("rejected", companies.rejected)}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;


