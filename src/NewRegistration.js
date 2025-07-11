import React, { useState, useEffect } from "react";
import {
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import packageJson from '../package.json';

function NewRegistration() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    zipCode: "",
  });

  const [users, setUsers] = useState([]);

  // ✅ Load users from localStorage on mount
  useEffect(() => {
    const storedUsers = localStorage.getItem("registeredUsers");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  // ✅ Save to localStorage whenever users changes
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

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phoneNumber ||
      !password ||
      !confirmPassword ||
      !zipCode
    ) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setUsers((prevUsers) => [...prevUsers, formData]);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      zipCode: "",
    });
  };

  return (
    <>
      <h5 style={{
        textAlign: "center",
        marginTop: "20px",
        fontWeight: "bold",
        fontSize: "1.5rem"
      }}>
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
        <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
          <Input
            label="First Name"
            size="xl"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="mb-6"
          />
          <Input
            label="Last Name"
            size="lg"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="mb-6"
          />
          <Input
            label="Email"
            size="lg"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mb-6"
          />
          <Input
            label="Phone Number"
            size="lg"
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="mb-6"
          />
          <Input
            label="Password"
            size="lg"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="mb-6"
          />
          <Input
            label="Confirm Password"
            size="lg"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="mb-6"
          />
          <Input
            label="Zip Code"
            size="lg"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            required
            className="mb-12"
          />
          <Button
            type="submit"
            variant="gradient"
            color="green"
            fullWidth
            className="py-2 px-4 text-sm"
          >
            Register
          </Button>
        </form>

        <Button
          variant="gradient"
          color="green"
          fullWidth
          onClick={() =>
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              phoneNumber: "",
              password: "",
              confirmPassword: "",
              zipCode: "",
            })
          }
        >
          Cancel
        </Button>

        <div className="mt-6 flex justify-center items-center text-sm">
          <Typography variant="small">
            Already have an account?
          </Typography>
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

        <Typography
          variant="small"
          color="black"
          className="mt-4 text-center"
        >
          Application Build Version: {packageJson.version}
        </Typography>

        {users.length > 0 && (
          <>
            <h5 className="mt-8 text-center">REGISTERED USERS</h5>
            <table
              style={{
                border: "2px solid #4ade80",
                borderCollapse: "collapse",
                fontWeight: "bold",
                width: "100%",
              }}
              cellPadding="10"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th style={{ border: "1px solid #4ade80", padding: "12px 20px" }}>First Name</th>
                  <th style={{ border: "1px solid #4ade80", padding: "12px 20px" }}>Last Name</th>
                  <th style={{ border: "1px solid #4ade80", padding: "12px 20px" }}>Email</th>
                  <th style={{ border: "1px solid #4ade80", padding: "12px 20px" }}>Phone Number</th>
                  <th style={{ border: "1px solid #4ade80", padding: "12px 20px" }}>Zip Code</th>
                  <th style={{ border: "1px solid #4ade80", padding: "12px 20px" }}>Password</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, idx) => (
                  <tr key={idx}>
                    <td style={{ border: "1px solid #4ade80", padding: "8px 20px" }}>{user.firstName}</td>
                    <td style={{ border: "1px solid #4ade80", padding: "8px 20px" }}>{user.lastName}</td>
                    <td style={{ border: "1px solid #4ade80", padding: "8px 20px" }}>{user.email}</td>
                    <td style={{ border: "1px solid #4ade80", padding: "8px 20px" }}>{user.phoneNumber}</td>
                    <td style={{ border: "1px solid #4ade80", padding: "8px 20px" }}>{user.zipCode}</td>
                    <td style={{ border: "1px solid #4ade80", padding: "8px 20px" }}>{user.password}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </>
  );
}

export default NewRegistration;
