import React, { useEffect, useState } from 'react';
import {
  Card, CardBody, CardFooter,
  Typography, Button, Avatar, Badge, Rating, Input, Breadcrumbs,
  Dialog, DialogHeader, DialogBody, DialogFooter, Switch
} from "@material-tailwind/react";
import { TrashIcon, PencilIcon } from "@heroicons/react/24/solid";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaPowerOff } from "react-icons/fa6";

// CardItem component
const CardItem = ({ item, onDelete, onEdit, searchTerm, listView }) => {
  const highlightPhone = (phone, term) => {
    if (!term) return phone;
    const parts = phone.split(new RegExp(`(${term})`, 'gi'));
    return parts.map((part, idx) =>
      part.toLowerCase() === term.toLowerCase() ? (
        <span key={idx} className="bg-yellow-200 px-1 rounded">{part}</span>
      ) : (
        <span key={idx}>{part}</span>
      )
    );
  };

  return (
    <Card
      className={`rounded-xl shadow-sm transition-transform duration-300
        hover:shadow-lg hover:-translate-y-1
        ${listView ? "w-full flex flex-row gap-4 items-center p-4 min-h-[120px]" : "w-full md:w-80 flex flex-col"}`}
    >
      {/* Avatar */}
      <div className={`${listView ? "w-24 flex-shrink-0" : "flex justify-center items-center mt-2"}`}>
        <Avatar
          src={item.image || "https://fellows.ias.ac.in/public/images/stock/avatar.svg?v=105894425"}
          alt="Profile"
          size={listView ? "lg" : "xl"}
          variant="circular"
          className="border-2 border-gray-200"
        />
      </div>

      {/* Body */}
      <CardBody className={`flex flex-col gap-1 text-sm ${listView ? "flex-1 py-2" : ""}`}>
        <div className="flex justify-between items-start">
          <div>
            <Typography className="font-semibold text-gray-800 text-base">{item.firstName} {item.lastName}</Typography>
            <Typography className="text-xs text-gray-500 mt-0.5">ID: {item.patientId}</Typography>
          </div>
          {!listView && (
            <div className="flex gap-1">
              <Button size="xs" variant="text" color="blue" className="p-1" onClick={() => onEdit(item)}>
                <PencilIcon className="h-4 w-4 text-blue-500" />
              </Button>
              <Button size="xs" variant="text" color="red" className="p-1" onClick={() => onDelete(item.patientId)}>
                <TrashIcon className="h-4 w-4 text-red-500" />
              </Button>
            </div>
          )}
        </div>

        <Typography className="text-sm mt-1"><b>Email:</b> {item.email}</Typography>
        <Typography className="text-sm"><b>Phone:</b> <a href={`tel:${item.phone}`} className="text-blue-600">{highlightPhone(item.phone, searchTerm)}</a></Typography>
        <Typography className="text-sm"><b>Address:</b> {item.address}</Typography>
        <div className="flex flex-wrap gap-1 mt-1">
          {item.referredBy && <Badge color="blue" size="sm">{item.referredBy}</Badge>}
          {item.contactPreference && <Badge color="amber" size="sm">{item.contactPreference}</Badge>}
        </div>
        <div className="mt-1">
          <Rating unratedColor="amber" ratedColor="amber" size="sm" />
        </div>
      </CardBody>

      {/* Footer: show buttons */}
      <CardFooter className={`pt-2 flex ${listView ? "flex-col items-start gap-2" : "justify-between items-center"}`}>
        {listView && (
          <div className="flex gap-2">
            <Button size="sm" variant="text" color="blue" className="flex items-center gap-2 hover:bg-blue-50 p-2" onClick={() => onEdit(item)}>
              <PencilIcon className="h-5 w-5 text-blue-500" /> Edit
            </Button>
            <Button size="sm" variant="text" color="red" className="flex items-center gap-2 hover:bg-red-50 p-2" onClick={() => onDelete(item.patientId)}>
              <TrashIcon className="h-5 w-5 text-red-500" /> Delete
            </Button>
          </div>
        )}
        <Button color="black" className="hover:scale-105 transition-transform text-xs px-3">
          <a href="/BookAppointment">Book Appointment</a>
        </Button>
      </CardFooter>
    </Card>
  );
};

