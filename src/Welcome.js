import "./App.css";
import React, { useState } from "react";

import { RiAdminFill } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { FaUsers, FaFileInvoiceDollar, FaWhatsapp, FaPowerOff } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { RiAppleLine } from "react-icons/ri";
import { GrAndroid } from "react-icons/gr";
import { HiSpeakerphone } from "react-icons/hi";

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

import Flag from "react-world-flags";
import packageJson from "../package.json";
import { practiceNames } from "./constants";
import emblem from "./assets/emblem.png";

// Banner Timing
const now = new Date();
const startDate = new Date("2025-04-05T08:00:00");
const endDate = new Date("2026-04-08T23:59:59");
const isBannerActive = now >= startDate && now <= endDate;

export default function Welcome() {
  const selectedPractice =
    practiceNames[localStorage.getItem("selectedPractice")] || "Duty Dentist";

  // Logout feedback modal
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(null);

  const toggleDialog = () => setOpen(!open);

  const handleSubmit = () => {
    window.location.href = "/Logout";
  };

  return (
    <div className="p-10 bg-white w-full min-h-screen">

      {/* Breadcrumbs */}
      <div className="mb-4">
        <Breadcrumbs>
          <a href="/HomePage">Home</a>
          <a href="#">Welcome</a>
        </Breadcrumbs>
      </div>

      {/* Banner */}
      {isBannerActive && (
        <div className="mb-3 shadow-sm px-3 py-2 flex justify-center items-center rounded-lg bg-lime-300">
          <div className="animate-scroll whitespace-nowrap">
            <Typography className="text-xs text-black flex items-center gap-1">
              <HiSpeakerphone className="text-sm" />
              <b>
                ALERT : Enjoy 20% off on Oral Treatment
              </b>
            </Typography>
          </div>
        </div>
      )}

      {/* ====================== HEADER SECTION (Option C) ====================== */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">

        {/* LEFT: Avatar + Welcome text */}
        <div className="flex flex-col items-start gap-3">
          <Avatar
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="avatar"
            size="xl"
          />

<div className="flex flex-col items-end text-right w-full">
  <Typography variant="h3" className="text-green-700 font-bold mt-2">
    Welcome to {selectedPractice}
  </Typography>

  <Typography className="max-w-lg text-black text-sm">
    Access your provisioned services below. You can switch services anytime 
    from the apps icon in the middle of your screen.
  </Typography>
</div>


        </div>

        {/* RIGHT: Notifications + Logout + Profile */}
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

      {/* ====================== SERVICE TILES ====================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

        {[
          { label: "SUPER ADMIN", icon: <IoSettingsOutline size={35} />, link: "SuperAdmin" },
          { label: "DOCTOR PORTAL", icon: <RiAdminFill size={35} />, link: "DoctorList" },
          { label: "PATIENT PORTAL", icon: <RiAdminFill size={35} />, link: "PatientPortal" },
          { label: "CUSTOMER", icon: <CiUser size={35} />, link: "Customer_Login" },
          { label: "ANALYTICS", icon: <TbBrandGoogleAnalytics size={35} />, link: "Admin_Analytics" },
          { label: "SUPPORT", icon: <FaUsers size={35} />, link: "CustomerCare" },
          { label: "PROFILES", icon: <FaFileInvoiceDollar size={35} />, link: "Profile" },
          { label: "SETTINGS", icon: <IoSettingsOutline size={35} />, link: "Settings" },
        ].map((tile, idx) => (
          <a href={tile.link} key={idx} className="w-full">
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

        {/* Download Card */}
        <Card className="max-w-xs w-full shadow-lg rounded-xl p-3 bg-green-600">
          <CardBody>
            <h5 className="text-md font-semibold mb-3 text-center text-white">
              DOWNLOAD APP - <span className="text-yellow-400">Coming soon</span>
            </h5>

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

        {/* Emblem Section */}
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

        <div className="mb-8">
          <Typography variant="h6" className="opacity-70">Duty Dentist</Typography>
        </div>

        {/* WhatsApp Floating Button */}
        <button
          className="fixed bottom-3 right-3 z-30 p-4 bg-white rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={50} color="#6cdb04" />
          </a>
        </button>

        <Typography className="text-center mt-6 text-sm opacity-80">
          © {new Date().getFullYear()} Duty Dentist — All Rights Reserved.
        </Typography>
      </footer>

      {/* ====================== FEEDBACK DIALOG ====================== */}
      <Dialog open={open} handler={toggleDialog} size="xs" className="p-4">
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
