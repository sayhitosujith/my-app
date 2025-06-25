import './App.css';
import { Badge } from "@material-tailwind/react";
import { RiAppleLine } from "react-icons/ri";
import { GrAndroid } from "react-icons/gr";
import Flag from 'react-world-flags';
import sujithImage from './assets/sujith.jpg'; // adjust the path as necessary
import vidhyaImage from './assets/Vidhya.jpg'; // adjust the path as necessary
import appbanner from './assets/swiggyApp_download_banner.avif'; // adjust the path as necessary

import logo from './assets/foodmaven.png'; // adjust the path as necessary
import food_wallpaper from './assets/FOOODD.png'; // adjust the path as necessary
import { TfiEmail } from "react-icons/tfi";


import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Avatar,
  Input,
  PopoverHandler,
  PopoverContent,
  Popover,
  Select,
  Option,
  Breadcrumbs

} from "@material-tailwind/react";
const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"],
  },
  {
    title: "Resource",
    items: ["Blog", "Newsletter", "Events", "Help center"],
  },
];

const currentYear = new Date().getFullYear();



const CardItem = ({ item }) => (

  <Card className="w-96 ">

    <CardHeader
      variant="gradient"
      color="green"
      className="mb-5 grid h-10 place-items-center">
      <Typography variant="h2" color="grey">
        {item.id} : {item.name}
      </Typography>
    </CardHeader>

    <div className='flex justify-center items-center'>
      <img style={{ width: '200px', height: '200px' }} src={item.src} className='rounded-full' />
    </div>
    <CardBody className="flex flex-col gap-4">
      <div className="-mr-50">
      </div>
    </CardBody>
    <CardFooter className="pt-0">
      <Typography variant="h10" color="black">
      </Typography>
    </CardFooter>
  </Card>
)

function Welcome() {
  return (
<div className="p-10 bg-white">
<img
        style={{ width: '15%', height: '15%' }}
        src={logo}
        alt="Application_logo"
      />
      <Typography variant="h2" color="Black">
        <Typography variant="small" className="mt-8 flex flex justify-center items-center">
          <Typography
            as="a"
            href="#signup"
            variant="Medium"
            color="blue-gray"
            className="ml-1 font-bold">
          </Typography>
        </Typography>
        <Breadcrumbs>
          <a href="#" className="opacity-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </a>
          <a href="#" className="opacity-60">
            <a href="#">
              <a href="/Welcome">
                Welcome
              </a>
            </a>
          </a>
          <a href="#">HomePage</a>
        </Breadcrumbs>

        <div style={{ float: 'right' }}>
          <Button color="green" appearance="primary">
            <a href="/Customer_Home">
              Order your Meal now
            </a>
          </Button>
          <div className="w-74">
            <Select label="Profile">

              <Option>
              </Option>
              <Button>
                <a href="/MyCart">
                  MyCart
                </a>

              </Button>
              <Option>
                <a href="/HomePage">
                  About
                </a>
              </Option>
              <Option>
                <a href="/ResetPassword">
                  Change Password
                </a>
              </Option>
              <button><Option>
                <a href="/">
                  Logout
                </a>
              </Option></button>
            </Select>
          </div>
        </div>
      </Typography>

      <img
        style={{ width: '80%', height: '100%', objectFit: 'cover' }}
        src={food_wallpaper}
        alt="Profile"
      />

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '10vh', // Full viewport height
        }}
      >
        <h1 style={{ color: '#2ae319', fontSize: '3rem' }}>
          <i> <b>Bringing generational recipes that are unique to each home</b></i>
        </h1>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '10vh', // Full viewport height
        }}
      >
        <h6 style={{ color: '#0a0a0a', fontSize: '1.2rem' }}>
          <b>      Our home chefs are from diverse backgrounds. From Dhoklas to Litti Chokha, and Ragi roti to Idiyappam, the regional delicacies available on Homeal is a fest to explore.And, regional dishes taste best when cooked at home!
          </b>
        </h6>
      </div>

      <br></br>
      <b><hr class="separator" /></b>

      <div className='flex justify-center items-center'>
      <Typography variant="h2" color="Black">
  <br />
  Food Varieties at your Fingertips
  <br /><br />

  <div className="flex flex-wrap gap-4">
  <button className="hover:scale-105 transition-transform duration-200">
    <img
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Biryani.png"
      alt="Biryani"
      className="w-48 h-48 rounded-full border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
    />
  </button>

  <button className="hover:scale-105 transition-transform duration-200">
    <img
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png"
      alt="Burger"
      className="w-48 h-48 rounded-full border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
    />
  </button>

  <button className="hover:scale-105 transition-transform duration-200">
    <img
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Noodles.png"
      alt="Noodles"
      className="w-48 h-48 rounded-full border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
    />
  </button>

  <button className="hover:scale-105 transition-transform duration-200">
    <img
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Dosa.png"
      alt="Dosa"
      className="w-48 h-48 rounded-full border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
    />
  </button>

  <button className="hover:scale-105 transition-transform duration-200">
    <img
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pasta.png"
      alt="Pasta"
      className="w-48 h-48 rounded-full border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
    />
  </button>

  <button className="hover:scale-105 transition-transform duration-200">
    <img
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Momo.png"
      alt="Momo"
      className="w-48 h-48 rounded-full border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
    />
  </button>

  <button className="hover:scale-105 transition-transform duration-200">
    <img
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Parotta.png"
      alt="Parotta"
      className="w-48 h-48 rounded-full border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
    />
  </button>

  <button className="hover:scale-105 transition-transform duration-200">
    <img
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Shawarma.png"
      alt="Shawarma"
      className="w-48 h-48 rounded-full border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
    />
  </button>

  <button className="hover:scale-105 transition-transform duration-200">
    <img
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Idli.png"
      alt="Idli"
      className="w-48 h-48 rounded-full border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
    />
  </button>