// Profile component
function Profile() {
  const [profiles, setProfiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [deleteId, setDeleteId] = useState(null);
  const [editProfile, setEditProfile] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [listView, setListView] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('allProfiles')) || [];
    setProfiles(stored);
  }, []);

  const confirmDelete = (id) => setDeleteId(id);

  const handleDelete = () => {
    const filteredProfiles = profiles.filter(profile => profile.patientId !== deleteId);
    setProfiles(filteredProfiles);
    localStorage.setItem('allProfiles', JSON.stringify(filteredProfiles));
    setDeleteId(null);
    showSuccessToast("Profile Deleted Successfully!");
  };

  const handleEditSave = () => {
    const updatedProfiles = profiles.map(profile =>
      profile.patientId === editProfile.patientId ? editProfile : profile
    );
    setProfiles(updatedProfiles);
    localStorage.setItem('allProfiles', JSON.stringify(updatedProfiles));
    setEditProfile(null);
    showSuccessToast("Profile Updated Successfully!");
  };

  const showSuccessToast = (message) => {
    setShowToast(message);
    setTimeout(() => setShowToast(false), 2000);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setEditProfile({ ...editProfile, image: reader.result });
      reader.readAsDataURL(file);
    }
  };

  const filteredProfiles = profiles.filter(profile =>
    profile.phone.includes(searchTerm)
  );

  return (
    <div className="p-4 sm:p-6 relative">
      <Breadcrumbs className="mb-4 flex-wrap">
        <a href="/Welcome" className="opacity-60">Welcome</a>
        <a href="#">Profiles</a>
      </Breadcrumbs>

      <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
        <div className="flex items-center gap-3 flex-wrap">
          <Button color="green" className="whitespace-nowrap">
            <a href="/Addprofile">+ ADD PROFILE</a>
          </Button>
          <div className="w-44">
            <Input
              label="Search by Phone"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Right side: Appointment History, Switch, notifications, logout, avatar */}
        <div className="flex items-center gap-4">
          <Button color="blue" className="hover:scale-105 transition-transform text-xs px-3">
            <a href="/AppointmentHistory">Appointment History</a>
          </Button>
          <Switch
            label="List View"
            color="green"
            checked={listView}
            onChange={() => setListView(!listView)}
          />
          <IoIosNotificationsOutline color="black" size={28} />
          <a href="/Logout"><FaPowerOff color="black" size={18} /></a>
          <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="lg" variant="square" />
        </div>
      </div>

      <Typography variant="h3" color="Black" className="mb-4">Patient Profiles</Typography>

      <div className={`grid ${listView ? "grid-cols-1 gap-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"}`}>
        {filteredProfiles.map(item => (
          <CardItem
            key={item.patientId}
            item={item}
            onDelete={confirmDelete}
            onEdit={setEditProfile}
            searchTerm={searchTerm}
            listView={listView}
          />
        ))}
      </div>

      {/* Delete Dialog */}
      <Dialog open={!!deleteId} handler={() => setDeleteId(null)}>
        <DialogHeader>Confirm Delete</DialogHeader>
        <DialogBody divider>Are you sure you want to delete this profile?</DialogBody>
        <DialogFooter>
          <Button variant="text" color="gray" onClick={() => setDeleteId(null)}>Cancel</Button>
          <Button variant="gradient" color="red" onClick={handleDelete}>Delete</Button>
        </DialogFooter>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={!!editProfile} handler={() => setEditProfile(null)} size="sm">
        <DialogHeader>Edit Profile</DialogHeader>
        {editProfile && (
          <DialogBody divider className="space-y-3">
            <div className="flex flex-col items-center gap-3">
              <Avatar src={editProfile.image || "https://fellows.ias.ac.in/public/images/stock/avatar.svg?v=105894425"} alt="Profile" size="xl" variant="circular" className="border-2 border-gray-300"/>
              <input type="file" accept="image/*" onChange={handleImageChange}/>
            </div>
            <Input label="First Name" value={editProfile.firstName} onChange={e => setEditProfile({ ...editProfile, firstName: e.target.value })}/>
            <Input label="Last Name" value={editProfile.lastName} onChange={e => setEditProfile({ ...editProfile, lastName: e.target.value })}/>
            <Input label="Email" value={editProfile.email} onChange={e => setEditProfile({ ...editProfile, email: e.target.value })}/>
            <Input label="Phone" value={editProfile.phone} onChange={e => setEditProfile({ ...editProfile, phone: e.target.value })}/>
            <Input label="Address" value={editProfile.address} onChange={e => setEditProfile({ ...editProfile, address: e.target.value })}/>
            <Input label="Aadhar" value={editProfile.aadhar} onChange={e => setEditProfile({ ...editProfile, aadhar: e.target.value })}/>
            <Input label="Zip Code" value={editProfile.zip} onChange={e => setEditProfile({ ...editProfile, zip: e.target.value })}/>
          </DialogBody>
        )}
        <DialogFooter>
          <Button variant="text" color="gray" onClick={() => setEditProfile(null)}>Cancel</Button>
          <Button variant="gradient" color="green" onClick={handleEditSave}>Save</Button>
        </DialogFooter>
      </Dialog>

      {/* Toast */}
      {showToast && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-slideDown z-50">
          {showToast}
        </div>
      )}

      {/* Animation style */}
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
