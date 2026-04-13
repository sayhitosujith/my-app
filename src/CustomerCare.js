import React, { useState } from "react";
import {
  Button,
  Input,
  Textarea,
  Breadcrumbs,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Badge,
  Avatar,
  Card,
  CardBody,
  CardHeader,
} from "@material-tailwind/react";
import { FaPowerOff } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "./assets/Toothx_Logo.png";

function CustomerCare() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    inquiryType: "General Inquiry",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName) tempErrors.firstName = "First Name is required";
    if (!formData.lastName) tempErrors.lastName = "Last Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Email is invalid";
    if (!formData.message) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Form submitted:", formData);
    setSuccess(true);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      inquiryType: "General Inquiry",
    });

    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <section className="relative px-6 py-8 lg:py-16 bg-gray-50 min-h-screen">
      {/* LOGO */}
      <div className="flex items-center mb-4">
        <img src={logo} alt="logo" className="w-40" />
      </div>

      {/* BREADCRUMBS */}
<Breadcrumbs className="mb-4 text-sm flex items-center gap-1">
  <Link to="/HomePage" className="text-orange-600 hover:underline">Home</Link>
  <Link to="/Welcome" className="text-orange-600 hover:underline">Welcome</Link>
  <Typography className="font-semibold text-orange-800">Customer Care</Typography>
</Breadcrumbs>

      {/* TOP RIGHT */}
      <div className="flex justify-end items-center gap-4 mb-8">
        <IoIosNotificationsOutline
          className="text-black cursor-pointer"
          size={28}
        />

        <Link to="/Logout">
          <FaPowerOff className="text-black" size={20} />
        </Link>

        <Menu placement="bottom-end">
          <MenuHandler>
            <Avatar
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="User"
              size="md"
              variant="circular"
              className="cursor-pointer"
            />
          </MenuHandler>

          <MenuList>
            <MenuItem>
              <Link to="/MyCart" className="flex items-center gap-2 w-full">
                <Badge content="6" color="red">
                  <span>My Cart</span>
                </Badge>
              </Link>
            </MenuItem>

            <MenuItem>
              <Link to="/HomePage" className="w-full block">
                About
              </Link>
            </MenuItem>

            <MenuItem>
              <Link to="/ResetPassword" className="w-full block">
                Change Password
              </Link>
            </MenuItem>

            <MenuItem>
              <Link to="/" className="w-full block text-red-600 font-semibold">
                Logout
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>

      {/* TITLE */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <Typography variant="h2" className="mb-2 text-orange-800 font-bold">
          Welcome to Customer Care
        </Typography>

        <Typography variant="h2" className="mb-4">
          We&apos;re Here to Help
        </Typography>

        <Typography className="text-gray-700">
          Whether it&apos;s a question about our services, a request for
          technical assistance, or suggestions for improvement, our team is
          eager to hear from you.
        </Typography>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
        {/* IMAGE */}
        <img
          src="https://thumbs.dreamstime.com/b/closeup-beautiful-business-customer-service-woman-smiling-30207893.jpg"
          alt="Customer service"
          className="w-full h-auto rounded-lg shadow-md lg:max-h-[600px] object-cover"
        />

        {/* FORM CARD */}
        <Card className="w-full shadow-lg">
          {/* HEADER */}
          <CardHeader className="bg-gradient-to-r from-orange-600 to-orange-800 text-white p-4">
            <Typography variant="h5" className="font-bold">
              Contact Our Team
            </Typography>
            <Typography variant="small">
              Select Options for Business Engagement
            </Typography>
          </CardHeader>

          <CardBody className="flex flex-col gap-6">
            {/* INQUIRY BUTTONS */}
            <div className="flex gap-4 flex-wrap">
              {["General Inquiry", "Product Support"].map((type) => (
                <Button
                  key={type}
                  className={`flex-1 ${
                    formData.inquiryType === type
                      ? "bg-gradient-to-r from-orange-600 to-orange-800 text-white"
                      : "border border-orange-600 text-orange-600"
                  }`}
                  onClick={() =>
                    setFormData({ ...formData, inquiryType: type })
                  }
                >
                  {type}
                </Button>
              ))}
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* NAME */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Typography className="mb-1 font-medium">
                    First Name
                  </Typography>
                  <Input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    error={!!errors.firstName}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs">{errors.firstName}</p>
                  )}
                </div>

                <div>
                  <Typography className="mb-1 font-medium">
                    Last Name
                  </Typography>
                  <Input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    error={!!errors.lastName}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs">{errors.lastName}</p>
                  )}
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <Typography className="mb-1 font-medium">Your Email</Typography>
                <Input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email}</p>
                )}
              </div>

              {/* MESSAGE */}
              <div>
                <Typography className="mb-1 font-medium">
                  Your Message
                </Typography>
                <Textarea
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  error={!!errors.message}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs">{errors.message}</p>
                )}
              </div>

              {/* SUBMIT */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-600 via-orange-700 to-orange-900 text-white shadow-lg hover:scale-105 transition duration-300"
              >
                Send Message
              </Button>

              {/* SUCCESS */}
              {success && (
                <Typography className="text-orange-600 text-center">
                  Message sent successfully!
                </Typography>
              )}
            </form>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default CustomerCare;
