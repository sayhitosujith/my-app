import React, { useEffect, useState, useMemo } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Avatar,
  Badge,
  Rating,
  Input,
  Breadcrumbs,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Switch,
} from "@material-tailwind/react";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaPowerOff, FaWhatsapp } from "react-icons/fa";
import { HiOutlineRefresh } from "react-icons/hi";

/* ---------------- AI RISK ENGINE ---------------- */
const getPatientRisk = (p) => {
  let score = 0;

  if (p.pregnancyStatus === "Pregnant") score += 3;
  if (p.highRisk) score += 3;
  if (p.diabetes) score += 2;
  if (p.hypertension) score += 2;
  if (p.bloodThinners) score += 2;

  if (score >= 6) return { label: "High Risk", color: "bg-red-500" };
  if (score >= 3) return { label: "Medium Risk", color: "bg-yellow-500" };
  return { label: "Low Risk", color: "bg-green-500" };
};

/* ---------------- CARD ---------------- */
const CardItem = ({ item, onDelete, onEdit }) => {
  const risk = getPatientRisk(item);
  const [rating, setRating] = useState(0);

  return (
    <Card className="p-4 hover:shadow-lg transition">
      <div className="flex flex-col items-center">
        <Avatar
          src={
            item?.image ||
            "https://fellows.ias.ac.in/public/images/stock/avatar.svg"
          }
        />

        <Typography className="font-semibold mt-2">
          {item?.firstName} {item?.lastName}
        </Typography>

        {/* Risk Badge */}
        <span
          className={`text-xs text-white px-2 py-1 rounded mt-1 ${risk.color}`}
        >
          {risk.label}
        </span>
      </div>

      <CardBody>
        <Typography>Email: {item?.email}</Typography>
        <Typography>Phone: {item?.phone}</Typography>

        <Rating value={rating} onChange={(v) => setRating(v)} />
      </CardBody>

      <CardFooter className="flex flex-wrap gap-2 justify-center">
        {/* WhatsApp */}
        <Button
          size="sm"
          color="green"
          onClick={() => {
            const phone = item?.phone?.replace(/\D/g, "");
            if (phone) window.open(`https://wa.me/91${phone}`, "_blank");
          }}
        >
          <FaWhatsapp /> WhatsApp
        </Button>

        <Button size="sm" color="orange" onClick={() => onEdit(item)}>
          Edit
        </Button>

        <Button
          size="sm"
          color="red"
          onClick={() => item?.patientId && onDelete(item.patientId)}
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

/* ---------------- MAIN COMPONENT ---------------- */
export default function Profile() {
  const [profiles, setProfiles] = useState([]);
  const [deleteId, setDeleteId] = useState(null);

  /* LOAD DATA */
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("allProfiles")) || [];
    setProfiles(data);
  }, []);

  /* ---------------- ANALYTICS ---------------- */
  const analytics = useMemo(() => {
    return {
      total: profiles.length,
      highRisk: profiles.filter(
        (p) => getPatientRisk(p).label === "High Risk"
      ).length,
      pregnant: profiles.filter(
        (p) => p.pregnancyStatus === "Pregnant"
      ).length,
      diabetes: profiles.filter((p) => p.diabetes).length,
    };
  }, [profiles]);

  /* DELETE */
  const handleDelete = () => {
    const updated = profiles.filter((p) => p.patientId !== deleteId);
    setProfiles(updated);
    localStorage.setItem("allProfiles", JSON.stringify(updated));
    setDeleteId(null);
  };

  return (
    <div className="p-6">

      {/* BREADCRUMBS */}
      <Breadcrumbs className="mb-4">
        <a href="/Welcome">Welcome</a>
        <a href="#">Profiles</a>
      </Breadcrumbs>

      {/* HEADER */}
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Patient Dashboard</h1>

        <div className="flex items-center gap-3">
          <IoIosNotificationsOutline size={24} />
          <FaPowerOff />
        </div>
      </div>

      {/* ANALYTICS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow text-center">
          <p>Total Patients</p>
          <h2 className="font-bold">{analytics.total}</h2>
        </div>

        <div className="bg-red-100 p-4 rounded text-center">
          <p>High Risk</p>
          <h2 className="font-bold text-red-600">
            {analytics.highRisk}
          </h2>
        </div>

        <div className="bg-pink-100 p-4 rounded text-center">
          <p>Pregnant</p>
          <h2 className="font-bold text-pink-600">
            {analytics.pregnant}
          </h2>
        </div>

        <div className="bg-yellow-100 p-4 rounded text-center">
          <p>Diabetes</p>
          <h2 className="font-bold text-yellow-600">
            {analytics.diabetes}
          </h2>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {profiles.map((p) => (
          <CardItem
            key={p.patientId}
            item={p}
            onDelete={setDeleteId}
            onEdit={(data) => console.log("edit", data)}
          />
        ))}
      </div>

      {/* DELETE MODAL */}
      <Dialog open={deleteId !== null} handler={() => setDeleteId(null)}>
        <DialogHeader>Confirm</DialogHeader>
        <DialogBody>Delete this profile?</DialogBody>
        <DialogFooter>
          <Button onClick={() => setDeleteId(null)}>Cancel</Button>
          <Button color="red" onClick={handleDelete}>
            Delete
          </Button>
        </DialogFooter>
      </Dialog>

      {/* FOOTER */}
      <footer className="fixed bottom-0 left-0 w-full bg-white p-4 flex justify-between">
        <span>© {new Date().getFullYear()} DentalCare CRM</span>

        <button
          onClick={() => window.location.reload()}
          className="bg-orange-600 text-white p-2 rounded"
        >
          <HiOutlineRefresh />
        </button>
      </footer>
    </div>
  );
}