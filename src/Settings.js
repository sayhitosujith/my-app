import './App.css';
import React, { useState } from 'react';


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
  Switch,

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

function Settings() {
  // State to manage switch values
  const [settings, setSettings] = useState({
    allow24x7: false,
    allowCancellation: false,
    allowCustomerCare: false,
    allowPaymentOnline: false,
    allowCOD: false,
    allowEditOrder: false,
    allowRating: false,
    allowAddTip: false,
    enableQRCode: false,
  });

    // Handle switch toggle
    const handleSwitchChange = (key) => {
      setSettings((prev) => ({
        ...prev,
        [key]: !prev[key],
      }));
    };
  
    // Handle save action
    const handleSave = () => {
      console.log("Saved Settings:", settings);
      alert("Settings saved successfully!");
      // Here, you can send the `settings` object to your backend API
    };
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
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001-1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </a>

        <a href="#" className="opacity-60">
          <a href="/Welcome">Welcome</a>
        </a>
        <a href="#">ADMIN SETTINGS</a>
      </Breadcrumbs>

      <br></br>
      <Typography variant="h2" color="green">
        ADMIN SETTINGS <br></br>
        <div style={{ float: 'right' }}>
          <Button>
            <a href="/AddDeliveryCaptain" color="green">
              + ADD SUPER ADMIN
            </a>
          </Button>
          <div className="w-74">
            <Select label="Profile">
              <Option></Option>
              <Option>About</Option>
              <Option>Change Password</Option>
              <button>
                <Option>Logout</Option>
              </button>
            </Select>
          </div>
        </div>
      </Typography>

      

      {/* Customer Settings Section */}
      <b>
  <hr className="separator mb-4" /> {/* Added margin-bottom */}
</b>
<div className="grid grid-cols-4 gap-x-4 gap-y-4">
  <Typography className="col-span-2 !font-bold" color="BLACK">
    SUPER ADMIN SETTINGS
  </Typography>
  <Typography className="!font-normal !text-gray-600" variant="small">
    <Switch label="Allow 24/7" color="green" />
  </Typography>
  <Typography className="!font-normal !text-gray-600" variant="small">
    <Switch label="Allow Cancellation" color="green" />
  </Typography>
  <Typography className="!font-normal !text-gray-600" variant="small">
    <Switch label="Allow Access to Customer Care Number" />
  </Typography>
  <Typography className="!font-normal !text-gray-600" variant="small">
    <Switch label="Allow Payment Online" color="green" />
  </Typography>
  <Typography className="!font-normal !text-gray-600" variant="small">
    <Switch label="Allow COD" color="green" />
  </Typography>
  <Typography className="!font-normal !text-gray-600" variant="small">
    <Switch label="Allow Edit Order" color="green" />
  </Typography>
  <Typography className="!font-normal !text-gray-600" variant="small">
    <Switch label="Allow Rating" color="green" />
  </Typography>
  <Typography className="!font-normal !text-gray-600" variant="small">
    <Switch label="Allow Add Tip" color="green" />
  </Typography>
  <Typography className="!font-normal !text-gray-600" variant="small">
    <Switch label="Enable QR Code" color="green" />
  </Typography>
</div>

      {/* Account Settings Section */}
      <b>
  <hr className="separator mb-4" /> {/* Added margin-bottom */}
</b>
<div className="grid grid-cols-4 gap-x-6 gap-y-4 mt-4"> {/* Added margin-top */}
  <Typography className="col-span-2 !font-bold" color="BLACK">
    CUSTOMER SETTINGS
  </Typography>
  <Typography className="!font-normal !text-gray-600" variant="small">
    <Switch label="Allow Customer Login" color="green" />
  </Typography>
  <Typography className="!font-normal !text-gray-600" variant="small">
    <Switch label="Allow Schedule Tasks" color="green" />
  </Typography>
  <Typography className="!font-normal !text-gray-600" variant="small">
    <Switch label="Allow Customer to Update Order Details" />
  </Typography>
  <Typography className="!font-normal !text-gray-600" variant="small">
    <Switch label="Allow Customer to Manage Users" color="green" />
  </Typography>
  <Typography className="!font-normal !text-gray-600" variant="small">
    <Switch label="Allow Customer for an International access" color="green" />
  </Typography>
  <Typography className="!font-normal !text-gray-600" variant="small">
    <Switch label="Allow Customer to Reject Order" color="green" />
  </Typography>
</div>

      {/* Admin Page Settings Section */}
      <b>
  <hr className="separator mb-4" /> {/* Added margin-bottom */}
</b>
<div className="grid grid-cols-4 gap-x-6 gap-y-4 mt-4"> {/* Added margin-top */}
  <Typography className="col-span-2 !font-bold" color="BLACK">
    ADMIN SETTINGS
  </Typography>
  <Typography className="!font-normal !text-gray-600" variant="small">
    <Switch label="Allow Customer" color="green" />
  </Typography>
  <Typography className="!font-normal !text-gray-600" variant="small">
    <Switch label="Allow Analytics" color="green" />
  </Typography>
  <Typography className="!font-normal !text-gray-600" variant="small">
    <Switch label="Allow Customer Care" />
  </Typography>
  <Typography className="!font-normal !text-gray-600" variant="small">
    <Switch label="Allow Profiles" color="green" />
  </Typography>
  <Typography className="!font-normal !text-gray-600" variant="small">
    <Switch label="Allow Billing Details" color="green" />
  </Typography>
  <Typography className="!font-normal !text-gray-600" variant="small">
    <Switch label="Allow Adding Delivery Captain" color="green" />
  </Typography>
  <Typography className="!font-normal !text-gray-600" variant="small">
    <Switch label="Allow Adding Meal" color="green" />
  </Typography>
  <Typography className="!font-normal !text-gray-600" variant="small">
    <Switch label="Allow Updating CopyRight" color="green" />
  </Typography>
</div>


      {/* Restaurant Settings Section */}
      <b>
  <hr className="separator mb-4" /> {/* Added margin-bottom */}
</b>

<div className="w-full mb-3 mt-4"> {/* Added margin-top */}
  <div className="grid grid-cols-4 gap-x-6 gap-y-4">
    <Typography className="col-span-2 !font-bold" color="BLACK">
      RESTAURANT SETTINGS
    </Typography>
    <Typography className="!font-normal !text-gray-600" variant="small">
      <Switch label="Allow Add Meal" color="green" />
    </Typography>
    <Typography className="!font-normal !text-gray-600" variant="small">
      <Switch label="Enable 24/7" color="green" />
    </Typography>
    <Typography className="!font-normal !text-gray-600" variant="small">
      <Switch label="Allow Cancellation" />
    </Typography>
    <Typography className="!font-normal !text-gray-600" variant="small">
      <Switch label="Allow Access to Restaurant Number" color="green" />
    </Typography>
    <Typography className="!font-normal !text-gray-600" variant="small">
      <Switch label="Allow Payment Online" color="green" />
    </Typography>
    <Typography className="!font-normal !text-gray-600" variant="small">
      <Switch label="Enable COD" color="green" />
    </Typography>
    <Typography className="!font-normal !text-gray-600" variant="small">
      <Switch label="Enable Edit Order" color="green" />
    </Typography>
    <Typography className="!font-normal !text-gray-600" variant="small">
      <Switch label="Allow Restaurant Rating" color="green" />
    </Typography>
    <Typography className="!font-normal !text-gray-600" variant="small">
      <Switch label="Allow Add Tip" color="green" />
    </Typography>
    <Typography className="!font-normal !text-gray-600" variant="small">
      <Switch label="Allow Download Invoice" color="green" />
    </Typography>
  </div>
</div>

      <b>
        <hr className="separator" />
      </b>
      <br></br>

      <div style={{ float: 'right' }}>
        <a href="/Welcome">
          <Button color="green" appearance="primary" onClick={handleSave}>
            SAVE
          </Button>
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="/Settings">
          <Button color="green" appearance="primary">
            CANCEL
          </Button>
        </a>
        <Typography
          variant="p"
          sx={{ letterSpacing: '1.5px', marginLeft: '4px' }}
        ></Typography>
      </div>
    </div>
  );
}

export default Settings;