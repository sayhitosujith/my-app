import './App.css';
import { Avatar } from "@material-tailwind/react";
import {
  Card, CardBody, CardFooter, Typography, Input, Button, Checkbox, Select, Option
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
    sex: '',
    pregnancyStatus: '',  
    aadhar: '',
    address: '',
    zip: '',
    referredBy: '',
    contactPreference: '',
    occupation: '',
    agreed: false,
    image: '',
    xrayReports: [], // Array to hold multiple reports
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

  // Handle multiple x-ray uploads
  const handleXrayUploads = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        setForm(prev => ({
          ...prev,
          xrayReports: [...prev.xrayReports, { name: file.name, type: file.type, data: reader.result }]
        }));
      };
      reader.readAsDataURL(file);
    });
    // Reset file input to allow re-upload same file if needed
    e.target.value = null;
  };

  // Remove one x-ray report by index
  const removeXrayReport = (index) => {
    setForm(prev => {
      const newReports = [...prev.xrayReports];
      newReports.splice(index, 1);
      return { ...prev, xrayReports: newReports };
    });
  };

  const handleAdd = () => {
    setError('');

    if (!form.agreed) {
      setError('You must agree to the Terms and Conditions');
      return;
    }

    if (!form.firstName || !form.lastName || !form.email || !form.phone || !form.sex) {
      setError('Please fill in all required fields');
      return;
    }

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
      <div className='w-1/2 h-screen overflow-y-auto flex items-center justify-center'>
        <Card className="w-full max-w-2xl shadow-lg rounded-2xl p-6">
          <CardBody className="flex flex-col gap-6">
            {/* Avatar Upload */}
            <div className="flex flex-col items-center gap-3 col-span-2">
              <Avatar
                src={form.image || "https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"}
                alt="avatar"
                size="xxl"
              />
              <label htmlFor="file_input" className="text-sm font-medium text-gray-900">
                Upload Profile Image
              </label>
              <input
                id="file_input"
                type="file"
                accept="image/png, image/jpeg"
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                onChange={handleFileChange}
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Input label="Patient ID" size="lg" value={patientId} readOnly className="col-span-2" />
              <Input label="First Name *" size="lg" name="firstName" value={form.firstName} onChange={handleChange} />
              <Input label="Last Name *" size="lg" name="lastName" value={form.lastName} onChange={handleChange} />
              <Input label="Email *" size="lg" name="email" type="email" value={form.email} onChange={handleChange} />
              <Input label="Phone Number *" size="lg" name="phone" value={form.phone} onChange={handleChange} />
             
          <Select
  label="Sex *"
  value={form.sex}
  onChange={(value) => handleSelectChange("sex", value)}
>
  <Option value="Male">Male</Option>
  <Option value="Female">Female</Option>
  <Option value="Other">Other</Option>
</Select>

{form.sex === "Female" && (
  <Select
    label="Pregnancy Status"
    value={form.pregnancyStatus}
    onChange={(value) => handleSelectChange("pregnancyStatus", value)}
  >
        <Option value="Pregnant">Pregnant</Option>
        <Option value="Not Pregnant">Not Pregnant</Option>

  </Select>
)}
<Select
  label="Referred By *"
  value={form.referredBy}
  onChange={(value) => handleSelectChange("referredBy", value)}
>
  <Option value="Friend">Friend</Option>
  <Option value="Doctor">Doctor</Option>
  <Option value="Online">Online</Option>
  <Option value="Other">Other</Option>
</Select>

<Input
  label="Aadhar Number *"
  size="lg"
  name="aadhar"
  value={form.aadhar}
  maxLength={12}
  onChange={(e) =>
    setForm({ ...form, aadhar: e.target.value.replace(/\D/g, "").slice(0, 12) })
  }
/>


              <Input label="Address *" size="lg" name="address" value={form.address} onChange={handleChange} className="col-span-2" />
              <Input label="Zip Code *" size="lg" name="zip" value={form.zip} onChange={handleChange} />
           <Select
  label="Contact Preference *"
  value={form.contactPreference}
  onChange={(value) => handleSelectChange("contactPreference", value)}
>
  <Option value="Email">Email</Option>
  <Option value="Phone">Phone</Option>
  <Option value="WhatsApp">WhatsApp</Option>
  <Option value="SMS">SMS</Option>
</Select>
              <Input label="Occupation *" size="lg" name="occupation" value={form.occupation} onChange={handleChange} />

              {/* Multiple X-ray Uploads */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Upload X-ray Reports (PDF or Images) - Multiple
                </label>
                <input
                  type="file"
                  accept="image/*,application/pdf"
                  multiple
                  onChange={handleXrayUploads}
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                />
              </div>

              {/* Preview uploaded X-rays */}
              <div className="col-span-2 flex flex-wrap gap-4 mt-2 max-h-64 overflow-auto">
                {form.xrayReports.length === 0 && (
                  <Typography variant="small" color="gray">No X-ray reports uploaded</Typography>
                )}
                {form.xrayReports.map((file, idx) => (
                  <div key={idx} className="border rounded p-2 relative w-32 h-32 flex flex-col items-center justify-center bg-white shadow-md">
                    {file.type === "application/pdf" ? (
                      <>
                        <embed
                          src={file.data}
                          type="application/pdf"
                          width="100%"
                          height="100%"
                          className="rounded"
                        />
                        <a
                          href={file.data}
                          target="_blank"
                          rel="noreferrer"
                          className="absolute bottom-1 left-1 text-xs text-orange-600 underline"
                        >
                          View PDF
                        </a>
                      </>
                    ) : (
                      <img
                        src={file.data}
                        alt={file.name}
                        className="max-w-full max-h-full object-contain rounded"
                      />
                    )}
                    <button
                      type="button"
                      onClick={() => removeXrayReport(idx)}
                      className="absolute top-1 right-1 text-red-600 font-bold bg-white rounded-full px-1 hover:text-red-800"
                      aria-label="Remove X-ray report"
                    >
                      ×
                    </button>
                    <Typography variant="small" className="mt-1 text-center break-words text-xs">{file.name}</Typography>
                  </div>
                ))}
              </div>

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

          <CardFooter className="pt-4">
            <div className="flex gap-4">
              <Button variant="gradient" color="orange" className="flex-1" onClick={handleAdd}>
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

      {/* Right side Image */}
      <img
        style={{ width: '60%', height: '100vh', objectFit: 'cover' }}
        src="https://user-images.githubusercontent.com/74038190/219923823-bf1ce878-c6b8-4faa-be07-93e6b1006521.gif"
        alt="Add profile"
      />
    </div>
  );
}

export default Addprofile;
