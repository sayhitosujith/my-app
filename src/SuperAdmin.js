import React from "react";
import { Line } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";

import {
  FaUsers,
  FaDollarSign,
  FaClipboardList,
  FaRegComments,
  FaCog,
} from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

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

export default function SuperAdmin() {
  const navigate = useNavigate();

  const appointments = [
    { name: "Solomon Ideh", phone: "09067813451", dentist: "Malik Johnson", time: "15 May 2020 9:00 am" },
    { name: "Daniel Samuel", phone: "08052343218", dentist: "Aisha Bennett", time: "15 May 2020 8:30 am" },
    { name: "Israel Faizul", phone: "07083465098", dentist: "Jabari Mitchell", time: "15 May 2020 9:30 am" },
    { name: "Hannah Pedro", phone: "08178901234", dentist: "Olu Jacobs", time: "15 May 2020 8:00 am" },
  ];

  const revenueData = {
    totalRevenue: "₦250M",
    totalPatients: 368,
    totalDoctors: 26,
    analytics: [50, 60, 80, 90, 120, 80, 60, 90, 130, 110, 90, 140],
  };

  const customerComplaints = [
    { name: "Adegboyoga Precious", time: "09:04 AM", complaint: "The doctor that attended to me..." },
    { name: "Eze Chinuedu", time: "3 days ago", complaint: "The security guy is so disrespectful..." },
    { name: "Jibike Alarape", time: "5 days ago", complaint: "As a woman, you guys need to do better..." },
    { name: "Adebanji Bolaji", time: "1 week ago", complaint: "Your clinic is just too expensive..." },
    { name: "Jide Kosoko", time: "2 months ago", complaint: "How can a clinic treat someone without..." },
  ];

  const chartData = {
    labels: [
      "01 Feb","02 Feb","03 Feb","04 Feb","05 Feb","06 Feb","07 Feb",
      "08 Feb","09 Feb","10 Feb","11 Feb","12 Feb",
    ],
    datasets: [
      {
        label: "Revenue",
        data: revenueData.analytics,
        borderColor: "#22c55e",
        backgroundColor: "rgba(34,197,94,0.2)",
        borderWidth: 2,
        tension: 0.3,
        pointRadius: 0,
      },
    ],
  };

  const menuItems = [
    { label: "Home", icon: <FaClipboardList />, path: "/home" },
    { label: "Doctors", icon: <FaUsers />, path: "/doctors" },
    { label: "Patients", icon: <FaUsers />, path: "/patients" },
    { label: "Appointments", icon: <FaClipboardList />, path: "/appointments" },
    { label: "Revenue", icon: <FaDollarSign />, path: "/revenue" },
    { label: "Complaints", icon: <FaRegComments />, path: "/complaints" },
    { label: "Inventory", icon: <FaClipboardList />, path: "/inventory" },
    { label: "Settings", icon: <FaCog />, path: "/settings" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* ====================== SIDEBAR ====================== */}
      <aside className="w-64 bg-[#4F0E02] text-white shadow-lg flex flex-col justify-between">
        {/* Header */}
        <div className="text-center py-6 text-lg font-bold tracking-wide border-b border-[#3B0A01]">
          DUTY DENTIST
        </div>

        {/* Menu Items */}
        <ul className="mt-4 px-4 flex-1 space-y-1">
          {menuItems.map((item, i) => (
            <li key={i}>
              <button
                className="w-full flex items-center gap-3 p-3 rounded-lg text-left hover:bg-[#3B0A01] transition-colors duration-200"
                onClick={() => navigate(item.path)}
              >
                {item.icon} <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* Logout */}
        <div className="px-4 mb-4">
          <button
            className="w-full flex items-center gap-3 p-3 rounded-lg text-left hover:bg-[#3B0A01] transition-colors duration-200"
            onClick={() => {
              console.log("Logout clicked");
              navigate("/login");
            }}
          >
            <IoIosLogOut /> <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* ====================== MAIN CONTENT ====================== */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold">Welcome Back 👋</h1>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white shadow-md p-6 rounded-xl">
            <p className="font-semibold flex items-center gap-2 text-gray-800">
              <FaDollarSign className="text-green-600" /> Total Revenue
            </p>
            <h2 className="text-3xl font-bold mt-2">{revenueData.totalRevenue}</h2>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl">
            <p className="font-semibold flex items-center gap-2 text-gray-800">
              <FaUsers className="text-blue-600" /> Total Patients
            </p>
            <h2 className="text-3xl font-bold mt-2">{revenueData.totalPatients}</h2>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl">
            <p className="font-semibold flex items-center gap-2 text-gray-800">
              <FaUsers className="text-purple-600" /> Total Doctors
            </p>
            <h2 className="text-3xl font-bold mt-2">{revenueData.totalDoctors}</h2>
          </div>
        </div>

        {/* Revenue Chart */}
        <div className="bg-white shadow-md p-6 rounded-xl mb-8">
          <h2 className="text-xl font-semibold mb-4">Revenue Analytics</h2>
          <Line data={chartData} height={70} />
          <p className="mt-4 text-lg font-bold text-gray-700">₦6,368.94</p>
        </div>

        {/* Appointments Table */}
        <div className="bg-white shadow-md p-6 rounded-xl mb-8">
          <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Phone</th>
                  <th className="p-3 text-left">Dentist</th>
                  <th className="p-3 text-left">Time</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((ap, idx) => (
                  <tr key={idx} className="border-b hover:bg-gray-50 transition">
                    <td className="p-3">{ap.name}</td>
                    <td className="p-3">{ap.phone}</td>
                    <td className="p-3">{ap.dentist}</td>
                    <td className="p-3">{ap.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Complaints */}
        <div className="bg-white shadow-md p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Customer Complaints</h2>
          <ul className="space-y-4">
            {customerComplaints.map((c, idx) => (
              <li key={idx} className="bg-gray-50 border p-4 rounded-lg shadow-sm">
                <p className="font-bold text-gray-800">
                  {c.name} — <span className="text-sm text-gray-500">{c.time}</span>
                </p>
                <p className="mt-1 text-gray-600">{c.complaint}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
