import { useEffect, useState } from "react";
import { Card, Button, Typography, Dialog, DialogBody, DialogFooter, Select, Option, Input } from "@material-tailwind/react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// ================= ROLE-BASED ROUTING =================
const PrivateRoute = ({ children, allowedRoles }) => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!user) return <Navigate to="/login" />;
  if (!allowedRoles.includes(user.role)) return <Navigate to="/unauthorized" />;
  return children;
};

// ================= LEAVE DASHBOARD =================
const LeaveManagementDashboard = () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const [holidays, setHolidays] = useState([]);
  const [leaves, setLeaves] = useState([]);
  const [balances, setBalances] = useState({ CL: 0, SL: 0, EL: 0, RH: 0 });
  const [openHistory, setOpenHistory] = useState(false);
  const [calendarDate, setCalendarDate] = useState(new Date());

  const isManagerOrAdmin = user?.role === "manager" || user?.role === "admin";

  useEffect(() => {
    axios.get(`/api/holidays`).then((res) => setHolidays(res.data));
    axios.get(`/api/leaves/${user.id}`).then((res) => setLeaves(res.data));
    axios.get(`/api/leaves/balance/${user.id}`).then((res) => setBalances(res.data));
  }, [user.id]);

  const applyLeave = async (holiday) => {
    if (holiday.type !== "RH") return;

    const alreadyApplied = leaves.some((l) => l.date === holiday.date && l.type === "RH");
    if (alreadyApplied) return alert("You have already applied leave for this holiday.");

    if (balances.RH <= 0) return alert("RH quota exceeded.");

    const res = await axios.post(`/api/leaves/apply`, {
      userId: user.id,
      date: holiday.date,
      type: "RH",
      reason: `Restricted Holiday: ${holiday.name}`,
    });

    setLeaves([...leaves, res.data]);
    setBalances((prev) => ({ ...prev, RH: prev.RH - 1 }));
  };

  const cancelLeave = async (leaveId) => {
    await axios.post(`/api/leaves/cancel/${leaveId}`);
    setLeaves(leaves.filter((l) => l.id !== leaveId));
  };

  const approveLeave = async (leaveId, status) => {
    await axios.post(`/api/leaves/approve/${leaveId}`, { status });
    setLeaves(
      leaves.map((l) => (l.id === leaveId ? { ...l, status } : l))
    );
  };

  return (
    <div className="p-6 bg-orange-50 min-h-screen">
      <Typography variant="h4" className="mb-4">Leave Management Dashboard</Typography>

      {/* Leave Balances */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {Object.entries(balances).map(([type, count]) => (
          <Card key={type} className="p-4 text-center">
            <Typography variant="h6">{type}</Typography>
            <Typography variant="h4" color="orange">{count}</Typography>
          </Card>
        ))}
      </div>

      {/* Upcoming Holidays (RH only apply) */}
      <Card className="p-4 mb-6">
        <Typography variant="h5" className="mb-2">Upcoming Holidays (RH Only)</Typography>
        {holidays
          .filter((h) => new Date(h.date) >= new Date())
          .map((holiday) => {
            const isPast = new Date(holiday.date) < new Date();
            const alreadyApplied = leaves.some((l) => l.date === holiday.date && l.type === "RH");

            return (
              <div key={holiday.id} className="flex justify-between items-center border-b py-2">
                <div>
                  <Typography className="font-semibold">{holiday.date} • {holiday.name}</Typography>
                  <Typography className="text-sm text-gray-600">{holiday.day}</Typography>
                </div>

                {holiday.type === "RH" && (
                  <Button
                    size="sm"
                    disabled={isPast || alreadyApplied || balances.RH <= 0}
                    onClick={() => applyLeave(holiday)}
                    color="orange"
                  >
                    {alreadyApplied ? "Applied" : isPast ? "Expired" : "Apply Leave"}
                  </Button>
                )}
              </div>
            );
          })}
      </Card>

      {/* Calendar View */}
      <Card className="p-4 mb-6">
        <Typography variant="h5" className="mb-2">Leave Calendar</Typography>
        <Calendar
          onChange={setCalendarDate}
          value={calendarDate}
          tileContent={({ date }) => {
            const leave = leaves.find((l) => new Date(l.date).toDateString() === date.toDateString());
            if (!leave) return null;
            return (
              <span
                className={`block w-2 h-2 rounded-full mx-auto mt-1 ${leave.status === "approved" ? "bg-orange-500" : leave.status === "rejected" ? "bg-red-500" : "bg-yellow-500"}`}
              />
            );
          }}
        />
      </Card>

      {/* Leave History */}
      <Button onClick={() => setOpenHistory(true)} color="orange">View Leave History</Button>

      <Dialog open={openHistory} handler={() => setOpenHistory(false)} size="lg">
        <DialogBody>
          <Typography variant="h5" className="mb-4">Leave History</Typography>

          {leaves.map((leave) => (
            <Card key={leave.id} className="p-3 mb-3 flex justify-between items-center">
              <div>
                <Typography className="font-semibold">{leave.date} • {leave.type}</Typography>
                <Typography className="text-sm">Status: {leave.status}</Typography>
              </div>

              <div className="flex gap-2">
                {leave.status === "pending" && (
                  <Button size="sm" color="red" onClick={() => cancelLeave(leave.id)}>Cancel</Button>
                )}

                {isManagerOrAdmin && leave.status === "pending" && (
                  <>
                    <Button size="sm" color="orange" onClick={() => approveLeave(leave.id, "approved")}>Approve</Button>
                    <Button size="sm" color="red" onClick={() => approveLeave(leave.id, "rejected")}>Reject</Button>
                  </>
                )}
              </div>
            </Card>
          ))}
        </DialogBody>
        <DialogFooter>
          <Button color="orange" onClick={() => setOpenHistory(false)}>Close</Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

// ================= ADD USER FORM (ROLE DROPDOWN, NO DENTIST) =================
const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("employee");

  const handleSubmit = async () => {
    if (!name || !email || !role) return alert("Please fill all fields");

    await axios.post(`/api/users`, { name, email, role });
    alert("User added successfully");
    setName("");
    setEmail("");
    setRole("employee");
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md max-w-md mx-auto">
      <Typography variant="h5" className="mb-4">Add User</Typography>

      <div className="space-y-4">
        <Input label="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <Select label="Role" value={role} onChange={(val) => setRole(val)}>
          <Option value="employee">Employee</Option>
          <Option value="manager">Manager</Option>
          <Option value="admin">Admin</Option>
        </Select>

        <Button color="orange" fullWidth onClick={handleSubmit}>Add User</Button>
      </div>
    </div>
  );
};

// ================= ROLE-BASED APP ROUTES =================
const LeaveApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<div className="p-10">Login Screen</div>} />
        <Route path="/unauthorized" element={<div className="p-10 text-red-600">Unauthorized Access</div>} />

        <Route
          path="/leaves"
          element={
            <PrivateRoute allowedRoles={["employee", "manager", "admin"]}>
              <LeaveManagementDashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/manager"
          element={
            <PrivateRoute allowedRoles={["manager", "admin"]}>
              <LeaveManagementDashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <PrivateRoute allowedRoles={["admin"]}>
              <AddUser />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Navigate to="/leaves" />} />
      </Routes>
    </Router>
  );
};

export default LeaveApp;