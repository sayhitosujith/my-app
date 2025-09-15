import { useState } from "react";
import { Button, Input, Typography, Avatar, Breadcrumbs } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { Bars3Icon, Squares2X2Icon } from "@heroicons/react/24/solid";

function AddDoctor() {
  const navigate = useNavigate();
  const [newDoctor, setNewDoctor] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialization: "",
    experience: "",
    clinic: "",
    license: "",
    address: "",
    image: "",
  });
  const [previewGrid, setPreviewGrid] = useState(true); // true = large avatar, false = small card

  const handleChange = (e) => {
    setNewDoctor({ ...newDoctor, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewDoctor({ ...newDoctor, image: reader.result });
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleSave = () => {
    const storedDoctors = JSON.parse(localStorage.getItem("doctors")) || [];
    storedDoctors.push(newDoctor);
    localStorage.setItem("doctors", JSON.stringify(storedDoctors));
    navigate("/DoctorList");
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      {/* Breadcrumbs */}
      <Breadcrumbs className="mb-4">
        <Typography
          as="a"
          href="/"
          color="blue-gray"
          className="cursor-pointer hover:underline"
          onClick={() => navigate("/")}
        >
          Home
        </Typography>
        <Typography
          as="a"
          href="/DoctorList"
          color="blue-gray"
          className="cursor-pointer hover:underline"
          onClick={() => navigate("/DoctorList")}
        >
          Doctors
        </Typography>
        <Typography color="blue-gray">Add Doctor</Typography>
      </Breadcrumbs>

      {/* Back Button */}
      <Button color="blue" className="mb-4" onClick={() => navigate("/DoctorList")}>
        &larr; Back
      </Button>

      <Typography variant="h4" className="mb-4 text-center">
        Add Doctor
      </Typography>

      <div className="flex flex-col gap-4">
        <Input name="firstName" label="First Name" value={newDoctor.firstName} onChange={handleChange} />
        <Input name="lastName" label="Last Name" value={newDoctor.lastName} onChange={handleChange} />
        <Input name="email" label="Email" value={newDoctor.email} onChange={handleChange} />
        <Input name="phone" label="Phone" value={newDoctor.phone} onChange={handleChange} />
        <Input name="specialization" label="Specialization" value={newDoctor.specialization} onChange={handleChange} />
        <Input name="experience" label="Experience (years)" value={newDoctor.experience} onChange={handleChange} />
        <Input name="clinic" label="Clinic" value={newDoctor.clinic} onChange={handleChange} />
        <Input name="license" label="License" value={newDoctor.license} onChange={handleChange} />
        <Input name="address" label="Address" value={newDoctor.address} onChange={handleChange} />

        {/* Image Upload */}
        <div>
          <label className="block mb-1 font-medium">Upload Image:</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </div>

        {/* Preview Layout Toggle */}
        {newDoctor.image && (
          <div className="flex items-center justify-center gap-2 my-2">
            <button
              className={`p-2 rounded ${!previewGrid ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setPreviewGrid(false)}
              title="List Preview"
            >
              <Bars3Icon className="w-5 h-5" />
            </button>
            <button
              className={`p-2 rounded ${previewGrid ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setPreviewGrid(true)}
              title="Grid Preview"
            >
              <Squares2X2Icon className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Avatar Preview */}
        {newDoctor.image && (
          previewGrid ? (
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg mx-auto">
              <img
                src={newDoctor.image}
                alt={`${newDoctor.firstName} ${newDoctor.lastName}`}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="flex items-center gap-2 border p-2 rounded shadow-sm">
              <Avatar src={newDoctor.image} size="sm" className="border-2 border-blue-500" />
              <div>
                <Typography className="text-sm font-medium">{newDoctor.firstName} {newDoctor.lastName}</Typography>
                <Typography className="text-xs">{newDoctor.specialization}</Typography>
              </div>
            </div>
          )
        )}

        <Button color="green" className="mt-4" onClick={handleSave}>
          Save Doctor
        </Button>
      </div>
    </div>
  );
}

export default AddDoctor;
