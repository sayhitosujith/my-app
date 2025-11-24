import './App.css';
import { RiAppleLine } from "react-icons/ri";
import { GrAndroid } from "react-icons/gr";
import Flag from 'react-world-flags';
import sujithImage from './assets/sujith.jpg'; // adjust the path as necessary
import vidhyaImage from './assets/Vidhya.jpg'; // adjust the path as necessary
import adritaImage from './assets/Adrita.png'; // adjust the path as necessary
import rajeshImage from './assets/Rajesh.png'; // adjust the path as necessary
import RoyImage from './assets/Roy.png'; // adjust the path as necessary
import ManishImage from './assets/Manish.png'; // adjust the path as necessary
import appbanner from './assets/2-1.png'; // adjust the path as necessary

import food_wallpaper from './assets/case3.png'; // Main Image
import { TfiEmail } from "react-icons/tfi";
import { SiFoodpanda } from "react-icons/si";
import { BsPlus } from "react-icons/bs";
import logo from "./assets/DutyDentist.png";
import { TbDental } from "react-icons/tb";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
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

const now = new Date();
const startDate = new Date('2025-04-05T08:00:00'); // Start time
const endDate = new Date('2026-04-08T23:59:59');   // End time
const currentYear = new Date().getFullYear();
const isBannerActive = now >= startDate && now <= endDate;



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
      <img style={{ width: '100px', height: '100px' }} src={item.src} className='rounded-full' />
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
<div className="p-7 bg-white">
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
       

           <div
  className="mb-5 shadow-sm px-4 py-1 flex justify-center items-center overflow-x-auto whitespace-nowrap rounded-xl"
  style={{ backgroundColor: '#0f618c' }}
>
  {isBannerActive && (
    <div className="w-full overflow-hidden relative">
      <div className="animate-scroll whitespace-nowrap inline-block">
        <Typography variant="h6" className="text-sm text-white">
          <i>
            NEW | Struggling to get a GP appointment? Fed up of long queues? Frustrated waiting? Don’t worry – we’re here to help. Book a same day or next day online consultation, with a UK, NHS-experienced GP, in just a few clicks.

          </i>
        </Typography>
      </div>
    </div>
  )}
</div>

        

       
      </Typography>

      <img
        style={{ width: '60%', height: '100%', objectFit: 'cover' }}
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
        <h1 style={{ color: '#0f618c', fontSize: '3rem' }}>
          <i> <b>Your personal online doctor</b></i>
        </h1>
      </div>

<div style={{ float: 'right' }}>
 <Button  
  color="blue" 
  appearance="primary"
  style={{
    padding: '10px 10px',
    fontSize: '18px',
    minWidth: '220px',
    display: 'flex',           // ensure flex for icon + text
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px'                // space between icon and text
  }}
>
  <BsPlus  size={34} />    {/* icon size */}
  <a 
    href="/Customer_Home"
    style={{ 
      color: 'inherit', 
      textDecoration: 'none' 
    }}
  >
    Book an Appointment Now
  </a>
</Button>

</div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '10vh', // Full viewport height
        }}
      >

        
        <h6 style={{ color: '#0a0a0a', fontSize: '1rem' }}>
          <b>       Struggling to get a GP appointment? Fed up of long queues? Frustrated waiting?

Don’t worry – we’re here to help.

Book a same day or next day online consultation, with a UK, NHS-experienced GP, in just a few clicks.
          </b>
        </h6>
      </div>
        
      <br></br>
      <b><hr class="separator" /></b>

      <div className='flex justify-center items-center'>
      <Typography variant="h2" color="Black">
  <br />
  Services we offer
  <br /><br />

