import "./App.css";
import { Carousel } from "@material-tailwind/react";
import { IoMdFingerPrint } from "react-icons/io";
import logo from "./assets/Toothx_Logo.png";

import {
  Card,
  CardHeader,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function Customer_Login() {
  const [mobile, setMobile] = useState("");
  return (
    <div className="flex flex-row min-h-screen">
      {/* LEFT LOGIN SECTION */}
      <div className="w-1/2 flex items-center justify-center bg-gray-50">
        <Card className="w-[80%] p-6 shadow-lg">
          <CardHeader className="mb-6 flex flex-col items-center justify-center h-auto py-6 bg-gradient-to-r from-orange-600 to-orange-900">
            <img src={logo} alt="logo" className="w-32 mb-2" />

            <Typography variant="h4" color="white">
              Login to ToothX
            </Typography>
          </CardHeader>

          <div className="flex flex-col gap-4">
            <Input
              label="Enter your Mobile Number"
              size="md"
              value={mobile}
              maxLength={10}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, ""); // allow only numbers
                if (value.length <= 10) {
                  setMobile(value);
                }
              }}
            />
            <Link to="/OTP" className="flex justify-center">
              <Button className="w-40 bg-gradient-to-r from-orange-600 to-orange-800 text-white shadow-md hover:from-orange-700 hover:to-orange-900">
                Get OTP
              </Button>
            </Link>

            {/* Fingerprint */}
            <div className="flex justify-center mt-4">
              <IoMdFingerPrint className="text-6xl text-black hover:text-orange-600 transition duration-300 cursor-pointer" />
            </div>

            {/* Description */}
            <div className="text-center mt-3">
              <Typography className="text-orange-700 font-semibold">
                Get access to your Orders, Wishlist and Recommendations
              </Typography>
            </div>

            {/* Register */}
            <Typography variant="small" className="mt-6 flex justify-center">
              Don't have an account?
              <Link
                to="/register"
                className="ml-1 font-bold text-red-500 hover:text-red-700"
              >
                REGISTER FOR FREE
              </Link>
            </Typography>
          </div>
        </Card>
      </div>

      {/* RIGHT IMAGE CAROUSEL */}
      <div className="w-1/2">
        <Carousel autoplay loop className="h-screen">
          <img
            src="https://t3.ftcdn.net/jpg/01/52/29/48/360_F_152294834_7tE0I9RmiRyhMMJoDjqxNNUU5WovaKuX.jpg"
            alt="Smile 1"
            className="h-full w-full object-cover"
          />

          <img
            src="https://t4.ftcdn.net/jpg/19/02/72/31/360_F_1902723157_hQCxIccxMM9DK9iWLkeK3zeo2B0lZrla.jpg"
            alt="Smile 2"
            className="h-full w-full object-cover"
          />

          <img
            src="https://confidence-dental.com.au/wp-content/uploads/2025/02/checkups-prevention.webp"
            alt="Smile 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>
    </div>
  );
}

export default Customer_Login;
