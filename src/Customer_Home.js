import './Customer_Home.css';
import { Select, Option } from "@material-tailwind/react";
import { Badge } from "@material-tailwind/react";
import { Chip } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";
import { BsCart3 } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import { CiWallet } from "react-icons/ci";
import { FaPowerOff } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { PiLineVerticalThin } from "react-icons/pi";
import logo from './assets/DutyDentist.png'; // adjust the path as necessary
import { Carousel } from "@material-tailwind/react";
import { IoSettingsOutline } from "react-icons/io5";
import { GoComment } from "react-icons/go";
import { AiOutlinePhone } from "react-icons/ai";
import { TfiEmail } from "react-icons/tfi";
import { GrSkype } from "react-icons/gr";
import { MdOutlineMyLocation } from "react-icons/md";
import { useState } from "react";
import { RiShareForwardFill } from "react-icons/ri";
import { TbRefresh } from "react-icons/tb";


import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Checkbox,
  Rating,
  Switch
} from "@material-tailwind/react";

const data = [
  { id: 1, name: 'Root canal Treatment', src: 'https://clovecontent.s3.ap-south-1.amazonaws.com/All/2019/02/RCT.gif', },
  { id: 2, name: 'Dental Crowns', src: 'https://clovecontent.s3.ap-south-1.amazonaws.com/All/2019/02/Crowns.gif', },
  { id: 3, name: 'Laser Dentistry', src: 'https://clovecontent.s3.ap-south-1.amazonaws.com/All/2022/09/Laser-Treatment-1.gif', },
  { id: 4, name: 'Invisible Braces', src: 'https://clovecontent.s3.ap-south-1.amazonaws.com/All/2025/06/Invisible-Braces-1.gif', },
  { id: 5, name: 'Dental Fillings', src: 'https://clovecontent.s3.ap-south-1.amazonaws.com/All/2019/02/Dental-Fillings-1-1.gif', },
  { id: 6, name: 'Wisdom Tooth Removal', src: 'https://clovecontent.s3.ap-south-1.amazonaws.com/All/2019/02/Wisdom-Tooth-1.gif', },
  { id: 7, name: 'Dental Braces', src: 'https://clovecontent.s3.ap-south-1.amazonaws.com/All/2017/05/Braces-2.gif', },
  { id: 8, name: 'Dental Implants', src: 'https://clovecontent.s3.ap-south-1.amazonaws.com/All/2019/02/Dental-Implants.gif', },
  { id: 9, name: 'Dentures', src: 'https://clovecontent.s3.ap-south-1.amazonaws.com/All/2019/02/Dentures.gif', },
  { id: 10, name: 'Kids Dentistry', src: 'https://clovecontent.s3.ap-south-1.amazonaws.com/All/2019/02/Kids-Dentistery.gif', },
  { id: 11, name: 'Mouth Ulcers', src: 'https://clovecontent.s3.ap-south-1.amazonaws.com/All/2019/02/Mouth-ulcers-1-2.gif', },
  { id: 12, name: 'Mouth Trestment - Advanced', src: 'https://clovecontent.s3.ap-south-1.amazonaws.com/All/2017/05/Gum-Treatment.gif', },


]

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1; 
const currentDate = new Date().getDate();
const now = new Date();
const startDate = new Date('2025-04-05T08:00:00'); // Start time
const endDate = new Date('2026-04-08T23:59:59');   // End time
const isBannerActive = now >= startDate && now <= endDate;



