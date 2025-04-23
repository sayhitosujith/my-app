import './App.css';
import { Badge } from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { PencilIcon } from '@heroicons/react/24/outline';
import Popup from 'reactjs-popup';
import { Spinner } from "@material-tailwind/react";


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
  Checkbox,
  classes,
  Tooltip,
  IconButton

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
   
<br></br>
    <Typography variant="h2" color="green">
    ADMIN SETTINGS      <br></br>
   
    <div style={{float: 'right'}}>
    <Button> 
       <a href="/AddDeliveryCaptain" color="green">
             + ADD SUPER ADMIN 
               </a>    
      </Button>
      <div className="w-74">
      <Select label="Profile">
        <Option>    
        </Option>
      
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
        
          <b><hr class="separator" /></b>

            <Typography className="!font-bold" color="green">
            ACCOUNT SETTINGS
            </Typography>
            <Typography
              className="mt-1 !font-normal !text-gray-600"
              variant="small" >
                 <td className={classes}>
        <Checkbox label="Allow Customer Login" color="green"/><br></br>
        <Checkbox label="Allow Schedule Tasks"color="green" /><br></br>
        <Checkbox label="Allow Customer to Update Order Details"color="green" /><br></br>
        <Checkbox label="Allow Customer to Manage Users"color="green" /><br></br>
        <Checkbox label="Allow Customer for an International access" color="green"/><br></br>
        <Checkbox label="Allow Customer to Reject Order" color="green"/><br></br>
                       </td>

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
        <Checkbox label="Allow Customer " color="green"/><br></br>
        <Checkbox label="Allow Analytics " color="green"/><br></br>
        <Checkbox label="Allow Customer Care"color="green" /><br></br>
        <Checkbox label="Allow Profiles "color="green" /><br></br>
        <Checkbox label="Allow Billing Details " color="green"/><br></br>
        <Checkbox label="Allow Adding Delivery Captain "color="green" /><br></br>
        <Checkbox label="Allow Adding Meal " color="green"/><br></br>
        <Checkbox label="Allow Updating CopyRight" color="green"/><br></br>

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
        <Checkbox label="Allow 24/7 " color="green"/><br></br>
        <Checkbox label="Allow Cancellation" color="green"/><br></br>
        <Checkbox label="Allow Access to Customer Care Number" /><br></br>
        <Checkbox label="Allow Payment Online "color="green" /><br></br>
        <Checkbox label="Allow COD "color="green" /><br></br>
        <Checkbox label="Allow Edit Order "color="green" /><br></br>
        <Checkbox label="Allow Rating "color="green" /><br></br>
        <Checkbox label="Allow Add Tip"color="green" /><br></br>
        <Checkbox label="Enable QR Code"color="green" /><br></br>

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
        <Checkbox label="Allow Add Meal "color="green" /><br></br>
        <Checkbox label="Enable 24/7 "color="green" /><br></br>
        <Checkbox label="Allow Cancellation"color="green" /><br></br>
        <Checkbox label="Allow Access to Restaurant Number" color="green"/><br></br>
        <Checkbox label="Allow Payment Online " color="green"/><br></br>
        <Checkbox label="Enable COD "color="green" /><br></br>
        <Checkbox label="Enable Edit Order "color="green" /><br></br>
        <Checkbox label="Allow Restaurant Rating " color="green"/><br></br>
        <Checkbox label="Allow Add Tip"color="green" /><br></br>
        <Checkbox label="Allow Download Invoice"color="green" /><br></br>

        </Typography>
          </div>
          <b><hr class="separator" /></b>
<br></br>
   
<div style={{float: 'right'}}>
     
           <a href="/Welcome">
           <Button color="green" appearance="primary"> SAVE </Button> 
               </a>   
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <a href="/Settings">
           <Button color="green" appearance="primary"> CANCEL </Button> 
               </a>   
           
            <Typography
          variant="p"
          sx={{ letterSpacing: '1.5px', marginLeft: '4px'  }}>
        </Typography>     
        </div>
    </div>
 );
 
}

<Spinner className="h-4 w-4" />

export default DeliveryBoy;