import React, { useState } from 'react';
import './App.css';
import { Avatar, Card, CardBody, CardFooter, Typography, Input, Button, Checkbox } from "@material-tailwind/react";

function Addprofile() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    aadhar: '',
    address: '',
    zip: '',
    termsAccepted: false,
    image: ''
  });

  const [savedData, setSavedData] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: URL.createObjectURL(file),
      });
    }
  };



  const handleSubmit = (e) => {
  e.preventDefault();
  if (!formData.termsAccepted) {
    alert("Please accept the Terms and Conditions");
    return;
  }

  // Save to localStorage
  localStorage.setItem("newProfile", JSON.stringify(formData));

  // Redirect to Profiles page
  window.location.href = "/Profile";
};


  const handleCancel = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      aadhar: '',
      address: '',
      zip: '',
      termsAccepted: false,
      image: ''
    });
    setSavedData(null);
  };

  return (
    <div className="flex flex-row gap-5">
      <div className='w-1/2 h-screen overflow-auto p-4'>
        <Card className="w-full max-w-xl mx-auto">
          <form onSubmit={handleSubmit}>
            <CardBody className="flex flex-col gap-4">
              <Avatar src={formData.image || "https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"} alt="avatar" size="xxl" />
              
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Upload Image (JPEG, PNG)
              </label>
              <input
                onChange={handleImageUpload}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                type="file"
              />

              <Input label="First Name *" size="lg" name="firstName" value={formData.firstName} onChange={handleInputChange} />
              <Input label="Last Name *" size="lg" name="lastName" value={formData.lastName} onChange={handleInputChange} />
              <Input label="Email *" size="lg" name="email" value={formData.email} onChange={handleInputChange} />
              <Input label="Phone Number *" size="lg" name="phone" value={formData.phone} onChange={handleInputChange} />
              <Input label="Password *" size="lg" name="password" type="password" value={formData.password} onChange={handleInputChange} />
              <Input label="Aadhar Number *" size="lg" name="aadhar" value={formData.aadhar} onChange={handleInputChange} />
              <Input label="Address *" size="lg" name="address" value={formData.address} onChange={handleInputChange} />
              <Input label="Zip Code *" size="lg" name="zip" value={formData.zip} onChange={handleInputChange} />

              <Checkbox
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleInputChange}
                label={
                  <Typography variant="small" color="gray" className="flex items-center font-normal">
                    I agree to the
                    <a className="font-medium transition-colors hover:text-gray-900"> Terms and Conditions</a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
            </CardBody>

            <CardFooter className="pt-0 space-y-4">
              <Button type="submit" variant="gradient" fullWidth color="green">
                ADD
              </Button>
              <Button type="button" variant="gradient" fullWidth color="red" onClick={handleCancel}>
                Cancel
              </Button>
            </CardFooter>
          </form>

          <Typography variant="small" className="mt-6 flex justify-center">
            <b>NOTE: Add a new Customer profile, from Admin from backend.</b>
          </Typography>
        </Card>

        {/* SHOW SAVED DATA */}
        {savedData && (
          <Card className="mt-10 p-4 bg-gray-50">
            <Typography variant="h5" className="mb-4">Saved Profile Data:</Typography>
            <div className="flex items-center gap-4">
              <Avatar src={savedData.image} size="xl" />
              <div>
                <p><b>Name:</b> {savedData.firstName} {savedData.lastName}</p>
                <p><b>Email:</b> {savedData.email}</p>
                <p><b>Phone:</b> {savedData.phone}</p>
                <p><b>Aadhar:</b> {savedData.aadhar}</p>
                <p><b>Address:</b> {savedData.address}</p>
                <p><b>Zip:</b> {savedData.zip}</p>
              </div>
            </div>
          </Card>
        )}
      </div>

      {/* IMAGE RIGHT SIDE */}
      <img
        style={{ width: '60%', height: '100vh', objectFit: 'cover' }}
        src="https://user-images.githubusercontent.com/74038190/219923823-bf1ce878-c6b8-4faa-be07-93e6b1006521.gif"
        alt="Add meals"
      />
    </div>
  );
}

export default Addprofile;
