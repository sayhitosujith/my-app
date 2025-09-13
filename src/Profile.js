import React, { useEffect, useState } from 'react';
import {
  Card, CardHeader, CardBody, CardFooter,
  Typography, Button, Avatar, Select, Option, Breadcrumbs, Badge, Rating, Input
} from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaPowerOff } from "react-icons/fa6";
import Popup from 'reactjs-popup';

const CardItem = ({ item, onDelete, searchTerm }) => {
  const [openPopup, setOpenPopup] = useState(false);

  const handleDeleteClick = () => {
    onDelete(item.patientId);
    setOpenPopup(true);
    setTimeout(() => setOpenPopup(false), 2000); // auto close popup after 2s
  };

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
      <CardHeader
        variant="gradient"
        color="green"
        className="mb-5 grid h-10 place-items-center"
      >
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
              onClick={handleDeleteClick}
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

      <Popup open={openPopup} closeOnDocumentClick onClose={() => setOpenPopup(false)} modal nested>
        <div className="p-5 text-center">
          <h3>Profile Deleted Successfully!</h3>
        </div>
      </Popup>
    </Card>
  );
};

function Profile() {
  const [profiles, setProfiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('allProfiles')) || [];
    setProfiles(stored);
  }, []);

  const handleDelete = (patientId) => {
    const filteredProfiles = profiles.filter(profile => profile.patientId !== patientId);
    setProfiles(filteredProfiles);
    localStorage.setItem('allProfiles', JSON.stringify(filteredProfiles));
  };

  // Filter profiles by search term
  const filteredProfiles = profiles.filter(profile =>
    profile.phone.includes(searchTerm)
  );

  return (
    <div className="p-10">
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

      <Button color="green" className="mb-6">
        <a href="/Addprofile">+ ADD PROFILE</a>
      </Button>

   <div className="mb-4 w-64">
  <Input
    label="Search by Phone"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
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
    </div>
  );
}

export default Profile;
