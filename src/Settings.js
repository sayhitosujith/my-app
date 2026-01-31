import './App.css';
import React, { useState } from 'react';
import {
  Typography,
  Button,
  Select,
  Option,
  Breadcrumbs,
  Switch,
} from "@material-tailwind/react";
import logo from "./assets/DutyDentist.png";


const users = [
  { id: 1, name: 'Sujith', email: 'sayhitosujith@gmail.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' },
];

function Settings() {
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

  const handleSwitchChange = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = () => {
    console.log("Saved Settings:", settings);
    alert("Settings saved successfully!");
  };

  return (
   <div className="p-10">
  <img
    src={logo}
    alt="App Logo"
    className="absolute top-4 left-4 w-20 md:w-28 h-auto z-20"
  />

  {/* Breadcrumbs */}
  <div className="mt-20">
    <Breadcrumbs>
      <a href="/" className="opacity-60">Home</a>
      <a href="/Welcome" className="opacity-60">Welcome</a>
      <span>ADMIN SETTINGS</span>
    </Breadcrumbs>
  </div>


      {/* Header */}
<div className="flex justify-between items-center mt-6 mb-6">
  <Typography variant="h5" color="green" className="font-bold">
    ADMIN SETTINGS
  </Typography>
  <div className="flex gap-5 items-center">
   <Button color="green" ripple={true} className="whitespace-nowrap">
  <a href="/SuperAdmin" className="text-white no-underline text-lg">
    SUPER ADMIN
  </a>
</Button>

    <Select label="Profile" className="min-w-[150px]">
      <Option>About</Option>
      <Option>Change Password</Option>
      <Option>Logout</Option>
    </Select>
  </div>
</div>

      <b><hr class="separator" /></b>


      {/* SUPER ADMIN SETTINGS */}
      <Typography className="font-bold mb-2 text-orange-800">SUPER ADMIN SETTINGS</Typography>
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { key: 'allow24x7', label: 'Allow 24/7' },
          { key: 'allowCancellation', label: 'Allow Cancellation' },
          { key: 'allowCustomerCare', label: 'Allow Access to Customer Care Number' },
          { key: 'allowPaymentOnline', label: 'Allow Payment Online' },
          { key: 'allowCOD', label: 'Allow COD' },
          { key: 'allowEditOrder', label: 'Allow Edit Order' },
          { key: 'allowRating', label: 'Allow Rating' },
          { key: 'allowAddTip', label: 'Allow Add Tip' },
          { key: 'enableQRCode', label: 'Enable QR Code' },
        ].map(({ key, label }) => (
          <Switch
            key={key}
            label={label}
            color="green"
            checked={settings[key]}
            onChange={() => handleSwitchChange(key)}
            labelProps={{ className: "font-bold" }}
          />
        ))}
      </div>

      <b><hr class="separator" /></b>


      {/* CUSTOMER SETTINGS */}
      <Typography className="font-bold mb-2 text-orange-800">CUSTOMER SETTINGS</Typography>
      <div className="grid grid-cols-4 gap-4 mb-6">
        <Switch label="Allow Customer Login" color="green" labelProps={{ className: "font-bold" }} />
        <Switch label="Allow Schedule Tasks" color="green" labelProps={{ className: "font-bold" }} />
        <Switch label="Allow Customer to Update Order Details" color="green" labelProps={{ className: "font-bold" }} />
        <Switch label="Allow Customer to Manage Users" color="green" labelProps={{ className: "font-bold" }} />
        <Switch label="Allow Customer for International Access" color="green" labelProps={{ className: "font-bold" }} />
        <Switch label="Allow Customer to Reject Order" color="green" labelProps={{ className: "font-bold" }} />
      </div>

      <b><hr class="separator" /></b>


      {/* ADMIN PAGE SETTINGS */}
      <Typography className="font-bold mb-2 text-orange-800">ADMIN PAGE SETTINGS</Typography>
      <div className="grid grid-cols-4 gap-4 mb-6">
        <Switch label="Allow Customer" color="green" labelProps={{ className: "font-bold" }} />
        <Switch label="Allow Analytics" color="green" labelProps={{ className: "font-bold" }} />
        <Switch label="Allow Customer Care" color="green" labelProps={{ className: "font-bold" }} />
        <Switch label="Allow Profiles" color="green" labelProps={{ className: "font-bold" }} />
        <Switch label="Allow Billing Details" color="green" labelProps={{ className: "font-bold" }} />
        <Switch label="Allow Adding Delivery Captain" color="green" labelProps={{ className: "font-bold" }} />
        <Switch label="Allow Adding Meal" color="green" labelProps={{ className: "font-bold" }} />
        <Switch label="Allow Updating Copyright" color="green" labelProps={{ className: "font-bold" }} />
      </div>

      <b><hr class="separator" /></b>

      {/* RESTAURANT SETTINGS */}
      <Typography className="font-bold mb-2 text-orange-800">RESTAURANT SETTINGS</Typography>
      <div className="grid grid-cols-4 gap-4 mb-6">
        <Switch label="Allow Add Meal" color="green" labelProps={{ className: "font-bold" }} />
        <Switch label="Enable 24/7" color="green" labelProps={{ className: "font-bold" }} />
        <Switch label="Allow Cancellation" color="green" labelProps={{ className: "font-bold" }} />
        <Switch label="Allow Access to Restaurant Number" color="green" labelProps={{ className: "font-bold" }} />
        <Switch label="Allow Payment Online" color="green" labelProps={{ className: "font-bold" }} />
        <Switch label="Enable COD" color="green" labelProps={{ className: "font-bold" }} />
        <Switch label="Enable Edit Order" color="green" labelProps={{ className: "font-bold" }} />
        <Switch label="Allow Restaurant Rating" color="green" labelProps={{ className: "font-bold" }} />
        <Switch label="Allow Add Tip" color="green" labelProps={{ className: "font-bold" }} />
        <Switch label="Allow Download Invoice" color="green" labelProps={{ className: "font-bold" }} />
      </div>

      <b><hr class="separator" /></b>   

      {/* Action Buttons */}
      <div className="flex justify-end gap-4">
        <Button color="green" onClick={handleSave}>SAVE</Button>
        <a href="/Settings">
          <Button color="green">CANCEL</Button>
        </a>
      </div>
    </div>
  );
}

export default Settings;
