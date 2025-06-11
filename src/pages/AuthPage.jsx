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
        margin: 0,
        padding: 0,
      }}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        `}
      </style>
      {/* Top green wavy section */}
      <div
        style={{
          backgroundColor: "#16a34a",
          width: "100%",
          height: "20%",
          borderBottomLeftRadius: "50% 20%",
          borderBottomRightRadius: "50% 20%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <p style={{ color: "white", fontSize: "1em" }}>
          Don't have an account?{" "}
          <span style={{ fontWeight: "bold" }}>SignUp now</span>
        </p>
      </div>

      {/* Content below the wavy section */}
      <div
        style={{
          position: "relative",
          top: "-40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "90%",
          maxWidth: "360px",
          padding: "20px",
          transform: "scale(0.9)",
          transformOrigin: "top center",
        }}
      >
        <img
          src="lg.png"
          alt="Kerala Tourism Logo"
          style={{ width: "135px", marginBottom: "30px", marginTop: "40px" }}
        />
        <h1
          style={{
            fontSize: "1.8em",
            fontWeight: "700",
            marginBottom: "10px",
            textAlign: "center",
            color: "#333",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Welcome to Tripura Tourism
        </h1>
        <p
          style={{
            fontSize: "1.1em",
            color: "#666",
            textAlign: "center",
            fontStyle: "italic",
            marginBottom: "30px",
          }}
        >
          Explore the secrets of Tripura
        </p>

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
        <button
          onClick={handleSignIn}
          style={{
            width: "100%",
            padding: "15px",
            backgroundColor: "#16a34a",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "1.1em",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            marginTop: "20px",
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
