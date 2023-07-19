import React from "react";

export const Services = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{  background: "linear-gradient(to bottom right, #d63384, #6610f2)", borderRadius: "25px", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", margin: "20px", padding: "20px", textAlign: "center", width: "380px", height: "500px" }}>
        <h3 style={{ fontSize: "24px", marginBottom: "10px", color: "white" }}>Basic</h3>
        <p style={{ fontSize: "36px", marginBottom: "20px" }}>$10/month</p>
        <h4 style={{ fontSize: "20px", marginBottom: "10px" }}>Desc des sdasdas asd as d as dsa dasd asda s</h4>

        <ul style={{ listStyle: "none", margin: "0", padding: "0", textAlign: "left" }}>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
        <button style={{ backgroundColor: "#4caf50", border: "none", borderRadius: "5px", color: "#fff", cursor: "pointer", fontSize: "16px", marginTop: "20px", padding: "10px 20px", transition: "background-color 0.3s ease" }}>Select Plan</button>
      </div>
      <div style={{  background: "linear-gradient(to bottom left, #d63384, #6610f2)", borderRadius: "25px", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", margin: "20px", padding: "20px", textAlign: "center", width: "380px", height: "500px" }}>
        <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>Pro</h3>
        <p style={{ fontSize: "36px", marginBottom: "20px" }}>$20/month</p>
        <ul style={{ listStyle: "none", margin: "0", padding: "0", textAlign: "left" }}>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          <li>Feature 4</li>
        </ul>
        <button style={{ backgroundColor: "#4caf50", border: "none", borderRadius: "5px", color: "#fff", cursor: "pointer", fontSize: "16px", marginTop: "20px", padding: "10px 20px", transition: "background-color 0.3s ease" }}>Select Plan</button>
      </div>
      <div style={{  background: "linear-gradient(to bottom right, #d63384, #6610f2)", borderRadius: "25px", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", margin: "20px", padding: "20px", textAlign: "center", width: "380px", height: "500px" }}>
        <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>Premium</h3>
        <p style={{ fontSize: "36px", marginBottom: "20px" }}>$30/month</p>
        <ul style={{ listStyle: "none", margin: "0", padding: "0", textAlign: "left" }}>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          <li>Feature 4</li>
        </ul>
        <button style={{ backgroundColor: "#4caf50", border: "none", borderRadius: "5px", color: "#fff", cursor: "pointer", fontSize: "16px", marginTop: "20px", padding: "10px 20px", transition: "background-color 0.3s ease" }}>Select Plan</button>
      </div>
    </div>
  );
};