import './App.css';
import React, { useEffect } from 'react';
import { RiAdminFill } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { AiFillCustomerService } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Badge } from "@material-tailwind/react";
import Flag from 'react-world-flags';
import { IoSettingsOutline } from "react-icons/io5";
import { RiAppleLine } from "react-icons/ri";
import { GrAndroid } from "react-icons/gr";
import { MdOutlineDesktopMac } from "react-icons/md";
import packageJson from '../package.json';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Select,
  Option,
  Breadcrumbs,
  Avatar,
  Button

} from "@material-tailwind/react";


  const now = new Date();
  const startDate = new Date('2025-04-05T08:00:00'); // Start time
  const endDate = new Date('2026-04-08T23:59:59');   // End time

  const isBannerActive = now >= startDate && now <= endDate;

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
const data = [
  {
    imageLink:
      "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    imageLink:
      "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    imageLink:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
  },
  {
    imageLink:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  },
  {
    imageLink:
      "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
  },
  {
    imageLink:
      "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
  },
  {
    imageLink:
      "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
  },
  {
    imageLink:
      "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
  },
  {
    imageLink:
      "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
  },
  {
    imageLink:
      "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
  },
];
 
const currentYear = new Date().getFullYear();
const Time =  new Date().toLocaleString();

function Example() {
  useEffect(() => {
    document.title = 'Welcome';
  }, []);
}

const CardItem = ({item}) => (
    
    <Card className="w-96" >
          <CardHeader
              variant="gradient"
              color="green"
              style={{ backgroundColor: "#1c8aeb" }}
              className="mb-18 grid h-18 place-items-center gap-4 bg-blue-500/25 p-1">
              <Typography variant="h1" color="green">
                {item.id} : {item.name}
              </Typography>
            </CardHeader>

            <div className='flex justify-center items-center'>
            <img style={{width: '150px',alignItems: "center",padding: "10px", height: '150px'}} src={item.src} className='rounded-full' />
            </div>
          <CardBody className="flex flex-col gap-4">
            <div className="-mr-50">
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Typography variant="h10" color="black">
    <br></br>
          </Typography>
          </CardFooter>
       
<br></br>
        </Card>
)

