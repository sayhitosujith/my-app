import "./App.css";
import React, { useState } from "react";
import packageJson from "../package.json";
import RCB from "./assets/D-logo.jpg";
import { IoMdFingerPrint } from "react-icons/io";
import { CiUser } from "react-icons/ci";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [practice, setPractice] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [practiceError, setPracticeError] = useState("");

  const handleFingerprint = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  const handleLogin = () => {
    setEmailError("");
    setPasswordError("");
    setPracticeError("");

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
      setPasswordError("Password is required");
      valid = false;
    } else if (
      password.length < 8 ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      !/[0-9]/.test(password)
    ) {
      setPasswordError(
        "Password must be 8+ chars with uppercase, lowercase & number"
      );
      valid = false;
    }

    if (!practice) {
      setPracticeError("Please select a practice");
      valid = false;
    }

    if (valid) {
      window.location.href = "/Welcome";
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center px-2"
      style={{ backgroundImage: `url(${RCB})` }}
    >
      <Card className="w-full max-w-sm p-6 shadow-xl rounded-xl bg-white bg-opacity-90">
        {/* Header */}
        <CardHeader
          variant="gradient"
          color="green"
          className="mb-3 grid h-20 place-items-center"
        >
          <Typography variant="h4" color="white">
            ADMIN
          </Typography>
        </CardHeader>

        {/* Body */}
        <CardBody className="flex flex-col gap-1">
          <Input
            label="Enter Email Address"
            size="lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!emailError}
          />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

          <Input
            type="password"
            label="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!passwordError}
          />
          {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}


          {/* Practice Dropdown */}
          <div className="mt-4">
            <label
              className="block mb-1 font-medium text-gray-700"
              htmlFor="practice"
            >
              Practice
            </label>
            <select
              id="practice"
              className={`w-full rounded border border-gray-300 px-3 py-2 focus:outline-none 
              focus:ring-2 focus:ring-green-500 ${
                practiceError ? "border-red-500" : ""
              }`}
              value={practice}
              onChange={(e) => setPractice(e.target.value)}
            >
              <option value="">-- Select Practice --</option>
              <option value="HerveyBay">Hervey Bay Dental</option>
              <option value="SunshineCoast">Sunshine Coast Dental</option>
              <option value="Brisbane">Brisbane Dental Clinic</option>
            </select>
            {practiceError && (
              <p className="text-red-500 text-sm mt-1">{practiceError}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 text-sm mt-2">
            <Checkbox label="Remember Me" className="text-green-700" />
            <a
              href="/ResetPassword"
              className="text-red-700 hover:text-green-600 underline font-semibold transition-colors duration-200"
            >
              Forgot Password? Click here to Reset
            </a>
          </div>
        </CardBody>

        {/* Footer */}
        <CardFooter className="pt-0 flex flex-col items-center gap-4">
          {/* Login Button */}
          <Button
            color="white"
            className="relative overflow-hidden text-base font-semibold text-white border-2 border-[#28a745] px-12 py-2 rounded bg-[#28a745] hover:bg-[#218838] transition"
            onClick={handleLogin}
          >
            <span className="relative z-10">Login</span>
          </Button>

          {/* Cancel Button */}
          <Button
            color="white"
            className="relative overflow-hidden text-base font-semibold text-white border-2 border-[#28a745] px-12 py-2 rounded bg-[#28a745] hover:bg-[#218838] transition"
            onClick={() => (window.location.href = "/my-app")}
          >
            <span className="relative z-10">Cancel</span>
          </Button>

          {/* Fingerprint Section */}
          <div className="flex flex-col items-center mt-6">
            <button
              onClick={handleFingerprint}
              className="flex justify-center items-center p-3 rounded-full bg-white shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            >
              <IoMdFingerPrint className="text-5xl text-black hover:text-green-600 transition-colors duration-300" />
            </button>

            {showPopup && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white rounded-lg shadow-lg p-6 w-72 text-center">
                  <h2 className="text-lg font-semibold mb-3 text-green-800">
                    User Detected
                  </h2>
                  <div className="flex justify-center items-center h-full">
                    <CiUser className="text-5xl" />
                  </div>
                  <p className="text-gray-600 mt-2">
                    Authentication successful!
                  </p>
                  <button
                    onClick={() => (window.location.href = "/Customer_Home")}
                    className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Social Buttons */}
          <Button
            size="md"
            variant="outlined"
            color="green"
            className="flex items-center gap-3"
          >
            <a href="/Customer_Home">Continue with Google</a>
            <img
              src="https://docs.material-tailwind.com/icons/google.svg"
              alt="google"
              className="h-5 w-5"
            />
          </Button>

          <Button
            size="md"
            variant="gradient"
            color="light-green"
            className="group relative flex items-center gap-3 overflow-hidden pr-[56px]"
          >
            <a href="/Customer_Home">Continue with Facebook</a>
            <span className="absolute right-0 grid h-full w-10 place-items-center bg-light-green-600 transition-colors group-hover:bg-light-green-700">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_(2019).png"
                alt="facebook"
                className="h-5 w-5"
              />
            </span>
          </Button>

          <Typography variant="small" className="mt-6 text-center">
            Don&apos;t have an account?{" "}
            <a
              href="/NewRegistration"
              className="underline text-red-700 hover:text-green-600 transition-colors duration-300 font-bold"
            >
              REGISTER
            </a>
          </Typography>

    
        </CardFooter>
      </Card>
    </div>
  );
}

export default App;
