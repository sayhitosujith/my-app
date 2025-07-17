import React, { useState, useEffect } from "react";
import {
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import packageJson from '../package.json';

function NewRegistration() {
  const emptyForm = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    zipCode: "",
  };

  const [formData, setFormData] = useState(emptyForm);
  const [users, setUsers] = useState([]);

  // Load users from localStorage on mount
  useEffect(() => {
    const storedUsers = localStorage.getItem("registeredUsers");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  // Save users to localStorage on change
  useEffect(() => {
    localStorage.setItem("registeredUsers", JSON.stringify(users));
  }, [users]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => setFormData(emptyForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      confirmPassword,
      zipCode,
    } = formData;

    // Basic validations
    if (!firstName || !lastName || !email || !phoneNumber || !password || !confirmPassword || !zipCode) {
      alert("Please fill all fields");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Invalid email format");
      return;
    }

    if (!/^\d{10}$/.test(phoneNumber)) {
      alert("Phone number must be 10 digits");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (users.some((user) => user.email === email)) {
      alert("Email already registered");
      return;
    }

    setUsers((prev) => [...prev, formData]);
    resetForm();
  };

  return (
    <>
      <h5 className="text-center mt-6 font-bold text-2xl">
        NEW USER REGISTRATION
      </h5>

      <div
        style={{
          maxWidth: 2000,
          margin: "auto",
          padding: 20,
          backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThtf6x74y1JWPIE_yX24FYk1RgTPvVJqbwDw&s')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: 8,
          color: "#f73e05",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        }}
      >
        <form onSubmit={handleSubmit} className="mb-6">
          <Input label="First Name" size="xl" name="firstName" value={formData.firstName} onChange={handleChange} required className="mb-6" />
          <Input label="Last Name" size="lg" name="lastName" value={formData.lastName} onChange={handleChange} required className="mb-6" />
          <Input label="Email" size="lg" type="email" name="email" value={formData.email} onChange={handleChange} required className="mb-6" />
          <Input label="Phone Number" size="lg" type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required className="mb-6" />
          <Input label="Password" size="lg" type="password" name="password" value={formData.password} onChange={handleChange} required className="mb-6" />
          <Input label="Confirm Password" size="lg" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required className="mb-6" />
          <Input label="Zip Code" size="lg" name="zipCode" value={formData.zipCode} onChange={handleChange} required className="mb-12" />

          <Button type="submit" variant="gradient" color="green" fullWidth className="py-2 px-4 text-sm">
            Register
          </Button>
        </form>

        <Button
          variant="outlined"
          color="red"
          fullWidth
          onClick={() => {
            if (window.confirm("Clear the form?")) {
              resetForm();
            }
          }}
        >
          Cancel
        </Button>

        <div className="mt-6 flex justify-center items-center text-sm">
          <Typography variant="small">Already have an account?</Typography>
          <Typography
            as="a"
            href="/my-app#signup"
            variant="small"
            color="blue-gray"
            className="underline text-black-700 ml-1 font-bold hover:text-black-600 transition-colors duration-300"
          >
            LOGIN
          </Typography>
        </div>

        <Typography variant="small" color="black" className="mt-4 text-center">
          Application Build Version: {packageJson.version}
        </Typography>

        {users.length > 0 && (
          <>
            <h5 className="mt-10 text-center font-bold">REGISTERED USERS</h5>
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full border border-green-400 text-sm text-black bg-white rounded-lg">
                <thead className="bg-green-100">
                  <tr>
                    <th className="border border-green-300 px-4 py-2">First Name</th>
                    <th className="border border-green-300 px-4 py-2">Last Name</th>
                    <th className="border border-green-300 px-4 py-2">Email</th>
                    <th className="border border-green-300 px-4 py-2">Phone</th>
                    <th className="border border-green-300 px-4 py-2">Zip Code</th>
                    <th className="border border-green-300 px-4 py-2">Password</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, idx) => (
                    <tr key={idx} className="text-center">
                      <td className="border border-green-300 px-4 py-2">{user.firstName}</td>
                      <td className="border border-green-300 px-4 py-2">{user.lastName}</td>
                      <td className="border border-green-300 px-4 py-2">{user.email}</td>
                      <td className="border border-green-300 px-4 py-2">{user.phoneNumber}</td>
                      <td className="border border-green-300 px-4 py-2">{user.zipCode}</td>
                      <td className="border border-green-300 px-4 py-2">••••••</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default NewRegistration;
