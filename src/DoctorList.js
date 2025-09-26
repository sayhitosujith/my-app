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
  const doctorsPerPage = 32; // 4 columns × 8 rows
  const cardRefs = useRef([]);

  const [confirmAction, setConfirmAction] = useState({
    open: false,
    type: "",
    index: null,
    doctor: null,
  });

  const [selectedDoctors, setSelectedDoctors] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

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

  // Multi-select
  const toggleDoctorSelect = (index) => {
    if (selectedDoctors.includes(index)) {
      setSelectedDoctors(selectedDoctors.filter((i) => i !== index));
    } else {
      setSelectedDoctors([...selectedDoctors, index]);
    }
  };

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedDoctors([]);
    } else {
      const allIndices = currentDoctors.map((_, i) => indexOfFirstDoctor + i);
      setSelectedDoctors(allIndices);
    }
    setSelectAll(!selectAll);
  };

  const deleteSelectedDoctors = () => {
    const updated = doctors.filter((_, i) => !selectedDoctors.includes(i));
    saveDoctors(updated);
    setSelectedDoctors([]);
    setSelectAll(false);
  };

  // Pagination
  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = doctors.slice(indexOfFirstDoctor, indexOfLastDoctor);
  const totalPages = Math.ceil(doctors.length / doctorsPerPage);

  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div className="p-6">
      {/* Breadcrumbs */}
      <Breadcrumbs className="mb-4">
        <Typography
          as="a"
          href="/Welcome"
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

      {/* Add Doctor + Multi-delete */}
      <div className="flex justify-between items-center mb-4">
        <Button color="blue" onClick={() => navigate("/AddDoctor")}>
          + ADD DOCTOR
        </Button>

        {selectedDoctors.length > 0 && (
          <Button color="red" onClick={deleteSelectedDoctors}>
            🗑 Delete Selected ({selectedDoctors.length})
          </Button>
        )}
      </div>

      <div className="flex items-center justify-between mb-4">
        <Typography variant="h4">Doctors List</Typography>
        <div className="flex items-center gap-2">
          <label className="flex items-center gap-1 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={selectAll}
              onChange={toggleSelectAll}
            />
            Select All
          </label>
          <button
            className={`p-2 rounded ${
              !gridView ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setGridView(false)}
            title="List View"
          >
            <Bars3Icon className="w-5 h-5" />
          </button>
          <button
            className={`p-2 rounded ${
              gridView ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
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
                ? "grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4"
                : "flex flex-col gap-4"
            }
          >
            {currentDoctors.map((doc, index) => {
              const realIndex = indexOfFirstDoctor + index;
              return (
                <Card
                  key={realIndex}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={`p-4 flex relative border h-64 transition-transform duration-200 ${
                    selectedDoctors.includes(realIndex)
                      ? "border-red-500 bg-red-100"
                      : "bg-gray-50 hover:bg-blue-50 hover:scale-105 shadow-md"
                  } ${
                    gridView
                      ? "flex-col items-center text-center justify-between"
                      : "flex-row items-center gap-4"
                  }`}
                >
                  {/* Checkbox */}
                  <input
                    type="checkbox"
                    className="absolute top-2 left-2"
                    checked={selectedDoctors.includes(realIndex)}
                    onChange={() => toggleDoctorSelect(realIndex)}
                  />

                  {/* Squared Image */}
                  {doc.image && (
                    <img
                      src={doc.image}
                      alt="Doctor"
                      className={`${
                        gridView ? "w-24 h-24" : "w-28 h-28"
                      } object-cover border-2 border-blue-500 mb-2 cursor-pointer rounded-lg transition-transform duration-200 hover:scale-105 hover:shadow-lg`}
                      onClick={() => handleViewConfirm(doc)}
                    />
                  )}

                  <div className="flex-1 w-full flex flex-col items-start text-left space-y-1">
                    <Typography variant="h6" className="font-semibold">
                      {doc.firstName} {doc.lastName}
                    </Typography>
                    {doc.phone && (
                      <Typography className="text-xs sm:text-sm">
                        <span className="font-medium">Phone: </span>
                        <a
                          href={`tel:${doc.phone}`}
                          className="text-blue-600 hover:underline"
                        >
                          {doc.phone}
                        </a>
                      </Typography>
                    )}
                    {doc.email && (
                      <Typography className="text-xs sm:text-sm">
                        <span className="font-medium">Email: </span>
                        {doc.email}
                      </Typography>
                    )}
                    {doc.specialization && (
                      <Typography className="text-xs sm:text-sm">
                        <span className="font-medium">Specialization: </span>
                        {doc.specialization}
                      </Typography>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute bottom-2 right-2 flex gap-2">
                    <button
                      onClick={() => handleEditConfirm(realIndex)}
                      className="p-2 rounded bg-yellow-500 text-white"
                    >
                      <PencilIcon className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteConfirm(realIndex)}
                      className="p-2 rounded bg-red-500 text-white"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleViewConfirm(doc)}
                      className="p-2 rounded bg-blue-500 text-white"
                    >
                      <EyeIcon className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleCloneConfirm(realIndex)}
                      className="p-2 rounded bg-green-500 text-white"
                    >
                      <DocumentDuplicateIcon className="w-4 h-4" />
                    </button>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-4">
            <Button
              color="blue"
              disabled={currentPage === 1}
              onClick={handlePrevPage}
            >
              Previous
            </Button>
            <Typography className="flex items-center px-2">
              Page {currentPage} of {totalPages}
            </Typography>
            <Button
              color="blue"
              disabled={currentPage === totalPages}
              onClick={handleNextPage}
            >
              Next
            </Button>
          </div>
        </>
      )}

      {/* Confirm Dialog */}
      <Dialog
        open={confirmAction.open}
        handler={() => setConfirmAction({ open: false })}
      >
        <DialogBody>
          Are you sure you want to{" "}
          <span className="font-bold text-red-500">{confirmAction.type}</span> this doctor?
        </DialogBody>
        <DialogFooter>
          <Button variant="text" onClick={() => setConfirmAction({ open: false })}>
            Cancel
          </Button>
          <Button color="blue" onClick={executeAction}>
            Yes
          </Button>
        </DialogFooter>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={editIndex !== null} handler={() => setEditIndex(null)}>
        <DialogBody>
          <div className="flex flex-col gap-2">
            <Input
              label="First Name"
              name="firstName"
              value={editDoctor.firstName || ""}
              onChange={handleChange}
            />
            <Input
              label="Last Name"
              name="lastName"
              value={editDoctor.lastName || ""}
              onChange={handleChange}
            />
            <Input
              label="Phone"
              name="phone"
              value={editDoctor.phone || ""}
              onChange={handleChange}
            />
            <Input
              label="Email"
              name="email"
              value={editDoctor.email || ""}
              onChange={handleChange}
            />
            <Input
              label="Specialization"
              name="specialization"
              value={editDoctor.specialization || ""}
              onChange={handleChange}
            />
            <input type="file" onChange={handleEditImage} />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button variant="text" onClick={() => setEditIndex(null)}>
            Cancel
          </Button>
          <Button color="blue" onClick={handleSave}>
            Save
          </Button>
        </DialogFooter>
      </Dialog>

      {/* View Dialog */}
      <Dialog open={!!viewDoctor} handler={() => setViewDoctor(null)}>
        <DialogBody>
          {viewDoctor && (
            <div className="flex flex-col items-center gap-3">
              {viewDoctor.image && (
                <Avatar
                  src={viewDoctor.image}
                  size="xl"
                  className="border-2 border-blue-500"
                />
              )}
              <Typography variant="h5">
                {viewDoctor.firstName} {viewDoctor.lastName}
              </Typography>
              <Typography>Email: {viewDoctor.email}</Typography>
              <Typography>Phone: {viewDoctor.phone}</Typography>
              <Typography>Specialization: {viewDoctor.specialization}</Typography>
            </div>
          )}
        </DialogBody>
        <DialogFooter>
          <Button color="blue" onClick={() => setViewDoctor(null)}>
            Close
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}

export default DoctorList;
