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
import { useNavigate } from 'react-router-dom';  // react-router hook

function Addprofile() {
  const [patientId, setPatientId] = useState('');
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
    dentist: '',
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

  // Handle input changes for form
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle select changes separately
  const handleSelectChange = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Save image file as base64 string (optional)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setForm((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // On form submit (ADD button)
  const handleAdd = () => {
    if (!form.agreed) {
      alert('You must agree to the Terms and Conditions');
      return;
    }
    // Validate required fields (example)
    if (!form.firstName || !form.lastName || !form.email) {
      alert('Please fill in all required fields');
      return;
    }

    const newProfile = {
      patientId,
      ...form,
    };

    // Save to localStorage (append to existing profiles)
    const profiles = JSON.parse(localStorage.getItem('allProfiles')) || [];
    profiles.push(newProfile);
    localStorage.setItem('allProfiles', JSON.stringify(profiles));

    // Redirect to /Profile
    navigate('/Profile');
  };

  return (
    <div className="flex flex-row gap-5">
      <div className='w-1/2 h-screen overflow-y-auto flex items-center justify-center'>
        <Card className="w-98 max-w-lg">
          <CardBody className="flex flex-col gap-4">
            <Avatar
              src={form.image || "https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"}
              alt="avatar"
              size="xxl"
            />

            <label htmlFor="file_input" className="block mb-2 text-sm font-medium text-gray-900">
              Upload Image (JPEG, PNG)
            </label>
            <input
              id="file_input"
              type="file"
              accept="image/png, image/jpeg"
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
              onChange={handleFileChange}
            />

            <Input label="Patient ID" size="lg" value={patientId} readOnly />

            <Input
              label="First Name *"
              size="lg"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
            />
            <Input
              label="Last Name *"
              size="lg"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
            />
            <Input
              label="Email *"
              size="lg"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Input
              label="Phone Number *"
              size="lg"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
            <Input
              label="Password *"
              size="lg"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <Input
              label="Aadhar Number *"
              size="lg"
              name="aadhar"
              value={form.aadhar}
              onChange={handleChange}
              required
            />
            <Input
              label="Address *"
              size="lg"
              name="address"
              value={form.address}
              onChange={handleChange}
              required
            />
            <Input
              label="Zip Code *"
              size="lg"
              name="zip"
              value={form.zip}
              onChange={handleChange}
              required
            />

            <Select
              label="Referred By *"
              value={form.referredBy}
              onChange={(value) => handleSelectChange('referredBy', value)}
              required
            >
              <Option>Friend</Option>
              <Option>Doctor</Option>
              <Option>Online</Option>
              <Option>Other</Option>
            </Select>

            <Select
              label="Contact Preference *"
              value={form.contactPreference}
              onChange={(value) => handleSelectChange('contactPreference', value)}
              required
            >
              <Option>Email</Option>
              <Option>Phone</Option>
              <Option>WhatsApp</Option>
              <Option>SMS</Option>
            </Select>

            <Input
              label="Occupation *"
              size="lg"
              name="occupation"
              value={form.occupation}
              onChange={handleChange}
              required
            />

            <Select
              label="Dentist *"
              value={form.dentist}
              onChange={(value) => handleSelectChange('dentist', value)}
              required
            >
              <Option>Dr. John Doe</Option>
              <Option>Dr. Smith</Option>
              <Option>Dr. Jane Roe</Option>
            </Select>

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
          </CardBody>

          <CardFooter className="pt-0">
            <div className="space-y-4">
              <Button
                variant="gradient"
                fullWidth
                color="green"
                onClick={handleAdd}
              >
                ADD
              </Button>

              <Button
                variant="gradient"
                fullWidth
                color="red"
                onClick={() => navigate('/Profile')}
              >
                Cancel
              </Button>
            </div>
            <Typography variant="p" className="mt-2 ml-1 text-xs">
              <b>NOTE:</b> Add a new Customer profile from Admin backend.
            </Typography>
          </CardFooter>
        </Card>
      </div>

      {/* Side Image */}
      <img
        style={{ width: '60%', height: '100vh', objectFit: 'cover' }}
        src="https://user-images.githubusercontent.com/74038190/219923823-bf1ce878-c6b8-4faa-be07-93e6b1006521.gif"
        alt="Add meals"
      />
    </div>
  );
}

export default Addprofile;
