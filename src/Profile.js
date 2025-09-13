import React, { useEffect, useState } from 'react';
import {
  Card, CardHeader, CardBody, CardFooter,
  Typography, Button, Avatar, Select, Option, Breadcrumbs, Badge, Rating, submittedData 
} from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaPowerOff } from "react-icons/fa6";
import Popup from 'reactjs-popup';

const CardItem = ({ item }) => (
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
        <p><b>Phone:</b> {item.phone}</p>
        <p><b>Aadhar:</b> {item.aadhar}</p>
        <p><b>Address:</b> {item.address}</p>
        <p><b>Zip Code:</b> {item.zip}</p>
        <p><b>Referred By:</b> {item.referredBy}</p>
        <p><b>Contact Preference:</b> {item.contactPreference}</p>
        <p><b>Dentist:</b> {item.dentist}</p>
        <Rating unratedColor="amber" ratedColor="amber" />
        <div className="flex justify-between mt-3">
          <Button size="sm" variant="text" color="red" className="flex items-center gap-2">
            <TrashIcon className="h-4 w-4 text-red-500" />
            <Popup trigger={<button></button>} position="right center">
              <div>Profile Deleted Successfully</div>
              <a href="/Welcome" />
            </Popup>
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

function Profile() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('allProfiles')) || [];
    setProfiles(stored);
  }, []);

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
        Profiles
      </Typography>

      <Button color="green" className="mb-6">
        <a href="/Addprofile">+ ADD PROFILE</a>
      </Button>

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
        {profiles.map((item, index) => (
          <CardItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Profile;
