import "./App.css";
import React, { useState } from "react";

import {
  Card,
  CardBody,
  Typography,
  Select,
  Option,
  Breadcrumbs,
  Avatar,
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  Badge,
} from "@material-tailwind/react";

import {
  RiAdminFill,
  RiAppleLine,
} from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import {
  FaUsers,
  FaFileInvoiceDollar,
  FaWhatsapp,
  FaPowerOff,
} from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { GrAndroid } from "react-icons/gr";
import { HiSpeakerphone } from "react-icons/hi";

import Flag from "react-world-flags";
import emblem from "./assets/emblem.png";
import { practiceNames } from "./constants";

// Banner Timing
const now = new Date();
const startDate = new Date("2025-04-05T08:00:00");
const endDate = new Date("2026-04-08T23:59:59");
const isBannerActive = now >= startDate && now <= endDate;

// Services Array
const services = [
  { label: "SUPER ADMIN", icon: <IoSettingsOutline size={35} />, link: "SuperAdmin" },
  { label: "DOCTOR PORTAL", icon: <RiAdminFill size={35} />, link: "DoctorList" },
  { label: "PATIENT PORTAL", icon: <RiAdminFill size={35} />, link: "PatientPortal" },
  { label: "CUSTOMER", icon: <CiUser size={35} />, link: "Customer_Login" },
  { label: "ANALYTICS", icon: <TbBrandGoogleAnalytics size={35} />, link: "Admin_Analytics" },
  { label: "SUPPORT", icon: <FaUsers size={35} />, link: "CustomerCare" },
  { label: "PROFILES", icon: <FaFileInvoiceDollar size={35} />, link: "Profile" },
  { label: "SETTINGS", icon: <IoSettingsOutline size={35} />, link: "Settings" },
];

export default function Welcome() {
  const selectedPractice =
    practiceNames[localStorage.getItem("selectedPractice")] || "Duty Dentist";

  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(null);

  const toggleDialog = () => setOpen(!open);
  const handleSubmit = () => (window.location.href = "/Logout");

  return (
    <div className="p-10 bg-white w-full min-h-screen">

      {/* ====================== BREADCRUMBS ====================== */}
      <Breadcrumbs className="mb-4">
        <a href="/HomePage">Home</a>
        <a href="#">Welcome</a>
      </Breadcrumbs>

      {/* ====================== BANNER ====================== */}
      {isBannerActive && (
        <div className="mb-3 shadow-sm px-4 py-2 flex justify-center items-center rounded-lg bg-lime-300">
          <Typography className="text-xs text-black flex items-center gap-1">
            <HiSpeakerphone size={14} />
            <b>ALERT : Enjoy 20% off on Oral Treatment</b>
          </Typography>
        </div>
      )}

      {/* ====================== HEADER ====================== */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full">

        {/* Avatar + Welcome Text */}
        <div className="flex flex-col items-center text-center w-full">
          <Avatar
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="avatar"
            size="xl"
            className="mb-3"
          />

          <Typography variant="h3" className="text-green-700 font-bold">
            Welcome to {selectedPractice}
          </Typography>

          <Typography className="max-w-xl text-black text-sm mt-2 leading-relaxed">
            Access your provisioned services below. You can switch services
            anytime from the apps icon in the middle of your screen.
          </Typography>
        </div>

        {/* Notifications + Logout + Profile */}
        <div className="flex flex-col items-end gap-4 mt-6 md:mt-0">

          {/* Notifications + Logout */}
          <div className="flex items-center gap-6">
            <Badge content="6">
              <IoIosNotificationsOutline size={24} />
            </Badge>

            <button onClick={toggleDialog}>
              <FaPowerOff size={22} />
            </button>
          </div>

          {/* Profile Dropdown */}
          <div className="w-40">
            <Select label="Profile">
              <Option><a href="/HomePage">About</a></Option>
              <Option><a href="/Dailysummary">Dailysummary</a></Option>
              <Option><a href="/ResetPassword">Change Password</a></Option>
              <Option><a href="/Settings">Settings</a></Option>
            </Select>
          </div>
        </div>
      </div>

      <hr className="mt-6 mb-6 border-gray-400" />

      {/* ====================== SERVICE CARDS ====================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {services.map((tile, idx) => (
          <a href={tile.link} key={idx}>
            <Button
              variant="outlined"
              className="
                w-full flex flex-col items-center justify-center
                border border-green-600 bg-white shadow-sm hover:shadow-md
                py-8 rounded-xl text-black
              "
            >
              {tile.icon}
              <span className="pt-2 font-bold text-sm">{tile.label}</span>
            </Button>
          </a>
        ))}
      </div>

      <hr className="mt-10 mb-10 border-gray-400" />

      {/* ====================== DOWNLOAD + EMBLEM ====================== */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-8">

        {/* App Download */}
        <Card className="max-w-xs w-full shadow-lg rounded-xl p-3 bg-green-600">
          <CardBody>
            <Typography className="text-md font-semibold mb-3 text-center text-white">
              DOWNLOAD APP - <span className="text-yellow-400">Coming soon</span>
            </Typography>

            <div className="flex items-center gap-2 justify-center">
              <Button className="flex items-center gap-2 bg-black text-white px-3 py-2 rounded-lg shadow">
                <GrAndroid size={18} /> Android
              </Button>

              <Button className="flex items-center gap-2 bg-black text-white px-3 py-2 rounded-lg shadow">
                <RiAppleLine size={18} /> iOS
              </Button>
            </div>
          </CardBody>
        </Card>

        {/* Emblem */}
        <div className="flex flex-col items-center">
          <img src={emblem} alt="Application_logo" className="w-32 h-32 object-contain" />
          <div className="flex items-center gap-2 mt-2">
            <span className="text-lg font-semibold">MADE IN INDIA</span>
            <Flag code="IN" style={{ width: 30, height: 20 }} />
          </div>
        </div>
      </div>

      {/* ====================== FOOTER ====================== */}
      <footer className="mt-12 w-full border-t pt-6">
        <Typography variant="h6" className="opacity-70">Duty Dentist</Typography>

        {/* WhatsApp Floating Button */}
        <button className="fixed bottom-3 right-3 z-30 p-4 bg-white rounded-full shadow-lg hover:scale-105 transition-transform">
          <a
            href="https://web.whatsapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={50} color="#6cdb04" />
          </a>
        </button>

        <Typography className="text-center mt-6 text-sm opacity-80">
          © {new Date().getFullYear()} Duty Dentist — All Rights Reserved.
        </Typography>
      </footer>

      {/* ====================== FEEDBACK MODAL ====================== */}
      <Dialog open={open} handler={toggleDialog} size="xs">
        <DialogBody>
          <Typography variant="h6" className="text-center mb-4">
            Based on your recent experience,<br />
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

          <div className="flex justify-between mt-2 text-xs">
            <span>Not at all Likely</span>
            <span>Extremely Likely</span>
          </div>
        </DialogBody>

        <DialogFooter>
          <Button
            onClick={handleSubmit}
            disabled={rating === null}
            className="bg-green-600 text-white w-full"
          >
            Submit
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
