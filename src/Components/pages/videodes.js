import React from 'react';
import { Link } from 'react-router-dom';

const videodes= () => {
  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
      <h2 style={{ color: "#333", textAlign: "center", marginBottom: "20px" }}>Medical Prescription</h2>
      <p style={{ color: "#666", fontSize: "1.1em", lineHeight: "1.6" }}>
      vsvsvsv
      </p>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button style={{ backgroundColor: "green", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" }}>
            Back to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default videodes;
