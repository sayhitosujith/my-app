import './App.css';
import { Badge } from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/solid";
import Popup from 'reactjs-popup';
import { FaPowerOff } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Select,
  Option,
  Breadcrumbs,
  Avatar,
  Rating,

} from "@material-tailwind/react";

const data = [
  {id: 1,  src: 'https://fellows.ias.ac.in/public/images/stock/avatar.svg?v=105894425',appointments: [],},
  {id: 2, src: 'https://fellows.ias.ac.in/public/images/stock/avatar.svg?v=105894425',appointments: [],},
  {id: 3, src: 'https://fellows.ias.ac.in/public/images/stock/avatar.svg?v=105894425',appointments: [],},
  {id: 4,  src: 'https://fellows.ias.ac.in/public/images/stock/avatar.svg?v=105894425',appointments: [],},
  {id: 5, src: 'https://fellows.ias.ac.in/public/images/stock/avatar.svg?v=105894425',appointments: [],},
  {id: 6, src: 'https://fellows.ias.ac.in/public/images/stock/avatar.svg?v=105894425',appointments: [],},
  {id: 7,  src: 'https://fellows.ias.ac.in/public/images/stock/avatar.svg?v=105894425',appointments: [],},
  {id: 8,  src: 'https://fellows.ias.ac.in/public/images/stock/avatar.svg?v=105894425',appointments: [],},
  {id: 9,  src: 'https://fellows.ias.ac.in/public/images/stock/avatar.svg?v=105894425',appointments: [],},
  {id: 10,  src: 'https://fellows.ias.ac.in/public/images/stock/avatar.svg?v=105894425',appointments: [],},
  {id: 11,  src: 'https://fellows.ias.ac.in/public/images/stock/avatar.svg?v=105894425',appointments: [],},

]

const CardItem = ({item}) => (
    <Card className="w-96">
          <CardHeader
              variant="gradient"
              color="green"
              className="mb-5 grid h-10 place-items-center">
              <Typography variant="h3" color="white">
                {item.id} : {item.name}  
             </Typography>
            </CardHeader>

            <div className='flex justify-center items-center'>
            <img style={{width: '180px', height: '180px'}} src={item.src} />
            </div>
          <CardBody className="flex flex-col gap-4">
            <div className="-mr-50">
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Typography variant="h10" color="black">

   
<div className="w-72">
    </div>
        <label>
     <b> First Name:</b><br></br>
     <b> Last Name:</b><br></br>
     <b> Age:</b><br></br>
     <b> Phone Number:</b><br></br>
     <b> Email ID:</b><br></br>
     <b> Aadhar Number:</b><br></br>
     <b> Address:</b><br></br>
     <b> ZipCode:</b><br></br>
     <Rating unratedColor="amber" ratedColor="amber" />
     <Button
            size="sm"
            variant="text"
            color="red"
            className="flex items-center gap-2"
          >
            <TrashIcon className="h-4 w-4 text-red-500" />
            <Typography className="!font-semibold text-xs text-red-500 md:block hidden">
            
            <Popup trigger=
                {<button>  Delete Profile </button>}
                position="right center">
                <div>Profile Deleted Successfully</div>
                <a href="/Welcome"/>
            </Popup>
            </Typography>

              <Button color="Black">
             <a href="/BookAppointment" className="w-full h-full block text-white text-center">
              Book Appointment
              <a href="/BookAppointment"/>
              <br></br>
                </a>
                </Button>
          </Button>

          
            <br></br>

    </label>
          </Typography>
          </CardFooter>
         
        </Card>
)

function Profile() {
  return (
    <div className="p-10">
       
            <br></br>
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
      <a href="#">Profiles</a>

    </Breadcrumbs>


    <div className="absolute top-4 right-4 flex items-center space-x-3">
  <a href="">
    <IoIosNotificationsOutline color="black" size={30} />
  </a>
  <a href="/Logout">
    <FaPowerOff color="black" size={20} />
  </a>
</div>

    <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar"size="xl" variant="square" div style={{float: 'right'}}></Avatar>

    <Typography variant="h2" color="Black">
      Profiles  
      <br></br>

<Button color="green">
  <a href="/Addprofile" className="w-full h-full block text-white text-center">
    + ADD PROFILE
  </a>
</Button>

    <div style={{float: 'right'}}>
      <div className="w-74">
      <Select label="Profile">
        <Option>    
        </Option>
    <Badge content="6">
    <Button>My cart </Button>
    </Badge>
       <Option>About</Option>
       <Option>Change Password</Option>
        <button><Option>Logout</Option></button>

      </Select>
    </div>
            </div>
        </Typography>
        <div className='w-full flex mt-20 gap-5'>
        {
          data.slice(0, 5).map((item) => <CardItem item={item} />)
        }
      </div>
      <div className='w-full flex mt-20 gap-5'>
        {
          data.slice(6, 11).map((item) => <CardItem item={item} />)
        }
      </div>
    </div>
 );
 
}


export default Profile;