</div>
</Typography>

      </div>

      <br></br>
      <br></br>
      <br></br>

      <b><hr class="separator" /></b>
      <br></br>
      <br></br>
      <br></br>

      <img
      src={appbanner}
      alt="App banner scanner"
      style={{ width: '100%', height: '50vh', objectFit: 'cover' }}
      className="rounded-lg shadow-md"
    />
     
      <br></br>
      <br></br>
      <br></br>
      <b><hr class="separator" /></b>
      <div className='flex justify-center items-center'>
        <Typography variant="h2" color="Black">
          <br></br>
         Meet Our Leadership Team
          <br></br>
          <br></br>

          <div className="flex flex-row gap-8"> {/* Increased gap for more spacing */}
          <div className="h-screen flex items-center justify-center">

          <div className="flex gap-4 ">
          <Card className="w-92 bg-green-50">
          <CardHeader
  variant="gradient"
  color="white"
  className="grid h-24 place-items-center mb-6 bg-green-700"
>
  <Typography variant="h5" className="font-bold text-white">
    SUJITH REDDY
  </Typography>
</CardHeader>

  <CardBody className="flex flex-col gap-4">
    {/* Add content here if needed, like bio or social links */}
  </CardBody>

  <CardFooter className="pt-0 flex flex-col items-center">
    <img
      src={sujithImage}
      alt="Sujith Profile"
      style={{ width: '100%', height: '50vh', objectFit: 'cover' }}
      className="rounded-lg shadow-md"
    />

    <Typography variant="small" className="mt-6 text-center font-semibold">
      Founder and CEO
    </Typography>

    <div className="flex justify-center items-center gap-2 mt-3">
      <TfiEmail size={24} color="green" />
      <Typography variant="small" className="font-medium">
        sayhitosujith@gmail.com
      </Typography>
    </div>
  </CardFooter>

  {/* Optional footer link – removed empty Typography */}
</Card>


              <br></br>

              <br></br>

              <Card className="w-93 bg-green-50">
              <CardHeader
  variant="gradient"
  color="white"
  className="grid h-24 place-items-center mb-6 bg-green-700"
>
  <Typography variant="h5" className="font-bold text-white">
    VIDHYA REDDY
  </Typography>
</CardHeader>

  <CardBody className="flex flex-col gap-6">
    {/* Add body content here if needed */}
  </CardBody>

  <CardFooter className="pt-0 flex flex-col items-center">
    <img
      src={vidhyaImage}
      alt="Vidhya Profile"
      style={{ width: '100%', height: '50vh', objectFit: 'cover' }}
      className="rounded-lg shadow-md"
    />

    <Typography variant="small" className="mt-6 text-center font-semibold">
      CO-Founder and HR Head
    </Typography>

    <div className="flex justify-center items-center gap-2 mt-4">
      <TfiEmail size={24} color="green" />
      <Typography variant="paragraph" className="text-sm font-medium">
        MailtoVidhya@gmail.com
      </Typography>
    </div>
  </CardFooter>
</Card>


</div>

            </div>
          </div>
        </Typography>
      </div>



      <footer className="relative w-full">
        <div className="mx-auto w-full max-w-7xl px-8">
          <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
            <Typography variant="h5" className="mb-6">
              Food Maven
            </Typography>

            <div className="flex items-center gap-2 text-black text-sm ml-auto">
              <b>
                <i className="text-xl">DOWNLOAD FOR FREE - </i>
              </b>
              <Button className="flex items-center gap-4">
                <GrAndroid size={30} color="white" />
                <RiAppleLine size={30} color="white" />
              </Button>
            </div>

            <div className="grid grid-cols-3 justify-between gap-4">
              {LINKS.map(({ title, items }) => (
                <ul key={title}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-3 font-medium opacity-40"
                  >
                    {title}
                  </Typography>
                  {items.map((link) => (
                    <li key={link}>
                      <Typography
                        as="a"
                        href="#"
                        color="gray"
                        className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                      >
                        {link}

                      </Typography>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
          <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
            <Typography
              variant="small"
              className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
            >
              &copy; {currentYear} <a href="https://material-tailwind.com/">Food Maven</a>. All
              Rights Reserved.
              <div className="flex items-center space-x-2">
                <span className="text-lg font-semibold">MADE IN INDIA</span>
                <Flag code="IN" style={{ width: 30, height: 20 }} />
              </div>
            </Typography>
            <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
              <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                <svg className="h-8 w-8" fill="blue" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Typography>
              <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                <svg className="h-8 w-8" fill="red" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Typography>
              <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                <svg className="h-8 w-8" fill="green" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Typography>
              <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                <svg className="h-8 w-8" fill="black" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Typography>
              <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Typography>
            </div>
          </div>
        </div>
      </footer>

      <div className='flex justify-center items-center'>
        <Typography variant="h7" color="Black">
          <br></br>
        </Typography>
      </div>
    </div>

  );




}

export default Welcome;



