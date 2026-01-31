import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { BsPlus } from "react-icons/bs";
import { MdAddCircle } from "react-icons/md";
import logo from "./assets/DutyDentist.png";
import { useNavigate } from "react-router-dom";


const treatItems = [
  "Root Canal Treatment",
  "Dental Crowns",
  "Laser Dentistry",
  "Invisible Braces",
  "Dental Fillings",
  "Wisdom Tooth",
  "Dental Braces",
  "Dental Implants",
  "Dentures",
  "Kids Dentistry",
  "Mouth Ulcers",
  "Gum Treatment",
];

const services = [
  {
    title: "Dental Consultation",
    desc: "Speak to a dentist by video or in-person for any dental concern.",
  },
  {
    title: "Prescription Advice",
    desc: "Get new or repeat dental prescriptions sent directly to your pharmacy.",
  },
  {
    title: "Dental Certificates",
    desc: "Request dental letters or certificates quickly.",
  },
  {
    title: "Referrals and Reports",
    desc: "Arrange scans, tests, or discuss your dental reports.",
  },
  {
    title: "Oral Health & Hygiene",
    desc: "Get advice on brushing, flossing, and dental care.",
  },
  {
    title: "Follow-up Appointment",
    desc: "Continue care or speak with the same dentist again.",
  },
];

const WhatWeTreatPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white font-sans">
      {/* ===== TOP BAR ===== */}
      <div className="bg-[#004E8C] text-white text-sm px-6 py-2 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedinIn />
          <FaYoutube />
        </div>
        <div className="flex items-center gap-4">
          <span>info@dutydentist.com</span>
          <span>Mon–Fri: 9AM–5PM</span>
        </div>
      </div>

    {/* ===== NAVBAR ===== */}
<div className="flex items-center justify-between px-6 py-4 shadow-sm">
  <div className="flex items-center gap-2 text-xl font-bold text-blue-600">
    <img src={logo} alt="DutyDentist Logo" className="w-28 h-auto" />
  </div>

  <div className="hidden md:flex items-center gap-6 text-sm font-medium">
    <button onClick={() => navigate("/HomePage")}>Home</button>
    <button onClick={() => navigate("/gallery")}>Gallery</button>
    <button
      className="text-green-600 font-semibold"
      onClick={() => navigate("/treatments")}
    >
      What We Treat
    </button>
    <button onClick={() => navigate("/CustomerCare")}>Support</button>

    <button
      className="flex items-center gap-3 px-5 py-2 rounded-full shadow-lg cursor-pointer bg-green-600 hover:bg-green-700 text-white"
      onClick={() => navigate("/Customer_Home")}
    >
      <BsPlus size={22} />
      <span>Book ONLINE NOW</span>
    </button>
  </div>
</div>


      {/* ===== WHAT WE TREAT SECTION ===== */}
      <section className="bg-[#004E8C] text-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-4">What we treat</h2>
        <p className="text-center text-sm text-blue-100 mb-10">
          We help with a wide range of dental concerns — from routine checkups to
          advanced treatments.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {treatItems.map((item, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-lg px-4 py-3 flex items-center justify-between shadow"
            >
              <span className="flex items-center gap-2 text-sm font-medium">
                <span className="text-green-600">📄</span> {item}
              </span>
              <MdAddCircle className="text-blue-600 text-xl cursor-pointer hover:scale-110 transition" />
            </div>
          ))}
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
          Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold mb-2 text-blue-900">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#004E8C] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo + Trust */}
          <div>
            <div className="flex items-center gap-2 text-xl font-bold mb-3">
              DutyDentist<span className="text-blue-300">🦷</span>
            </div>
            <p className="text-sm text-blue-100 mb-4">
              Trusted. Caring. Affordable.
            </p>
            <p className="text-xs text-blue-200 leading-relaxed">
              Fully qualified dental professionals providing safe and reliable
              oral healthcare services.
            </p>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold mb-3">About us</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>Book an appointment</li>
              <li>About us</li>
              <li>Contact us</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>Dental Consultation</li>
              <li>Prescription Advice</li>
              <li>Dental Certificates</li>
              <li>Referrals and Reports</li>
              <li>Oral Health & Hygiene</li>
              <li>Follow-up Appointment</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-300/30 mt-10 pt-4 text-center text-xs text-blue-200">
          © DutyDentist &nbsp; | &nbsp; Privacy Policy &nbsp; | &nbsp; Terms &
          Conditions &nbsp; | &nbsp; Cookies
        </div>
      </footer>
    </div>
  );
};

export default WhatWeTreatPage;
