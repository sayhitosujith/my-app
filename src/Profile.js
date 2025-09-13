import React, { useEffect, useState } from 'react';
import {
  Card, CardHeader, CardBody, CardFooter,
  Typography, Button, Avatar, Badge, Rating, Input, Breadcrumbs,
  Dialog, DialogHeader, DialogBody, DialogFooter
} from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaPowerOff } from "react-icons/fa6";

const CardItem = ({ item, onDelete, searchTerm }) => {
  const highlightPhone = (phone, term) => {
    if (!term) return phone;
    const parts = phone.split(new RegExp(`(${term})`, 'gi'));
    return parts.map((part, idx) =>
      part.toLowerCase() === term.toLowerCase() ? (
        <span key={idx} className="bg-yellow-300 px-1 rounded">{part}</span>
      ) : (
        <span key={idx}>{part}</span>
      )
    );
  };

  return (
    <Card className="w-full md:w-96 rounded-xl shadow hover:shadow-2xl transition-transform duration-300 hover:scale-105">
      <CardHeader
        variant="gradient"
        color="green"
        className="mb-3 grid h-12 place-items-center rounded-t-xl"
      >
        <Typography variant="h6" color="white" className="truncate text-center">
          {item.patientId} : {item.firstName} {item.lastName}
        </Typography>
      </CardHeader>

      <div className='flex justify-center items-center mt-2'>
        <Avatar
          src={item.image || "https://fellows.ias.ac.in/public/images/stock/avatar.svg?v=105894425"}
          alt="Profile"
          size="xxl"
          variant="circular"
          className="border-2 border-gray-200"
        />
      </div>

      <CardBody className="flex flex-col gap-1 mt-2 text-sm">
        <Typography><b>Email:</b> {item.email}</Typography>
        <Typography><b>Phone:</b> <a href={`tel:${item.phone}`} className="text-blue-600">{highlightPhone(item.phone, searchTerm)}</a></Typography>
        <Typography><b>Address:</b> {item.address}</Typography>
        <Typography><b>Aadhar:</b> {item.aadhar}</Typography>
        <Typography><b>Zip Code:</b> {item.zip}</Typography>
        {item.referredBy && <Badge color="blue" size="sm">{item.referredBy}</Badge>}
        {item.contactPreference && <Badge color="amber" size="sm">{item.contactPreference}</Badge>}
        <Rating unratedColor="amber" ratedColor="amber" />
      </CardBody>

      <CardFooter className="pt-3 flex justify-between items-center">
        <Button
          size="sm"
          variant="text"
          color="red"
          className="flex items-center gap-2 hover:bg-red-50 p-2"
          onClick={() => onDelete(item.patientId)}
          title="Delete"
        >
          <TrashIcon className="h-5 w-5 text-red-500" />
        </Button>
        <div className="flex space-x-2">
          <Button color="black" className="hover:scale-105 transition-transform">
            <a href="/BookAppointment">Book Appointment</a>
          </Button>
          <Button color="blue" className="hover:scale-105 transition-transform">
            <a href="/AppointmentHistory">Appointment History</a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

function Profile() {
  const [profiles, setProfiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [deleteId, setDeleteId] = useState(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('allProfiles')) || [];
    setProfiles(stored);
  }, []);

  const confirmDelete = (id) => {
    setDeleteId(id);
  };

  const handleDelete = () => {
    const filteredProfiles = profiles.filter(profile => profile.patientId !== deleteId);
    setProfiles(filteredProfiles);
    localStorage.setItem('allProfiles', JSON.stringify(filteredProfiles));
    setDeleteId(null);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const filteredProfiles = profiles.filter(profile =>
    profile.phone.includes(searchTerm)
  );

  return (
    <div className="p-8 relative">
      <Breadcrumbs className="mb-6">
        <a href="/Welcome" className="opacity-60">Welcome</a>
        <a href="#">Profiles</a>
      </Breadcrumbs>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4 flex-wrap">
          <Button color="green" className="whitespace-nowrap">
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

        <div className="flex items-center space-x-3">
          <IoIosNotificationsOutline color="black" size={30} />
          <a href="/Logout"><FaPowerOff color="black" size={20} /></a>
          <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="xl" variant="square" />
        </div>
      </div>

      <Typography variant="h2" color="Black" className="mb-6">
        Patient Profiles
      </Typography>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProfiles.map((item) => (
          <CardItem key={item.patientId} item={item} onDelete={confirmDelete} searchTerm={searchTerm} />
        ))}
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={!!deleteId} handler={() => setDeleteId(null)}>
        <DialogHeader>Confirm Delete</DialogHeader>
        <DialogBody divider>
          Are you sure you want to delete this profile?
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="gray" onClick={() => setDeleteId(null)}>
            Cancel
          </Button>
          <Button variant="gradient" color="red" onClick={handleDelete}>
            Delete
          </Button>
        </DialogFooter>
      </Dialog>

      {showToast && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-slideDown z-50">
          Profile Deleted Successfully!
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          0% { transform: translateY(-50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export default Profile;