<div className="flex flex-wrap gap-4">
  <button className="flex flex-col items-center hover:scale-105 transition-transform duration-200">
    <img
      src="https://clovecontent.s3.ap-south-1.amazonaws.com/All/2019/02/RCT.gif"
      alt="1 : Root canal Treatment"
      className="w-36 h-36 rounded-full border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
    />
    <p className="text-center mt-2 font-semibold text-sm">Root Canal Treatment</p>
  </button>

  <button className="flex flex-col items-center hover:scale-105 transition-transform duration-200">
    <img
      src="https://clovecontent.s3.ap-south-1.amazonaws.com/All/2019/02/Crowns.gif"
      alt="Dental Crowns"
      className="w-36 h-36 rounded-full border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
    />
    <p className="text-center mt-2 font-semibold text-sm">Dental Crowns</p>
  </button>

  <button className="flex flex-col items-center hover:scale-105 transition-transform duration-200">
    <img
      src="https://clovecontent.s3.ap-south-1.amazonaws.com/All/2019/02/Dental-Fillings-1-1.gif"
      alt="Laser"
      className="w-36 h-36 rounded-full border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
    />
    <p className="text-center mt-2 font-semibold text-sm">Laser Dentistry</p>
  </button>

  <button className="flex flex-col items-center hover:scale-105 transition-transform duration-200">
    <img
      src="https://clovecontent.s3.ap-south-1.amazonaws.com/All/2025/06/Invisible-Braces-1.gif"
      alt="Invisible"
      className="w-36 h-36 rounded-full border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
    />
    <p className="text-center mt-2 font-semibold text-sm">Invisible Braces</p>
  </button>

  <button className="flex flex-col items-center hover:scale-105 transition-transform duration-200">
    <img
      src="https://clovecontent.s3.ap-south-1.amazonaws.com/All/2019/02/Dental-Fillings-1-1.gif"
      alt="Dental Fillings"
      className="w-36 h-36 rounded-full border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
    />
    <p className="text-center mt-2 font-semibold text-sm">Dental Fillings</p>
  </button>

  <button className="flex flex-col items-center hover:scale-105 transition-transform duration-200">
    <img
      src="https://clovecontent.s3.ap-south-1.amazonaws.com/All/2019/02/Wisdom-Tooth-1.gif"
      alt="Wisdom Tooth"
      className="w-36 h-36 rounded-full border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
    />
    <p className="text-center mt-2 font-semibold text-sm">Wisdom Tooth</p>
  </button>

  <button className="flex flex-col items-center hover:scale-105 transition-transform duration-200">
    <img
      src="https://clovecontent.s3.ap-south-1.amazonaws.com/All/2017/05/Braces-2.gif"
      alt="Dental Braces"
      className="w-36 h-36 rounded-full border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
    />
    <p className="text-center mt-2 font-semibold text-sm">Dental Braces</p>
  </button>

  <button className="flex flex-col items-center hover:scale-105 transition-transform duration-200">
    <img
      src="https://clovecontent.s3.ap-south-1.amazonaws.com/All/2019/02/Dental-Implants.gif"
      alt="Dental Implants"
      className="w-36 h-36 rounded-full border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
    />
    <p className="text-center mt-2 font-semibold text-sm">Dental Implants</p>
  </button>

  <button className="flex flex-col items-center hover:scale-105 transition-transform duration-200">
    <img
      src="https://clovecontent.s3.ap-south-1.amazonaws.com/All/2019/02/Dentures.gif"
      alt="Dentures"
      className="w-36 h-36 rounded-full border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
    />
    <p className="text-center mt-2 font-semibold text-sm">Dentures</p>
  </button>

  <button className="flex flex-col items-center hover:scale-105 transition-transform duration-200">
    <img
      src="https://clovecontent.s3.ap-south-1.amazonaws.com/All/2019/02/Kids-Dentistery.gif"
      alt="Kids"
      className="w-36 h-36 rounded-full border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
    />
    <p className="text-center mt-2 font-semibold text-sm">Kids Dentistry</p>
  </button>

  <button className="flex flex-col items-center hover:scale-105 transition-transform duration-200">
    <img
      src="https://clovecontent.s3.ap-south-1.amazonaws.com/All/2019/02/Mouth-ulcers-1-2.gif"
      alt="Mouth Ulcers"
      className="w-36 h-36 rounded-full border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
    />
    <p className="text-center mt-2 font-semibold text-sm">Mouth Ulcers</p>
  </button>

  <button className="flex flex-col items-center hover:scale-105 transition-transform duration-200">
    <img
      src="https://clovecontent.s3.ap-south-1.amazonaws.com/All/2017/05/Gum-Treatment.gif"
      alt="Gum Treatment"
      className="w-36 h-36 rounded-full border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
    />
    <p className="text-center mt-2 font-semibold text-sm">Gum Treatment</p>
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
         Meet Our Doctors
          <br></br>
          <br></br>

          <div className="flex flex-row gap-8"> {/* Increased gap for more spacing */}
          <div className="h-screen flex items-center justify-center">

          <div className="flex gap-4 ">
          <Card className="w-92 bg-green-50">
          <CardHeader
  variant="gradient"
  color="white"
  className="grid h-24 place-items-center mb-6 bg-blue-700"
