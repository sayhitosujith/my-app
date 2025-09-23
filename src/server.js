// server.js
const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 4000;
const FILE = "./appointments.json";

app.use(express.json());

// Read appointments
app.get("/appointments", (req, res) => {
  fs.readFile(FILE, "utf8", (err, data) => {
    if (err) return res.status(500).send("Failed to load appointments");
    res.json(JSON.parse(data || "[]"));
  });
});

// Save appointment
app.post("/appointments", (req, res) => {
  const newApt = req.body;
  fs.readFile(FILE, "utf8", (err, data) => {
    const appointments = JSON.parse(data || "[]");
    appointments.push(newApt);
    fs.writeFile(FILE, JSON.stringify(appointments, null, 2), () => {
      res.status(201).send("Saved");
    });
  });
});
