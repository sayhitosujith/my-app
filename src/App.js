import './App.css';
import { Input, Typography } from "@material-tailwind/react";
import React from 'react';
import packageJson from '../package.json';
import RCB from './assets/Rmw.png'; // adjust the path as necessary
import { IoMdFingerPrint } from "react-icons/io";
import  { useState } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Checkbox,
  Button,
} from "@material-tailwind/react";


function App() {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    
    <div className="flex flex-row gap-5">
      <div className='w-1/2 h-screen flex items-center justify-center bg-white-100'>
        <Card className="w-92">
        <CardHeader
  variant="gradient"
  color="green"
  className="mb-4 grid h-28 place-items-center"
>
  <Typography variant="h3" color="white">
    ADMIN
  </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="Email" size="lg" />
            <div className="w-[32rem]">
      <Input type="password" label="Password" />
      <Typography
        variant="small"
        color="gray"
        className="mt-2 flex items-center gap-1 font-normal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="-mt-px h-4 w-4"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clipRule="evenodd"
          />
        </svg>
        Use at least 8 characters, one uppercase, one lowercase and one number.
      </Typography>
    </div>            <div className="-ml-2.5">
              <div></div>
              <Checkbox label="Remember Me" /><div></div>
              <a href="/ResetPassword">Forgot Password? Click here to <u><b>Reset</b></u>
              </a>
            </div>
            
          </CardBody>
          <CardFooter className="pt-0 flex flex-col items-center gap-4">
         
          <a href="/Welcome" className="w-full">
  <Button variant="filled" color="green" fullWidth>
    LOGIN
  </Button>
</a>

  
<Button
  variant="gradient"
  fullWidth
  className="from-green-400 to-green-600 text-white"
>
  <a href="/Logout">Cancel</a>
</Button>

<div className="flex flex-col items-center mt-10">
      {/* Fingerprint Button */}
      <button
        onClick={handleClick}
        className="flex justify-center items-center p-4 rounded-full bg-white shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
      >
        <IoMdFingerPrint className="text-6xl text-black hover:text-green-600 transition-colors duration-300" />
      </button>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
            <h2 className="text-xl font-semibold mb-4 text-green-800">Fingerprint Detected</h2>
            <p className="text-gray-600">Authentication successful!</p>
            <button
onClick={() => window.location.href = "/Customer_Home"}
className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>

  <Button
    size="lg"
    variant="outlined"
    color="green"
    className="flex items-center gap-4"
  >
    <a href="/Customer_Home">Continue with the Google</a>
    <img
      src="https://docs.material-tailwind.com/icons/google.svg"
      alt="google"
      className="h-6 w-6"
    />
  </Button>

  <Button
  size="lg"
  variant="gradient"
  color="light-green"
  className="group relative flex items-center gap-3 overflow-hidden pr-[72px]"
>
  <a href="/Customer_Home"> Continue with Facebook</a>
  <span className="absolute right-0 grid h-full w-12 place-items-center bg-light-green-600 transition-colors group-hover:bg-light-green-700">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_(2019).png"
      alt="facebook"
      className="h-6 w-6"
    />
  </span>
</Button>


<Typography variant="small" className="mt-8 flex flex-col items-center">
  Don&apos;t have an account? Click here to
  <Typography
    as="div"
    variant="small"
    color="blue-gray"
    className="ml-1 font-bold"
  >
    <a
      href="/NewRegistration"
      className="underline text-red-700 hover:text-green-600 transition-colors duration-300"
    >
      REGISTER
    </a>
  </Typography>
</Typography>

  {/* Centered Application Version */}
  <div className="mt-4">
    <Typography variant="small" color="black" className="text-center">
      Application Build Version: {packageJson.version}
    </Typography>
  </div>
</CardFooter>
        
        </Card>
      </div>
       {/* <img style={{width: '90%', height: '100vh'}} src="https://media.glamour.com/photos/66b395f7626a69f05aa0b823/master/w_2560%2Cc_limit/0807-earlydinner.gif"   */}
       <img style={{width: '120vh', height: '100vh'}} src={RCB}
      alt=" Lunch box"
      
        className="h-full w-full object-cover"
        />
    </div>
  );
}

export default App;