>
  <Typography variant="h5" className="font-bold text-white">
    Dr. Manish Kaushik
  </Typography>
</CardHeader>

  <CardBody className="flex flex-col gap-4">
    {/* Add content here if needed, like bio or social links */}
  </CardBody>

  <CardFooter className="pt-0 flex flex-col items-center">
    <img
      src={ManishImage}
      alt="Dr. Manish Kaushik Profile"
      style={{ width: '100%', height: '50vh', objectFit: 'cover' }}
      className="rounded-lg shadow-md"
    />

    <Typography variant="small" className="mt-6 text-center font-semibold">
      Oral Surgery Specialist
    </Typography>

    <div className="flex justify-center items-center gap-2 mt-3">
      <TfiEmail size={24} color="green" />  
      <Typography variant="small" className="font-medium">
       ManishKaushik@gmail.com
      </Typography>
    </div>
  </CardFooter>

  {/* Optional footer link – removed empty Typography */}
</Card>

              <Card className="w-93 bg-green-50">
              <CardHeader
  variant="gradient"
  color="white"
  className="grid h-24 place-items-center mb-6 bg-blue-700"
>
  <Typography variant="h5" className="font-bold text-white">
    Dr.Supriya Kumar Roy
  </Typography>
</CardHeader>

  <CardBody className="flex flex-col gap-6">
    {/* Add body content here if needed */}
  </CardBody>

  <CardFooter className="pt-0 flex flex-col items-center">
    <img
      src={RoyImage}
      alt="Dr.Supriya Kumar Roy Profile"
      style={{ width: '100%', height: '50vh', objectFit: 'cover' }}
      className="rounded-lg shadow-md"
    />

    <Typography variant="small" className="mt-6 text-center font-semibold">
      Senior Consultant Oral and Maxillofacial Surgeon
    </Typography>

    <div className="flex justify-center items-center gap-2 mt-4">
      <TfiEmail size={24} color="green" />
      <Typography variant="paragraph" className="text-sm font-medium">
        MailtoSupriyaKumarRoy@gmail.com
      </Typography>
    </div>
  </CardFooter>

  
</Card>


 <Card className="w-93 bg-green-50">
              <CardHeader
  variant="gradient"
  color="white"
  className="grid h-24 place-items-center mb-6 bg-blue-700"
>
  <Typography variant="h5" className="font-bold text-white">
    Brigadier Dr. Rajesh Madan
  </Typography>
</CardHeader>

  <CardBody className="flex flex-col gap-6">
    {/* Add body content here if needed */}
  </CardBody>

  <CardFooter className="pt-0 flex flex-col items-center">
    <img
      src={rajeshImage}
      alt="Brigadier Dr. Rajesh Madan Profile"
      style={{ width: '100%', height: '50vh', objectFit: 'cover' }}
      className="rounded-lg shadow-md"
    />

    <Typography variant="small" className="mt-6 text-center font-semibold">
      Prosthodontist Expert
    </Typography>

    <div className="flex justify-center items-center gap-2 mt-4">
      <TfiEmail size={24} color="green" />
      <Typography variant="paragraph" className="text-sm font-medium">
        BrigadierRajeshMadan@gmail.com
      </Typography>
    </div>
  </CardFooter>

  
</Card>



 <Card className="w-93 bg-green-50">
              <CardHeader
  variant="gradient"
  color="white"
  className="grid h-24 place-items-center mb-6 bg-blue-700"
>
  <Typography variant="h5" className="font-bold text-white">
Dr. Adrita Nag
  </Typography>
</CardHeader>

  <CardBody className="flex flex-col gap-6">
    {/* Add body content here if needed */}
  </CardBody>

  <CardFooter className="pt-0 flex flex-col items-center">
    <img
      src={adritaImage}
      alt="Adrita Nag Profile"
      style={{ width: '100%', height: '50vh', objectFit: 'cover' }}
      className="rounded-lg shadow-md"
    />

    <Typography variant="small" className="mt-6 text-center font-semibold">
      oral medicine and radiologist
    </Typography>

    <div className="flex justify-center items-center gap-2 mt-4">
      <TfiEmail size={24} color="green" />
      <Typography variant="paragraph" className="text-sm font-medium">
        MailtoAdritaNag@gmail.com
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
            
<Typography variant="h5" className="mb-6 flex items-center space-x-2">
  <span className="text-blue-800">Duty</span>
  <span className="text-blue-400">Dentist</span>
  <TbDental className="text-blue-500" />
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



