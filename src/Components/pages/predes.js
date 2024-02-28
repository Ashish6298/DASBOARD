import React from 'react';
import { Link } from 'react-router-dom';

const predes= () => {
  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
      <h2 style={{ color: "#333", textAlign: "center", marginBottom: "20px" }}>Medical Prescription</h2>
      <p style={{ color: "#666", fontSize: "1.1em", lineHeight: "1.6" }}>
        A medical prescription, often simply called a prescription, is a health-care program implemented by a physician or other qualified health care practitioner in the form of instructions that govern the plan of care for an individual patient.
        Prescriptions may include orders to be performed by a patient, caretaker, nurse, pharmacist, physician, or other therapist. Commonly, the term prescription is used to denote a formula for the compounding of a drug to be dispensed to an individual patient.
        A prescription has several components:
        - Patient information: name, age, gender, etc.
        - Prescriber information: name, contact details, registration number, etc.
        - Date of prescription
        - Medication details: name, dosage, frequency, route of administration, etc.
        - Instructions for use: how to take the medication
        - Refills: if allowed and how many
        - Signature of the prescriber
        Methods of prescribing medications include:
        - Written prescriptions
        - Electronic prescriptions (e-prescriptions)
        - Verbal prescriptions (in emergencies)
        - Fax prescriptions (in some jurisdictions)
        - Printed prescriptions for non-controlled substances (in some jurisdictions)
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

export default predes;
