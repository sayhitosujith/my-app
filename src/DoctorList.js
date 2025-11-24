import { useEffect, useState, useRef } from "react";
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
import { FaPowerOff } from "react-icons/fa6";
import { PiLineVerticalThin } from "react-icons/pi";
import logo from "./assets/DutyDentist.png";
import { useNavigate } from "react-router-dom";
import {
  Bars3Icon,
  Squares2X2Icon,
  PencilIcon,
  TrashIcon,
  EyeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/solid";
import { VscArrowRight } from "react-icons/vsc";
import { FcLeave } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import { FiUser } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import "./DoctorList.css";

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
const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [confirmAction, setConfirmAction] = useState({
    open: false,
    type: "",
    index: null,
    doctor: null,
  });

  const [selectedDoctors, setSelectedDoctors] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    const storedDoctors = JSON.parse(localStorage.getItem("doctors")) || [];
    setDoctors(storedDoctors);
  }, []);

  const saveDoctors = (updated) => {
    setDoctors(updated);
    localStorage.setItem("doctors", JSON.stringify(updated));
  };

  const handleDeleteConfirm = (index) => {
    setConfirmAction({ open: true, type: "delete", index });
  };

  const handleEditConfirm = (index) => {
    setConfirmAction({ open: true, type: "edit", index });
  };

  const handleViewConfirm = (doctor) => {
    setConfirmAction({ open: true, type: "view", doctor });
  };

  const handleCloneConfirm = (index) => {
    setConfirmAction({ open: true, type: "clone", index });
  };

  const [open, setOpen] = useState(false);
const handleOpen = () => {
  if (!isLoggedIn) {
    // SIGN IN
    setIsLoggedIn(true);
  } else {
    // SIGN OUT
    setIsLoggedIn(false);
  }
};

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

  const handleChange = (e) => {
    setEditDoctor({ ...editDoctor, [e.target.name]: e.target.value });
  };

  const handleEditImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setEditDoctor({ ...editDoctor, image: reader.result });
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleSave = () => {
    const updated = [...doctors];
    updated[editIndex] = editDoctor;
    saveDoctors(updated);
    setEditIndex(null);
    setEditDoctor({});
  };

  // Pagination
  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = doctors.slice(indexOfFirstDoctor, indexOfLastDoctor);
  const totalPages = Math.ceil(doctors.length / doctorsPerPage);

  const handlePrevPage = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const handleNextPage = () => setCurrentPage((p) => Math.min(p + 1, totalPages));

  // Multi-select
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

  const [currentTime, setCurrentTime] = useState("");

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

const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour < 12) return "Good Morning";
  if (hour < 18) return "Good Afternoon";
  return "Good Evening";
};
  return () => clearInterval(timer);
}, []);

const currentDay = new Date().toLocaleDateString("en-US", {
  weekday: "long",
});

const shiftObj = {
  type: "Flexi Shift",
  start: "10:00 AM",
  end: "10:00 PM",
};
const [openSwipeModal, setOpenSwipeModal] = useState(false);


const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour < 12) return "Good Morning";
  if (hour < 18) return "Good Afternoon";
  return "Good Evening";
};
const handleViewSwipes = () => {
  setOpenSwipeModal(true);
};
  const [showProfileMenu, setShowProfileMenu] = useState(false);


