// PrivacyPolicy.js

import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const linkStyle = {
    fontSize: "14px",
    color: "#333",
    textDecoration: "none",
    marginRight: "20px",
    transition: "color 0.3s ease",
  };

  const activeLinkStyle = {
    color: "#007bff",
  };

  const sectionStyle = {
    color: "#555",
    marginTop: "50px", // Adjust this value to add upper margin
  };

  const listStyle = {
    listStyleType: "disc",
    paddingLeft: "20px",
  };

  const paragraphStyle = {
    lineHeight: "1.5",
    marginBottom: "20px", // Add some space between paragraphs
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "200px auto 0 auto",
        padding: "20px",
      }}
    >
      <Link
        to="/"
        style={{
          ...linkStyle,
          marginRight: "0",
          backgroundColor: "green",
          color: "white",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        Home
      </Link>

      <h2 style={{ color: "#333", marginTop: "50px" }}>Privacy Policy</h2>

      {/* ... Previous sections ... */}

      <section style={sectionStyle}>
        <h3 style={{ color: "#555" }}>Contact Form</h3>
        <p style={paragraphStyle}>
          When you use our contact form to send us a message, we collect the
          following information:
        </p>
        <ul style={listStyle}>
          <li>Name</li>
          <li>Email</li>
          <li>Phone Number</li>
          <li>Message</li>
        </ul>
        <p style={paragraphStyle}>
          We use this information solely for the purpose of responding to your
          inquiry. We do not share this information with third parties without
          your explicit consent.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
