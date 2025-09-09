import React, { useState } from "react";
import { Badge } from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/solid";
import Popup from "reactjs-popup";
import { FaPowerOff } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Rating,
} from "@material-tailwind/react";

// Initial data
const initialData = [
  { id: 1, name: "John Doe", src: "https://fellows.ias.ac.in/public/images/stock/avatar.svg?v=105894425", appointments: [] },
  { id: 2, name: "Jane Smith", src: "https://fellows.ias.ac.in/public/images/stock/avatar.svg?v=105894425", appointments: [] },
  { id: 3, name: "Alice Brown", src: "https://fellows.ias.ac.in/public/images/stock/avatar.svg?v=105894425", appointments: [] },
];

const CardItem = ({ item, addAppointment }) => (
  <Card className="w-96">
    <CardHeader variant="gradient" color="green" className="mb-5 grid h-10 place-items-center">
      <Typography variant="h3" color="white">
        {item.id} : {item.name}
      </Typography>
    </CardHeader>

    <div className="flex justify-center items-center">
      <img style={{ width: "180px", height: "180px" }} src={item.src} />
    </div>

    <CardBody className="flex flex-col gap-4"></CardBody>

    <CardFooter className="pt-0">
      <Typography variant="h10" color="black">
        <label>
          <b>First Name:</b> <br />
          <b>Last Name:</b> <br />
          <b>Age:</b> <br />
          <b>Phone Number:</b> <br />
          <b>Email ID:</b> <br />
        </label>

        <Rating unratedColor="amber" ratedColor="amber" />

        {/* Buttons */}
        <div className="flex flex-col gap-2 mt-3">
          {/* Delete Profile */}
          <Button size="sm" variant="text" color="red" className="flex items-center gap-2">
            <TrashIcon className="h-4 w-4 text-red-500" />
            <Popup trigger={<button>Delete Profile</button>} position="right center">
              <div>Profile Deleted Successfully</div>
            </Popup>
          </Button>

          {/* Book Appointment and History */}
          <div className="flex flex-col gap-2 mt-2">
            <Button
              color="black"
              onClick={() => {
                // Simulate booking an appointment
                const newAppointment = {
                  date: new Date().toLocaleDateString(),
                  time: "10:00 AM",
                  doctor: "Dr. Smith",
                };
                addAppointment(item.id, newAppointment);
              }}
            >
              Book Appointment
            </Button>

            {/* Appointment History */}
            <div className="mt-2 p-2 border rounded-md bg-gray-50 max-h-40 overflow-y-auto">
              <h3 className="font-semibold mb-1">📅 Appointment History</h3>
              {item.appointments.length > 0 ? (
                <ul className="list-disc ml-5 text-sm">
                  {item.appointments.map((appt, index) => (
                    <li key={index}>
                      {appt.date} - {appt.time} with {appt.doctor}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500">No past appointments</p>
              )}
            </div>
          </div>
        </div>
      </Typography>
    </CardFooter>
  </Card>
);

function Profile() {
  const [profiles, setProfiles] = useState(initialData);

  // Function to add appointment to a profile
  const addAppointment = (id, appointment) => {
    setProfiles(prev =>
      prev.map(profile =>
        profile.id === id
          ? { ...profile, appointments: [...profile.appointments, appointment] }
          : profile
      )
    );
  };

  return (
    <div className="p-10">
      <Typography variant="h2" color="Black">
        Profiles
      </Typography>

      <div className="w-full flex flex-wrap mt-10 gap-5">
        {profiles.map(item => (
          <CardItem key={item.id} item={item} addAppointment={addAppointment} />
        ))}
      </div>
    </div>
  );
}

export default Profile;
