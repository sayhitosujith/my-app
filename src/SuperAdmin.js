import React, { useState, useMemo, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import { VscChevronDown } from "react-icons/vsc";
import {
  FaUsers,
  FaDollarSign,
  FaClipboardList,
  FaRegComments,
  FaCog,
  FaEdit,
  FaTrash,
  FaPlus,
  FaDownload,
  FaSearch,
  FaCalendarAlt,
  FaListUl,
} from "react-icons/fa";
import logo from "./assets/DutyDentist.png";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Legend);

// ✅ Centralized role list
const ROLE_OPTIONS = [
  "Super Admin",
  "Admin",
  "Doctor",
  "Nurse",
  "Head Nurse",
  "Receptionist",
  "Technician",
  "Engineer",
  "MD",
  "Supervisor",
  "Pharmacist",
  "Lab Technician",
  "HR",
  "Finance",
  "IT Support",
  "Radiologist",
];

export default function SuperAdmin({
  initialUsers = [],
  initialDoctors = [],
  initialRevenueChart = {},
}) {
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const user = JSON.parse(localStorage.getItem("user")) || { name: "Guest", initials: "G" };

  const [appointments, setAppointments] = useState(
    JSON.parse(localStorage.getItem("appointments")) || initialUsers
  );
  const [doctors, setDoctors] = useState(
    JSON.parse(localStorage.getItem("doctors")) || initialDoctors
  );
  const [showModal, setShowModal] = useState(false);
  const [editingAppointment, setEditingAppointment] = useState(null);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", role: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("table");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // Persist data
  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  useEffect(() => {
    localStorage.setItem("doctors", JSON.stringify(doctors));
  }, [doctors]);

  // Revenue calculations
  const totalRevenueAmount = (initialRevenueChart.analytics || []).reduce(
    (sum, amt) => sum + Number(amt || 0),
    0
  );

  const revenueData = {
    totalRevenue: `₹${totalRevenueAmount.toLocaleString()}`,
    totalDoctors: doctors.length,
    analytics: initialRevenueChart.analytics || [],
  };

  const chartData = {
    labels: initialRevenueChart.labels || [],
    datasets: [
      {
        label: "Revenue",
        data: revenueData.analytics,
        borderColor: "#22c55e",
        backgroundColor: "rgba(34,197,94,0.15)",
        borderWidth: 2,
        tension: 0.35,
        pointRadius: 0,
      },
    ],
  };

  const menuItems = [
    { label: "Home", icon: <FaClipboardList />, path: "/Customer_home" },
    { label: "Doctors", icon: <FaUsers />, path: "/DoctorList" },
    { label: "Patients", icon: <FaUsers />, path: "/PatientPortal" },
    { label: "Appointments", icon: <FaClipboardList />, path: "/AppointmentHistory" },
    { label: "Revenue", icon: <FaDollarSign />, path: "/Admin_Analytics" },
    { label: "Complaints", icon: <FaRegComments />, path: "/complaints" },
    { label: "Inventory", icon: <FaClipboardList />, path: "/DocumentCenter" },
    { label: "Settings", icon: <FaCog />, path: "/settings" },
  ];

  // --- CRUD ---
  const openCreateModal = () => {
    setEditingAppointment(null);
    setFormData({ name: "", phone: "", email: "", role: "" });
    setShowModal(true);
  };

  const openEditModal = (ap) => {
    setEditingAppointment(ap);
    setFormData({ ...ap });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingAppointment(null);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveAppointment = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.role) {
      alert("Please fill in all fields");
      return;
    }

    // Save phone in international format (+)
    const formattedPhone = formData.phone.startsWith("+")
      ? formData.phone
      : `+${formData.phone.replace(/\D/g, "")}`;
    const newData = { ...formData, phone: formattedPhone };

    if (editingAppointment) {
      setAppointments((prev) =>
        prev.map((ap) => (ap.id === editingAppointment.id ? newData : ap))
      );
    } else {
      setAppointments((prev) => [...prev, { id: Date.now(), ...newData }]);
    }

    setCurrentPage(1);
    closeModal();
  };

  const handleDeleteAppointment = (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    setAppointments((prev) => prev.filter((ap) => ap.id !== id));
  };

  // --- Search ---
  const filteredAppointments = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return appointments.filter((ap) =>
      (ap.name?.toLowerCase() || "").includes(term) ||
      (ap.phone || "").includes(term) ||
      (ap.email?.toLowerCase() || "").includes(term) ||
      (ap.role?.toLowerCase() || "").includes(term)
    );
  }, [appointments, searchTerm]);

  // Pagination
  const totalPages = Math.ceil(filteredAppointments.length / rowsPerPage);
  const paginatedAppointments = filteredAppointments.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // CSV Download
  const handleDownloadCSV = () => {
    const headers = ["User Name", "Phone", "Email", "Role"];
    const rows = filteredAppointments.map((ap) => [ap.name, ap.phone, ap.email, ap.role]);
    const csvContent = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "users.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[#ebe8e8] text-black flex flex-col">
        <div className="text-center py-6 font-bold border-b border-[#f5f3f3]">
          <img
            src={logo}
            alt="App Logo"
            className="absolute top-4 left-4 w-20 md:w-28 h-auto z-20"
          />
        </div>
        <ul className="mt-4 px-4 flex-1 space-y-1">
          {menuItems.map((item, i) => (
            <li key={i}>
              <button
                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-200 transition"
                onClick={() => navigate(item.path)}
              >
                {item.icon} {item.label}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-semibold">
            Welcome Back, <b>Super Admin</b>👋
          </h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-900 font-semibold rounded-full shadow-sm hover:bg-blue-100 transition"
              >
                <div className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold">
                  {user.initials}
                </div>
                <span>{user.name}</span>
                <VscChevronDown
                  className={`transition-transform ${
                    showProfileMenu ? "rotate-180" : ""
                  }`}
                />
              </button>
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg overflow-hidden z-10">
                  <button
                    onClick={() => navigate("/Profile")}
                    className="block w-full text-left px-4 py-3 hover:bg-blue-50 transition font-medium"
                  >
                    Edit Profile
                  </button>
                  <button
                    onClick={() => navigate("/Settings")}
                    className="block w-full text-left px-4 py-3 hover:bg-blue-50 transition font-medium"
                  >
                    Settings
                  </button>
                  <button
                    onClick={() => navigate("/Logout")}
                    className="block w-full text-left px-4 py-3 hover:bg-blue-50 transition font-medium text-red-600"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { label: "Total Revenue", value: revenueData.totalRevenue },
            { label: "Total Users", value: appointments.length },
            { label: "Total Doctors", value: doctors.length },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <p className="font-semibold text-gray-600">{stat.label}</p>
              <h2 className="text-3xl font-bold mt-1">{stat.value}</h2>
            </div>
          ))}
        </div>

        {/* Revenue Chart */}
        <div className="bg-white p-6 rounded-xl shadow mb-8">
          <Line data={chartData} height={70} />
        </div>

        {/* Users Table */}
        <div className="bg-white p-6 rounded-xl shadow mb-8">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex flex-wrap items-center gap-3">
              {/* Search with clear (X) */}
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
                <input
                  type="text"
                  placeholder="Search User"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-200 w-72"
                />
                {searchTerm && (
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setCurrentPage(1);
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-red-600 font-bold"
                    aria-label="Clear search"
                  >
                    ✕
                  </button>
                )}
              </div>

              <button
                onClick={() =>
                  setViewMode(viewMode === "table" ? "calendar" : "table")
                }
                className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
              >
                {viewMode === "table" ? (
                  <>
                    <FaCalendarAlt /> Calendar View
                  </>
                ) : (
                  <>
                    <FaListUl /> Table View
                  </>
                )}
              </button>

              <button
                onClick={openCreateModal}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                <FaPlus /> Add User
              </button>
            </div>

            <button
              onClick={handleDownloadCSV}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              <FaDownload /> Download CSV
            </button>
          </div>

          {viewMode === "table" ? (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead className="bg-gray-100 sticky top-0 z-10">
                  <tr>
                    <th className="p-3 text-left text-sm font-semibold text-gray-600">
                      User Name
                    </th>
                    <th className="p-3 text-left text-sm font-semibold text-gray-600">
                      Phone Number
                    </th>
                    <th className="p-3 text-left text-sm font-semibold text-gray-600">
                      Email ID
                    </th>
                    <th className="p-3 text-left text-sm font-semibold text-gray-600">
                      Role
                    </th>
                    <th className="p-3 text-right text-sm font-semibold text-gray-600">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedAppointments.length === 0 ? (
                    <tr>
                      <td
                        colSpan={5}
                        className="p-6 text-center text-gray-500"
                      >
                        No users found.
                      </td>
                    </tr>
                  ) : (
                    paginatedAppointments.map((ap) => (
                      <tr
                        key={ap.id}
                        className="border-b hover:bg-gray-50 transition"
                      >
                        <td className="p-3">{ap.name}</td>
                        <td className="p-3">
                          <PhoneInput
                            country={"in"}
                            value={ap.phone}
                            disabled
                            inputClass="w-full border-none p-0 focus:outline-none bg-transparent"
                            containerClass="w-full"
                            buttonClass="!bg-transparent !border-none"
                          />
                        </td>
                        <td className="p-3">{ap.email}</td>
                        <td className="p-3">
                          <select
                            value={ap.role}
                            onChange={(e) => {
                              const newRole = e.target.value;
                              setAppointments((prev) =>
                                prev.map((u) =>
                                  u.id === ap.id
                                    ? { ...u, role: newRole }
                                    : u
                                )
                              );
                            }}
                            className="border px-2 py-1 rounded-lg focus:outline-none focus:ring focus:ring-green-200"
                          >
                            {ROLE_OPTIONS.map((role) => (
                              <option key={role} value={role}>
                                {role}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td className="p-3 flex justify-end gap-3">
                          <button
                            onClick={() => openEditModal(ap)}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={() =>
                              handleDeleteAppointment(ap.id)
                            }
                            className="text-red-600 hover:text-red-800"
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-end items-center gap-2 mt-4 flex-wrap">
                  <button
                    onClick={() => setCurrentPage(1)}
                    disabled={currentPage === 1}
                    className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300 transition"
                  >
                    {"<<"} First
                  </button>

                  <button
                    onClick={() =>
                      setCurrentPage((p) => Math.max(p - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300 transition"
                  >
                    {"<"} Prev
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`px-3 py-1 rounded ${
                        currentPage === i + 1
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 hover:bg-gray-300"
                      } transition`}
                    >
                      {i + 1}
                    </button>
                  ))}

                  <button
                    onClick={() =>
                      setCurrentPage((p) =>
                        Math.min(p + 1, totalPages)
                      )
                    }
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300 transition"
                  >
                    Next {">"}
                  </button>

                  <button
                    onClick={() => setCurrentPage(totalPages)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300 transition"
                  >
                    Last {">>"}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="text-gray-500">
              Calendar view coming soon...
            </div>
          )}
        </div>
      </main>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">
              {editingAppointment ? "Edit User" : "Add User"}
            </h3>
            <form onSubmit={handleSaveAppointment} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-green-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone *
                </label>
                <PhoneInput
                  country={"in"}
                  value={formData.phone}
                  onChange={(phone) =>
                    setFormData((prev) => ({ ...prev, phone }))
                  }
                  inputClass="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-green-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-green-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Role *
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleFormChange}
                  className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-green-200 bg-white"
                >
                  <option value="">Select role</option>
                  {ROLE_OPTIONS.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
