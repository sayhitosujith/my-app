import "./App.css";
import React, { useState, useRef } from "react";
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

  // ---- Draggable Modal ---------- //
  const modalRef = useRef(null);
  const pos = useRef({ x: 0, y: 0, dx: 0, dy: 0 });

  const startDrag = (e) => {
    pos.current.x = e.clientX;
    pos.current.y = e.clientY;
    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseup", stopDrag);
  };

  const drag = (e) => {
    if (!modalRef.current) return;
    pos.current.dx = e.clientX - pos.current.x;
    pos.current.dy = e.clientY - pos.current.y;

    modalRef.current.style.transform = `translate(${pos.current.dx}px, ${pos.current.dy}px)`;
  };

  const stopDrag = () => {
    document.removeEventListener("mousemove", drag);
    document.removeEventListener("mouseup", stopDrag);
  };

  // -------------------------------- //

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
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${RCB})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-md"></div>

      {/* Floating Centered Modal */}
      <div className="absolute inset-0 flex justify-center items-center px-3">

        <div
          ref={modalRef}
          className="transition-transform duration-300 animate-slideDown"
          onMouseDown={startDrag}
        >
<Card className="w-full max-w-sm p-1 shadow-xl rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 animate-fadeIn">

            {/* Header */}
            <CardHeader
              variant="gradient"
              color="green"
              className="mb-1 grid h-12 place-items-center rounded-lg cursor-move"
            >
              <Typography variant="h5" color="white">
                Duty Dentist 
              </Typography>
            </CardHeader>

            {/* Body */}
            <CardBody className="flex flex-col gap-1 p-2">

              <Input
                label="Email"
                size="md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!emailError}
                className="!text-sm"
              />
              {emailError && (
                <p className="text-red-500 text-xs">{emailError}</p>
              )}

              <Input
                type="password"
                label="Password"
                size="md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!passwordError}
                className="!text-sm"
              />
              {passwordError && (
                <p className="text-red-500 text-xs">{passwordError}</p>
              )}

              {/* Practice Dropdown */}
              <div className="mt-1">
                <label className="block mb-1 text-sm font-medium text-white">
                  Practice City
                </label>

                <select
                  id="practice"
                  className={`w-full rounded-md border px-2 py-1 text-sm bg-white/50 backdrop-blur-md 
                focus:outline-none focus:ring-1 focus:ring-green-600 ${
                  practiceError ? "border-red-500" : "border-gray-300"
                }`}
                  value={practice}
                  onChange={(e) => setPractice(e.target.value)}
                >
                  <option value="">Select City</option>
                  <option value="HerveyBay">Hervey Bay Dental</option>
                  <option value="SunshineCoast">Sunshine Coast Dental</option>
                  <option value="Brisbane">Brisbane Dental Clinic</option>
                </select>

                {practiceError && (
                  <p className="text-red-500 text-xs mt-1">{practiceError}</p>
                )}
              </div>

              <div className="flex flex-col gap-1 text-xs mt-2 text-white">
                <Checkbox label="Remember Me" className="text-green-700" />
                <a
                  href="/ResetPassword"
                  className="text-red-300 hover:text-green-300 underline font-semibold transition"
                >
                  Forgot Password? Reset Here
                </a>
              </div>
            </CardBody>

            {/* Footer */}
            <CardFooter className="pt-1 flex flex-col items-center gap-3">

              <Button
                className="text-sm font-semibold text-white border border-green-600 px-8 py-1.5 rounded-lg bg-green-600/80 hover:bg-green-700 transition"
                onClick={handleLogin}
              >
                Login
              </Button>

              <Button
                className="text-sm font-semibold text-white border border-green-600 px-8 py-1.5 rounded-lg bg-green-600/80 hover:bg-green-700 transition"
                onClick={() => (window.location.href = "/my-app")}
              >
                Cancel
              </Button>

              {/* Fingerprint Button */}
              <button
                onClick={() => setShowPopup(true)}
                className="flex justify-center items-center p-3 rounded-full bg-white/40 backdrop-blur-xl shadow-lg hover:bg-white/60 transition"
              >
                <IoMdFingerPrint className="text-4xl text-black hover:text-green-600 transition" />
              </button>

              {/* Fingerprint Popup */}
              {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm z-50">
                  <div className="bg-white rounded-xl shadow-xl p-6 w-72 text-center animate-popup">
                    <h2 className="text-lg font-semibold mb-3 text-green-700">
                      User Detected
                    </h2>

                    <CiUser className="text-5xl mx-auto animate-pulseSlow" />

                    <p className="text-gray-600 mt-2">
                      Authentication successful!
                    </p>

                    <button
                      onClick={() =>
                        (window.location.href = "/Customer_Home")
                      }
                      className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}

              <Typography variant="small" className="mt-3 text-center text-white">
                Don’t have an account?{" "}
                <a
                  href="/NewRegistration"
                  className="underline text-red-300 hover:text-green-300 font-bold transition"
                >
                  REGISTER
                </a>
              </Typography>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
