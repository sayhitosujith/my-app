import "./App.css";
import React, { useState, useRef } from "react";
import { Carousel } from "@material-tailwind/react";
import { IoMdFingerPrint } from "react-icons/io";
import logo from "./assets/Toothx_Logo.png";
import { Link, useNavigate } from "react-router-dom";

function Customer_Login() {
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  // Draggable Card
  const cardRef = useRef(null);
  const drag = useRef({
    isDragging: false,
    startX: 0,
    startY: 0,
    dx: 0,
    dy: 0,
  });

  const startDrag = (e) => {
    if (e.target.closest("input, button, a")) return;
    drag.current.isDragging = true;
    drag.current.startX = e.clientX - drag.current.dx;
    drag.current.startY = e.clientY - drag.current.dy;
    document.addEventListener("mousemove", onDrag);
    document.addEventListener("mouseup", stopDrag);
  };

  const onDrag = (e) => {
    if (!drag.current.isDragging || !cardRef.current) return;
    drag.current.dx = e.clientX - drag.current.startX;
    drag.current.dy = e.clientY - drag.current.startY;
    cardRef.current.style.transform = `translate(${drag.current.dx}px, ${drag.current.dy}px)`;
  };

  const stopDrag = () => {
    drag.current.isDragging = false;
    document.removeEventListener("mousemove", onDrag);
    document.removeEventListener("mouseup", stopDrag);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e1b4b 40%, #312e81 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      {/* Blur overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(8px)",
        }}
      />

      {/* Floating Orbs */}
      <div className="orb1" />
      <div className="orb2" />

      <style>{`
        @keyframes floatOrb {
          0%, 100% { transform: translate(0,0); }
          50% { transform: translate(30px,30px); }
        }
        .orb1 {
          position: fixed;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: #7C3AED;
          filter: blur(100px);
          opacity: 0.2;
          top: -100px;
          left: -100px;
          animation: floatOrb 8s infinite ease-in-out;
        }
        .orb2 {
          position: fixed;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          background: #F97316;
          filter: blur(100px);
          opacity: 0.2;
          bottom: -100px;
          right: -100px;
          animation: floatOrb 8s infinite ease-in-out;
        }
        .login-card {
          display: flex;
          width: 900px;
          max-width: 95vw;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 40px 80px rgba(0,0,0,0.6);
          position: relative;
          z-index: 10;
        }
        .left-panel {
          flex: 1;
          background: linear-gradient(160deg,#1e1b4b,#4c1d95);
          padding: 40px;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .right-panel {
          width: 380px;
          background: white;
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .input {
          width: 100%;
          border: 1px solid #ddd;
          border-radius: 10px;
          padding: 12px;
          outline: none;
        }
        .btn-primary {
          width: 100%;
          padding: 12px;
          border-radius: 10px;
          border: none;
          background: linear-gradient(135deg,#7C3AED,#F97316);
          color: white;
          font-weight: bold;
          cursor: pointer;
        }
      `}</style>

      <div ref={cardRef} className="login-card" onMouseDown={startDrag}>
        {/* LEFT SIDE */}
        <div className="left-panel">
          <img src={logo} alt="logo" style={{ width: 140 }} />

          <div style={{ fontSize: 26, fontWeight: 600 }}>
            Fast, secure access
            <br />
            <span style={{ color: "#F97316" }}>to your dental care</span>
          </div>

          <div style={{ opacity: 0.6, fontSize: 12 }}>
            OTP Based Authentication
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="right-panel">
          <h2 style={{ fontSize: 24, fontWeight: 700, color: "#f77e02" }}>
            Welcome to Toothx
          </h2>
          <p style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>
             one-stop solution for all your dental care needs. Please login to continue.
          </p>

          <input
            className="input"
            placeholder="Enter Mobile Number"
            value={mobile}
            maxLength={10}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              if (value.length <= 10) setMobile(value);
            }}
          />

          <button
            className="btn-primary"
            style={{ marginTop: 20 }}
            onClick={() => navigate("/OTP")}
          >
            Get OTP
          </button>

          {/* Fingerprint */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 25,
            }}
          >
            <IoMdFingerPrint style={{ fontSize: 60, cursor: "pointer" }} />
          </div>

          <p style={{ textAlign: "center", marginTop: 10, color: "#f77e02" }}>
            Quick & secure login
          </p>

          {/* <p style={{ textAlign: "center", marginTop: 20 }}>
            Don't have an account?{" "}
            <Link to="/register" style={{ color: "red", fontWeight: "bold" }}>
              Register
            </Link>
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default Customer_Login;
