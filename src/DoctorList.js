import { useEffect, useState, useRef } from "react";
import {
  Card,
  Typography,
  Button,
  Input,
  Dialog,
  DialogBody,
  DialogFooter,
  Avatar,
  Breadcrumbs,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import {
  Bars3Icon,
  Squares2X2Icon,
  PencilIcon,
  TrashIcon,
  EyeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/solid";

function DoctorList() {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editDoctor, setEditDoctor] = useState({});
  const [viewDoctor, setViewDoctor] = useState(null);
  const [gridView, setGridView] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const doctorsPerPage = 8;
  const cardRefs = useRef([]);

  const [confirmAction, setConfirmAction] = useState({
    open: false,
    type: "",
    index: null,
    doctor: null,
  });

  useEffect(() => {
    const storedDoctors = JSON.parse(localStorage.getItem("doctors")) || [];
    setDoctors(storedDoctors);
  }, []);

  const saveDoctors = (updated) => {
    setDoctors(updated);
    localStorage.setItem("doctors", JSON.stringify(updated));
  };

  const handleDeleteConfirm = (index) => {
    setConfirmAction({ open: true, type: "delete", index });
  };

  const handleEditConfirm = (index) => {
    setConfirmAction({ open: true, type: "edit", index });
  };

  const handleViewConfirm = (doctor) => {
    setConfirmAction({ open: true, type: "view", doctor });
  };

  const handleCloneConfirm = (index) => {
    setConfirmAction({ open: true, type: "clone", index });
  };

  const executeAction = () => {
    const { type, index, doctor } = confirmAction;

    if (type === "delete") {
      const updated = doctors.filter((_, i) => i !== index);
      saveDoctors(updated);
    } else if (type === "edit") {
      setEditIndex(index);
      setEditDoctor(doctors[index]);
    } else if (type === "view") {
      setViewDoctor(doctor);
    } else if (type === "clone") {
      const cloned = { ...doctors[index] };
      const updated = [...doctors, cloned];
      saveDoctors(updated);
    }

    setConfirmAction({ open: false, type: "", index: null, doctor: null });
  };

  const handleChange = (e) => {
    setEditDoctor({ ...editDoctor, [e.target.name]: e.target.value });
  };

  const handleEditImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setEditDoctor({ ...editDoctor, image: reader.result });
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleSave = () => {
    const updated = [...doctors];
    updated[editIndex] = editDoctor;
    saveDoctors(updated);
    setEditIndex(null);
    setEditDoctor({});
  };

  // Pagination
  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = doctors.slice(indexOfFirstDoctor, indexOfLastDoctor);
  const totalPages = Math.ceil(doctors.length / doctorsPerPage);

  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div className="p-6">
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
          href="/AddDoctor"
          color="blue-gray"
          className="cursor-pointer hover:underline"
          onClick={() => navigate("/AddDoctor")}
        >
          Add Doctor
        </Typography>
        <Typography color="blue-gray">Doctor List</Typography>
      </Breadcrumbs>

      {/* Back Button */}
      <Button color="blue" className="mb-4" onClick={() => navigate("/AddDoctor")}>
        + ADD DOCTOR
      </Button>

      <div className="flex items-center justify-between mb-4">
        <Typography variant="h4">Doctors List</Typography>
        <div className="flex items-center gap-2">
          <button
            className={`p-2 rounded ${!gridView ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            onClick={() => setGridView(false)}
            title="List View"
          >
            <Bars3Icon className="w-5 h-5" />
          </button>
          <button
            className={`p-2 rounded ${gridView ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            onClick={() => setGridView(true)}
            title="Grid View"
          >
            <Squares2X2Icon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {doctors.length === 0 ? (
        <Typography>No doctors added yet.</Typography>
      ) : (
        <>
          <div
            className={
              gridView
                ? "grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                : "flex flex-col gap-4"
            }
          >
            {currentDoctors.map((doc, index) => (
              <Card
                key={indexOfFirstDoctor + index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`p-4 flex ${
                  gridView ? "flex-col items-center text-center" : "flex-row items-center gap-4"
                }`}
              >
                {doc.image && (
                  <Avatar
                    src={doc.image}
                    size={gridView ? "lg" : "xl"}
                    className="border-2 border-blue-500 mb-2 cursor-pointer transform transition-transform duration-200 hover:scale-105 hover:shadow-lg"
                    onClick={() => handleViewConfirm(doc)}
                  />
                )}
                <div className="flex-1 w-full">
                  {editIndex === indexOfFirstDoctor + index ? (
                    <div className="flex flex-col gap-2">
                      <Input name="firstName" value={editDoctor.firstName} onChange={handleChange} label="First Name" />
                      <Input name="lastName" value={editDoctor.lastName} onChange={handleChange} label="Last Name" />
                      <Input name="email" value={editDoctor.email} onChange={handleChange} label="Email" />
                      <Input name="phone" value={editDoctor.phone} onChange={handleChange} label="Phone" />
                      <Input name="specialization" value={editDoctor.specialization} onChange={handleChange} label="Specialization" />
                      <Input name="experience" value={editDoctor.experience} onChange={handleChange} label="Experience" />
                      <Input name="clinic" value={editDoctor.clinic} onChange={handleChange} label="Clinic" />
                      <Input name="license" value={editDoctor.license} onChange={handleChange} label="License" />

                      <div>
                        <label className="block mb-1">Update Image:</label>
                        <input type="file" accept="image/*" onChange={handleEditImage} />
                      </div>

                      {editDoctor.image && (
                        <Avatar src={editDoctor.image} size="lg" className="border-2 border-blue-500 mt-2" />
                      )}

                      <div className="flex gap-2 mt-2 justify-center">
                        <Button color="green" onClick={handleSave}>
                          <PencilIcon className="w-5 h-5 mr-1" /> Save
                        </Button>
                        <Button color="red" onClick={() => setEditIndex(null)}>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className={`${gridView ? "space-y-1" : ""}`}>
                      <Typography variant="h6">{doc.firstName} {doc.lastName}</Typography>
                      <Typography className="text-xs sm:text-sm">Email: {doc.email}</Typography>
                      <Typography className="text-xs sm:text-sm">Phone: {doc.phone}</Typography>
                      <Typography className="text-xs sm:text-sm">Specialization: {doc.specialization}</Typography>
                      <Typography className="text-xs sm:text-sm">Experience: {doc.experience} yrs</Typography>
                      <Typography className="text-xs sm:text-sm">Clinic: {doc.clinic}</Typography>
                      <Typography className="text-xs sm:text-sm">License: {doc.license}</Typography>

                      {/* CRUD + Clone Buttons */}
                      <div className="flex gap-2 mt-2 justify-center flex-wrap">
                        <button
                          className="p-2 bg-blue-500 rounded text-white hover:bg-blue-600"
                          onClick={() => handleEditConfirm(indexOfFirstDoctor + index)}
                          title="Edit"
                        >
                          <PencilIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                        <button
                          className="p-2 bg-red-500 rounded text-white hover:bg-red-600"
                          onClick={() => handleDeleteConfirm(indexOfFirstDoctor + index)}
                          title="Delete"
                        >
                          <TrashIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                        <button
                          className="p-2 bg-teal-500 rounded text-white hover:bg-teal-600"
                          onClick={() => handleViewConfirm(doc)}
                          title="View"
                        >
                          <EyeIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                        <button
                          className="p-2 bg-yellow-500 rounded text-white hover:bg-yellow-600"
                          onClick={() => handleCloneConfirm(indexOfFirstDoctor + index)}
                          title="Clone"
                        >
                          <DocumentDuplicateIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-4">
            <Button color="blue" disabled={currentPage === 1} onClick={handlePrevPage}>
              Previous
            </Button>
            <Typography className="flex items-center px-2">
              Page {currentPage} of {totalPages}
            </Typography>
            <Button color="blue" disabled={currentPage === totalPages} onClick={handleNextPage}>
              Next
            </Button>
          </div>
        </>
      )}

      {/* Confirmation Dialog */}
      <Dialog
        open={confirmAction.open}
        handler={() => setConfirmAction({ ...confirmAction, open: false })}
        size="sm"
      >
        <DialogBody className="text-center">
          <Typography variant="h6" className="mb-4">
            {confirmAction.type === "delete" && "Are you sure you want to delete this doctor?"}
            {confirmAction.type === "edit" && "Do you want to edit this doctor?"}
            {confirmAction.type === "view" && "Do you want to view this doctor?"}
            {confirmAction.type === "clone" && "Do you want to clone this doctor?"}
          </Typography>
        </DialogBody>
        <DialogFooter className="flex justify-center gap-4">
          <Button color="red" onClick={() => setConfirmAction({ ...confirmAction, open: false })}>
            Cancel
          </Button>
          <Button color="green" onClick={executeAction}>
            Yes
          </Button>
        </DialogFooter>
      </Dialog>

      {/* View Doctor Modal */}
      {viewDoctor && (
        <Dialog open={Boolean(viewDoctor)} handler={() => setViewDoctor(null)} size="sm">
          <DialogBody className="flex flex-col gap-2 items-center">
            {viewDoctor.image && <Avatar src={viewDoctor.image} size="xl" className="border-2 border-blue-500 mb-2" />}
            <Typography variant="h6">{viewDoctor.firstName} {viewDoctor.lastName}</Typography>
            <Typography>Email: {viewDoctor.email}</Typography>
            <Typography>Phone: {viewDoctor.phone}</Typography>
            <Typography>Specialization: {viewDoctor.specialization}</Typography>
            <Typography>Experience: {viewDoctor.experience} yrs</Typography>
            <Typography>Clinic: {viewDoctor.clinic}</Typography>
            <Typography>License: {viewDoctor.license}</Typography>
            <Typography>Address: {viewDoctor.address}</Typography>
          </DialogBody>
          <DialogFooter>
            <Button variant="gradient" fullWidth onClick={() => setViewDoctor(null)}>
              Close
            </Button>
          </DialogFooter>
        </Dialog>
      )}
    </div>
  );
}

export default DoctorList;
