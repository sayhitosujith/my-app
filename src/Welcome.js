import './App.css';
import React from 'react';
import { RiAdminFill } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { FaUsers, FaFileInvoiceDollar, FaWhatsapp } from "react-icons/fa6";
import { FaPowerOff } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Badge } from "@material-tailwind/react";
import Flag from 'react-world-flags';
import { IoSettingsOutline } from "react-icons/io5";
import { RiAppleLine } from "react-icons/ri";
import { GrAndroid } from "react-icons/gr";
import packageJson from '../package.json';
import { HiSpeakerphone } from "react-icons/hi";
import { practiceNames } from "./constants"; // Central practice mapping
import emblem from './assets/emblem.png';

import {
  Card,
  CardBody,
  Typography,
  Select,
  Option,
  Breadcrumbs,
  Avatar,
  Button
} from "@material-tailwind/react";

// Banner Date
const now = new Date();
const startDate = new Date('2025-04-05T08:00:00');
const endDate = new Date('2026-04-08T23:59:59');
const isBannerActive = now >= startDate && now <= endDate;

const LINKS = [
  { title: "Product", items: ["Overview", "Features", "Solutions", "Tutorials"] },
  { title: "Company", items: ["About us", "Careers", "Press", "News"] },
  { title: "Resource", items: ["Blog", "Newsletter", "Events", "Help center"] },
];

const currentYear = new Date().getFullYear();