const CardItem = ({ item }) => (
  <Card
    className="w-60 p-4"   // ⬅️ Increased width + padding
    style={{ background: "#f8f8fcff" }}
  >
    <CardHeader
      variant="gradient"
      className="mb-5 grid h-10 place-items-center" // ⬅️ Taller header
      style={{ background: "#0e0906ff" }}
    >
      <Typography variant="h6" color="white" className="text-sm truncate px-1">
        {item.id} : {item.name}
      </Typography>
    </CardHeader>

    <div className="flex justify-center items-center mb-3">
      <img
        style={{ width: "140px", height: "140px" }} // ⬅️ Larger image
        src={item.src}
        alt={item.name}
      />
    </div>

    <CardBody className="flex flex-col gap-2 p-2">
      <Typography
        as="a"
        href="#"
        className="opacity-80 transition-opacity hover:opacity-100 text-sm text-center"
      >
        Discount - 5%
      </Typography>

      <Rating value={4} readonly size="md" /> {/* ⬅️ Bigger rating */}

      <div className="w-full mt-2">
        <Select label="Select City" size="md">  {/* ⬅️ Bigger dropdown */}
          <Option value="Brisbane">Brisbane</Option>
          <Option value="Melbourne">Melbourne</Option>
          <Option value="Sydney">Sydney</Option>
          <Option value="Maryborough">Maryborough</Option>
          <Option value="Adelaide">Adelaide</Option>
        </Select>
      </div>
    </CardBody>

    <CardFooter className="pt-3 px-2">
      <div className="flex justify-between items-center">
        <button aria-label="Share" className="p-2">
          <RiShareForwardFill size={22} color="#3970f1ff" /> {/* ⬅️ Bigger icon */}
        </button>

        <Button
          size="md"
          color="blue"
          className="text-sm px-3 py-1.5"
          fullWidth={true}
        >
          <a href="/MyCart">BOOK</a>
        </Button>
      </div>
    </CardFooter>
  </Card>
);




