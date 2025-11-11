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

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section className="relative px-6 py-8 lg:py-16 bg-gray-50 min-h-screen">
      {/* Breadcrumbs */}
      <Breadcrumbs className="mb-6">
        <a href="/HomePage">Home</a>
        <Typography as="span" className="opacity-60">
          Welcome
        </Typography>
        <Typography>Customer Care</Typography>
      </Breadcrumbs>

      {/* Top-right icons */}
      <div className="flex justify-end items-center gap-4 mb-8">
        <IoIosNotificationsOutline className="text-black cursor-pointer" size={28} />
        <a href="/Logout">
          <FaPowerOff className="text-black" size={20} />
        </a>

        <Menu placement="bottom-end">
          <MenuHandler>
            <Avatar
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="User Avatar"
              size="md"
              variant="circular"
              className="cursor-pointer"
            />
          </MenuHandler>
          <MenuList>
            <MenuItem>
              <a href="/MyCart" className="flex items-center gap-2 w-full">
                <Badge content="6" color="red">
                  <span>My Cart</span>
                </Badge>
              </a>
            </MenuItem>
            <MenuItem>
              <a href="/HomePage" className="w-full block">
                About
              </a>
            </MenuItem>
            <MenuItem>
              <a href="/ResetPassword" className="w-full block">
                Change Password
              </a>
            </MenuItem>
            <MenuItem>
              <a href="/" className="w-full block text-red-600 font-semibold">
                Logout
              </a>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>

      {/* Page Title */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <Typography variant="h1" className="mb-2">
          Welcome to Customer Care
        </Typography>
        <Typography variant="h2" className="mb-4">
          We&apos;re Here to Help
        </Typography>
        <Typography className="text-gray-700">
          Whether it&apos;s a question about our services, a request for technical
          assistance, or suggestions for improvement, our team is eager to hear from
          you.
        </Typography>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
        {/* Left - Image */}
        <img
          src="https://thumbs.dreamstime.com/b/closeup-beautiful-business-customer-service-woman-smiling-30207893.jpg"
          alt="Customer service representative"
          className="w-full h-auto rounded-lg shadow-md lg:max-h-[600px] object-cover"
        />

        {/* Right - Card Form */}
        <Card shadow={true} className="w-full">
          <CardHeader floated={false} shadow={false} color="transparent" className="pb-0 text-left">
            <Typography variant="h5" color="blue-gray" className="font-bold mb-2">
              Contact Our Team
            </Typography>
            <Typography variant="small" className="!font-semibold text-gray-700">
              Select Options for Business Engagement
            </Typography>
          </CardHeader>

          <CardBody className="flex flex-col gap-6">
            {/* Inquiry Type Buttons */}
            <div className="flex gap-4 flex-wrap">
              {["General Inquiry", "Product Support"].map((type) => (
                <Button
                  key={type}
                  variant={formData.inquiryType === type ? "filled" : "outlined"}
                  className="flex-1"
                  onClick={() => setFormData({ ...formData, inquiryType: type })}
                >
                  {type}
                </Button>
              ))}
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Typography variant="small" className="mb-1 font-medium text-gray-900">
                    First Name
                  </Typography>
                  <Input
                    color="gray"
                    size="lg"
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    error={!!errors.firstName}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                  )}
                </div>

                <div>
                  <Typography variant="small" className="mb-1 font-medium text-gray-900">
                    Last Name
                  </Typography>
                  <Input
                    color="gray"
                    size="lg"
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    error={!!errors.lastName}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div>
                <Typography variant="small" className="mb-1 font-medium text-gray-900">
                  Your Email
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="name@email.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <Typography variant="small" className="mb-1 font-medium text-gray-900">
                  Your Message
                </Typography>
                <Textarea
                  rows={7}
                  color="gray"
                  placeholder="Write your message..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  error={!!errors.message}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Send Message
              </Button>

              {success && (
                <Typography variant="small" className="text-green-600 text-center mt-2">
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
