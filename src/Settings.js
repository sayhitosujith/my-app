import './App.css';
import { Badge } from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/solid";
import Popup from 'reactjs-popup';

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
  Checkbox

} from "@material-tailwind/react";

const data = [
  {id: 1,  src: 'https://cdn-icons-png.flaticon.com/512/305/305976.png',},
  {id: 2, src: 'https://cdn-icons-png.flaticon.com/512/305/305976.png',},
  {id: 2, src: 'https://cdn-icons-png.flaticon.com/512/305/305976.png',},
  {id: 2, src: 'https://cdn-icons-png.flaticon.com/512/305/305976.png',},
  {id: 2, src: 'https://cdn-icons-png.flaticon.com/512/305/305976.png',},
  {id: 2, src: 'https://cdn-icons-png.flaticon.com/512/305/305976.png',},
  {id: 2, src: 'https://cdn-icons-png.flaticon.com/512/305/305976.png',},
  {id: 2, src: 'https://cdn-icons-png.flaticon.com/512/305/305976.png',},

]

const CardItem = ({item}) => (
    <Card className="w-96">
          <CardHeader
              variant="gradient"
              color="green"
              className="mb-5 grid h-10 place-items-center">
            
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
     
    </label>
          </Typography>
          </CardFooter>
         
        </Card>
)

function DeliveryBoy() {
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
      <a href="#">ADMIN SETTINGS</a>

    </Breadcrumbs>
    <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar"size="xl" variant="circle" div style={{float: 'right'}}></Avatar>
<br></br>
    <Typography variant="h2" color="green">
    ADMIN SETTINGS      <br></br>
   <Button> 
   <a href="/AddDeliveryCaptain">
             + ADD SUPER ADMIN 
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
          data.slice(0, 0).map((item) => <CardItem item={item} />)
          
        }
        
          <div className="w-full mb-2">

            <Typography className="!font-bold" color="green">
            ACCOUNT SETTINGS
            </Typography>
            <Typography
              className="mt-1 !font-normal !text-gray-600"
              variant="small" >
                
        <Checkbox label="Allow Customer Login" />
        <Checkbox label="Allow Schedule Tasks" />
        <Checkbox label="Allow Customer to Update Order Details" />
        <Checkbox label="Allow Customer to Manage Users" />
        <Checkbox label="Allow Customer for an International access" />
        <Checkbox label="Allow Customer to Reject Order" />
        </Typography>
          </div>
      </div>

      <b><hr class="separator" /></b>

      <div className="w-full mb-3">
            <Typography className="!font-bold" color="green">
            ADMIN PAGE SETTINGS
            </Typography>
            <Typography
              className="mt-1 !font-normal !text-gray-600"
              variant="small"
            >
        <Checkbox label="Enable Customer " />
        <Checkbox label="Enable Analytics " />
        <Checkbox label="Enable Customer Care" />
        <Checkbox label="Enable Profiles " />
        <Checkbox label="Enable Billing Details " />
        <Checkbox label="Enable Adding Delivery Captain " />
        <Checkbox label="Enable Adding Meal " />
        <Checkbox label="Enable Updating CopyRight" />

        </Typography>
          </div>

          <b><hr class="separator" /></b>
 <div className="w-full mb-3">
            <Typography className="!font-bold" color="green">
            CUSTOMER SETTINGS
            </Typography>
            <Typography
              className="mt-1 !font-normal !text-gray-600"
              variant="small"
            >
        <Checkbox label="Enable 24/7 " />
        <Checkbox label="Enable Cancellation" />
        <Checkbox label="Enable Access to Customer Care Number" />
        <Checkbox label="Enable Payment Online " />
        <Checkbox label="Enable COD " />
        <Checkbox label="Enable Edit Order " />
        <Checkbox label="Enable Rating " />
        <Checkbox label="Enable Add Tip" />
        <Checkbox label="Enable QR Code" />

        </Typography>
          </div>
          <b><hr class="separator" /></b>
 <div className="w-full mb-3">
            <Typography className="!font-bold" color="green">
            RESTAURANT SETTINGS
            </Typography>
            <Typography
              className="mt-1 !font-normal !text-gray-600"
              variant="small"
            >
        <Checkbox label="Enable Add Meal " />
        <Checkbox label="Enable 24/7 " />
        <Checkbox label="Enable Cancellation" />
        <Checkbox label="Enable Access to Restaurant Number" />
        <Checkbox label="Enable Payment Online " />
        <Checkbox label="Enable COD " />
        <Checkbox label="Enable Edit Order " />
        <Checkbox label="Enable Restaurant Rating " />
        <Checkbox label="Enable Add Tip" /><br></br>
        <Checkbox label="Enable Download Invoice" />

        </Typography>
          </div>
          <b><hr class="separator" /></b>
<br></br>
   
<div style={{float: 'right'}}>
          <Button color="green" appearance="primary" > 
           SAVE</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button color="green" appearance="primary" > 

           CANCEL</Button> 
           
            <Typography
          variant="p"
          sx={{ letterSpacing: '1.5px', marginLeft: '4px'  }}>
        </Typography>     
        </div>
    </div>
 );
 
}


export default DeliveryBoy;