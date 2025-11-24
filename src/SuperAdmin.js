import React, { useState, useEffect, useRef } from "react";
import logo from "./assets/2025-11-23 214306.png";
import {
  Card,
  Typography,
  Button,
  Input,
  Dialog,
  DialogBody,
  DialogFooter,
  Avatar,
  Breadcrumbs,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

// Icons
import { FaPowerOff } from "react-icons/fa6";
import { PiLineVerticalThin } from "react-icons/pi";
import {
  Bars3Icon,
  Squares2X2Icon,
  PencilIcon,
  TrashIcon,
  EyeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/solid";

const patients = [
  {
    name: "Guy Hawkins",
    time: "08:00 AM",
    visitType: "Weekly Visit",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    highlighted: true,
  },
  {
    name: "Jane Cooper",
    time: "10:00 AM",
    visitType: "Weekly Visit",
    img: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    name: "Leslie Alexander",
    time: "14:00 PM",
    visitType: "Weekly Visit",
    img: "https://randomuser.me/api/portraits/men/48.jpg",
  },
  {
    name: "Jenny Wilson",
    time: "16:00 PM",
    visitType: "Routine Checkup",
    img: "https://randomuser.me/api/portraits/women/49.jpg",
  },
];

const scheduleDates = [3, 12, 15, 23];

const Consultation = () => (
  <div className="bg-white rounded-lg p-6 shadow">
    <div className="flex items-center gap-4 mb-6">
      <img
        src="https://randomuser.me/api/portraits/men/45.jpg"
        alt="Guy Hawkins"
        className="w-16 h-16 rounded-full border-2 border-blue-300"
      />
      <div>
        <h3 className="font-semibold text-lg">Guy Hawkins</h3>
        <p className="text-gray-600 text-sm">Male - 28 Years old</p>
      </div>
      <button className="ml-auto font-bold text-2xl text-gray-400 hover:text-gray-700">
        ...
      </button>
    </div>

    <div className="flex gap-6 mb-4">
      <div className="flex flex-col items-center gap-1 text-gray-600">
        <span className="text-2xl">🦷</span>
        <span className="text-xs">Braces</span>
      </div>
      <div className="flex flex-col items-center gap-1 text-gray-600">
        <span className="text-2xl">✨</span>
        <span className="text-xs">Whitening</span>
      </div>
      <div className="flex flex-col items-center gap-1 text-gray-600">
        <span className="text-2xl">🦷</span>
        <span className="text-xs">Cavity</span>
      </div>
    </div>

    <div className="text-sm text-gray-700 space-y-2">
      <div>
        <span className="font-semibold">Last Checked:</span> Dr Smith on{" "}
        <span className="font-medium text-blue-600">10 October 2023</span>
      </div>
      <div>
        <span className="font-semibold">Prescription:</span>{" "}
        <span className="text-blue-500">#9C672QA1</span>
      </div>
      <div>
        <span className="font-semibold">Observation:</span> Multiple cavities detected.
      </div>
      <div>
        <span className="font-semibold">Prescription:</span> Fluoride Toothpaste - Use twice
        daily. Filling appointment scheduled for 20 October 2023.
      </div>
    </div>
  </div>
);

export default function DentistDashboard() {
  const [patientFilter, setPatientFilter] = useState("Today");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans text-gray-800 flex gap-8">
      {/* Sidebar */}
      <aside className="bg-white w-16 rounded-xl flex flex-col items-center py-6 gap-6 shadow-md">
        <button className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700">
          🏠
        </button>
        <button className="w-12 h-12 text-gray-500 hover:text-gray-800">📅</button>
        <button className="w-12 h-12 text-gray-500 hover:text-gray-800">💬</button>
        <button className="w-12 h-12 text-gray-500 hover:text-gray-800">📊</button>
        <button className="w-12 h-12 text-gray-500 hover:text-gray-800">⚙️</button>
        <button className="w-12 h-12 text-gray-500 hover:text-gray-800">❓</button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col gap-8">

        {/* Breadcrumbs (fixed placement) */}
        <Breadcrumbs className="mb-4">
          <Typography
            as="a"
            href="/Welcome"
            className="cursor-pointer hover:underline"
            onClick={() => navigate("/")}
          >
            Home
          </Typography>


          <Typography>Doctor List</Typography>
        </Breadcrumbs>

        {/* Greeting */}
        <h1 className="text-xl font-normal">
          Good Morning <strong className="text-blue-700">Dr. Sarah</strong> 👋
        </h1>

<div className="absolute top-0 right-0 flex items-center gap-4 p-4">


  <a href="/Logout">
    <div className="relative group cursor-pointer">
      <FaPowerOff color="black" size={30} />
      <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 
                       bg-black text-white text-xs rounded px-1 py-1 
                       opacity-0 group-hover:opacity-100 
                       transition-opacity duration-300 z-10">
        Logout
      </span>
    </div>
  </a>

</div>


        {/* Patient Visits Summary */}
        <section className="bg-white rounded-2xl p-6 flex gap-8 items-center shadow-md">
          <div>
            <p className="font-semibold">Today's Patient Visits</p>
            <p className="text-5xl font-bold tracking-tight">790</p>
            <p className="text-gray-400">/person</p>

            <div className="flex gap-6 mt-4">
              <div className="bg-blue-300 rounded-lg px-6 py-4 text-white">
                <p className="text-lg font-semibold">New Patients</p>
                <p className="text-3xl font-bold">750</p>
                <span className="bg-green-500 text-white rounded px-1 text-xs ml-2">
                  51% 📈
                </span>
              </div>

              <div className="bg-pink-300 rounded-lg px-6 py-4 text-white">
                <p className="text-lg font-semibold">Returning Patients</p>
                <p className="text-3xl font-bold">40</p>
                <span className="bg-red-500 text-white rounded px-1 text-xs ml-2">
                  51% 📉
                </span>
              </div>
            </div>
          </div>

<section className="patient-summary-section">
  <img src={logo} className="logo-image" />
</section>
        </section>

        {/* Patient List + Consultation */}
        <section className="flex gap-6">
          {/* Patient List */}
          <div className="flex-1 bg-white rounded-2xl p-6 shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-semibold text-lg">Patient List</h2>

              <select
                className="border border-gray-300 rounded px-3 py-1 text-sm"
                value={patientFilter}
                onChange={(e) => setPatientFilter(e.target.value)}
              >
                <option>Today</option>
                <option>Yesterday</option>
                <option>Last 7 days</option>
              </select>
            </div>

            <ul className="space-y-4">
              {patients.map(({ name, time, visitType, img, highlighted }) => (
                <li
                  key={name}
                  className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer hover:bg-blue-50 ${
                    highlighted ? "border-2 border-blue-400 bg-blue-100" : ""
                  }`}
                >
                  <img
                    src={img}
                    alt={name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold">{name}</span>
                    <small
                      className={`text-xs ${
                        visitType === "Routine Checkup"
                          ? "text-yellow-600"
                          : "text-green-600"
                      }`}
                    >
                      {visitType}
                    </small>
                  </div>

                  <div className="ml-auto bg-gray-900 text-white text-xs rounded-md px-3 py-1">
                    {time}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Consultation */}
          <div className="flex-1">
            <Consultation />
          </div>
        </section>

        {/* Schedule & Dentist Notes */}
        <section className="flex gap-6">
          {/* Schedule */}
          <div className="flex-1 bg-white rounded-2xl p-6 shadow-md">
            <h2 className="font-semibold text-lg mb-4">Your Schedule</h2>
            <div className="text-center text-sm text-gray-600 mb-3">
              October 2025
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-xs text-gray-500">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="font-semibold">
                  {day.toUpperCase()}
                </div>
              ))}

              {Array(30)
                .fill(0)
                .map((_, i) => {
                  const day = i + 1;
                  const isToday = scheduleDates.includes(day);
                  return (
                    <div
                      key={day}
                      className={`py-2 rounded cursor-pointer ${
                        isToday
                          ? "border border-red-400 text-red-500 font-semibold"
                          : "hover:bg-gray-200"
                      }`}
                    >
                      {day}
                    </div>
                  );
                })}
            </div>

            <div className="mt-6">
              <h3 className="font-semibold mb-2">Upcoming</h3>

              <div className="bg-blue-200 rounded-lg p-3 flex items-center gap-3 text-blue-800 text-sm">
                <span className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-white">
                  📅
                </span>

                <div>
                  <p className="font-semibold">Monthly doctor's meet</p>
                  <p>12 October, 2025 | 08:00 PM</p>
                </div>
              </div>

              <div className="text-right mt-1 text-xs text-blue-700 cursor-pointer underline">
                View All
              </div>
            </div>
          </div>

          {/* Dentist Notes */}
          <div className="w-80 bg-white rounded-2xl p-6 shadow-md">
            <h2 className="font-semibold text-lg mb-4">Dentist Notes</h2>

            <button className="mb-4 px-4 py-2 border border-gray-300 rounded text-gray-600 hover:bg-gray-100">
              + Add new note
            </button>

            <img
              src="/mnt/data/355ccc24-0f8e-4811-b226-d74d7bdf7978.png"
              alt="Dentist Notes"
              className="w-full rounded-lg object-contain"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
