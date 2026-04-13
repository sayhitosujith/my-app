import "./App.css";
import OtpInput from "react-otp-input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./assets/Toothx_Logo.png";

import { Card, CardHeader, Typography, Button } from "@material-tailwind/react";

function OTP() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleVerify = () => {
    if (otp === "1111") {
      setError("");
      setSuccess("OTP Verified Successfully ✅");

      setTimeout(() => {
        navigate("/Customer_home");
      }, 2000);
    } else {
      setSuccess("");
      setError("Please enter Valid OTP");
    }
  };

  return (
    <div className="flex flex-row gap-5">
      <div className="w-1/2 h-screen flex items-center justify-center">
        <Card style={{ width: "80%", height: "50%" }}>
          <CardHeader className="mb-4 flex flex-col items-center justify-center h-auto py-6 bg-gradient-to-r from-orange-600 to-orange-800">
            {/* Logo */}
            <img src={logo} alt="logo" className="w-28 mb-2" />

            {/* Title */}
            <Typography variant="h3" className="text-white">
              OTP Verification
            </Typography>
          </CardHeader>

          <div className="w-[35rem] mx-auto flex flex-col items-center">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span className="mx-3 text-3xl">-</span>}
              renderInput={(props) => (
                <input
                  {...props}
                  className="w-20 h-20 text-3xl text-center border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
              )}
            />

            <Typography className="text-black-800 mt-4">
              Enter OTP received on your Phone
            </Typography>

            {/* Error Message */}
            {error && (
              <Typography className="text-red-500 mt-2 font-medium">
                {error}
              </Typography>
            )}

            {/* Success Message */}
            {success && (
              <Typography className="text-orange-600 mt-2 font-semibold">
                {success}
              </Typography>
            )}
          </div>

          <div className="flex justify-center mt-6">
            <Button
              className="w-40 bg-gradient-to-r from-orange-600 to-orange-800 text-white shadow-md hover:from-orange-700 hover:to-orange-900"
              onClick={handleVerify}
            >
              VERIFY
            </Button>
          </div>

          <Typography className="text-center mt-6">
            If you didn't receive a code!{" "}
            <i>
              {" "}
              <u>
                <b>
                  <a href="/OTP">Click to RESEND</a>
                </b>
              </u>
            </i>
          </Typography>
        </Card>
      </div>

      <img
        style={{ width: "60%", height: "100vh" }}
        src="https://cdn.dribbble.com/users/3821672/screenshots/7172846/otp.gif"
        alt="OTP"
      />
    </div>
  );
}

export default OTP;
