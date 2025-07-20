import './App.css';
import React, { useState } from 'react';
import packageJson from '../package.json';
import RCB from './assets/Rmw.png';
import { IoMdFingerPrint } from "react-icons/io";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Typography,
  Checkbox,
  Button,
} from "@material-tailwind/react";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleFingerprint = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  const handleLogin = () => {
    setEmailError('');
    setPasswordError('');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valid = true;

    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } else if (!emailPattern.test(email)) {
      setEmailError("Enter a valid email");
      valid = false;
    }

    if (!password) {
      setPasswordError("Validations are in place");
      valid = false;
    } else if (
      password.length < 8 ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      !/[0-9]/.test(password)
    ) {
      setPasswordError("Password must be 8+ chars with uppercase, lowercase & number");
      valid = false;
    }

    if (valid) {
      window.location.href = "/Welcome";
    }
  };

  return (
    <div className="flex flex-row gap-2">
      <div className='w-1/2 h-screen flex items-center justify-center bg-green-100'>
<Card className="w-full max-w-sm p-4 shadow-md rounded-2xl">
          <CardHeader variant="gradient" color="green" className="mb-4 grid h-28 place-items-center">
            <Typography variant="h3" color="white">
              ADMIN
            </Typography>
          </CardHeader>

          <CardBody className="flex flex-col gap-1">
            <Input
              label="Email"
              size="lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!emailError}
            />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

            <Input
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!passwordError}
            />
            {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}

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

            <div className="flex flex-col gap-2 text-sm">
  <div className="text-green-700">
    <Checkbox label="Remember Me" />
  </div>
  <div>
    <a
      href="/ResetPassword"
      className="text-red-700 hover:text-green-600 underline font-semibold transition-colors duration-200"
    >
      Forgot Password? Click here to Reset
    </a>
  </div>
</div>

          </CardBody>

          <CardFooter className="pt-0 flex flex-col items-center gap-4">
          <Button
  color="white"
  className="relative overflow-hidden text-lg font-semibold text-white border-4 border-[#28a745] px-20 py-2 rounded bg-[#28a745] hover:bg-[#218838] transition"
  onClick={handleLogin}
>
  {/* Top-right white triangle */}
  <span className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-l-[40px] border-t-white border-l-transparent"></span>

  <span className="relative z-10">Login</span>
</Button>

            <Button
              color="white"
              className="relative overflow-hidden text-lg font-semibold text-white border-4 border-[#28a745] px-20 py-2 rounded bg-[#28a745] hover:bg-[#218838] transition"
              onClick={() => window.location.href = "/Logout"}
            >
              <span className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-l-[40px] border-t-white border-l-transparent"></span>
              <span className="relative z-10">Cancel</span>
            </Button>

            <div className="flex flex-col items-center mt-10">
              <button
                onClick={handleFingerprint}
                className="flex justify-center items-center p-4 rounded-full bg-white shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              >
                <IoMdFingerPrint className="text-6xl text-black hover:text-green-600 transition-colors duration-300" />
              </button>

              {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                  <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
                    <h2 className="text-xl font-semibold mb-4 text-green-800">User Detected</h2>
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
              <a href="/Customer_Home">Continue with Google</a>
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
              <a href="/Customer_Home">Continue with Facebook</a>
              <span className="absolute right-0 grid h-full w-12 place-items-center bg-light-green-600 transition-colors group-hover:bg-light-green-700">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_(2019).png"
                  alt="facebook"
                  className="h-6 w-6"
                />
              </span>
            </Button>

            <Typography variant="small" className="mt-8 text-center">
              Don&apos;t have an account?{' '}
              <a
                href="/NewRegistration"
                className="underline text-red-700 hover:text-green-600 transition-colors duration-300 font-bold"
              >
                REGISTER
              </a>
            </Typography>

            <Typography variant="small" color="black" className="mt-4 text-center">
              Application Build Version: {packageJson.version}
            </Typography>
          </CardFooter>
        </Card>
      </div>

      <img
        style={{ width: '150vh', height: '100vh' }}
        src={RCB}
        alt="Lunch box"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export default App;