function Welcome() {
  return (
    <div className="p-10">
            <Breadcrumbs>
      <a href="#" className="opacity-60">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 30 30"
          fill="currentColor"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      </a>
      <a href="#" className="opacity-60">
      <a href="#">
      <a href="/HomePage">
             Home 
               </a>    
      </a>
      </a>
      <a href="#">Welcome</a>
    </Breadcrumbs>

    <div className="opacity-70">
  

  {/* Your content below */}
</div>
    <div className="mb-5 shadow-sm px-4 py-7 flex justify-center items-center bg-white-500 overflow-x-auto whitespace-nowrap">
  {isBannerActive && (
    <>
      <h2>
      <Typography variant="h1" className="text-md inline-block text-red">
          <i>
  🛍️ NEW ARRIVALS ALLERT ! 🥗 Fresh on the Menu! Tantalizing tastes and trendy treats have arrived. Don’t miss out — shop your favorites now! 🍽️💫{' '}🔥✨
          </i>
      
      {/* cursol images */}
          {/* <Carousel className="rounded-xl">
<img style={{width: '100%', height: '30%'}} src="https://b.zmtcdn.com/data/o2_assets/e067a1cf0d3fe27b366402b98b994e9f1716296909.png" 
alt="image 1"
  className="h-full w-full object-cover"
  />
        <img style={{width: '100%', height: '20%'}} src="https://b.zmtcdn.com/data/o2_assets/85e14f93411a6b584888b6f3de3daf081716296829.png" 
alt="image 1"
  className="h-full w-full object-cover"
  />
      </Carousel> */}


{/* Logout Icon */}
    <div className="absolute top-4 right-4 flex items-center space-x-8">
  <a href="">
  <Badge content="6">
    <IoIosNotificationsOutline color="black" size={40} />
 </Badge>
  </a>
  <a href="/my-app">
    <FaPowerOff color="black" size={30} />
  </a>
</div>
        </Typography>
      </h2>
    </>
  )}
</div>



    <Typography variant="h2" color="Black">
      <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar"size="xl" div style={{float: 'right'}}></Avatar>
      <Typography variant="h3" className="mt-8 flex flex justify-center items-center">
      <h1 style={{ color: '#057528' }}><b><div>Welcome to Food Maven!</div></b></h1>
 
      </Typography>
 
  
      <Typography variant="small" className="mt-8 flex flex justify-center items-center">
      <Typography variant="h6" color="black">
      <b>Access your provisioned services below. Switch services any time from the Apps icon in the middle of your screen.</b>
           <br></br></Typography>

           <b><hr class="separator" /></b>


           
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

           </Typography>
           <b><hr class="separator" /></b>

           

    <div style={{float: 'right'}}>

      <div className="w-74">
      <Select label="Profile">
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
       <Option>
       <a href="/Settings">
       Settings 
               </a> 
       </Option>
 
      </Select>
    </div>
            </div>
        </Typography>
        <br></br>

<div tilesnumber="4" class="grid grid-cols-1 gap-9 sm:grid-cols-2 md:grid-cols-6">
       
        <a class="MuiButtonBase-root MuiButton-root MuiButton-outlined AppButtonstyled__Button-sc-go28oe-1 eyWgKI"style={{marginRight: "40px"}} role="button"aria-disabled="false"data-aid="tile" 
        href="Home">    
       <span class="MuiButton-label">
<g fill="none" fill-rule="evenodd"></g>
<span class="MuiTouchRipple-root"></span>
       </span>

       <Button
       style={{ border: "1px solid green", display: "flex", alignItems: "center", padding: "40px",  backgroundColor: "white", }}>
       <RiAdminFill size={100} color="#3BB143" />
       <span class="AppButtonstyled__Name-sc-go28oe-0 fpuxxi"   style={{ color: "black" }}>&nbsp;&nbsp; <b>ADMIN</b></span>
       </Button>
        </a>
        <a class="MuiButtonBase-root MuiButton-root MuiButton-outlined AppButtonstyled__Button-sc-go28oe-1 eyWgKJ" style={{marginRight: "20px"}} role="button" aria-disabled="false" data-aid="tile"
         
         href="Customer_Login">    
       <span class="MuiButton-label">
<g fill="none" fill-rule="evenodd"></g>
<span class="MuiTouchRipple-root"></span>
       </span>
       

       <Button
       style={{ border: "1px solid green", display: "flex", alignItems: "center", padding: "40px",  backgroundColor: "white", }}>
       <CiUser size={100} color="#3BB143" />
       <span class="AppButtonstyled__Name-sc-go28oe-0 fpuxxi"   style={{ color: "black" }}>&nbsp;&nbsp; <b>CUSTOMER</b></span>
       </Button>
        </a>
        <a class="MuiButtonBase-root MuiButton-root MuiButton-outlined AppButtonstyled__Button-sc-go28oe-1 eyWgKJ" style={{marginRight: "20px"}} role="button" aria-disabled="false" data-aid="tile"
         
         href="Admin_Analytics">    
       <span class="MuiButton-label">
<g fill="none" fill-rule="evenodd"></g>
<span class="MuiTouchRipple-root"></span>
       </span>

       <Button
       style={{ border: "1px solid green", display: "flex", alignItems: "center", padding: "40px",  backgroundColor: "white", }}>
       <TbBrandGoogleAnalytics size={100} color="#3BB143" />
       <span class="AppButtonstyled__Name-sc-go28oe-0 fpuxxi"   style={{ color: "black" }}>&nbsp;&nbsp; <b>ANALYTICS</b></span>
       </Button>
        </a>
        <a class="MuiButtonBase-root MuiButton-root MuiButton-outlined AppButtonstyled__Button-sc-go28oe-1 eyWgKJ" style={{marginRight: "20px"}} role="button" aria-disabled="false" data-aid="tile"
         
         href="CustomerCare">    
       <span class="MuiButton-label">
<g fill="none" fill-rule="evenodd"></g>
<span class="MuiTouchRipple-root"></span>
       </span>

       <Button
       style={{ border: "1px solid green", display: "flex", alignItems: "center", padding: "40px",  backgroundColor: "white", }}>
       <FaUsers size={100} color="#3BB143" />
       <span class="AppButtonstyled__Name-sc-go28oe-0 fpuxxi"   style={{ color: "black" }}>&nbsp;&nbsp; <b>CUSTOMER CARE</b></span>
       </Button>
        </a>
        <a class="MuiButtonBase-root MuiButton-root MuiButton-outlined AppButtonstyled__Button-sc-go28oe-1 eyWgKJ" style={{marginRight: "20px"}} role="button" aria-disabled="false" data-aid="tile"
         
         href="Profile">    
       <span class="MuiButton-label">
<g fill="none" fill-rule="evenodd"></g>
<span class="MuiTouchRipple-root"></span>
       </span>

       <Button
       style={{ border: "1px solid green", display: "flex", alignItems: "center", padding: "40px",  backgroundColor: "white", }}>
       <FaFileInvoiceDollar size={100} color="#3BB143" />
       <span class="AppButtonstyled__Name-sc-go28oe-0 fpuxxi"   style={{ color: "black" }}>&nbsp;&nbsp; <b>PROFILES</b></span>
       </Button>
        </a>
        <a class="MuiButtonBase-root MuiButton-root MuiButton-outlined AppButtonstyled__Button-sc-go28oe-1 eyWgKJ" style={{marginRight: "20px"}} role="button" aria-disabled="false" data-aid="tile"
         href="Settings">    
       <span class="MuiButton-label">
<g fill="none" fill-rule="evenodd"></g>
<span class="MuiTouchRipple-root"></span>
       </span>

       <Button
       style={{ border: "1px solid green", display: "flex", alignItems: "center", padding: "40px",  backgroundColor: "white", }}>
       <IoSettingsOutline size={100} color="#3BB143" />
       <span class="AppButtonstyled__Name-sc-go28oe-0 fpuxxi"   style={{ color: "black" }}>&nbsp;&nbsp; <b>SETTINGS</b></span>
       </Button>
        </a>
        <a class="MuiButtonBase-root MuiButton-root MuiButton-outlined AppButtonstyled__Button-sc-go28oe-1 eyWgKJ" style={{marginRight: "20px"}} role="button" aria-disabled="false" data-aid="tile"
         href="Settings">
       <span class="MuiButton-label">
<g fill="none" fill-rule="evenodd"></g>
<span class="MuiTouchRipple-root"></span>
       </span>
      
        </a>
</div>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <b><hr class="separator" /></b>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <div className='flex justify-center items-center'>
       <Typography variant="h7" color="Black">
       <h8>Application Version: {packageJson.version}</h8>

      <br></br>
      <b><hr class="separator" /></b>

      <div className="absolute bottom-92 right-20 flex items-center gap-2 text-black text-sm">
      {/* Other left-aligned content */}

  <div className="flex items-center gap-2 text-black text-sm ml-auto">
    <b><i className="text-xl">DOWNLOAD FOR FREE - </i></b>
    <Button className="flex items-center gap-4">
      <GrAndroid size={30} color="white" />
      <RiAppleLine size={30} color="white" />
    </Button>
  </div>
</div>
      <br></br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      </Typography>
    </div>
    <footer className="relative w-full">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <Typography variant="h8" className="mb-6">
            Food Maven
            </Typography>
          <div>
    </div>
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="large"
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
            &copy; {currentYear}<a href="https://material-tailwind.com/"> - Food Maven</a>. All
            Rights Reserved.
            <br></br>
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
    </div>
 );
 
}
export default Welcome;