// Sample holiday data
const holidays =[
  { date: "1 Jan 2026",  day: "Thursday",   name: "New Year's Day" },
  { date: "3 Jan 2026",  day: "Saturday",   name: "Hazrat Ali's Birthday" },
  { date: "14 Jan 2026", day: "Wednesday",  name: "Makar Sankranti / Pongal" },
  { date: "23 Jan 2026", day: "Friday",     name: "Vasant Panchami" },
  { date: "26 Jan 2026", day: "Monday",     name: "Republic Day" },
  { date: "15 Feb 2026", day: "Sunday",     name: "Maha Shivaratri" },
  { date: "4 Mar 2026",  day: "Wednesday",  name: "Holi" },
  { date: "21 Mar 2026", day: "Saturday",   name: "Eid-ul-Fitr (Tentative)" },
  { date: "26 Mar 2026", day: "Thursday",   name: "Ram Navami" },
  { date: "31 Mar 2026", day: "Tuesday",    name: "Mahavir Jayanti" },
  { date: "3 Apr 2026",  day: "Friday",     name: "Good Friday" },
  { date: "1 May 2026",  day: "Friday",     name: "Labour Day / Buddha Purnima" },
  { date: "27 May 2026", day: "Wednesday",  name: "Eid-ul-Zuha (Bakrid) (Tentative)" },
  { date: "26 Jun 2026", day: "Friday",     name: "Muharram (Tentative)" },
  { date: "15 Aug 2026", day: "Saturday",   name: "Independence Day" },
  { date: "26 Aug 2026", day: "Wednesday",  name: "Milad-un-Nabi (Tentative)" },
  { date: "4 Sep 2026",  day: "Friday",     name: "Janmashtami" },
  { date: "2 Oct 2026",  day: "Friday",     name: "Gandhi Jayanti" },
  { date: "20 Oct 2026", day: "Tuesday",    name: "Dussehra" },
  { date: "8 Nov 2026",  day: "Sunday",     name: "Diwali" },
  { date: "24 Nov 2026", day: "Tuesday",    name: "Guru Nanak Jayanti" },
  { date: "25 Dec 2026", day: "Friday",     name: "Christmas" }
]
const [user, setUser] = useState(
  JSON.parse(localStorage.getItem("loggedInUser")) || { name: "Sujith S", initials: "SS" }
);
const handleLogin = (userData) => {
  localStorage.setItem("loggedInUser", JSON.stringify(userData));
  setUser(userData);
};


  return (
 <div className="p-5 min-h-screen bg-blue-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <img style={{ width: "15%", height: "15%" }} src={logo} alt="Application_logo" />
 <div className="user-badge" onClick={() => setShowProfileMenu(!showProfileMenu)}>
  <div className="user-icon">
    {user.initials || user.name.split(" ").map(n => n[0]).join("")}
  </div>
  <span className="username">{user.name}</span>
          {showProfileMenu && (
            <div className="profile-dropdown">
              <a href="/Profile">Edit Profile</a>
              <a href="/Settings">Settings</a>
              <a href="/Logout">Logout</a>
            </div>
          )}
        </div>
       
      </div>


      {/* Breadcrumbs */}
      <Breadcrumbs className="mb-4">
        <Typography
          as="a"
          href="/Welcome"
          color="blue-gray"
          className="cursor-pointer hover:underline"
          onClick={() => navigate("/")}
        >
          Home
        </Typography>
        
        <Typography color="blue-gray">Doctor List</Typography>
      </Breadcrumbs>

<div className="flex justify-between items-center mb-4">
  {/* Left button */}
<Button
  color="green"
  className="px-10 py-1 text-lg"
  onClick={() => navigate("/AddDoctor")}
>
    + ADD DOCTOR
</Button>
  
 <div className="w-full flex justify-end">
  <Card className="w-full max-w-md p-8 shadow-xl rounded-xl bg-white bg-opacity-90">
    <Typography variant="h5" className="mb-4">
     Hello, {getGreeting()}
    </Typography>

    <Typography className="text-gray-700 italic text-sl">
      “Don’t worry about failures, worry about the chances you miss
      when you don’t even try.”
      <br />
    </Typography>
  </Card>
</div>



<div className="w-full flex justify-center">
  <Card className="w-full max-w-sm p-4 shadow-2xl rounded-2xl 
                  bg-gradient-to-br from-white to-blue-50 backdrop-blur-md border border-blue-100">

    {/* Title */}
    <Typography 
      variant="h5" 
      className="mb-4 text-center font-bold text-blue-700 tracking-wide"
    >
      Time & Shift Information
    </Typography>

    {/* Day + Shift Info */}
    <div className="bg-blue-100 p-3 rounded-xl shadow-inner mb-3">
      <p className="text-gray-800 font-semibold text-center">
        {`${currentDay} | ${shiftObj.type}`}
      </p>
      <p className="text-gray-600 text-center text-sm">
        {`${shiftObj.start} – ${shiftObj.end}`}
      </p>
    </div>

    {/* Time Display */}
    <p className="text-blue-900 font-extrabold text-2xl text-center mt-2 tracking-wider">
      ⏱ {currentTime}
    </p>

    {/* Link */}
    <div className="mt-4 text-center">
      <a
        href="#"
        className="text-blue-600 font-medium underline hover:text-blue-800 transition-colors"
        onClick={handleViewSwipes}
      >
        VIEW SWIPES
      </a>
    </div>

    {/* Sign In / Out Button */}
    <div className="mt-6 flex justify-end">
      <Button
        className={`px-6 py-3 rounded-lg shadow-md transition-transform hover:scale-105 
                    ${isLoggedIn ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"}`}
        onClick={handleOpen}
      >
        {isLoggedIn ? "Sign Out" : "Sign In"}
      </Button>
    </div>

  </Card>
</div>



{/* Upcoming Holidays Card */}
<Card className="w-full max-w-sm p-6 shadow-xl rounded-xl bg-white bg-opacity-90">
  <Typography variant="h5" className="mb-4">
    Upcoming Holidays
    <div>
      <FcLeave size={42} />
    </div>
    <VscArrowRight size={32} className="absolute top-10 right-10" />
  </Typography>

  {holidays.length > 0 && (
    <div className="mt-2 space-y-2 text-gray-700 border-b pb-2">
      <div className="font-semibold">
        {holidays[0].date} • {holidays[0].day}
      </div>
      <div>{holidays[0].name}</div>
    </div>
  )}
</Card>


        {selectedDoctors.length > 0 && (
          <Button color="red" onClick={deleteSelectedDoctors}>
            <AiOutlineDelete size={20} />
 Delete ({selectedDoctors.length})
          </Button>
        )}
      </div>

      {/* View Controls */}
      <div className="flex items-center justify-between mb-4">
        <Typography variant="h4" color="grey">
          Doctors List
        </Typography>
        <div className="flex items-center gap-2">
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

      {/* Doctors Display */}
      {doctors.length === 0 ? (
        <Typography>No doctors added yet.</Typography>
      ) : (
        <>
          <div
            className={
              gridView
                ? "grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4"
                : "flex flex-col gap-4"
            }
          >
            {currentDoctors.map((doc, index) => {
              const realIndex = indexOfFirstDoctor + index;
              return (
         
    /* Doctor Card */     
<Card
  key={realIndex}
  ref={(el) => (cardRefs.current[index] = el)}
  className={`p-4 flex relative border h-64 transition-transform duration-200 ${
    selectedDoctors.includes(realIndex)
      ? "border-red-500 bg-red-100"
      : "border-white-600 bg-blue-100 hover:bg-blue-100 hover:scale-105 shadow-lg"
  } ${
    gridView
      ? "flex-col items-center text-center justify-between"
      : "flex-row items-center gap-4"
  }`}
>

                  {/* Checkbox */}
                  <input
                    type="checkbox"
                    className="absolute top-2 left-2"
                    checked={selectedDoctors.includes(realIndex)}
                    onChange={() => toggleDoctorSelect(realIndex)}
                  />

                  {/* Doctor Image */}
                  {doc.image && (
                    <img
                      src={doc.image}
                      alt="Doctor"
                      className={`${
                        gridView ? "w-24 h-24" : "w-28 h-28"
                      } object-cover border-2 border-blue-700 mb-2 cursor-pointer rounded-lg transition-transform duration-200 hover:scale-105 hover:shadow-xl`}
                      onClick={() => handleViewConfirm(doc)}
                    />
                  )}

                  {/* Info */}
                  <div className="flex-1 w-full flex flex-col items-start text-left space-y-1 text-blue-900">
                    <Typography variant="h6" className="font-semibold">
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
                      <Typography className="text-xs sm:text-sm">
                        <span className="font-medium">Email: </span>
                        {doc.email}
                      </Typography>
                    )}
                    {doc.specialization && (
                      <Typography className="text-xs sm:text-sm">
                        <span className="font-medium">Specialization: </span>
                        {doc.specialization}
                      </Typography>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="absolute bottom-2 right-2 flex gap-2">
                    <button
                      onClick={() => handleEditConfirm(realIndex)}
                      className="p-2 rounded bg-yellow-500 text-white hover:bg-yellow-600"
                    >
                      <PencilIcon className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteConfirm(realIndex)}
                      className="p-2 rounded bg-red-500 text-white hover:bg-red-600"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleViewConfirm(doc)}
                      className="p-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                    >
                      <EyeIcon className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleCloneConfirm(realIndex)}
                      className="p-2 rounded bg-green-500 text-white hover:bg-green-600"
                    >
                      <DocumentDuplicateIcon className="w-4 h-4" />
                    </button>
                  </div>

                  <Dialog open={open} handler={handleOpen}>
  <DialogBody>
    <h3 className="text-lg font-semibold mb-2">Login Time:</h3>
    <p> {new Date().toLocaleString()}</p>
  </DialogBody>
  <DialogFooter>
    <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
      Close
    </Button>
  </DialogFooter>
</Dialog>
                </Card>

                
              );
            })}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-4">
            <Button color="blue" disabled={currentPage === 1} onClick={handlePrevPage}>
              Previous
            </Button>
            <Typography className="flex items-center px-2">
              Page {currentPage} of {totalPages}
            </Typography>
            <Button
              color="blue"
              disabled={currentPage === totalPages}
              onClick={handleNextPage}
            >
              Next
            </Button>
          </div>
        </>
      )}

      {/* Confirm Dialog */}
      <Dialog
        open={confirmAction.open}
        handler={() => setConfirmAction({ open: false })}
      >
        <DialogBody>
          Are you sure you want to{" "}
          <span className="font-bold text-red-500">{confirmAction.type}</span>{" "}
          this doctor?
        </DialogBody>
        <DialogFooter>
          <Button variant="text" onClick={() => setConfirmAction({ open: false })}>
            Cancel
          </Button>
          <Button color="blue" onClick={executeAction}>
            Yes
          </Button>
        </DialogFooter>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={editIndex !== null} handler={() => setEditIndex(null)}>
        <DialogBody>
          <div className="flex flex-col gap-2">
            <Input label="First Name" name="firstName" value={editDoctor.firstName || ""} onChange={handleChange} />
            <Input label="Last Name" name="lastName" value={editDoctor.lastName || ""} onChange={handleChange} />
            <Input label="Phone" name="phone" value={editDoctor.phone || ""} onChange={handleChange} />
            <Input label="Email" name="email" value={editDoctor.email || ""} onChange={handleChange} />
            <Input label="Specialization" name="specialization" value={editDoctor.specialization || ""} onChange={handleChange} />
            <input type="file" onChange={handleEditImage} />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button variant="text" onClick={() => setEditIndex(null)}>
            Cancel
          </Button>
          <Button color="blue" onClick={handleSave}>
            Save
          </Button>
        </DialogFooter>
      </Dialog>

      {/* View Dialog */}
      <Dialog open={!!viewDoctor} handler={() => setViewDoctor(null)}>
        <DialogBody>
          {viewDoctor && (
            <div className="flex flex-col items-center gap-3">
              {viewDoctor.image && (
                <Avatar src={viewDoctor.image} size="xl" className="border-2 border-blue-500" />
              )}
              <Typography variant="h5">
                {viewDoctor.firstName} {viewDoctor.lastName}
              </Typography>
              <Typography>Email: {viewDoctor.email}</Typography>
              <Typography>Phone: {viewDoctor.phone}</Typography>
              <Typography>Specialization: {viewDoctor.specialization}</Typography>
            </div>
          )}
        </DialogBody>
        <DialogFooter>
          <Button color="blue" onClick={() => setViewDoctor(null)}>
            Close
          </Button>
        </DialogFooter>
      </Dialog>
      {/* Swipe Details Modal */}
{/* Swipe Details Modal */}
<Dialog open={openSwipeModal} handler={() => setOpenSwipeModal(false)}>
  <DialogBody>
    <div className="space-y-4 text-gray-900">
      <h2 className="text-xl font-semibold mb-2">Swipe Details</h2>

      {/* Date */}
      <div className="border p-3 rounded-lg bg-gray-100">
        <p><span className="font-bold">Date:</span> 21 Nov, 2025</p>
        <p><span className="font-bold">Shift Time:</span> 10:00 AM – 10:00 PM</p>
        <p><span className="font-bold">Shift Type:</span> FLEX</p>
      </div>

      {/* Swipe Time + Door / Address */}
      <div className="border p-3 rounded-lg bg-white shadow-sm">
        <h3 className="font-semibold mb-2 text-gray-800">Swipe Log</h3>

        <div className="space-y-2">
          <div className="p-2 border rounded bg-gray-50">
            <p><span className="font-bold">Swipe Time:</span> 10:05 AM</p>
            <p><span className="font-bold">Door / Address:</span> Main Gate – Reception Entry</p>
          </div>

          <div className="p-2 border rounded bg-gray-50">
            <p><span className="font-bold">Swipe Time:</span> 01:15 PM</p>
            <p><span className="font-bold">Door / Address:</span> Cafeteria – East Wing</p>
          </div>

          <div className="p-2 border rounded bg-gray-50">
            <p><span className="font-bold">Swipe Time:</span> 08:50 PM</p>
            <p><span className="font-bold">Door / Address:</span> Exit Gate – Parking Lot</p>
          </div>
        </div>
      </div>
    </div>
  </DialogBody>

  <DialogFooter>
    <Button color="blue" onClick={() => setOpenSwipeModal(false)}>
      Close
    </Button>
  </DialogFooter>
</Dialog>


    </div>
  );
}

export default DoctorList;
