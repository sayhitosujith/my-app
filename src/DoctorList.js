import { useEffect, useState, useRef } from "react";
import {
  Card,
  Typography,
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  Breadcrumbs,
} from "@material-tailwind/react";
import logo from "./assets/DutyDentist.png";
import { useNavigate, Link } from "react-router-dom";
import {
  Bars3Icon,
  Squares2X2Icon,
  PencilIcon,
  TrashIcon,
  EyeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/solid";
import { VscArrowRight } from "react-icons/vsc";
import { FcEngineering } from "react-icons/fc";
import { AiOutlineDelete } from "react-icons/ai";
import "./DoctorList.css";
import {
  FaFlag,
  FaSun,
  FaMoon,
  FaStar,
  FaChurch,
} from "react-icons/fa";
import { GiPartyPopper, GiRam } from "react-icons/gi";
import { MdOutlineFestival } from "react-icons/md";

function DoctorList() {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editDoctor, setEditDoctor] = useState({});
  const [viewDoctor, setViewDoctor] = useState(null);
  const [gridView, setGridView] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const doctorsPerPage = 32;
  const cardRefs = useRef([]);

  const [confirmAction, setConfirmAction] = useState({
    open: false,
    type: "",
    index: null,
    doctor: null,
  });

  const [selectedDoctors, setSelectedDoctors] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn")) || false
  );

  const [currentTime, setCurrentTime] = useState("");
  const [openSwipeModal, setOpenSwipeModal] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [sessionExpired, setSessionExpired] = useState(false);

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser")) || {
      name: "Sujith S",
      initials: "SS",
    }
  );

  const [swipeHistory, setSwipeHistory] = useState(
    JSON.parse(localStorage.getItem("swipeHistory")) || []
  );

  const shiftObj = {
    type: "Flexi Shift",
    start: "10:00 AM",
    end: "10:00 PM",
  };

  const RH_QUOTA = 2;

  const [leaveRequests, setLeaveRequests] = useState(
    JSON.parse(localStorage.getItem("leaveRequests")) || []
  );

  const usedRH = leaveRequests.filter(
    (l) => l.type === "RH" && l.status !== "Cancelled"
  ).length;

  const remainingRH = RH_QUOTA - usedRH;

  const holidays = [
    { date: "1 Jan 2026", day: "Thursday", name: "New Year's Day", type: "NH", icon: <FaSun className="inline mr-1 text-yellow-500" /> },
    { date: "3 Jan 2026", day: "Saturday", name: "Hazrat Ali's Birthday", type: "RH", icon: <FaMoon className="inline mr-1 text-blue-500" /> },
    { date: "14 Jan 2026", day: "Wednesday", name: "Makar Sankranti / Pongal", type: "RH", icon: <FaStar className="inline mr-1 text-orange-500" /> },
    { date: "23 Jan 2026", day: "Friday", name: "Vasant Panchami", type: "RH", icon: <MdOutlineFestival className="inline mr-1 text-yellow-400" /> },
    { date: "26 Jan 2026", day: "Monday", name: "Republic Day", type: "NH", icon: <FaFlag className="inline mr-1 text-red-500" /> },
    { date: "15 Feb 2026", day: "Sunday", name: "Maha Shivaratri", type: "RH", icon: <FaMoon className="inline mr-1 text-gray-700" /> },
    { date: "4 Mar 2026", day: "Wednesday", name: "Holi", type: "NH", icon: <GiPartyPopper className="inline mr-1 text-pink-500" /> },
    { date: "21 Mar 2026", day: "Saturday", name: "Eid-ul-Fitr (Tentative)", type: "RH", icon: <FaMoon className="inline mr-1 text-green-600" /> },
    { date: "26 Mar 2026", day: "Thursday", name: "Ram Navami", type: "RH", icon: <GiRam className="inline mr-1 text-orange-400" /> },
    { date: "31 Mar 2026", day: "Tuesday", name: "Mahavir Jayanti", type: "RH", icon: <FaStar className="inline mr-1 text-blue-400" /> },
    { date: "3 Apr 2026", day: "Friday", name: "Good Friday", type: "NH", icon: <FaChurch className="inline mr-1 text-red-600" /> },
    { date: "1 May 2026", day: "Friday", name: "Labour Day / Buddha Purnima", type: "NH", icon: <FaFlag className="inline mr-1 text-blue-500" /> },
    { date: "27 May 2026", day: "Wednesday", name: "Eid-ul-Zuha (Bakrid) (Tentative)", type: "RH", icon: <FaMoon className="inline mr-1 text-green-700" /> },
    { date: "26 Jun 2026", day: "Friday", name: "Muharram (Tentative)", type: "RH", icon: <FaMoon className="inline mr-1 text-gray-800" /> },
    { date: "15 Aug 2026", day: "Saturday", name: "Independence Day", type: "NH", icon: <FaFlag className="inline mr-1 text-red-600" /> },
    { date: "26 Aug 2026", day: "Wednesday", name: "Milad-un-Nabi (Tentative)", type: "RH", icon: <FaMoon className="inline mr-1 text-blue-600" /> },
    { date: "4 Sep 2026", day: "Friday", name: "Janmashtami", type: "RH", icon: <GiRam className="inline mr-1 text-purple-500" /> },
    { date: "2 Oct 2026", day: "Friday", name: "Gandhi Jayanti", type: "NH", icon: <FaFlag className="inline mr-1 text-green-600" /> },
    { date: "20 Oct 2026", day: "Tuesday", name: "Dussehra", type: "RH", icon: <MdOutlineFestival className="inline mr-1 text-orange-600" /> },
    { date: "8 Nov 2026", day: "Sunday", name: "Diwali", type: "NH", icon: <GiPartyPopper className="inline mr-1 text-yellow-500" /> },
    { date: "24 Nov 2026", day: "Tuesday", name: "Guru Nanak Jayanti", type: "RH", icon: <FaStar className="inline mr-1 text-blue-500" /> },
    { date: "25 Dec 2026", day: "Friday", name: "Christmas", type: "NH", icon: <FaChurch className="inline mr-1 text-red-500" /> },
  ];

  useEffect(() => {
    const storedDoctors = JSON.parse(localStorage.getItem("doctors")) || [];
    setDoctors(storedDoctors);
  }, []);

  const saveDoctors = (updated) => {
    setDoctors(updated);
    localStorage.setItem("doctors", JSON.stringify(updated));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setCurrentTime(timeString);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const currentDay = new Date().toLocaleDateString("en-US", {
    weekday: "long",
  });

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const handleOpen = () => {
    setSwipeHistory((prev) => {
      const lastEntry = prev[prev.length - 1];
      let updated;
      let newLoginState;

      if (!lastEntry || lastEntry.signOut) {
        const loginTime = new Date().toISOString();
        updated = [...prev, { signIn: loginTime, signOut: null }];
        newLoginState = true;
        localStorage.setItem("loginTime", loginTime);
      } else {
        updated = prev.map((entry, i) =>
          i === prev.length - 1
            ? { ...entry, signOut: new Date().toISOString() }
            : entry
        );
        newLoginState = false;
        localStorage.removeItem("loginTime");
      }

      setIsLoggedIn(newLoginState);
      localStorage.setItem("isLoggedIn", JSON.stringify(newLoginState));
      localStorage.setItem("swipeHistory", JSON.stringify(updated));

      return updated;
    });
  };

  useEffect(() => {
    if (!isLoggedIn) return;

    const loginTime = localStorage.getItem("loginTime");
    if (!loginTime) return;

    const loginTimestamp = new Date(loginTime).getTime();
    const now = Date.now();
    const fiveMinutes = 5 * 60 * 1000;
    const remainingTime = fiveMinutes - (now - loginTimestamp);

    if (remainingTime <= 0) {
      setSessionExpired(true);
    } else {
      const timer = setTimeout(() => {
        setSessionExpired(true);
      }, remainingTime);

      return () => clearTimeout(timer);
    }
  }, [isLoggedIn]);

  const executeAction = () => {
    const { type, index, doctor } = confirmAction;

    if (type === "delete") {
      const updated = doctors.filter((_, i) => i !== index);
      saveDoctors(updated);
    } else if (type === "edit") {
      setEditIndex(index);
      setEditDoctor(doctors[index]);
    } else if (type === "view") {
      setViewDoctor(doctor);
    } else if (type === "clone") {
      const cloned = { ...doctors[index] };
      const updated = [...doctors, cloned];
      saveDoctors(updated);
    }

    setConfirmAction({ open: false, type: "", index: null, doctor: null });
  };

  const handleSave = () => {
    const updated = [...doctors];
    updated[editIndex] = editDoctor;
    saveDoctors(updated);
    setEditIndex(null);
    setEditDoctor({});
  };

  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = doctors.slice(indexOfFirstDoctor, indexOfLastDoctor);
  const totalPages = Math.ceil(doctors.length / doctorsPerPage);

  const handlePrevPage = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const handleNextPage = () =>
    setCurrentPage((p) => Math.min(p + 1, totalPages));

  const toggleDoctorSelect = (index) => {
    setSelectedDoctors((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedDoctors([]);
    } else {
      const allIndices = currentDoctors.map((_, i) => indexOfFirstDoctor + i);
      setSelectedDoctors(allIndices);
    }
    setSelectAll(!selectAll);
  };

  const deleteSelectedDoctors = () => {
    const updated = doctors.filter((_, i) => !selectedDoctors.includes(i));
    saveDoctors(updated);
    setSelectedDoctors([]);
    setSelectAll(false);
  };

  const [openHolidayDialog, setOpenHolidayDialog] = useState(false);
  const [openSettingsModal, setOpenSettingsModal] = useState(false);
  const [openLeaveHistory, setOpenLeaveHistory] = useState(false);

  const today = new Date();

  const handleApplyLeave = (holiday) => {
    const isDuplicate = leaveRequests.some(
      (l) => l.date === holiday.date && l.status !== "Cancelled"
    );

    if (isDuplicate) {
      alert("Leave already applied for this date.");
      return;
    }

    if (remainingRH <= 0) {
      alert("RH quota exhausted. You cannot apply more RH leaves.");
      return;
    }

    const newLeave = {
      id: Date.now(),
      date: holiday.date,
      name: holiday.name,
      type: holiday.type,
      status: "Approved",
      appliedOn: new Date().toLocaleString(),
    };

    const updated = [...leaveRequests, newLeave];
    setLeaveRequests(updated);
    localStorage.setItem("leaveRequests", JSON.stringify(updated));
  };

  const handleCancelLeave = (id) => {
    const updated = leaveRequests.map((l) =>
      l.id === id ? { ...l, status: "Cancelled" } : l
    );
    setLeaveRequests(updated);
    localStorage.setItem("leaveRequests", JSON.stringify(updated));
  };

  return (
    <div className="p-4 sm:p-6 min-h-screen bg-blue-50">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4 p-3 bg-white shadow-md rounded-xl">
        <img
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain"
          src={logo}
          alt="Application Logo"
        />

        {/* User Badge */}
        <div className="relative">
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center gap-2 px-3 py-2 bg-blue-50 text-blue-900 font-semibold rounded-full shadow-sm hover:bg-blue-100 transition"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-sm sm:text-base">
              {user.initials ||
                user.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <span className="hidden sm:inline">{user.name}</span>
            <svg
              className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${
                showProfileMenu ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>

          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-44 sm:w-48 bg-white rounded-xl shadow-lg overflow-hidden z-10">
              <a
                href="/Profile"
                className="block px-4 py-3 hover:bg-blue-50 transition font-medium"
              >
                Edit Profile
              </a>
              <a
                href="/Settings"
                className="block px-4 py-3 hover:bg-blue-50 transition font-medium"
              >
                Settings
              </a>
              <a
                href="/Logout"
                className="block px-4 py-3 hover:bg-blue-50 transition font-medium text-red-600"
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Breadcrumbs */}
      <Breadcrumbs className="mt-2 sm:mt-6 mb-4 text-sm">
        <Link to="/HomePage" className="opacity-60 hover:opacity-100">
          Home
        </Link>
        <Link to="/Welcome" className="opacity-60 hover:opacity-100">
          Welcome
        </Link>
        <Link to="/DoctorList" className="font-semibold text-black-700">
          DoctorList
        </Link>
      </Breadcrumbs>

      <div className="flex flex-col lg:flex-row gap-6 items-stretch">
        {/* Greeting Card */}
        <Card className="w-full lg:w-1/3 p-5 shadow-xl rounded-2xl bg-gradient-to-br from-white to-blue-50 border border-blue-100">
          <Typography variant="h5" className="mb-4">
            Hello, {getGreeting()}
          </Typography>
          <Typography className="text-gray-700 italic text-sm sm:text-base">
            “Don’t worry about failures, worry about the chances you miss when
            you don’t even try.”
          </Typography>
        </Card>

        {/* Time & Shift Card */}
        <Card className="relative w-full lg:w-1/3 p-5 shadow-xl rounded-2xl bg-gradient-to-br from-white to-blue-50 border border-blue-100">
          <FcEngineering
            size={26}
            className="absolute top-4 right-4 cursor-pointer hover:scale-110 transition"
            title="Settings"
            onClick={() => setOpenSettingsModal(true)}
          />

          <Dialog
            open={openSettingsModal}
            handler={() => setOpenSettingsModal(false)}
            size="sm"
          >
            <DialogBody className="space-y-4">
              <Typography variant="h5" className="text-center">
                SETTINGS
              </Typography>

              <div className="flex justify-between items-center border-b pb-2">
                <Typography className="font-medium">Dark Mode</Typography>
                <input type="checkbox" className="w-5 h-5" />
              </div>

              <div className="flex justify-between items-center border-b pb-2">
                <Typography className="font-medium">Show Holidays</Typography>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>

              <div className="flex justify-between items-center border-b pb-2">
                <Typography className="font-medium">
                  Enable Notifications
                </Typography>
                <input type="checkbox" className="w-5 h-5" />
              </div>

              <div className="flex justify-between items-center border-b pb-2">
                <Typography className="font-medium">
                  Enable Timezone Support
                </Typography>
                <input type="checkbox" className="w-5 h-5" />
              </div>
            </DialogBody>

            <DialogFooter>
              <Button
                variant="text"
                color="red"
                onClick={() => setOpenSettingsModal(false)}
              >
                Close
              </Button>
              <Button
                color="green"
                onClick={() => setOpenSettingsModal(false)}
              >
                Save
              </Button>
            </DialogFooter>
          </Dialog>

          <Typography
            variant="h5"
            className="mb-4 text-center font-bold text-blue-700 tracking-wide"
          >
            Time & Shift Information
          </Typography>

          <div className="bg-blue-100 p-3 rounded-xl shadow-inner mb-3">
            <p className="text-gray-800 font-semibold text-center text-sm sm:text-base">
              {`Monday-Friday | ${shiftObj.type}`}
            </p>
            <p className="text-gray-600 text-center text-xs sm:text-sm">
              <b>
                <u>{`${shiftObj.start} – ${shiftObj.end}`}</u>
              </b>
            </p>
          </div>

          <p className="text-blue-900 font-extrabold text-xl sm:text-2xl text-center mt-2 tracking-wider">
            ⏱ {currentTime} - <i>{currentDay}</i>
          </p>

          {swipeHistory.length > 0 && (
            <p className="text-gray-700 text-xs sm:text-sm text-center mt-1">
              <span className="font-medium">Last Sign In:</span>{" "}
              {new Date(
                swipeHistory[swipeHistory.length - 1].signIn
              ).toLocaleString()}
              <br />
              <span className="font-medium">Last Sign Out:</span>{" "}
              {swipeHistory[swipeHistory.length - 1].signOut
                ? new Date(
                    swipeHistory[swipeHistory.length - 1].signOut
                  ).toLocaleString()
                : "-"}
            </p>
          )}

          <div className="mt-5 flex justify-center sm:justify-end">
            <Button
              className={`px-5 py-2 sm:px-6 sm:py-3 rounded-lg shadow-md transition-transform hover:scale-105 ${
                isLoggedIn
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-green-600 hover:bg-green-700"
              }`}
              onClick={handleOpen}
            >
              {isLoggedIn ? "Sign Out" : "Sign In"}
            </Button>
          </div>
        </Card>

        {/* Upcoming Holidays */}
        <Card className="w-full lg:w-1/3 p-5 shadow-xl rounded-2xl bg-gradient-to-br from-white to-blue-50 border border-blue-100">
          <Typography
            variant="h5"
            className="mb-4 flex items-center justify-between"
          >
            Upcoming Holidays
            <VscArrowRight
              size={24}
              className="cursor-pointer text-blue-600 hover:scale-110 transition"
              title="View all holidays"
              onClick={() => setOpenHolidayDialog(true)}
            />
          </Typography>

          <div className="mb-3 p-3 bg-blue-100 rounded-lg text-center shadow-inner">
            <Typography className="font-semibold text-blue-800">
              RH Leave Balance: {remainingRH} / {RH_QUOTA}
            </Typography>
            <Button
              size="sm"
              className="mt-2 bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => setOpenLeaveHistory(true)}
            >
              View Leave History
            </Button>
          </div>

          <Dialog
            open={openHolidayDialog}
            handler={() => setOpenHolidayDialog(false)}
            size="md"
          >
            <DialogBody className="space-y-3 max-h-[70vh] overflow-y-auto">
              <Typography variant="h5" className="mb-3 text-center">
                All Holidays
              </Typography>

              {holidays
                .filter((holiday) => new Date(holiday.date) >= today)
                .sort(
                  (a, b) =>
                    new Date(a.date).getTime() -
                    new Date(b.date).getTime()
                )
                .map((holiday, index) => {
                  const isPast = new Date(holiday.date) < today;
                  const alreadyApplied = leaveRequests.some(
                    (l) =>
                      l.date === holiday.date && l.status !== "Cancelled"
                  );

                  return (
                    <div
                      key={index}
                      className="border-b pb-3 last:border-b-0 text-gray-700 flex justify-between items-center gap-2"
                    >
                      <div>
                        <div className="font-semibold">
                          {holiday.icon} {holiday.date} • {holiday.day}
                        </div>
                        <div>
                          {holiday.name}{" "}
                          <span className="text-xs text-gray-500">
                            ({holiday.type})
                          </span>
                        </div>
                      </div>

                      {holiday.type === "RH" && (
                        <Button
                          size="sm"
                          color="green"
                          disabled={
                            isPast || alreadyApplied || remainingRH <= 0
                          }
                          onClick={() => handleApplyLeave(holiday)}
                        >
                          {alreadyApplied
                            ? "Applied"
                            : remainingRH <= 0
                            ? "Quota Full"
                            : "Apply Leave"}
                        </Button>
                      )}
                    </div>
                  );
                })}
            </DialogBody>

            <DialogFooter>
              <Button
                color="blue"
                onClick={() => setOpenHolidayDialog(false)}
              >
                Close
              </Button>
            </DialogFooter>
          </Dialog>

          {holidays
            ?.filter((holiday) => new Date(holiday.date) >= today)
            .sort(
              (a, b) =>
                new Date(a.date).getTime() - new Date(b.date).getTime()
            )
            .slice(0, 3)
            .map((holiday, index) => {
              const isPast = new Date(holiday.date) < today;
              const alreadyApplied = leaveRequests.some(
                (l) => l.date === holiday.date && l.status !== "Cancelled"
              );

              return (
                <div
                  key={index}
                  className="mt-2 space-y-1 text-gray-700 border-b pb-2 last:border-b-0 text-sm sm:text-base flex justify-between items-center gap-2"
                >
                  <div>
                    <div className="font-semibold">
                      {holiday.icon} {holiday.date} • {holiday.day}
                    </div>
                    <div>
                      {holiday.name}{" "}
                      <span className="text-xs text-gray-500">
                        ({holiday.type})
                      </span>
                    </div>
                  </div>

                  {holiday.type === "RH" && (
                    <Button
                      size="sm"
                      color="green"
                      disabled={
                        isPast || alreadyApplied || remainingRH <= 0
                      }
                      onClick={() => handleApplyLeave(holiday)}
                    >
                      {alreadyApplied
                        ? "Applied"
                        : remainingRH <= 0
                        ? "Quota Full"
                        : "Apply"}
                    </Button>
                  )}
                </div>
              );
            })}
        </Card>
      </div>

      {/* Leave History Modal */}
      <Dialog
        open={openLeaveHistory}
        handler={() => setOpenLeaveHistory(false)}
        size="md"
      >
        <DialogBody className="space-y-4 max-h-[70vh] overflow-y-auto">
          <Typography variant="h5" className="text-center">
            Leave History
          </Typography>

          {leaveRequests.length === 0 ? (
            <Typography className="text-center text-gray-600">
              No leave requests yet.
            </Typography>
          ) : (
            leaveRequests.map((leave) => (
              <div
                key={leave.id}
                className="border p-3 rounded-lg bg-blue-50 shadow-sm flex justify-between items-center gap-2"
              >
                <div>
                  <p className="font-semibold">
                    {leave.date} • {leave.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    Type: {leave.type} | Status:{" "}
                    <span
                      className={`font-semibold ${
                        leave.status === "Approved"
                          ? "text-green-600"
                          : leave.status === "Cancelled"
                          ? "text-red-600"
                          : "text-gray-600"
                      }`}
                    >
                      {leave.status}
                    </span>
                  </p>
                  <p className="text-xs text-gray-500">
                    Applied on: {leave.appliedOn}
                  </p>
                </div>

                {leave.status !== "Cancelled" && (
                  <Button
                    size="sm"
                    color="red"
                    onClick={() => handleCancelLeave(leave.id)}
                  >
                    Cancel
                  </Button>
                )}
              </div>
            ))
          )}
        </DialogBody>
        <DialogFooter>
          <Button color="blue" onClick={() => setOpenLeaveHistory(false)}>
            Close
          </Button>
        </DialogFooter>
      </Dialog>

      {/* Delete Selected */}
      {selectedDoctors.length > 0 && (
        <div className="mt-4 flex justify-end">
          <Button color="red" onClick={deleteSelectedDoctors}>
            <AiOutlineDelete size={20} className="mr-1" /> Delete (
            {selectedDoctors.length})
          </Button>
        </div>
      )}

      {/* View Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 mt-6">
        <Typography variant="h4" color="grey" className="text-xl sm:text-2xl">
          Doctors List
        </Typography>
        <div className="flex items-center gap-3 flex-wrap">
          <label className="flex items-center gap-1 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={selectAll}
              onChange={toggleSelectAll}
            />
            Select All
          </label>
          <button
            className={`p-2 rounded ${
              !gridView ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setGridView(false)}
            title="List View"
          >
            <Bars3Icon className="w-5 h-5" />
          </button>
          <button
            className={`p-2 rounded ${
              gridView ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setGridView(true)}
            title="Grid View"
          >
            <Squares2X2Icon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Add Doctor Button */}
      <div className="flex justify-center sm:justify-end mb-4">
        <Button
          color="green"
          className="px-6 sm:px-10 py-2 text-sm sm:text-lg"
          onClick={() => navigate("/AddDoctor")}
        >
          + ADD NEW DOCTOR
        </Button>
      </div>

      {/* Doctors Display */}
      {doctors.length === 0 ? (
        <Typography>No doctors added yet.</Typography>
      ) : (
        <>
          <div
            className={
              gridView
                ? "grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                : "flex flex-col gap-4"
            }
          >
            {currentDoctors.map((doc, index) => {
              const realIndex = indexOfFirstDoctor + index;
              return (
                <Card
                  key={realIndex}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={`p-4 flex relative border min-h-[240px] transition-transform duration-200 ${
                    selectedDoctors.includes(realIndex)
                      ? "border-red-500 bg-red-100"
                      : "border-white bg-blue-100 hover:bg-blue-100 hover:scale-105 shadow-lg"
                  } ${
                    gridView
                      ? "flex-col items-center text-center justify-between"
                      : "flex-row items-center gap-4"
                  }`}
                >
                  <input
                    type="checkbox"
                    className="absolute top-2 left-2"
                    checked={selectedDoctors.includes(realIndex)}
                    onChange={() => toggleDoctorSelect(realIndex)}
                  />

                  {doc.image && (
                    <img
                      src={doc.image}
                      alt="Doctor"
                      className={`${
                        gridView
                          ? "w-20 h-20 sm:w-24 sm:h-24"
                          : "w-24 h-24 sm:w-28 sm:h-28"
                      } object-cover border-2 border-blue-700 mb-2 cursor-pointer rounded-lg transition-transform duration-200 hover:scale-105 hover:shadow-xl`}
                      onClick={() => setViewDoctor(doc)}
                    />
                  )}

                  <div className="flex-1 w-full flex flex-col items-start text-left space-y-1 text-blue-900">
                    <Typography
                      variant="h6"
                      className="font-semibold text-sm sm:text-base"
                    >
                      {doc.firstName} {doc.lastName}
                    </Typography>
                    {doc.phone && (
                      <Typography className="text-xs sm:text-sm">
                        <span className="font-medium">Phone: </span>
                        <a
                          href={`tel:${doc.phone}`}
                          className="text-blue-800 hover:underline"
                        >
                          {doc.phone}
                        </a>
                      </Typography>
                    )}
                    {doc.email && (
                      <Typography className="text-xs sm:text-sm break-all">
                        <span className="font-medium">Email: </span>
                        <a
                          href={`mailto:${doc.email}`}
                          className="text-blue-800 hover:underline"
                        >
                          {doc.email}
                        </a>
                      </Typography>
                    )}
                  </div>

                  <div className="mt-2 flex justify-center gap-2 flex-wrap">
                    <Button
                      size="sm"
                      className="bg-blue-500 text-white hover:bg-blue-600 text-xs sm:text-sm"
                      onClick={() =>
                        setConfirmAction({
                          open: true,
                          type: "view",
                          doctor: doc,
                        })
                      }
                    >
                      <EyeIcon className="w-4 h-4 mr-1" /> View
                    </Button>

                    <Button
                      size="sm"
                      className="bg-blue-500 text-white hover:bg-blue-600 text-xs sm:text-sm"
                      onClick={() =>
                        setConfirmAction({
                          open: true,
                          type: "edit",
                          index: realIndex,
                        })
                      }
                    >
                      <PencilIcon className="w-4 h-4 mr-1" /> Edit
                    </Button>

                    <Button
                      size="sm"
                      className="bg-blue-500 text-white hover:bg-blue-600 text-xs sm:text-sm"
                      onClick={() =>
                        setConfirmAction({
                          open: true,
                          type: "delete",
                          index: realIndex,
                        })
                      }
                    >
                      <TrashIcon className="w-4 h-4 mr-1" /> Delete
                    </Button>

                    <Button
                      size="sm"
                      className="bg-blue-500 text-white hover:bg-blue-600 text-xs sm:text-sm"
                      onClick={() =>
                        setConfirmAction({
                          open: true,
                          type: "clone",
                          index: realIndex,
                        })
                      }
                    >
                      <DocumentDuplicateIcon className="w-4 h-4 mr-1" /> Clone
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-6">
            <Button onClick={handlePrevPage} disabled={currentPage === 1}>
              Prev
            </Button>
            <Typography className="text-sm sm:text-base">
              Page {currentPage} of {totalPages}
            </Typography>
            <Button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </>
      )}

      {/* Swipe Details Modal */}
      <Dialog
        open={openSwipeModal}
        handler={() => setOpenSwipeModal(false)}
        size="lg"
      >
        <DialogBody>
          <div className="space-y-4 text-gray-900">
            <h2 className="text-xl font-semibold mb-2">Swipe History</h2>

            {swipeHistory.length > 0 && (
              <div className="p-3 rounded-lg bg-blue-50 border-l-4 border-blue-400 shadow-sm">
                <p className="font-semibold text-blue-700">Last Sign In:</p>
                <p>
                  {new Date(
                    swipeHistory[swipeHistory.length - 1].signIn
                  ).toLocaleDateString()}
                </p>
                <p>
                  {new Date(
                    swipeHistory[swipeHistory.length - 1].signIn
                  ).toLocaleTimeString()}
                </p>
              </div>
            )}

            {swipeHistory.length === 0 ? (
              <p>No swipes recorded yet.</p>
            ) : (
              swipeHistory.map((entry, idx) => (
                <div
                  key={idx}
                  className="border p-3 rounded-lg bg-gray-50 shadow-sm text-sm sm:text-base"
                >
                  <p>
                    <span className="font-bold">Date:</span>{" "}
                    {new Date(entry.signIn).toLocaleDateString()}
                  </p>
                  <p>
                    <span className="font-bold">Sign In:</span>{" "}
                    {new Date(entry.signIn).toLocaleTimeString()}
                  </p>
                  <p>
                    <span className="font-bold">Sign Out:</span>{" "}
                    {entry.signOut
                      ? new Date(entry.signOut).toLocaleTimeString()
                      : "-"}
                  </p>
                  <p>
                    <span className="font-bold">Door / Address:</span> Main Gate
                  </p>
                </div>
              ))
            )}
          </div>
        </DialogBody>
        <DialogFooter>
          <Button color="blue" onClick={() => setOpenSwipeModal(false)}>
            Close
          </Button>
        </DialogFooter>
      </Dialog>

      {/* Confirm Action Modal */}
      <Dialog
        open={confirmAction.open}
        handler={() =>
          setConfirmAction({ ...confirmAction, open: false })
        }
      >
        <DialogBody className="text-sm sm:text-base">
          Are you sure you want to {confirmAction.type} this doctor?
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() =>
              setConfirmAction({ ...confirmAction, open: false })
            }
          >
            Cancel
          </Button>
          <Button color="green" onClick={executeAction}>
            Yes
          </Button>
        </DialogFooter>
      </Dialog>

      {/* Session Expired Modal */}
      <Dialog open={sessionExpired} handler={() => {}}>
        <DialogBody className="text-center">
          <Typography variant="h5" className="mb-2">
            Session Expired ⏰
          </Typography>
          <Typography className="text-sm sm:text-base">
            Your session has exceeded 5 minutes. Please log out to continue.
          </Typography>
        </DialogBody>
        <DialogFooter className="flex justify-center">
          <Button
            color="red"
            onClick={() => {
              setSessionExpired(false);
              handleOpen();
            }}
          >
            Logout Now
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}

export default DoctorList;