function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCard = () => setIsOpen(!isOpen);
  const Close_toggleCard = () => setIsOpen(prev => !prev);

  
  return (

    <div className="p-5 bg-gray-100">
<img
        style={{ width: '15%', height: '15%' }}
        src={logo}
        alt="Application_logo"
      />
{/* 
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
          <a href="/Welcome">
            Welcome
          </a>
        </a>
        <a href="#">Customer_Home</a>
      </Breadcrumbs> */}

      
      <div style={{ float: 'right' }}>
          <div className="w-74">
            <Select label="Profile">

              <Option>
              </Option>
              <Button>
                <a href="/MyCart">
                  <CiWallet size={20} color="white" /> My wallet
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

            </Select>
          </div>
        </div>

        
      <div className="absolute top-4 right-4 flex items-center space-x-3">

        
      <Button size="sm" color="white" className="flex items-center gap-2">
      <a href="/Settings" className="flex items-center gap-2 text-black bg-white p-2 rounded text-sm">
      <IoSettingsOutline size={25} />
    </a>
</Button>

<PiLineVerticalThin size={50} color="black"/>

<Button size="sm" color="white" className="flex items-center gap-2">
  <a href="/MyCart" className="text-black">
  </a>
  <div className="relative">
    <IoCartOutline size={35} color="black" />
    <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full px-1.5 py-0.5">
      12
    </span>
  </div>
</Button>

  <PiLineVerticalThin size={50} color="black"/>

  <div className="relative inline-block">
      <button
        className="focus:outline-none"
        aria-label="Notifications"
        onClick={Close_toggleCard}
      >
        <IoIosNotificationsOutline color="black" size={35} />
        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full px-1.5 py-0.5">
          99+
        </span>
      </button>

      {/* Notification Card */}
      {isOpen && (
        <div className="absolute right-0 mt-1 w-64 bg-white shadow-lg rounded-lg border z-10">
          <div className="p-4">
            <p className="font-semibold mb-2">Notifications</p>
            <ul className="space-y-2 text-sm">
              <li className="border-b pb-2">🔔 New Campaign has bee published</li>
              <li className="border-b pb-2">📦 Your order has shipped</li>
              <li>🎉 Welcome to our platform!</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  <PiLineVerticalThin size={50} color="black" />
  <a href="/Logout">
  <div className="relative group cursor-pointer">
  <FaPowerOff color="black" size={30} />
  <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
    Logout
  </span>
</div>
  </a>
</div>

{/* Location Button with Textbox */}
<div className="mt-4 flex items-center space-x-4 mb-4">
  <button
    className="px-4 py-2 bg-blue-900 text-white border border-blue-900 rounded transition hover:bg-blue-900"
  >
    LOCATION
  </button>

<div className="flex items-center border border-gray-300 rounded px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
  <FaLocationDot className="mr-2" style={{ color: '#ff5200' }} />
  <select
    className="outline-none w-full bg-white"
    defaultValue=""
    style={{ color: '#f35208ff' }}
  >
    <option value="" disabled>
      Select your location
    </option>
    <option value="Bangalore">Brisbane</option>
    <option value="Delhi">Melbourn</option>
    <option value="Chennai">Sydney</option>
    <option value="Mumbai">Maryborough</option>
    <option value="Hyderabad">Adilade</option>
  </select>
</div>

<button
  onClick={() => alert("Dental World - would like to access your location")}
  title="Get your current location"
  className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
>
  <MdOutlineMyLocation size={26} color="#ff5200" />
</button>

</div>


   <div
     className="mb-5 shadow-sm px-2 py-1 flex justify-center items-center overflow-x-auto whitespace-nowrap rounded-xl"
     style={{ backgroundColor: 'rgba(155, 158, 158, 1)' }}
   >
     {isBannerActive && (
       <div className="w-full overflow-hidden relative">
         <div className="animate-scroll whitespace-nowrap inline-block">
           <Typography variant="h6" className="text-md text-white">
             <i>
             Struggling to get a GP appointment? Fed up of long queues? Frustrated waiting? Don’t worry – we’re here to help. Book a same day or next day consultation in just a few clicks.
             </i>
           </Typography>
         </div>
       </div>
     )}
   </div>       


      <div className="mb-4 shadow-sm px-0 py-0 flex justify-center items-center bg-white-900 overflow-x-auto whitespace-nowrap">
  <Carousel className="w-full">
    {/* Image 1 */}
    <figure className="relative h-2-full">
      <img
    className="w-full rounded-2xl object-cover object-center shadow-lg"
    src="https://aadhyadentalcare.com/assets/images/Banner.png"
    alt="Dental Smile Banner"
  />


      <figcaption className="absolute bottom-8 left-1/2 flex w-[calc(100%-4rem)] -translate-x-1/2 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg backdrop-blur-sm">
        <div>
          <Typography variant="h5" color="blue-gray">
Creating Confident Smiles in Hervey Bay - A bright healthy smile can be yours Call our Clinic today!

                   </Typography>
          <Typography color="gray" className="mt-2 font-normal">
            Date: {currentDate} - {currentMonth} - {currentYear}
            <br />
            Time: {new Date().toLocaleTimeString()}
          </Typography>
        </div>
      </figcaption>
    </figure>

    {/* ✅ New Image 2 */}
    <figure className="relative h-96 w-full">
      <img
        className="h-96 w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
        src="https://content.wepik.com/statics/15456878/preview-page0.jpg"
        alt="banner image 2"
      />
      <figcaption className="absolute bottom-8 left-1/2 flex w-[calc(100%-4rem)] -translate-x-1/2 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg backdrop-blur-sm">
        <div>
          <Typography variant="h5" color="blue-gray">
            Tasty Bites Await 🍽️ — Don't miss today's specials!
          </Typography>
        </div>
      </figcaption>
    </figure>

    {/* ✅ New Image 3 */}
    <figure className="relative h-96 w-full">
      <img
        className="h-96 w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
        src="https://thegooddentists.com.au/wp-content/uploads/2023/08/the-good-dentist-banners-02.jpg"
        alt="banner image 2"
      />
      <figcaption className="absolute bottom-8 left-1/2 flex w-[calc(100%-4rem)] -translate-x-1/2 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg backdrop-blur-sm">
        <div>
          <Typography variant="h5" color="blue-gray">
            Exciting offers Await 🍽️ — Don't miss today's Deals!
          </Typography>
        </div>
      </figcaption>
    </figure>
  </Carousel>
</div>


<div className="absolute top-35 right-5">
  <button
    onClick={() => window.location.reload()}
    className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md hover:bg-gray-200 transition text-black"
  >
    <TbRefresh className="text-3xl" />
    <span className="text-lg">REFRESH</span>
  </button>
</div>



      <b><hr class="separator" /></b>

      <Typography variant="h3" style={{ color: "#271b66ff" }}  className="flex items-center gap-4">
      <img
    className="h-30 w-50 object-cover"
    src="https://clovedental.in/images1/google.svg"
          alt="Logo image"
        />
 <Rating value={4} readonly />

       
  <div className="p-4 bg-white shadow-md rounded-xl text-center">
      <h2 className="text-xl font-bold mb-2">Business Hours</h2>
      <p className="text-lg text-gray-700">10:00 AM - 07:00 PM</p>
      <p className="text-md text-green-600 font-semibold">Open all 7 days</p>
    </div>

 <div className="flex gap-2">
          <div className="w-72">
            <Select label="Clinic Status">
              <Option><Chip variant="ghost" color="green" size="sm" value="Available" icon={<span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />} /></Option>
              <Option><Chip variant="ghost" color="blue" size="sm" value="Busy" icon={<span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />} /></Option>
              <Option><Chip variant="ghost" color="white" size="sm" value="Closed" icon={<span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />} /></Option>
              <Option><Chip variant="ghost" color="red" size="sm" value="Out of Service" icon={<span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />} /></Option>
            </Select>
          </div>


          <div class="relative flex w-full justify-end gap-2 md:w-max">
          <div class="relative h-10 w-full  min-w-[288px]">
              <input type="Enter Delivery Pincode" placeholder="Search for Treatment"
                class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent !border-t-blue-gray-300 bg-transparent px-3 py-2.5 pl-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder:text-blue-gray-300 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-blue-gray-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
              <label
                class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
            </div>
            <div class="!absolute left-3 top-[13px]">
              <svg width="13" height="14" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.97811 7.95252C10.2126 7.38634 10.3333 6.7795 10.3333 6.16667C10.3333 4.92899 9.84167 3.742 8.9665 2.86683C8.09133 1.99167 6.90434 1.5 5.66667 1.5C4.42899 1.5 3.242 1.99167 2.36683 2.86683C1.49167 3.742 1 4.92899 1 6.16667C1 6.7795 1.12071 7.38634 1.35523 7.95252C1.58975 8.51871 1.93349 9.03316 2.36683 9.4665C2.80018 9.89984 3.31462 10.2436 3.88081 10.4781C4.447 10.7126 5.05383 10.8333 5.66667 10.8333C6.2795 10.8333 6.88634 10.7126 7.45252 10.4781C8.01871 10.2436 8.53316 9.89984 8.9665 9.4665C9.39984 9.03316 9.74358 8.51871 9.97811 7.95252Z"
                  fill="#CFD8DC"></path>
                <path
                  d="M13 13.5L9 9.5M10.3333 6.16667C10.3333 6.7795 10.2126 7.38634 9.97811 7.95252C9.74358 8.51871 9.39984 9.03316 8.9665 9.4665C8.53316 9.89984 8.01871 10.2436 7.45252 10.4781C6.88634 10.7126 6.2795 10.8333 5.66667 10.8333C5.05383 10.8333 4.447 10.7126 3.88081 10.4781C3.31462 10.2436 2.80018 9.89984 2.36683 9.4665C1.93349 9.03316 1.58975 8.51871 1.35523 7.95252C1.12071 7.38634 1 6.7795 1 6.16667C1 4.92899 1.49167 3.742 2.36683 2.86683C3.242 1.99167 4.42899 1.5 5.66667 1.5C6.90434 1.5 8.09133 1.99167 8.9665 2.86683C9.84167 3.742 10.3333 4.92899 10.3333 6.16667Z"
                  stroke="#CFD8DC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </div>
          </div>
        </div>

<Card
  className="order border-gray-300 rounded-lg w-full max-w-xs p-1"
  style={{ backgroundColor: 'white', position: 'absolute', top: '1rem', right: '30rem' }}
>
  <CardBody>
    <Typography variant="h5" style={{ color: '#362787ff' }} className="mb-2">
      CONTACT SUPPORT
    </Typography>

    <div className="flex space-x-2">
      <button className="p-1 rounded-full bg-gray-200 hover:bg-green-300 transition">
        <AiOutlinePhone size={22} color="black" />
      </button>
      <button className="p-1 rounded-full bg-gray-200 hover:bg-green-300 transition">
        <GoComment size={20} color="black" />
      </button>
      <button className="p-1 rounded-full bg-gray-200 hover:bg-green-300 transition">
        <TfiEmail size={20} color="black" />
      </button>
      <button className="p-1 rounded-full bg-gray-200 hover:bg-green-300 transition">
        <GrSkype size={20} color="black" />
      </button>
    </div>
  </CardBody>
</Card>


      </Typography>

      <b><hr class="separator" /></b>



<div className="w-full space-y-20 ">
  {[0, 6, 12].map((startIndex, rowIndex) => (
    <div key={rowIndex} className="w-full flex gap-5 border-t border-gray-300 pt-5">
      {data.slice(startIndex, startIndex + 12).map((item, index) => (
        <div key={index} className="border-r border-red-200 pr-5 last:border-none">
          <CardItem item={item} />
        </div>
      ))}
    </div>
  ))}
</div>

    
           
    </div>

    

  );



}


export default App;