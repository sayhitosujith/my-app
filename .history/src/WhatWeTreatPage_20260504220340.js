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
import { useNavigate } from "react-router-dom";
import logo from "./assets/Toothx_Logo-removebg-preview.png";


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
      <div className="bg-[#fc4a03] text-white text-sm px-6 py-2 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedinIn />
          <FaYoutube />
        </div>
        <div className="flex items-center gap-4">
          <span>info@ToothX.com</span>
          <span>Mon–Fri: 9AM–5PM</span>
        </div>
      </div>

    {/* ===== NAVBAR ===== */}
<div className="flex items-center justify-between px-6 py-4 shadow-sm">
  <div className="flex items-center gap-2 text-xl font-bold text-orange-600">
    <img src={logo} alt="ToothX Logo" className="w-40 h-auto" />
  </div>

  <div className="hidden md:flex items-center gap-6 text-sm font-medium">
    <button onClick={() => navigate("/HomePage")}>Home</button>
    <button onClick={() => navigate("/gallery")}>Gallery</button>
    <button
      className="text-orange-600 font-semibold"
      onClick={() => navigate("/treatments")}
    >
      What We Treat
    </button>
    <button onClick={() => navigate("/CustomerCare")}>Support</button>

    <button
        size="lg"
        className="relative flex items-center gap-3 px-6 py-3 
        rounded-xl 
        text-white 
        bg-gradient-to-r from-orange-500 via-orange-700 to-orange-900 
        shadow-lg 
        border border-white/20
        backdrop-blur-md
        hover:scale-105 hover:shadow-orange-500/40
        transition duration-300"
        onClick={() => navigate("/Customer_home")}
      >
        <BsPlus size={22} />
        <span className="tracking-wide font-semibold">BOOK ONLINE NOW</span>
      </button>
  </div>
</div>


      {/* ===== WHAT WE TREAT SECTION ===== */}
      <section className="bg-[#fc4a03] text-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-4">What we treat</h2>
        <p className="text-center text-sm text-orange-100 mb-10">
          We help with a wide range of dental concerns — from routine checkups to
          advanced treatments.
        </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {treatItems.map((item, index) => (
    <div
      key={index}
      onClick={() => navigate("/Customer_home")}
      className="relative flex items-center justify-between gap-3 px-5 py-4 
      rounded-xl 
      text-white 
      bg-gradient-to-r from-orange-500 via-orange-700 to-orange-900 
      shadow-lg 
      border border-white/20
      backdrop-blur-md
      hover:scale-105 hover:shadow-orange-500/40
      transition duration-300 cursor-pointer"
    >
      <span className="flex items-center gap-2 text-sm font-semibold tracking-wide">
        <span>📄</span> {item}
      </span>

      <MdAddCircle className="text-white text-xl hover:scale-110 transition" />
    </div>
  ))}
</div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-orange-900">
          Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold mb-2 text-orange-900">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#fc4a03] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo + Trust */}
          <div>
             {/* Logo */}
  <div className="flex justify-start mb-3">
    <img
      src={logo}
      alt="ToothX"
      className="h-40 object-contain opacity-90 hover:opacity-100 transition duration-300"
    />
  </div>
            <p className="text-sm text-orange-100 mb-4">
              Trusted. Caring. Affordable.
            </p>
            <p className="text-xs text-orange-200 leading-relaxed">
              Fully qualified dental professionals providing safe and reliable
              oral healthcare services.
            </p>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold mb-3">About us</h4>
            <ul className="space-y-2 text-sm text-orange-100">
              <li>Book an appointment</li>
              <li>About us</li>
              <li>Contact us</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-sm text-orange-100">
              <li>Dental Consultation</li>
              <li>Prescription Advice</li>
              <li>Dental Certificates</li>
              <li>Referrals and Reports</li>
              <li>Oral Health & Hygiene</li>
              <li>Follow-up Appointment</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-orange-300/30 mt-10 pt-6 text-center text-xs text-orange-200">
  
 

  {/* Footer Text */}
  <div>
    © ToothX &nbsp; | &nbsp; Privacy Policy &nbsp; | &nbsp; Terms &
    Conditions &nbsp; | &nbsp; Cookies
  </div>

</div>
      </footer>
    </div>
  );
};

export default WhatWeTreatPage;
