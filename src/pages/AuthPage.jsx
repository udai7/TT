import React from "react";
import { useNavigate } from "react-router-dom";

function AuthPage() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // In a real application, you would handle authentication here
    // For now, let's navigate to the home page after a successful sign-in
    navigate("/home");
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Top green wavy section */}
      <div
        style={{
          backgroundColor: "#16a34a", // Changed to nature-600
          width: "100%",
          height: "25%", // Adjust height as needed
          borderBottomLeftRadius: "50% 20%", // Wavy effect
          borderBottomRightRadius: "50% 20%",
          position: "relative",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        {/* Removed: <p style={{ color: 'white', fontSize: '1.1em' }}>I don't have an account? <span style={{ fontWeight: 'bold' }}>Signup</span></p> */}
      </div>

      {/* Content below the wavy section */}
      <div
        style={{
          position: "relative",
          top: "-80px", // Adjust to overlap with the wavy section
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "90%",
          maxWidth: "400px",
          padding: "20px",
        }}
      >
        {/* Kerala Logo and text */}
        <img
          src="lg.png" // Placeholder for Kerala logo
          alt="Kerala Tourism Logo"
          style={{ width: "150px", marginBottom: "10px" }}
        />
        <p
          style={{ fontSize: "0.9em", color: "#666", marginBottom: "30px" }}
        ></p>

        <h1
          style={{
            fontSize: "1.8em",
            fontWeight: "bold",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          Welcome to Tripura Tourism
        </h1>

        <div style={{ width: "100%", marginBottom: "20px" }}>
          <input
            type="email"
            placeholder="Enter email"
            style={{
              width: "100%",
              padding: "12px 15px",
              border: "1px solid #eee",
              borderRadius: "8px",
              fontSize: "1em",
              boxSizing: "border-box",
              backgroundColor: "#f8f8f8",
              color: "#333",
            }}
          />
        </div>
        <div
          style={{ width: "100%", marginBottom: "10px", position: "relative" }}
        >
          <input
            type="password"
            placeholder="Password"
            style={{
              width: "100%",
              padding: "12px 15px",
              border: "1px solid #eee",
              borderRadius: "8px",
              fontSize: "1em",
              boxSizing: "border-box",
              backgroundColor: "#f8f8f8",
              color: "#333",
            }}
          />
          {/* Eye icon placeholder */}
          <span
            style={{
              position: "absolute",
              right: "15px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#aaa",
            }}
          >
            👁️
          </span>
        </div>
        <p style={{ textAlign: "right", width: "100%", marginBottom: "30px" }}>
          <a
            href="#"
            style={{
              color: "#DC3545",
              textDecoration: "none",
              fontSize: "0.9em",
            }}
          >
            Forgot password ?
          </a>
        </p>
        <button
          onClick={handleSignIn}
          style={{
            width: "100%",
            padding: "15px",
            backgroundColor: "#16a34a", // Changed to nature-600
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "1.1em",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#15803d")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#16a34a")
          }
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default AuthPage;