export default function Welcome() {
  // Get practice key from localStorage
  const selectedPracticeKey = localStorage.getItem("selectedPractice") || "";
  const selectedPracticeLabel = practiceNames[selectedPracticeKey] || "Hervy Dental" ;

  return (
    <div className="p-10 bg-white-800">
      {/* Breadcrumbs */}
      <div className="mb-6">
        <Breadcrumbs>
          <a href="/HomePage">Home</a>
          <a href="#">Welcome</a>
        </Breadcrumbs>
      </div>

      {/* Banner */}
      {isBannerActive && (
        <div className="mb-1 shadow-sm px-2 py-1 flex justify-center items-center overflow-x-auto whitespace-nowrap rounded-lg" style={{ backgroundColor: '#4df74d', minHeight: '2px' }}>
          <div className="w-full overflow-hidden relative">
            <div className="animate-scroll inline-block">
              <Typography variant="small" className="text-xs text-black flex items-center gap-1">
                <HiSpeakerphone className="text-sm" />
                <i>
                  🛍️ NEW ARRIVALS ALERT! Fresh on the Menu! Tantalizing tastes and trendy treats have arrived. 
                  Don’t miss out — shop your favorites now! 🍽️✨
                </i>
              </Typography>
            </div>
          </div>
        </div>
      )}

      {/* Notification + Logout */}
      <div className="absolute top-4 right-4 flex items-center space-x-8">
        <a href="">
          <Badge content="6">
            <IoIosNotificationsOutline color="black" size={20} />
          </Badge>
        </a>
        <a href="/Logout">
          <FaPowerOff color="black" size={20} />
        </a>
      </div>

      {/* Welcome Heading */}
      <Typography variant="h1" color="Black">
        <Avatar
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
          size="xl"
          style={{ float: 'right' }}
        />
        <Typography variant="h3" className="mt-8 flex justify-center items-center">
          <h1 style={{ color: '#166602' }}>
            <b>Welcome to {selectedPracticeLabel}</b>
          </h1>
        </Typography>

        <Typography variant="small" className="mt-8 flex justify-center items-center">
          <Typography variant="h9" color="black">
            <b>
              Access your provisioned services below. Switch services any time from the Apps icon in the middle of your screen.
            </b>
            <br />
          </Typography>
        </Typography>
        <b><hr className="separator" /></b>
      </Typography>

      {/* Profile Dropdown */}
      <div style={{ float: 'right' }}>
        <div className="w-32">
          <Select label="Profile" className="text-sm py-1">
            <Option><a href="/HomePage">About</a></Option>
            <Option><a href="/Dailysummary">Dailysummary</a></Option>
            <Option><a href="/ResetPassword">Change Password</a></Option>
            <Option><a href="/Settings">Settings</a></Option>
          </Select>
        </div>
      </div>
      <br />

      {/* Tiles */}
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 md:grid-cols-6">
        <a href="Home">
          <Button style={{ border: "1px solid green", display: "flex", alignItems: "center", padding: "40px", backgroundColor: "#fcfeff" }}>
            <RiAdminFill size={30} color="#04354f" />
            <span style={{ color: "black" }}><b>&nbsp;ADMIN</b></span>
          </Button>
        </a>

        <a href="Customer_Login">
          <Button style={{ border: "1px solid green", display: "flex", alignItems: "center", padding: "40px", backgroundColor: "#fcfeff" }}>
            <CiUser size={30} color="#04354f" />
            <span style={{ color: "black" }}><b>&nbsp;CUSTOMER</b></span>
          </Button>
        </a>

        <a href="Admin_Analytics">
          <Button style={{ border: "1px solid green", display: "flex", alignItems: "center", padding: "40px", backgroundColor: "#fcfeff" }}>
            <TbBrandGoogleAnalytics size={30} color="#04354f" />
            <span style={{ color: "black" }}><b>&nbsp;ANALYTICS</b></span>
          </Button>
        </a>

        <a href="CustomerCare">
          <Button style={{ border: "1px solid green", display: "flex", alignItems: "center", padding: "40px", backgroundColor: "#fcfeff" }}>
            <FaUsers size={30} color="#04354f" />
            <span style={{ color: "black" }}><b>&nbsp;SUPPORT</b></span>
          </Button>
        </a>

        <a href="Profile">
          <Button style={{ border: "1px solid green", display: "flex", alignItems: "center", padding: "40px", backgroundColor: "#fcfeff" }}>
            <FaFileInvoiceDollar size={30} color="#04354f" />
            <span style={{ color: "black" }}><b>&nbsp;PROFILES</b></span>
          </Button>
        </a>

        <a href="Settings">
          <Button style={{ border: "1px solid green", display: "flex", alignItems: "center", padding: "40px", backgroundColor: "#fcfeff" }}>
            <IoSettingsOutline size={30} color="#04354f" />
            <span style={{ color: "black" }}><b>&nbsp;SETTINGS</b></span>
          </Button>
        </a>
      </div>

      <b><hr className="separator" /></b>

      {/* App Version + Download Section */}
      <div className="flex justify-center items-center mt-6">
        <Typography variant="h9" color="Black">
          <h8>App Version : {packageJson.version}</h8>
          <br />
          <b><hr className="separator" /></b>

          <div className="absolute bottom-92 right-20 flex items-center gap-2 text-black text-sm">
            <Card className="max-w-xs w-full shadow-lg rounded-xl p-2 bg-green-600 -mt-19">
              <CardBody>
                <h5 className="text-md font-semibold mb-3 text-center text-white">Download the App</h5>
                <div className="flex items-center gap-2 justify-center">
                  <Button className="flex items-center gap-1 bg-black text-white px-2 py-1 rounded-lg shadow">
                    <GrAndroid size={20} /> <span className="hidden md:inline text-sm">Android</span>
                  </Button>
                  <Button className="flex items-center gap-1 bg-black text-white px-2 py-1 rounded-lg shadow">
                    <RiAppleLine size={20} /> <span className="hidden md:inline text-sm">iOS</span>
                  </Button>
                </div>
              </CardBody>
            </Card>

            <div className="p-10 bg-white-1000">
              <img style={{ width: '55%', height: '55%' }} src={emblem} alt="Application_logo" />
              <div className="flex items-center space-x-2">
                <span className="text-lg font-semibold">MADE IN INDIA</span>
                <Flag code="IN" style={{ width: 30, height: 20 }} />
              </div>
            </div>
          </div>
        </Typography>
      </div>

      {/* Footer */}
      <footer className="relative w-full mt-12">
        <div className="mx-auto w-full max-w-7xl px-8">
          <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
            <Typography variant="h8" className="mb-6">Food Maven</Typography>
            <div>
              {/* WhatsApp Button */}
              <button
                onClick={() => console.log("Chat button clicked")}
                className="fixed bottom-3 right-3 z-30 p-4 bg-white rounded-full shadow-lg hover:scale-105 transition-transform flex flex-col items-center justify-center"
                aria-label="Open chat"
              >
                <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp size={50} color="#6cdb04" />
                </a>
              </button>
            </div>

            <div className="grid grid-cols-3 justify-between gap-4">
              {LINKS.map(({ title, items }) => (
                <ul key={title}>
                  <Typography variant="large" color="blue-gray" className="mb-3 font-medium opacity-40">
                    {title}
                  </Typography>
                  {items.map((link) => (
                    <li key={link}>
                      <Typography as="a" href="#" color="gray" className="py-1.5 font-normal hover:text-blue-gray-900">
                        {link}
                      </Typography>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
            <Typography variant="small" className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0">
              &copy; {currentYear} <a href="https://material-tailwind.com/">- Food Maven</a>. All Rights Reserved.
            </Typography>
          </div>
        </div>
      </footer>
    </div>
  );
}
