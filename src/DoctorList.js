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

  // ✅ Multi-select state
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

  // ✅ Multi-select functions
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
  const handleNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

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
            <input type="checkbox" checked={selectAll} onChange={toggleSelectAll} />
            Select All
          </label>
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
                  className={`p-4 flex relative border ${
                    selectedDoctors.includes(realIndex) ? "border-red-500 bg-red-50" : ""
                  } ${gridView ? "flex-col items-center text-center" : "flex-row items-center gap-4"}`}
                >
                  {/* Checkbox for multi-select */}
                  <input
                    type="checkbox"
                    className="absolute top-2 left-2"
                    checked={selectedDoctors.includes(realIndex)}
                    onChange={() => toggleDoctorSelect(realIndex)}
                  />

                  {doc.image && (
                    <Avatar
                      src={doc.image}
                      size={gridView ? "lg" : "xl"}
                      className="border-2 border-blue-500 mb-2 cursor-pointer transform transition-transform duration-200 hover:scale-105 hover:shadow-lg"
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
                        <a href={`tel:${doc.phone}`} className="text-blue-600 hover:underline">
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
                </Card>
              );
            })}
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
    </div>
  );
}

export default DoctorList;
