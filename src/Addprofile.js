import './App.css';
import { Avatar } from "@material-tailwind/react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
  Checkbox,
  Select,
  Option,
} from "@material-tailwind/react";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Addprofile() {
  const [patientId, setPatientId] = useState('');
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    aadhar: '',
    address: '',
    zip: '',
    referredBy: '',
    contactPreference: '',
    occupation: '',
    agreed: false,
    image: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const generatePatientId = () => {
      const id = 'P-' + Math.floor(100000 + Math.random() * 900000);
      setPatientId(id);
    };
    generatePatientId();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSelectChange = (name, value) => {
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setForm(prev => ({ ...prev, image: reader.result }));
      reader.readAsDataURL(file);
    }
  };

  const handleAdd = () => {
    setError('');

    if (!form.agreed) {
      setError('You must agree to the Terms and Conditions');
      return;
    }

    if (!form.firstName || !form.lastName || !form.email || !form.phone || !form.password) {
      setError('Please fill in all required fields');
      return;
    }

    // Duplicate phone validation
    const profiles = JSON.parse(localStorage.getItem('allProfiles')) || [];
    const duplicate = profiles.find(profile => profile.phone === form.phone);
    if (duplicate) {
      setError('A profile with this phone number already exists!');
      return;
    }

    const newProfile = { patientId, ...form };
    profiles.push(newProfile);
    localStorage.setItem('allProfiles', JSON.stringify(profiles));
    navigate('/Profile');
  };

  return (
    <div className="flex flex-row gap-5">
      {/* Form Card */}
      <div className='w-1/2 h-screen overflow-y-auto flex items-center justify-center'>
        <Card className="w-full max-w-2xl shadow-lg rounded-2xl p-6">
          <CardBody className="flex flex-col gap-6">
            {/* Avatar + Upload */}
            <div className="flex flex-col items-center gap-3 col-span-2">
              <Avatar
                src={form.image || "https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"}
                alt="avatar"
                size="xxl"
              />
              <label htmlFor="file_input" className="text-sm font-medium text-gray-900">
                Upload Image (JPEG, PNG)
              </label>
              <input
                id="file_input"
                type="file"
                accept="image/png, image/jpeg"
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                onChange={handleFileChange}
              />
            </div>

            {/* Form Fields in 2 Columns */}
            <div className="grid grid-cols-2 gap-6">
              <Input label="Patient ID" size="lg" value={patientId} readOnly className="col-span-2" />
              <Input label="First Name *" size="lg" name="firstName" value={form.firstName} onChange={handleChange} />
              <Input label="Last Name *" size="lg" name="lastName" value={form.lastName} onChange={handleChange} />
              <Input label="Email *" size="lg" name="email" type="email" value={form.email} onChange={handleChange} />
              <Input label="Phone Number *" size="lg" name="phone" value={form.phone} onChange={handleChange} />
              <Input label="Password *" size="lg" name="password" type="password" value={form.password} onChange={handleChange} />
              <Input label="Aadhar Number *" size="lg" name="aadhar" value={form.aadhar} onChange={handleChange} />
              <Input label="Address *" size="lg" name="address" value={form.address} onChange={handleChange} className="col-span-2" />
              <Input label="Zip Code *" size="lg" name="zip" value={form.zip} onChange={handleChange} />
              <Select label="Referred By *" value={form.referredBy} onChange={(value) => handleSelectChange('referredBy', value)}>
                <Option>Friend</Option>
                <Option>Doctor</Option>
                <Option>Online</Option>
                <Option>Other</Option>
              </Select>
              <Select label="Contact Preference *" value={form.contactPreference} onChange={(value) => handleSelectChange('contactPreference', value)}>
                <Option>Email</Option>
                <Option>Phone</Option>
                <Option>WhatsApp</Option>
                <Option>SMS</Option>
              </Select>
              <Input label="Occupation *" size="lg" name="occupation" value={form.occupation} onChange={handleChange} />
              <div className="col-span-2">
                <Checkbox
                  label={
                    <Typography variant="small" color="gray" className="flex items-center font-normal">
                      I agree to the
                      <a className="font-medium transition-colors hover:text-gray-900">&nbsp;Terms and Conditions</a>
                    </Typography>
                  }
                  containerProps={{ className: "-ml-2.5" }}
                  name="agreed"
                  checked={form.agreed}
                  onChange={handleChange}
                />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </div>
            </div>
          </CardBody>

          {/* Buttons */}
          <CardFooter className="pt-4">
            <div className="flex gap-4">
              <Button variant="gradient" color="green" className="flex-1" onClick={handleAdd}>
                ADD
              </Button>
              <Button variant="outlined" color="red" className="flex-1" onClick={() => navigate('/Profile')}>
                Cancel
              </Button>
            </div>
            <Typography variant="small" className="mt-3 text-xs text-gray-600 text-center">
              <b>NOTE:</b> Add a new Customer profile from Admin backend.
            </Typography>
          </CardFooter>
        </Card>
      </div>

      {/* Side Image */}
      <img
        style={{ width: '60%', height: '100vh', objectFit: 'cover' }}
        src="https://user-images.githubusercontent.com/74038190/219923823-bf1ce878-c6b8-4faa-be07-93e6b1006521.gif"
        alt="Add profile"
      />
    </div>
  );
}

export default Addprofile;
