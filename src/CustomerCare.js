import './App.css';
import {
  Button,
  Input,
  Textarea,
  Breadcrumbs,
  Typography,
  Select,
  Option,
  Badge,
  Avatar,
} from "@material-tailwind/react";
import { FaPowerOff } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";

function CustomerCare() {
  return (
    <section className="relative px-6 py-8 lg:py-16 bg-gray-50">
      {/* Breadcrumbs */}
      <Breadcrumbs>
        <a href="/Welcome" className="opacity-60">Welcome</a>
        <a href="#">Customer Care</a>
      </Breadcrumbs>

      {/* Top-right icons */}
      <div className="absolute top-6 right-6 flex items-center space-x-4">
        <a href="#">
          <IoIosNotificationsOutline className="text-black" size={28} />
        </a>
        <a href="/Logout">
          <FaPowerOff className="text-black" size={20} />
        </a>
        <Avatar
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
          size="md"
          variant="circular"
        />
        <Select label="My Profile" className="w-40">
          <Option>
            <a href="/MyCart" className="flex items-center gap-2">
              <Badge content="6" color="red">My Cart</Badge>
            </a>
          </Option>
          <Option><a href="/HomePage">About</a></Option>
          <Option><a href="/ResetPassword">Change Password</a></Option>
          <Option><a href="/">Logout</a></Option>
        </Select>
      </div>

      {/* Page Title */}
      <div className="container mx-auto text-center mt-20">
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-2 text-xl lg:text-3xl font-bold"
        >
          Welcome to Customer Care
        </Typography>
        <Typography
          variant="h2"
          color="blue-gray"
          className="mb-4 text-2xl lg:text-5xl font-extrabold"
        >
          We&apos;re Here to Help
        </Typography>
        <Typography className="mb-12 font-normal text-gray-600 max-w-3xl mx-auto">
          Whether it&apos;s a question about our services, a request for
          technical assistance, or suggestions for improvement, our team is
          eager to hear from you.
        </Typography>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Image */}
          <img
            src="https://thumbs.dreamstime.com/b/closeup-beautiful-business-customer-service-woman-smiling-30207893.jpg"
            alt="customer-care"
            className="w-full h-auto rounded-lg shadow-md lg:max-h-[600px] object-cover"
          />

          {/* Right - Form */}
          <form className="flex flex-col gap-6 text-left bg-white p-8 rounded-xl shadow-lg min-h-[600px]">
            <Typography variant="small" className="!font-semibold text-gray-700">
              Select Options for Business Engagement
            </Typography>

            <div className="flex gap-4">
              <Button variant="outlined" className="flex-1">General Inquiry</Button>
              <Button variant="outlined" className="flex-1">Product Support</Button>
            </div>

            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Typography variant="small" className="mb-1 font-medium text-gray-900">First Name</Typography>
                <Input color="gray" size="lg" placeholder="First Name" />
              </div>
              <div>
                <Typography variant="small" className="mb-1 font-medium text-gray-900">Last Name</Typography>
                <Input color="gray" size="lg" placeholder="Last Name" />
              </div>
            </div>

            {/* Email */}
            <div>
              <Typography variant="small" className="mb-1 font-medium text-gray-900">Your Email</Typography>
              <Input color="gray" size="lg" placeholder="name@email.com" />
            </div>

            {/* Message */}
            <div>
              <Typography variant="small" className="mb-1 font-medium text-gray-900">Your Message</Typography>
              <Textarea rows={7} color="gray" placeholder="Write your message..." />
            </div>

            {/* Submit */}
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CustomerCare;
