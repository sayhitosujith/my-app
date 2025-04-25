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
  {id: 3, src: 'https://cdn-icons-png.flaticon.com/512/305/305976.png',},
  {id: 4, src: 'https://cdn-icons-png.flaticon.com/512/305/305976.png',},
  {id: 5, src: 'https://cdn-icons-png.flaticon.com/512/305/305976.png',},
  {id: 6, src: 'https://cdn-icons-png.flaticon.com/512/305/305976.png',},
  {id: 7, src: 'https://cdn-icons-png.flaticon.com/512/305/305976.png',},
  {id: 8, src: 'https://cdn-icons-png.flaticon.com/512/305/305976.png',},
];

const users = [
  { id: 1, name: 'Sujith', email: 'sayhitosujith@gmail.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' },
];

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

      <Typography variant="h2" color="green" className="mb-4">
        ADMIN SETTINGS
        <div style={{ float: 'right' }}>
          <Button color="green">
            <a href="/AddDeliveryCaptain">+ ADD SUPER ADMIN</a>
          </Button>
          <div className="w-74">
            <Select label="Profile">
              <Option>About</Option>
              <Option>Change Password</Option>
              <Option>Logout</Option>
            </Select>
          </div>
        </div>
      </Typography>

      {/* Customer Settings Section */}
      <div className="grid grid-cols-4 gap-x-4 gap-y-4">
        <Typography className="col-span-2 !font-bold" color="BLACK">
          SUPER ADMIN SETTINGS
        </Typography>
      {/* Customer Settings Section */}
      <b>
</b>
{/* Customer Settings Section */}
<b>
</b>
<div className="grid grid-cols-4 gap-x-4 gap-y-4">
 
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



        {/* Add other switches here... */}
      </div>


      {/* Users Table */}
      <div className="w-full mb-3 mt-4">
        <Typography variant="h6">Registered Users</Typography>
        <table
          border="1"
          width="100%"
          style={{
            borderCollapse: 'collapse', // Ensures that borders between cells collapse into a single border
          }}
        >
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '8px' }}>ID</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td style={{ border: '1px solid black', padding: '8px' }}>{user.id}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{user.name}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ float: 'right' }}>
        
        <Button color="green" onClick={handleSave}>SAVE</Button>
        <a href="/Settings">
          <Button color="green">CANCEL</Button>
        </a>
      </div>
    </div>
  );
}

export default Settings;
