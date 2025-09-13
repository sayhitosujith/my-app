import React, { useEffect, useState } from 'react';
import {
  Card, CardHeader, CardBody, CardFooter,
  Typography, Button, Avatar, Select, Option, Breadcrumbs, Badge, Rating, Input
} from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaPowerOff } from "react-icons/fa6";

const CardItem = ({ item, onDelete, searchTerm }) => {

  // Highlight matching digits in phone
  const highlightPhone = (phone, term) => {
    if (!term) return phone;
    const parts = phone.split(new RegExp(`(${term})`, 'gi'));
    return parts.map((part, idx) =>
      part.toLowerCase() === term.toLowerCase() ? (
        <span key={idx} className="bg-yellow-300">{part}</span>
      ) : (
        <span key={idx}>{part}</span>
      )
    );
  };

  return (
    <Card className="w-96">
      <CardHeader variant="gradient" color="green" className="mb-5 grid h-10 place-items-center">
        <Typography variant="h5" color="white">
          {item.patientId} : {item.firstName} {item.lastName}
        </Typography>
      </CardHeader>

      <div className='flex justify-center items-center'>
        <img
          style={{ width: '180px', height: '180px' }}
          src={item.image || "https://fellows.ias.ac.in/public/images/stock/avatar.svg?v=105894425"}
          alt="Profile"
        />
      </div>

      <CardBody className="flex flex-col gap-4" />

      <CardFooter className="pt-0 text-sm">
        <Typography>
          <p><b>First Name:</b> {item.firstName}</p>
          <p><b>Last Name:</b> {item.lastName}</p>
          <p><b>Email:</b> {item.email}</p>
          <p><b>Phone:</b> {highlightPhone(item.phone, searchTerm)}</p>
          <p><b>Aadhar:</b> {item.aadhar}</p>
          <p><b>Address:</b> {item.address}</p>
          <p><b>Zip Code:</b> {item.zip}</p>
          <p><b>Referred By:</b> {item.referredBy || 'N/A'}</p>
          <p><b>Contact Preference:</b> {item.contactPreference || 'N/A'}</p>
          <Rating unratedColor="amber" ratedColor="amber" />
          <div className="flex justify-between mt-3">
            <Button
              size="sm"
              variant="text"
              color="red"
              className="flex items-center gap-2"
              onClick={() => onDelete(item.patientId)}
            >
              <TrashIcon className="h-4 w-4 text-red-500" />
            </Button>

            <div className="flex space-x-2">
              <Button color="black">
                <a href="/BookAppointment">Book Appointment</a>
              </Button>
              <Button color="blue">
                <a href="/AppointmentHistory">Appointment History</a>
              </Button>
            </div>
          </div>
        </Typography>
      </CardFooter>
    </Card>
  );
};

function Profile() {
  const [profiles, setProfiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('allProfiles')) || [];
    setProfiles(stored);
  }, []);

  const handleDelete = (patientId) => {
    const filteredProfiles = profiles.filter(profile => profile.patientId !== patientId);
    setProfiles(filteredProfiles);
    localStorage.setItem('allProfiles', JSON.stringify(filteredProfiles));

    // Show toast
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const filteredProfiles = profiles.filter(profile =>
    profile.phone.includes(searchTerm)
  );

  return (
    <div className="p-10 relative">
      <Breadcrumbs>
        <a href="/Welcome" className="opacity-60">Welcome</a>
        <a href="#">Profiles</a>
      </Breadcrumbs>

      <div className="absolute top-4 right-4 flex items-center space-x-3">
        <a href="">
          <IoIosNotificationsOutline color="black" size={30} />
        </a>
        <a href="/Logout">
          <FaPowerOff color="black" size={20} />
        </a>
      </div>

      <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="xl" variant="square" style={{ float: 'right' }} />

      <Typography variant="h2" color="Black" className="mb-4">
        Patient Profiles
      </Typography>

      <div className="flex items-center gap-4 mb-6">
        <Button color="green">
          <a href="/Addprofile">+ ADD PROFILE</a>
        </Button>

        <div className="w-48">
          <Input
            label="Search by Phone"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div style={{ float: 'right' }}>
        <div className="w-74">
          <Select label="Profile">
            <Option>Change Password</Option>
            <Option>Logout</Option>
          </Select>
          <Badge content="6">
            <Button>My cart</Button>
          </Badge>
        </div>
      </div>

      {/* Cards in grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {filteredProfiles.map((item) => (
          <CardItem key={item.patientId} item={item} onDelete={handleDelete} searchTerm={searchTerm} />
        ))}
      </div>

      {/* Toast Message */}
      {showToast && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-slideDown z-50">
          Profile Deleted Successfully!
        </div>
      )}

      {/* Tailwind animation */}
      <style>
        {`
          @keyframes slideDown {
            0% { transform: translateY(-50px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          .animate-slideDown {
            animation: slideDown 0.3s ease-out;
          }
        `}
      </style>
    </div>
  );
}

export default Profile;
  