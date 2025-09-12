import "./App.css";
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineLocalPrintshop } from "react-icons/md";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Textarea,
  Alert,
} from "@material-tailwind/react";

function MyCart() {
  const printRef = React.useRef(null);
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleOpen = () => setOpen(!open);

  // ✅ Handle Submit
  const handleSubmit = () => {
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  // ✅ Print Logic
  const handlePrint = () => {
    const printContents = printRef.current.innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  };

  return (
    <div className="flex flex-row gap-5">
      {/* Left: Appointment Form */}
      <div className="w-1/2 h-screen flex items-center justify-center">
        <Card className="w-[28rem] p-4" ref={printRef}>
          <h1 className="text-green-700 text-lg font-bold text-center">
            APPOINTMENT DETAILS
          </h1>
          <hr className="my-3" />

          <CardBody className="flex flex-col gap-5">
            {/* 📍 Location */}
            <div>
              <b>Location:</b>
              <div className="flex items-center border border-gray-300 rounded px-3 py-2 mt-1 focus-within:ring-2 focus-within:ring-green-500">
                <FaLocationDot className="mr-2 text-orange-500" />
                <select
                  className="outline-none w-full bg-white"
                  defaultValue=""
                  style={{ color: "#f35208ff" }}
                >
                  <option value="" disabled>
                    Select your location
                  </option>
                  <option value="Brisbane">Brisbane</option>
                  <option value="Melbourne">Melbourne</option>
                  <option value="Sydney">Sydney</option>
                  <option value="Maryborough">Maryborough</option>
                  <option value="Adelaide">Adelaide</option>
                </select>
              </div>
            </div>

            {/* 👤 Patient Details */}
            <div>
              <b>Patient Name:</b>
              <input
                type="text"
                placeholder="Enter patient name"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              />
            </div>

            <div>
              <b>Phone Number:</b>
              <input
                type="tel"
                placeholder="Enter phone number"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              />
            </div>

            <div>
              <b>Email ID:</b>
              <input
                type="email"
                placeholder="Enter email address"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              />
            </div>

            {/* 📅 Appointment Details */}
            <div>
              <b>Appointment Date:</b>
              <input
                type="date"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              />
            </div>

            <div>
              <b>Time Slot:</b>
              <select
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              >
                <option value="">Select time slot</option>
                <option>10:00 AM - 11:00 AM</option>
                <option>11:00 AM - 12:00 PM</option>
                <option>2:00 PM - 3:00 PM</option>
                <option>3:00 PM - 4:00 PM</option>
                <option>4:00 PM - 5:00 PM</option>
              </select>
            </div>

            {/* 🦷 Doctor Selection */}
            <div>
              <b>Select Dentist:</b>
              <select
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              >
                <option value="">Choose a dentist</option>
                <option>Dr. Anitha</option>
                <option>Dr. Ramesh</option>
                <option>Dr. Priya</option>
              </select>
            </div>

            {/* 📝 Symptoms */}
            <div>
              <b>Symptoms / Notes:</b>
              <Textarea
                rows={3}
                placeholder="Describe your symptoms..."
                className="mt-1"
              />
            </div>
          </CardBody>

          {/* ✅ Submit + Cancel */}
          <CardFooter className="pt-0 flex justify-center gap-4">
            <Button
              className="bg-green-600 hover:bg-green-700"
              onClick={handleSubmit}
            >
              BOOK APPOINTMENT
            </Button>
            <Button className="bg-red-500 hover:bg-red-600">CANCEL</Button>
          </CardFooter>

          {/* ✅ Success Message */}
          {success && (
            <div className="mt-4">
              <Alert color="green">✅ Appointment booked successfully!</Alert>
            </div>
          )}

         
        </Card>
      </div>

{/* Right: Payment Summary */}
<Card className="w-[24rem] h-[24rem] shadow-md rounded-lg">
  <CardHeader
    floated={false}
    shadow={false}
    className="flex justify-center p-3"
  >
    <img
      className="h-36 w-36 rounded-md object-cover object-center"
      src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=upi%3A%2F%2Fpay%3Fpa%3D9480860587%40mobile.npci%26pn%3Dfood%26cu%3DINR"
      alt="QR Code"
    />
  </CardHeader>

  <CardBody className="text-sm space-y-3 px-4 py-3">
    <h1 className="text-green-700 font-semibold text-center text-base">
      Scan QR to Pay via UPI
    </h1>
    <hr />
    <div className="flex justify-between">
      <span>Consultation Fee:</span>
      <span>300/-</span>
    </div>
    <div className="flex justify-between">
      <span>GST:</span>
      <span>50/-</span>
    </div>
    <div className="flex justify-between font-bold text-base">
      <span>Total To Pay:</span>
      <span>350/-</span>
    </div>
    <p className="text-red-600 font-medium text-xs text-center">
      <u>NOTE</u>: Cancel in 60 sec for 100% refund.
      <br />
      No refund after that.
    </p>
  </CardBody>

  <CardFooter className="flex justify-center gap-3 pb-4">
    <Button style={{ backgroundColor: "#ff5200" }} size="sm">
      PAY NOW
    </Button>
    <Button style={{ backgroundColor: "#ff5200" }} size="sm">
      CANCEL
    </Button>

     
  </CardFooter>
</Card>

{/* Right: print Summary */}
<Card className="w-[24rem] h-[24rem] shadow-md rounded-lg">
   

     {/* 🖨️ Print Button */}
          <div className="flex justify-center mt-4">
            <Button
              size="sm"
              className="px-3 py-1 flex items-center gap-2 bg-white border rounded-md shadow-sm"
              onClick={handlePrint}
            >
              <MdOutlineLocalPrintshop size={20} className="text-green-600" />
              <span className="text-black font-semibold text-sm">
                PRINT RECEIPT
              </span>
            </Button>
          </div>
</Card>

    </div>
  );
}

export default MyCart;
