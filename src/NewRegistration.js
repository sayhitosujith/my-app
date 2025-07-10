import React, { useState } from "react";
import {
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";

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
<div
  style={{
    maxWidth: 900,
    margin: "auto",
    padding: 20,
    backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyWafbIV28MtvNQPgj_81hd9fBEUKdTUopMw&s')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: 8,
    color: "#fff", // to make text readable
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  }}
>      <h5>NEW REGISTRATION</h5>
      <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
  <Input
    label="First Name *"
    size="xl"
    name="firstName"
    value={formData.firstName}
    onChange={handleChange}
    required
    className="mb-6"
  />
  <Input
    label="Last Name *"
    size="lg"
    name="lastName"
    value={formData.lastName}
    onChange={handleChange}
    required
    className="mb-6"
  />
  <Input
    label="Email *"
    size="lg"
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    required
    className="mb-6"
  />
  <Input
    label="Phone Number *"
    size="lg"
    type="tel"
    name="phoneNumber"
    value={formData.phoneNumber}
    onChange={handleChange}
    required
    className="mb-6"
  />
  <Input
    label="Password *"
    size="lg"
    type="password"
    name="password"
    value={formData.password}
    onChange={handleChange}
    required
    className="mb-6"
  />
  <Input
    label="Confirm Password *"
    size="lg"
    type="password"
    name="confirmPassword"
    value={formData.confirmPassword}
    onChange={handleChange}
    required
    className="mb-6"
  />
  <Input
    label="Zip Code *"
    size="lg"
    name="zipCode"
    value={formData.zipCode}
    onChange={handleChange}
    required
    // Larger margin after last input
    className="mb-12"
  />

  <Button type="submit" variant="gradient" color="green" fullWidth>
    Register
  </Button>
</form>


      <Button
        variant="gradient"
        color="red"
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

      <Typography variant="small" className="mt-6 flex justify-center">
        Already have an account?
        <Typography
          as="a"
          href="/my-app#signup"
          variant="small"
          color="blue-gray"
          className="underline text-red-700 ml-1 font-bold underline hover:text-green-600 transition-colors duration-300"
        >
          LOGIN
        </Typography>
      </Typography>

      {users.length > 0 && (
        <>
          <h3 className="mt-8">Registered Users</h3>
          <table
            style={{
              border: "2px solid #4ade80",
              borderCollapse: "collapse",
              width: "100%",
            }}
            cellPadding="10"
            cellSpacing="0"
          >
            <thead>
              <tr>
                <th
                  style={{
                    border: "1px solid #4ade80",
                    padding: "12px 20px",
                  }}
                >
                  First Name
                </th>
                <th
                  style={{
                    border: "1px solid #4ade80",
                    padding: "12px 20px",
                  }}
                >
                  Last Name
                </th>
                <th
                  style={{
                    border: "1px solid #4ade80",
                    padding: "12px 20px",
                  }}
                >
                  Email
                </th>
                <th
                  style={{
                    border: "1px solid #4ade80",
                    padding: "12px 20px",
                  }}
                >
                  Phone Number
                </th>
                <th
                  style={{
                    border: "1px solid #4ade80",
                    padding: "12px 20px",
                  }}
                >
                  Zip Code
                </th>
                <th
                  style={{
                    border: "1px solid #4ade80",
                    padding: "12px 20px",
                  }}
                >
                  Password
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={idx}>
                  <td style={{ border: "1px solid #4ade80", padding: "8px 20px" }}>
                    {user.firstName}
                  </td>
                  <td style={{ border: "1px solid #4ade80", padding: "8px 20px" }}>
                    {user.lastName}
                  </td>
                  <td style={{ border: "1px solid #4ade80", padding: "8px 20px" }}>
                    {user.email}
                  </td>
                  <td style={{ border: "1px solid #4ade80", padding: "8px 20px" }}>
                    {user.phoneNumber}
                  </td>
                  <td style={{ border: "1px solid #4ade80", padding: "8px 20px" }}>
                    {user.zipCode}
                  </td>
                  <td style={{ border: "1px solid #4ade80", padding: "8px 20px" }}>
                    {user.password}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default NewRegistration;
