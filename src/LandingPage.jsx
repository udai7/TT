import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/auth");
    }, 3000); // Navigate to /auth after 3 seconds
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      style={{
        backgroundColor: "white",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Placeholder for Tripura Tourism Logo */}
      <img
        src="/path/to/your/tripura_tourism_logo.png"
        alt="Tripura Tourism Logo"
        style={{ maxWidth: "80%", maxHeight: "80%" }}
      />
      <div style={{ display: "flex", marginTop: "50px" }}>
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "#8BC34A",
            margin: "0 5px",
            animation: "bounce 1.4s infinite ease-in-out both",
            animationDelay: "-0.32s",
          }}
        ></div>
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "#8BC34A",
            margin: "0 5px",
            animation: "bounce 1.4s infinite ease-in-out both",
            animationDelay: "-0.16s",
          }}
        ></div>
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "#8BC34A",
            margin: "0 5px",
            animation: "bounce 1.4s infinite ease-in-out both",
          }}
        ></div>
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "#8BC34A",
            margin: "0 5px",
            animation: "bounce 1.4s infinite ease-in-out both",
            animationDelay: "0.16s",
          }}
        ></div>
      </div>

      {/* Add keyframes for the bounce animation directly in a style tag or a global CSS file if Tailwind isn't preferred */}
      <style>
        {`
          @keyframes bounce {
            0%, 80%, 100% { transform: scale(0); }
            40% { transform: scale(1.0); }
          }
        `}
      </style>
    </div>
  );
}

export default LandingPage;
