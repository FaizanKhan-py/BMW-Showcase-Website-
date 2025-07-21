import React, { useState } from "react";
import videoform from '../video/v2.mp4';

const Contact = () => {
  // State for each input field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); 

    // Check if all fields are filled
    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    // If validation passed, display success message
    alert("Thank you! Your message has been submitted.");

    // Clear form fields
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div>
      <br />
      <h2>Contact Us form</h2>

      <div className="form-container" style={{ position: "relative" }}>
        <video
          autoPlay
          loop
          muted
          className="bg-video"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src={videoform} type="video/mp4" />
        </video>

        <form
          onSubmit={handleSubmit}
          className="form-content"
          style={{
            padding: "20px",
            maxWidth: "500px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            zIndex: 1,
            position: "relative",
          }}
        >
          <label htmlFor="name" style={{ color: "azure" }}>
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          />

          <label htmlFor="email" style={{ color: "azure" }}>
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          />

          <label htmlFor="subject" style={{ color: "azure" }}>
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          />

          <label htmlFor="textarea" style={{ color: "azure" }}>
            Message
          </label>
          <textarea
            id="textarea"
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          ></textarea>

          <input
            type="submit"
            value="Submit"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)", cursor: "pointer" }}
          />
        </form>
      </div>

      <p style={{ marginTop: "20px" }}>
        We'll respond to your message within 24–48 hours. For urgent inquiries, please call our
        support line.
      </p>
    </div>
  );
};

export default Contact;
