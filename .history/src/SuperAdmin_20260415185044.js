import React, { useState, useMemo, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useNavigate, Link } from "react-router-dom";

import { VscChevronDown, VscChip } from "react-icons/vsc";
import {
  FaClone,
  FaCreditCard,
  FaEdit,
  FaTrash,
  FaDownload,
  FaSearch,
} from "react-icons/fa";
import { LuUserRoundSearch } from "react-icons/lu";
import {
  MdOutlineEditNote,
  MdOutlineSettings,
  MdOutlinePowerSettingsNew,
} from "react-icons/md";

import { Typography, Breadcrumbs } from "@material-tailwind/react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

const ROLE_OPTIONS = [
  "Super Admin",
  "Admin",
  "Doctor",
  "Nurse",
  "Receptionist",
  "Technician",
  "Pharmacist",
  "Lab Technician",
  "HR",
  "Finance",
  "IT Support",
  "Patient",
];

export default function SuperAdmin({ initialDoctors = [] }) {
  const navigate = useNavigate();

  const user =
    JSON.parse(localStorage.getItem("user")) || {
      name: "Guest",
      initials: "G",
    };

  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState(
    JSON.parse(localStorage.getItem("doctors")) || initialDoctors
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 10;

  /* ---------------- LOAD USERS ---------------- */
  useEffect(() => {
    const loadUsers = () => {
      const registeredUsers =
        JSON.parse(localStorage.getItem("registeredUsers")) || [];
      const savedUsers =
        JSON.parse(localStorage.getItem("appointments")) || [];

      const formatted = registeredUsers.map((u) => ({
        id: u.email,
        name: `${u.firstName || ""} ${u.lastName || ""}`.trim(),
        phone: u.phoneNumber || "",
        email: u.email,
        password: u.password,
        role: u.role || "Patient",
        practice: u.practice || "General",
        paidAmount: u.paidAmount || Math.floor(Math.random() * 1000 + 100),
        date: u.date || new Date().toISOString(),
      }));

      const merged = [...savedUsers];

      formatted.forEach((u) => {
        if (!merged.some((m) => m.email === u.email)) {
          merged.push(u);
        }
      });

      setAppointments(merged);
    };

    loadUsers();
    window.addEventListener("storage", loadUsers);
    return () => window.removeEventListener("storage", loadUsers);
  }, []);

  /* ---------------- PERSIST ---------------- */
  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  useEffect(() => {
    localStorage.setItem("doctors", JSON.stringify(doctors));
  }, [doctors]);

  /* ---------------- SEARCH ---------------- */
  const filteredAppointments = useMemo(() => {
    const term = searchTerm.toLowerCase();

    return appointments.filter(
      (ap) =>
        ap.name?.toLowerCase().includes(term) ||
        ap.email?.toLowerCase().includes(term) ||
        ap.phone?.includes(term) ||
        ap.role?.toLowerCase().includes(term)
    );
  }, [appointments, searchTerm]);

  /* ---------------- PAGINATION ---------------- */
  const paginatedAppointments = filteredAppointments.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  /* ---------------- SELECT ---------------- */
  const handleSelectUser = (id) => {
    setSelectedUsers((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    const ids = paginatedAppointments.map((u) => u.id);
    const allSelected = ids.every((id) => selectedUsers.includes(id));

    setSelectedUsers((prev) =>
      allSelected
        ? prev.filter((id) => !ids.includes(id))
        : [...new Set([...prev, ...ids])]
    );
  };

  /* ---------------- CLONE ---------------- */
  const handleClone = (user) => {
    const newId = Date.now();

    const cloned = {
      ...user,
      id: newId,
      email: `copy_${newId}_${user.email}`,
    };

    setAppointments((prev) => [...prev, cloned]);

    const registered =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];

    const [firstName = "", lastName = ""] = (user.name || "").split(" ");

    registered.push({
      firstName,
      lastName,
      email: cloned.email,
      phoneNumber: cloned.phone,
      role: cloned.role,
      password: cloned.password,
    });

    localStorage.setItem("registeredUsers", JSON.stringify(registered));
  };

  /* ---------------- DELETE ---------------- */
  const handleDelete = (id) => {
    if (!window.confirm("Delete user?")) return;

    const updated = appointments.filter((u) => u.id !== id);
    setAppointments(updated);
  };

  /* ---------------- CSV ---------------- */
  const handleDownloadCSV = () => {
    const csv = filteredAppointments
      .map((u) => `${u.name},${u.email},${u.phone},${u.role}`)
      .join("\n");

    const blob = new Blob([csv]);
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "users.csv";
    a.click();
  };

  /* ---------------- REVENUE ---------------- */
  const revenueData = useMemo(() => {
    const map = {};

    appointments.forEach((ap) => {
      const d = new Date(ap.date);
      const key = d.toLocaleString("default", {
        month: "short",
        year: "numeric",
      });

      map[key] = (map[key] || 0) + Number(ap.paidAmount || 0);
    });

    const labels = Object.keys(map);
    return {
      labels,
      data: labels.map((l) => map[l]),
    };
  }, [appointments]);

  const chartData = {
    labels: revenueData.labels,
    datasets: [
      {
        label: "Revenue",
        data: revenueData.data,
        borderColor: "#22c55e",
        fill: true,
      },
    ],
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <main className="flex-1 p-6">
        {/* HEADER */}
        <div className="flex justify-between mb-6">
          <h1 className="text-3xl font-semibold">
            Welcome Back <b>Super Admin</b>
          </h1>

          {/* PROFILE */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-orange-700 text-white flex items-center justify-center font-semibold">
                {user?.initials || "G"}
              </div>

              <span>{user?.firstName || user?.name}</span>

              <VscChevronDown
                className={`transition ${
                  showProfileMenu ? "rotate-180" : ""
                }`}
              />
            </button>

            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow">
                <button
                  onClick={() => navigate("/Settings")}
                  className="block w-full text-left px-4 py-2"
                >
                  Settings
                </button>
                <button
                  onClick={() => navigate("/Logout")}
                  className="block w-full text-left px-4 py-2 text-red-600"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* CHART */}
        <div className="bg-white p-6 rounded shadow mb-6">
          <Line data={chartData} />
        </div>

        {/* TABLE */}
        <div className="bg-white p-6 rounded shadow">
          <div className="flex justify-between mb-4">
            <div className="flex gap-3 items-center">
              <LuUserRoundSearch />
              <input
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border px-3 py-1 rounded"
              />
            </div>

            <button
              onClick={handleDownloadCSV}
              className="bg-orange-600 text-white px-4 py-2 rounded"
            >
              <FaDownload />
            </button>
          </div>

          <table className="w-full">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" onChange={handleSelectAll} />
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {paginatedAppointments.map((ap) => (
                <tr key={ap.id || ap.email}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(ap.id)}
                      onChange={() => handleSelectUser(ap.id)}
                    />
                  </td>

                  <td>{ap.name}</td>
                  <td>{ap.email}</td>
                  <td>{ap.role}</td>

                  <td className="flex gap-2">
                    <button onClick={() => handleClone(ap)}>
                      <FaClone />
                    </button>
                    <button onClick={() => handleDelete(ap.id)}>
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}