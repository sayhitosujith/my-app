import "./App.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Typography,
  Breadcrumbs,
  Avatar,
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

// Icons
import { VscChevronDown } from "react-icons/vsc";
import { RiAdminFill, RiAppleLine } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { TbBrandGoogleAnalytics, TbDental } from "react-icons/tb";
import { FaUsers, FaFileInvoiceDollar, FaWhatsapp } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { GrAndroid } from "react-icons/gr";

import Flag from "react-world-flags";
import logo from "./assets/DutyDentist.png";

// ====================== BANNER TIMING ======================
const now = new Date();
const startDate = new Date("2025-04-05T08:00:00");
const endDate = new Date("2026-04-08T23:59:59");
const isBannerActive = now >= startDate && now <= endDate;

// ====================== SERVICES ======================
const services = [
  { label: "SUPER ADMIN", icon: <IoSettingsOutline size={35} />, link: "/SuperAdmin" },
  { label: "DOCTOR PORTAL", icon: <RiAdminFill size={35} />, link: "/DoctorList" },
  { label: "PATIENT PORTAL", icon: <CiUser size={35} />, link: "/PatientPortal" },
  { label: "CUSTOMER", icon: <CiUser size={35} />, link: "/Customer_Home" },
  { label: "ANALYTICS", icon: <TbBrandGoogleAnalytics size={35} />, link: "/Admin_Analytics" },
  { label: "SUPPORT", icon: <FaUsers size={35} />, link: "/CustomerCare" },
  { label: "PROFILES", icon: <FaFileInvoiceDollar size={35} />, link: "/Profile" },
  { label: "SETTINGS", icon: <IoSettingsOutline size={35} />, link: "/Settings" },
  { label: "APPOINTMENT HISTORY", icon: <IoSettingsOutline size={35} />, link: "/AppointmentHistory" },
  { label: "BOOK APPOINTMENT", icon: <IoSettingsOutline size={35} />, link: "/MyCart" },
];

export default function Welcome() {
  const navigate = useNavigate();

  const selectedPracticeCity =
    localStorage.getItem("selectedPracticeCity") || "Hervy Bay Dental Clinic";

  // Profile dropdown
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // Feedback modal
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(null);

  const user = {
    name: "Sujith",
    initials: "SS",
  };

  const toggleDialog = () => setOpen((prev) => !prev);
  const handleSubmit = () => navigate("/Logout");

  return (
    <div className="p-10 bg-white w-full min-h-screen relative">
      {/* LOGO */}
      <img
        src={logo}
        alt="App Logo"
        className="absolute top-4 left-4 w-20 md:w-28 h-auto z-20"
      />

      {/* ====================== BREADCRUMBS ====================== */}
      <Breadcrumbs className="mt-20 mb-6">
        <button onClick={() => navigate("/HomePage")} className="text-blue-600">
          Home
        </button>
        <span>Welcome</span>
      </Breadcrumbs>

      {/* ====================== PROFILE MENU ====================== */}
      <div className="flex justify-end mb-6">
        <div className="relative">
          <button
            onClick={() => setShowProfileMenu((prev) => !prev)}
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
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg z-10 overflow-hidden">
              <button
                onClick={() => navigate("/Profile")}
                className="w-full px-4 py-3 text-left hover:bg-blue-50"
              >
                Edit Profile
              </button>
              <button
                onClick={() => navigate("/Settings")}
                className="w-full px-4 py-3 text-left hover:bg-blue-50"
              >
                Settings
              </button>
              <button
                onClick={() => navigate("/Logout")}
                className="w-full px-4 py-3 text-left text-red-600 hover:bg-red-50"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ====================== BANNER ====================== */}
      {isBannerActive && (
        <div className="mb-6 shadow-sm px-4 py-2 rounded-lg bg-lime-300">
          <b>
            ALERT: Special Care Offer 🎉 Get 20% off on Oral Treatment – Because
            your smile matters.
          </b>
        </div>
      )}

      {/* ====================== HEADER ====================== */}
      <div className="flex flex-col items-center text-center mb-10">
        <Avatar
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          size="xl"
          className="mb-3"
        />

        <Typography variant="h3" className="text-green-700 font-bold">
          Welcome to Duty Dentist – {selectedPracticeCity}
        </Typography>

        <Typography className="max-w-xl text-black text-sm mt-2">
          Access your provisioned services below. You can switch services anytime.
        </Typography>
      </div>

      <hr className="mb-6" />

      {/* ====================== SERVICE CARDS ====================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {services.map((tile, idx) => (
          <Button
            key={idx}
            variant="outlined"
            onClick={() => navigate(tile.link)}
            className="flex flex-col items-center py-8 rounded-xl border-green-600"
          >
            {tile.icon}
            <span className="pt-2 font-bold text-sm">{tile.label}</span>
          </Button>
        ))}
      </div>

      {/* ====================== FOOTER ====================== */}
      <footer className="mt-16 border-t pt-6">
        <Typography variant="h5" className="flex items-center gap-2 mb-4">
          <span className="text-blue-800">Duty</span>
          <span className="text-blue-400">Dentist</span>
          <TbDental />
        </Typography>

        <div className="flex justify-end mb-6">
          <Button className="flex gap-4">
            <GrAndroid size={30} />
            <RiAppleLine size={30} />
          </Button>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between text-sm">
          <span>© {new Date().getFullYear()} Duty Dentist — All Rights Reserved</span>
          <div className="flex items-center gap-2">
            <span>MADE IN INDIA</span>
            <Flag code="IN" style={{ width: 30, height: 20 }} />
          </div>
        </div>
      </footer>

      {/* ====================== WHATSAPP ====================== */}
      <a
        href="https://web.whatsapp.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-white p-4 rounded-full shadow-lg"
      >
        <FaWhatsapp size={50} color="#6cdb04" />
      </a>

      {/* ====================== FEEDBACK MODAL ====================== */}
      <Dialog open={open} handler={toggleDialog} size="xs">
        <DialogBody>
          <Typography variant="h6" className="text-center mb-4">
            How likely are you to recommend our service?
          </Typography>

          <div className="flex justify-center gap-2 flex-wrap">
            {[...Array(11).keys()].map((num) => (
              <button
                key={num}
                onClick={() => setRating(num)}
                className={`px-3 py-2 rounded-md text-white font-bold
                  ${num <= 6 ? "bg-red-500" : num === 7 ? "bg-yellow-500" : "bg-green-500"}
                  ${rating === num ? "ring-4 ring-black" : ""}
                `}
              >
                {num}
              </button>
            ))}
          </div>
        </DialogBody>

        <DialogFooter>
          <Button
            disabled={rating === null}
            onClick={handleSubmit}
            className="w-full bg-green-600"
          >
            Submit
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
