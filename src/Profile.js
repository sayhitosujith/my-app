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

        {/* X-ray Reports Preview */}
        {item.xrayReports && item.xrayReports.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-3">
            {item.xrayReports.map((file, idx) => (
              <div key={idx} className="relative w-20 h-20 border rounded overflow-hidden shadow-sm bg-white">
                {file.type === "application/pdf" ? (
                  <>
                    <embed
                      src={file.data}
                      type="application/pdf"
                      width="100%"
                      height="100%"
                      className="object-cover"
                    />
                    <a
                      href={file.data}
                      target="_blank"
                      rel="noreferrer"
                      className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-xs text-center truncate"
                      title={file.name}
                    >
                      View PDF
                    </a>
                  </>
                ) : (
                  <img
                    src={file.data}
                    alt={`X-ray-${idx}`}
                    className="w-full h-full object-cover"
                    title={file.name}
                  />
                )}
              </div>
            ))}
          </div>
        )}

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

  // New: handle multiple X-ray uploads in edit modal
  const handleXrayChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length) {
      Promise.all(files.map(file => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = () => resolve({ data: reader.result, type: file.type, name: file.name });
          reader.readAsDataURL(file);
        });
      })).then(newXrays => {
        setEditProfile(prev => ({
          ...prev,
          xrayReports: prev.xrayReports ? [...prev.xrayReports, ...newXrays] : newXrays
        }));
      });
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
          <Avatar src="https://fellows.ias.ac.in/public/images/stock/avatar.svg?v=105894425" alt="User" size="sm" />
        </div>
      </div>

      {/* Profiles container */}
      <div
        className={`grid gap-6 ${listView ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}`}
      >
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map(item => (
            <CardItem
              key={item.patientId}
              item={item}
              onDelete={confirmDelete}
              onEdit={setEditProfile}
              searchTerm={searchTerm}
              listView={listView}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 mt-10">No profiles found.</p>
        )}
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteId !== null} handler={() => setDeleteId(null)} size="xs">
        <DialogHeader>Confirm Deletion</DialogHeader>
        <DialogBody divider>
          Are you sure you want to delete this profile?
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="blue" onClick={() => setDeleteId(null)}>
            Cancel
          </Button>
          <Button variant="gradient" color="red" onClick={handleDelete}>
            Delete
          </Button>
        </DialogFooter>
      </Dialog>

      {/* Edit Profile Dialog */}
      <Dialog open={!!editProfile} handler={() => setEditProfile(null)} size="md">
        <DialogHeader>Edit Profile</DialogHeader>
        <DialogBody divider>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="First Name"
              value={editProfile?.firstName || ''}
              onChange={(e) => setEditProfile({ ...editProfile, firstName: e.target.value })}
            />
            <Input
              label="Last Name"
              value={editProfile?.lastName || ''}
              onChange={(e) => setEditProfile({ ...editProfile, lastName: e.target.value })}
            />
            <Input
              label="Email"
              type="email"
              value={editProfile?.email || ''}
              onChange={(e) => setEditProfile({ ...editProfile, email: e.target.value })}
            />
            <Input
              label="Phone"
              value={editProfile?.phone || ''}
              onChange={(e) => setEditProfile({ ...editProfile, phone: e.target.value })}
            />
            <Input
              label="Address"
              value={editProfile?.address || ''}
              onChange={(e) => setEditProfile({ ...editProfile, address: e.target.value })}
            />

            {/* Image upload */}
            <div>
              <label className="block mb-1 font-medium">Profile Image</label>
              <input type="file" accept="image/*" onChange={handleImageChange} />
              {editProfile?.image && (
                <img src={editProfile.image} alt="Profile Preview" className="mt-2 w-28 h-28 object-cover rounded" />
              )}
            </div>

            {/* Multiple X-ray uploads */}
            <div className="col-span-full">
              <label className="block mb-1 font-medium">X-ray Reports (Images/PDFs)</label>
              <input
                type="file"
                accept="image/*,application/pdf"
                multiple
                onChange={handleXrayChange}
              />
              <div className="mt-2 flex flex-wrap gap-2 max-h-40 overflow-auto border rounded p-2 bg-gray-50">
                {editProfile?.xrayReports && editProfile.xrayReports.length > 0 ? (
                  editProfile.xrayReports.map((file, idx) => (
                    <div key={idx} className="relative w-20 h-20 border rounded overflow-hidden shadow-sm bg-white">
                      {file.type === "application/pdf" ? (
                        <>
                          <embed
                            src={file.data}
                            type="application/pdf"
                            width="100%"
                            height="100%"
                            className="object-cover"
                          />
                          <a
                            href={file.data}
                            target="_blank"
                            rel="noreferrer"
                            className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-xs text-center truncate"
                            title={file.name}
                          >
                            View PDF
                          </a>
                        </>
                      ) : (
                        <img
                          src={file.data}
                          alt={`X-ray-${idx}`}
                          className="w-full h-full object-cover"
                          title={file.name}
                        />
                      )}
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400 text-xs">No X-rays uploaded.</p>
                )}
              </div>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="blue" onClick={() => setEditProfile(null)}>
            Cancel
          </Button>
          <Button variant="gradient" color="green" onClick={handleEditSave}>
            Save
          </Button>
        </DialogFooter>
      </Dialog>

      {/* Toast notification */}
      {showToast && (
        <div className="fixed bottom-5 right-5 bg-green-500 text-white px-5 py-3 rounded shadow-lg animate-fade-in-out">
          {showToast}
        </div>
      )}
    </div>
  );
}

export default Profile;
