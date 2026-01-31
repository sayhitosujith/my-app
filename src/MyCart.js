import "./App.css";
import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Textarea,
  Alert,
  Breadcrumbs,

} from "@material-tailwind/react";
import { VscChevronDown } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import scanner from "./assets/Barcode.jpeg";
import { FiPrinter } from "react-icons/fi";
import { MdOutlineWorkHistory } from "react-icons/md";
import logo from "./assets/DutyDentist.png";
import { Link } from "react-router-dom";


/* ---------------- CHART IMPORTS ---------------- */
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

/* ---------------- PRICING MAP ---------------- */
const APPOINTMENT_PRICING = {
  Consultation: 500,
  Cleaning: 700,
  Extraction: 1000,
  Whitening: 800,
};

/* ---------------- GST CONFIG ---------------- */
const GST_RATE = 0.18;

function MyCart() {
  const navigate = useNavigate();

  const [success, setSuccess] = useState(false);
  const [toast, setToast] = useState("");
  const [toastType, setToastType] = useState("success");
  const [editingId, setEditingId] = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [expandedId, setExpandedId] = useState(null);

  /* ---------------- PAYMENT MODAL STATE ---------------- */
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  /* ---------------- PAGINATION STATE ---------------- */
  const ITEMS_PER_PAGE = 5;
  const [currentPage, setCurrentPage] = useState(1);

  /* ---------------- CUSTOMER HOME ---------------- */
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || {};
  const customerName = loggedInUser?.name || loggedInUser?.email || "Guest";

  const user = {
    name: customerName,
    initials:
      customerName && customerName !== "Guest"
        ? customerName
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()
        : "G",
  };

  /* ---------------- STATE ---------------- */
  const [appointment, setAppointment] = useState({
    location: "",
    name: customerName || "",
    phone: "",
    email: "",
    date: "",
    time: "",
    dentist: "",
    notes: "",
    type: "",
    priority: "",
  });

  const legends = [
    {
      label: "PAID (UPI Scanner)",
      code: "UPI",
      color: "bg-green-100 text-green-700",
    },
    {
      label: "PAID (Cash)",
      code: "CASH",
      color: "bg-blue-100 text-blue-700",
    },
    { label: "Pending", code: "P", color: "bg-orange-100 text-orange-700" },
    { label: "Cancelled", code: "X", color: "bg-red-100 text-red-700" },
  ];

  const DayType = [
    { label: "Rest Day", code: "R", color: "bg-purple-100 text-purple-700" },
    { label: "Leave", code: "L", color: "bg-pink-100 text-pink-700" },
    { label: "On Duty", code: "OD", color: "bg-blue-100 text-blue-700" },
    { label: "Holiday", code: "H", color: "bg-teal-100 text-teal-700" },
    {
      label: "Status Unknown",
      code: "?",
      color: "bg-orange-100 text-orange-700",
    },
  ];

  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("appointmentHistory")) || []
  );

  const [paidAppointments, setPaidAppointments] = useState(
    JSON.parse(localStorage.getItem("paidAppointments")) || {}
  );

  /* ---------------- HELPERS ---------------- */
  const todayISO = new Date().toISOString().split("T")[0];

  const handleChange = (field, value) =>
    setAppointment({ ...appointment, [field]: value });

  const isValidPhone = (phone) => /^\d{10}$/.test(phone.replace(/\D/g, ""));
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isAppointmentComplete = () =>
    appointment.location &&
    appointment.name.trim() !== "" &&
    isValidPhone(appointment.phone) &&
    isValidEmail(appointment.email) &&
    appointment.date &&
    appointment.time &&
    appointment.dentist &&
    appointment.type &&
    appointment.priority;

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    const d = new Date(dateString);
    return `${String(d.getDate()).padStart(2, "0")}-${String(
      d.getMonth() + 1
    ).padStart(2, "0")}-${d.getFullYear()}`;
  };

  const getTotalPaid = (type) => APPOINTMENT_PRICING[type] || 0;

  const getTaxBreakdown = (amount) => {
    const gst = amount * GST_RATE;
    const base = amount - gst;
    return {
      base: base.toFixed(2),
      gst: gst.toFixed(2),
      cgst: (gst / 2).toFixed(2),
      sgst: (gst / 2).toFixed(2),
    };
  };

  /* ---------------- SUBMIT / EDIT ---------------- */
  const handleSubmit = () => {
    if (!isAppointmentComplete()) {
      setToast("❌ Please fill all required details correctly");
      setToastType("error");
      setTimeout(() => setToast(""), 3000);
      return;
    }

    let updatedHistory;
    let savedAppointment;

    if (editingId) {
      savedAppointment = {
        ...appointment,
        id: editingId,
        customerName: appointment.name || customerName || "",
        status: appointment.status || "Pending",
      };
      updatedHistory = history.map((item) =>
        item.id === editingId ? savedAppointment : item
      );
      setToast("✏️ Appointment updated");
      setToastType("success");
    } else {
      savedAppointment = {
        ...appointment,
        id: Date.now(),
        customerName: appointment.name || customerName || "",
        status: "Pending",
      };
      updatedHistory = [...history, savedAppointment];
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
      setToast("✅ Appointment booked successfully");
      setToastType("success");
    }

    setHistory(updatedHistory);
    localStorage.setItem("appointmentHistory", JSON.stringify(updatedHistory));
    setEditingId(null);

    setAppointment({
      location: "",
      name: appointment.name || customerName || "",
      phone: "",
      email: "",
      date: "",
      time: "",
      dentist: "",
      notes: "",
      type: "",
      priority: "",
    });

    setTimeout(() => setToast(""), 3000);
  };

  const handleEdit = (item) => {
    setAppointment(item);
    setEditingId(item.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ---------------- PAYMENT FLOW ---------------- */
  const handlePayment = (app) => {
    setSelectedAppointment(app);
    setShowPaymentModal(true);
  };

  const confirmPayment = (method) => {
  setToast(`💳 Processing ${method} payment...`)
  setToastType("success")

  setTimeout(() => {
    const isSuccess = true // force success (remove randomness)

    if (!isSuccess) {
      setToast("❌ Payment failed. Please try again.")
      setToastType("error")
      setTimeout(() => setToast(""), 3000)
      return
    }

    const updatedPaid = {
      ...paidAppointments,
      [selectedAppointment.id]: method,
    }

    setPaidAppointments(updatedPaid)
    localStorage.setItem("paidAppointments", JSON.stringify(updatedPaid))

    // ✅ UPDATED SUCCESS MESSAGE
    setToast(
      `✅ Payment Successful!\n₹${getTotalPaid(
        selectedAppointment.type
      )} paid via ${method}`
    )
    setToastType("success")

    setShowPaymentModal(false)
    setSelectedAppointment(null)

    setTimeout(() => setToast(""), 3500)
  }, 1000)
}


  /* ---------------- CLEAR HISTORY ---------------- */
  const handleClearHistory = () => {
    if (
      !window.confirm("Are you sure you want to clear all appointment history?")
    )
      return;

    setHistory([]);
    setPaidAppointments({});
    localStorage.removeItem("appointmentHistory");
    localStorage.removeItem("paidAppointments");
    setToast("🗑️ Appointment history cleared");
    setToastType("success");
    setTimeout(() => setToast(""), 3000);
  };

  /* ---------------- CANCEL + REFUND ---------------- */
  const canRefund = (app) => Date.now() - app.id <= 60 * 60 * 1000;

  const handleCancel = (app) => {
    if (!window.confirm("Cancel this appointment?")) return;

    const updatedHistory = history.map((a) =>
      a.id === app.id
        ? { ...a, status: "Cancelled", cancelledAt: new Date().toISOString() }
        : a
    );
    setHistory(updatedHistory);
    localStorage.setItem("appointmentHistory", JSON.stringify(updatedHistory));

    if (paidAppointments[app.id] && canRefund(app)) {
      const updatedPaid = { ...paidAppointments };
      delete updatedPaid[app.id];
      setPaidAppointments(updatedPaid);
      localStorage.setItem("paidAppointments", JSON.stringify(updatedPaid));
      setToast("💸 Appointment Cancelled & Refund will be provided");
      setToastType("success");
    } else {
      setToast("❌ Appointment Cancelled (No Refund)");
      setToastType("error");
    }

    setTimeout(() => setToast(""), 3000);
  };

  /* ---------------- PRINT FUNCTIONS ---------------- */
  const handlePrintAll = () => {
    const printContent = history
      .map((item, idx) => {
        return `
          <div style="padding: 20px; border: 2px dashed #888; margin-bottom: 15px; font-family: Arial, sans-serif;">
            <h2 style="text-align:center; color:#2F855A;">Appointment Invoice #${
              idx + 1
            }</h2>
            <hr style="border:1px dashed #888; margin: 10px 0;">
            <p><b>Customer:</b> ${item.customerName || item.name || ""}</p>
            <p><b>Date:</b> ${formatDate(item.date)}</p>
            <p><b>Time:</b> ${item.time || "-"}</p>
            <p><b>Dentist:</b> ${item.dentist || "-"}</p>
            <p><b>Type:</b> ${item.type || "-"}</p>
            <p><b>Priority:</b> ${item.priority || "-"}</p>
            <p><b>Amount:</b> ₹${getTotalPaid(item.type)}</p>
            <p><b>Status:</b> ${
              item.status || (paidAppointments[item.id] ? "Paid" : "Pending")
            }</p>
            <hr style="border:1px dashed #888; margin: 10px 0;">
          </div>
        `;
      })
      .join("");

    const newWin = window.open("", "_blank");
    newWin.document.write(
      `<html><head><title>All Appointments</title></head><body>${printContent}</body></html>`
    );
    newWin.document.close();
    newWin.print();
  };

  const handleExportRevenuePDF = () => {
    const totalRevenue = Object.values(revenueByDate).reduce(
      (sum, amt) => sum + amt,
      0
    );

    const content = Object.entries(revenueByDate)
      .map(
        ([date, amount]) => `
        <p><b>${date}:</b> ₹${amount}</p>
      `
      )
      .join("");

    const html = `
    <div style="font-family: Arial; padding: 20px;">
      <h2 style="text-align:center; color:#2F855A;">Revenue Report</h2>
      <hr />
      
      <p style="font-size: 1.1rem;"><b>Total Revenue:</b> ₹${totalRevenue}</p>
      <hr />

      ${content}

      <hr />
      <p style="text-align:center; font-size:0.9rem;">
        Generated by DutyDentist
      </p>
    </div>
  `;

    const win = window.open("", "_blank");
    win.document.write(`<html><body>${html}</body></html>`);
    win.document.close();
    win.print();
  };

  /* ---------------- REVENUE ---------------- */
  const revenueByDate = history.reduce((acc, item) => {
    if (paidAppointments[item.id]) {
      const date = formatDate(item.date);
      acc[date] = (acc[date] || 0) + getTotalPaid(item.type);
    }
    return acc;
  }, {});

  const todayDateISO = new Date().toISOString().split("T")[0];

  const todaysRevenue = history.reduce((sum, item) => {
    if (!paidAppointments[item.id] || !item.date) return sum;
    if (item.date === todayDateISO) {
      return sum + getTotalPaid(item.type);
    }
    return sum;
  }, 0);

  const revenueDates = Object.keys(revenueByDate);
  const revenueValues = Object.values(revenueByDate);

  const revenueChartData = {
    labels: revenueDates,
    datasets: [
      {
        label: "Daily Revenue (₹)",
        data: revenueValues,
        backgroundColor: "#38A169",
      },
    ],
  };

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  /* ---------------- PAGINATION LOGIC ---------------- */
  const sortedHistory = [...history].sort((a, b) => b.id - a.id);
  const totalPages = Math.ceil(sortedHistory.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentAppointments = sortedHistory.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  /* ====================== UI ====================== */
  return (
    <div className="p-4 relative">
      {/* App Logo */}
<img src={logo} alt="App Logo" className="absolute top-4 left-4 w-20 md:w-28 h-auto z-20" />

 {/* ====================== BREADCRUMBS ====================== */}
<Breadcrumbs className="mt-20 mb-4">
  <Link to="/HomePage" className="opacity-60 hover:opacity-100">
    Home
  </Link>
  <Link to="/Welcome" className="opacity-60 hover:opacity-100">
    Welcome
  </Link>
  <Link to="/MyCart" className="font-semibold text-black-700">
    My Cart
  </Link>
</Breadcrumbs>


      {/* Toast */}
   {toast && (
  <div className="fixed top-10 right-10 z-50">
    <div className="bg-green-600 text-white px-6 py-6 rounded-2xl shadow-2xl w-96 flex items-center gap-4">
      <div className="text-yellow-300 text-5xl">
        ⭐
      </div>

      <div>
        <p className="text-xl font-extrabold">
          SUCCESS!
        </p>
        <p className="text-sm mt-1 whitespace-pre-line">
          {toast}
        </p>
      </div>
    </div>
  </div>
)}



      {/* ================= USER BADGE ================= */}
      <div className="flex justify-end mb-2 relative">
        <button
          onClick={() => setShowProfileMenu((prev) => !prev)}
          className="flex items-center gap-3 px-4 py-2 bg-white text-gray-800 font-semibold rounded-full shadow hover:shadow-md transition"
        >
          <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
            {user.initials}
          </div>
          <span className="hidden sm:block">{user.name}</span>
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
              className="block w-full text-left px-4 py-3 hover:bg-gray-100 transition font-medium"
            >
              Edit Profile
            </button>
            <button
              onClick={() => navigate("/Settings")}
              className="block w-full text-left px-4 py-3 hover:bg-gray-100 transition font-medium"
            >
              Settings
            </button>
            <button
              onClick={() => navigate("/Logout")}
              className="block w-full text-left px-4 py-3 hover:bg-red-50 transition font-medium text-red-600"
            >
              Logout
            </button>
          </div>
        )}
      </div>

      {/* ================= FORM ================= */}
      <Card className="max-w-xl mx-auto p-6 shadow-lg rounded-xl">
        <h1 className="text-green-700 text-xl font-bold text-center">
          🦷 Book Appointment
        </h1>
        <p className="text-sm text-gray-500 text-center mt-1">
          Fill in the patient details to schedule an appointment
        </p>
        <hr className="my-4" />

        <CardBody className="flex flex-col gap-4">
          {/* Location */}
          <div>
            <label className="text-sm font-semibold">Location</label>
            <div className="flex items-center border rounded px-3 py-2 mt-1 bg-white focus-within:ring-2 focus-within:ring-green-300">
              <FaLocationDot className="mr-2 text-orange-500" />
              <select
                className="w-full outline-none bg-transparent"
                value={appointment.location}
                onChange={(e) => handleChange("location", e.target.value)}
              >
                <option value="">Select location</option>
                <option>Brisbane</option>
                <option>Melbourne</option>
                <option>Sydney</option>
                <option>Adelaide</option>
              </select>
            </div>
          </div>

          {/* Name */}
          <div>
            <label className="text-sm font-semibold">Patient Name</label>
            <input
              placeholder="Enter patient name"
              value={appointment.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="border px-3 py-2 rounded w-full focus:ring-2 focus:ring-green-300 outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-semibold">Phone Number</label>
            <input
              placeholder="10-digit mobile number"
              value={appointment.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="border px-3 py-2 rounded w-full focus:ring-2 focus:ring-green-300 outline-none"
              maxLength={10}
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-semibold">Email</label>
            <input
              placeholder="example@email.com"
              value={appointment.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="border px-3 py-2 rounded w-full focus:ring-2 focus:ring-green-300 outline-none"
            />
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold">Date</label>
              <input
                type="date"
                value={appointment.date}
                onChange={(e) => handleChange("date", e.target.value)}
                className="border px-3 py-2 rounded w-full focus:ring-2 focus:ring-green-300 outline-none"
                min={todayISO}
              />
            </div>

            <div>
              <label className="text-sm font-semibold">Time Slot</label>
              <select
                value={appointment.time}
                onChange={(e) => handleChange("time", e.target.value)}
                className="border px-3 py-2 rounded w-full focus:ring-2 focus:ring-green-300 outline-none"
              >
                <option value="">Select time</option>
                <option>9:00 AM - 10:00 AM</option>
                <option>10:00 AM - 11:00 AM</option>
                <option>11:00 AM - 12:00 PM</option>
                <option>12:00 PM - 1:00 PM</option>
                <option>1:00 PM - 2:00 PM</option>
                <option>2:00 PM - 3:00 PM</option>
                <option>3:00 PM - 4:00 PM</option>
                <option>4:00 PM - 5:00 PM</option>
                <option>5:00 PM - 6:00 PM</option>
                <option>6:00 PM - 7:00 PM</option>
              </select>
            </div>
          </div>

          {/* Dentist */}
          <div>
            <label className="text-sm font-semibold">Dentist</label>
            <select
              value={appointment.dentist}
              onChange={(e) => handleChange("dentist", e.target.value)}
              className="border px-3 py-2 rounded w-full focus:ring-2 focus:ring-green-300 outline-none"
            >
              <option value="">Select dentist</option>
              <option>Dr. Anitha</option>
              <option>Dr. Ramesh</option>
              <option>Dr. Priya</option>
              <option>Dr. Suresh</option>
              <option>Dr. Kavitha</option>
              <option>Dr. Mahesh</option>
              <option>Dr. Sneha</option>
              <option>Dr. Arjun</option>
            </select>
          </div>

          {/* Treatment & Priority */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold">Treatment</label>
              <select
                value={appointment.type}
                onChange={(e) => handleChange("type", e.target.value)}
                className="border px-3 py-2 rounded w-full focus:ring-2 focus:ring-green-300 outline-none"
              >
                <option value="">Select treatment</option>
                <option value="Consultation">Consultation</option>
                <option value="Cleaning">Cleaning</option>
                <option value="Extraction">Extraction</option>
                <option value="Whitening">Whitening</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-semibold">Priority</label>
              <select
                value={appointment.priority}
                onChange={(e) => handleChange("priority", e.target.value)}
                className="border px-3 py-2 rounded w-full focus:ring-2 focus:ring-green-300 outline-none"
              >
                <option value="">Select priority</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="text-sm font-semibold">Symptoms / Notes</label>
            <Textarea
              placeholder="Describe symptoms or special instructions"
              value={appointment.notes}
              onChange={(e) => handleChange("notes", e.target.value)}
            />
          </div>
        </CardBody>

        <CardFooter className="flex justify-center pt-2">
          <Button
            onClick={handleSubmit}
            disabled={!isAppointmentComplete()}
            className={`w-full ${
              isAppointmentComplete()
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {editingId ? "UPDATE APPOINTMENT" : "BOOK APPOINTMENT"}
          </Button>
        </CardFooter>

        {success && (
          <Alert className="bg-green-100 text-green-800 mt-4 text-center">
            ✅ Appointment booked successfully
          </Alert>
        )}
      </Card>

      {/* ================= REVENUE DASHBOARD ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <Card className="p-5 bg-blue-50 border border-blue-200 shadow rounded-xl">
          <h3 className="text-blue-700 font-semibold mb-1">📆 Today’s Revenue</h3>
          <p className="text-3xl font-bold text-blue-900">₹{todaysRevenue}</p>
        </Card>

        <Card className="p-5 bg-purple-50 border border-purple-200 shadow rounded-xl">
          <h3 className="text-purple-700 font-semibold mb-1">
            💰 Total Revenue
          </h3>
          <p className="text-3xl font-bold text-purple-900">
            ₹{Object.values(revenueByDate).reduce((sum, amt) => sum + amt, 0)}
          </p>
          <Button
            size="sm"
            className="bg-purple-600 text-white mt-3 w-fit"
            onClick={handleExportRevenuePDF}
          >
            📤 Export Revenue PDF
          </Button>
        </Card>

        <Card className="p-5 shadow rounded-xl">
          <h3 className="text-green-700 font-semibold mb-2">
            📊 Daily Revenue
          </h3>
          {revenueDates.length === 0 ? (
            <p className="text-sm text-gray-600">No revenue yet.</p>
          ) : (
            <div className="h-48">
              <Bar
                data={revenueChartData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                }}
              />
            </div>
          )}
        </Card>
      </div>

      {/* ================= DAILY REVENUE LIST ================= */}
      <Card className="p-6 bg-green-50 border border-green-200 shadow rounded-xl mt-8">
        <h3 className="text-green-700 font-semibold mb-4">💰 Daily Revenue</h3>

        <div className="flex justify-between items-center bg-green-100 px-4 py-3 rounded mb-4">
          <span className="font-semibold text-green-800">Total Revenue</span>
          <span className="text-xl font-bold text-green-900">
            ₹{Object.values(revenueByDate).reduce((sum, amt) => sum + amt, 0)}
          </span>
        </div>

        {Object.keys(revenueByDate).length === 0 ? (
          <p className="text-sm text-gray-600">No revenue recorded yet.</p>
        ) : (
          <div className="flex flex-col gap-2">
            {Object.entries(revenueByDate).map(([date, amount]) => (
              <div
                key={date}
                className="flex justify-between items-center bg-white px-4 py-2 rounded shadow-sm"
              >
                <span className="font-medium">{date}</span>
                <span className="font-bold text-green-700">₹{amount}</span>
              </div>
            ))}
          </div>
        )}
      </Card>

      {/* ================= APPOINTMENT HISTORY ================= */}
      <div className="w-full mt-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-green-700">
              APPOINTMENTS HISTORY
            </h2>            
            <MdOutlineWorkHistory size={32} className="text-green-700" />
          </div>

          <div className="flex gap-2">
            <Button
              size="sm"
              className="bg-green-700 text-white"
              onClick={handlePrintAll}
            >
              PRINT ALL
            </Button>

            <Button
              size="sm"
              className="bg-red-600 text-white"
              onClick={handleClearHistory}
            >
              CLEAR HISTORY
            </Button>
          </div>
        </div>

        {currentAppointments.length === 0 ? (
          <p className="text-gray-600">No appointments booked yet.</p>
        ) : (
          currentAppointments.map((item) => {
            let borderColor = "#F6AD55";
            if (item.status === "Cancelled") borderColor = "#E53E3E";
            if (paidAppointments[item.id]) borderColor = "#2F855A";

            return (
              <div
                key={item.id}
                className="pb-4 mb-4 border-b border-gray-300 last:border-b-0"
              >
                <Card
                  className="p-5 shadow-md rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center border-l-8 bg-white"
                  style={{ borderLeftColor: borderColor }}
                >
                  {/* LEFT CONTENT */}
                  <div className="flex flex-col gap-2 w-full md:w-2/3">
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-semibold">
                        {item.customerName || item.name || ""}
                      </p>

                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          item.status === "Cancelled"
                            ? "bg-red-100 text-red-700"
                            : paidAppointments[item.id]
                            ? "bg-green-100 text-green-700"
                            : "bg-orange-100 text-orange-700"
                        }`}
                      >
                        {item.status === "Cancelled"
                          ? "CANCELLED"
                          : paidAppointments[item.id]
                          ? `PAID (${paidAppointments[item.id]})`
                          : "PENDING"}
                      </span>
                    </div>

                    <hr className="my-2 border-gray-200" />

                    <p className="text-sm text-gray-700">
                      <b>Date:</b> {formatDate(item.date)}
                    </p>

                    <Button
                      size="sm"
                      variant="text"
                      className="w-fit px-1 text-blue-600"
                      onClick={() => toggleExpand(item.id)}
                    >
                      {expandedId === item.id
                        ? "Hide Details ▲"
                        : "View Details ▼"}
                    </Button>

                    {expandedId === item.id && (
                      <>
                        <hr className="my-2 border-gray-200" />

                        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-sm">
                          <p>
                            <b>Time:</b> {item.time}
                          </p>
                          <p>
                            <b>Dentist:</b> {item.dentist}
                          </p>
                          <p>
                            <b>Type:</b> {item.type}
                          </p>
                          <p>
                            <b>Priority:</b> {item.priority}
                          </p>
                          <p>
                            <b>Amount:</b> ₹{getTotalPaid(item.type)}
                          </p>

                          {paidAppointments[item.id] && (
                            <div className="col-span-2 text-gray-700 mt-1">
                              {(() => {
                                const tax = getTaxBreakdown(
                                  getTotalPaid(item.type)
                                );
                                return (
                                  <>
                                    <p>Base: ₹{tax.base}</p>
                                    <p>GST (18%): ₹{tax.gst}</p>
                                    <p>
                                      CGST: ₹{tax.cgst} | SGST: ₹{tax.sgst}
                                    </p>
                                  </>
                                );
                              })()}
                            </div>
                          )}

                          {item.notes && (
                            <p className="col-span-2">
                              <b>Notes:</b> {item.notes}
                            </p>
                          )}
                        </div>
                      </>
                    )}
                  </div>

                  {/* RIGHT ACTIONS */}
                  <div className="flex flex-col gap-2 mt-4 md:mt-0 w-full md:w-auto">
                    <Button size="sm" onClick={() => handleEdit(item)}>
                      EDIT
                    </Button>

                    <Button
                      size="sm"
                      disabled={
                        item.status === "Cancelled" ||
                        paidAppointments[item.id]
                      }
                      onClick={() => handlePayment(item)}
                      className={`${
                        paidAppointments[item.id] ||
                        item.status === "Cancelled"
                          ? "bg-gray-400"
                          : "bg-blue-600 text-white"
                      }`}
                    >
                      {paidAppointments[item.id] ? "PAID ✅" : "PAY NOW"}
                    </Button>

                    <Button
                      size="sm"
                      className="bg-green-600 text-white flex items-center gap-2"
                      disabled={!paidAppointments[item.id]}
                      onClick={() =>
                        alert("Acknowledgement already included")
                      }
                    >
                      <FiPrinter size={18} />
                      PRINT
                    </Button>

                    {item.status !== "Cancelled" && (
                      <Button
                        size="sm"
                        className="bg-red-600 text-white"
                        onClick={() => handleCancel(item)}
                      >
                        CANCEL
                      </Button>
                    )}
                  </div>
                </Card>
              </div>
            );
          })
        )}

        {/* 🔽 PAGINATION CONTROLS */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-6">
            <Button
              size="sm"
              variant="outlined"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
            >
              ◀ Prev
            </Button>

            {[...Array(totalPages)].map((_, i) => (
              <Button
                key={i}
                size="sm"
                className={`${
                  currentPage === i + 1
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-700 border"
                }`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </Button>
            ))}

            <Button
              size="sm"
              variant="outlined"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              Next ▶
            </Button>
          </div>
        )}
      </div>

      {/* ================= LEGENDS ================= */}
      <Card className="border rounded-xl p-6 bg-white shadow-sm sticky top-4 z-40 mt-10">
        <div className="mb-6">
          <h3 className="font-semibold text-gray-700 mb-3">Legends</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {legends.map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span
                  className={`w-10 h-10 flex items-center justify-center rounded-full font-bold text-xs ${item.color}`}
                >
                  {item.code}
                </span>
                <span className="text-sm text-gray-700">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <hr className="my-4 border-gray-300" />

        <div>
          <h4 className="font-semibold text-gray-700 mb-3">Day Type</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {DayType.map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span
                  className={`w-10 h-10 flex items-center justify-center rounded-full font-bold text-xs ${item.color}`}
                >
                  {item.code}
                </span>
                <span className="text-sm text-gray-700">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* ================= PAYMENT MODAL ================= */}
      {showPaymentModal && selectedAppointment && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-96 shadow-2xl">
            <h2 className="text-lg font-bold text-center mb-4">
              Choose Payment Method
            </h2>

          <b>  <p className="text-sm text-red-600 text-center mb-4">
              Amount: ₹{getTotalPaid(selectedAppointment.type)}
            </p></b>

            <div className="flex flex-col gap-4">
              <Button
                className="bg-green-600 text-white"
                onClick={() => confirmPayment("Cash")}
              >
                💵 Pay by Cash
              </Button>

              <div className="border rounded-xl p-4 flex flex-col items-center gap-3 bg-gray-50">
                <p className="font-semibold text-sm">
                  📱 Pay via UPI Scanner
                </p>

                <img
                  className="w-32 h-32 object-contain"
                  src={scanner}
                  alt="Scanner"
                />

                <p className="text-xs text-gray-600 text-center">
                  Scan using GPay / PhonePe / Paytm
                </p>

                <Button
                  size="sm"
                  className="bg-blue-600 text-white mt-1"
                  onClick={() => confirmPayment("UPI Scanner")}
                >
                  I Have Paid
                </Button>
              </div>

              <Button
                variant="text"
                className="text-gray-600"
                onClick={() => setShowPaymentModal(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyCart;
