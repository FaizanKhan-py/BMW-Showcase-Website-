import React, { useState } from "react";


const Registration = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    pass: "",
    cp: "",
    gender: "",
    bmw_model: "",
    source: "",
    features: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        features: checked
          ? [...prev.features, value]
          : prev.features.filter((feature) => feature !== value),
      }));
    } else if (type === "radio") {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const isFormComplete = () => {
    const { fname, lname, email, pass, cp, gender, bmw_model, source } = formData;
    return fname && lname && email && pass && cp && gender && bmw_model && source;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormComplete()) {
      alert("Please fill in all required fields before submitting.");
      return;
    }

    if (formData.pass !== formData.cp) {
      alert("Password and Confirm Password do not match.");
      return;
    }

    alert("Registration form has been submitted!");

    setFormData({
      fname: "",
      lname: "",
      email: "",
      pass: "",
      cp: "",
      gender: "",
      bmw_model: "",
      source: "",
      features: [],
    });
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Registration Form</h1>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: "470px",
            width: "100%",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "#ffffff",
          }}
        >
          <label>First Name</label>
          <input name="fname" value={formData.fname} onChange={handleChange} style={{ width: "100%" }} />

          <label>Last Name</label>
          <input name="lname" value={formData.lname} onChange={handleChange} style={{ width: "100%" }} />

          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ width: "100%" }} />

          <label>Password</label>
          <input type="password" name="pass" value={formData.pass} onChange={handleChange} style={{ width: "100%" }} />

          <label>Confirm Password</label>
          <input type="password" name="cp" value={formData.cp} onChange={handleChange} style={{ width: "100%" }} />

          <div style={{ marginBottom: "4px", marginTop: "8px" }}>
            <label>Gender:</label>
            <br />
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
            />
            <label>Male</label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
            />
            <label>Female</label>
          </div>

          <label>Favorite BMW Model</label>
          <select name="bmw_model" value={formData.bmw_model} onChange={handleChange} style={{ width: "100%" }}>
            <option value="">Select a model</option>
            <option value="M3">BMW M3</option>
            <option value="X5">BMW X5</option>
            <option value="M5">BMW M5</option>
            <option value="i8">BMW i8</option>
            <option value="Z4">BMW Z4</option>
          </select>

          <div style={{ marginTop: "8px" }}>
            <label style={{ fontWeight: 500 }}>How did you first hear about BMW?</label>
            {["friends", "advertisements", "social_media"].map((id) => (
              <div key={id} style={{ display: "flex", justifyContent: "space-between", width: "200px" }}>
                <label htmlFor={id}>
                  {id === "social_media" ? "Social Media" : id.charAt(0).toUpperCase() + id.slice(1)}
                </label>
                <input
                  type="radio"
                  id={id}
                  name="source"
                  value={id}
                  checked={formData.source === id}
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>

          <div style={{ marginTop: "10px" }}>
            <label style={{ fontWeight: 500 }}>Select your favorite BMW features:</label>
            {[
              ["luxury", "Luxury Interior"],
              ["performance", "High Performance"],
              ["design", "Sleek Design"],
              ["technology", "Advanced Technology"],
              ["eco", "Eco-Friendly Models"],
            ].map(([id, label]) => (
              <div key={id} style={{ display: "flex", justifyContent: "space-between", width: "300px" }}>
                <label htmlFor={id}>{label}</label>
                <input
                  type="checkbox"
                  id={id}
                  name="features"
                  value={id}
                  checked={formData.features.includes(id)}
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
            <input
              type="submit"
              value="Submit"
              style={{
                flex: 1,
                padding: "8px",
                backgroundColor: "#1e3a8a",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            />
            <input
              type="reset"
              value="Reset"
              onClick={() => {
                setFormData({
                  fname: "",
                  lname: "",
                  email: "",
                  pass: "",
                  cp: "",
                  gender: "",
                  bmw_model: "",
                  source: "",
                  features: [],
                });
              }}
              style={{
                flex: 1,
                padding: "8px",
                backgroundColor: "#1e3a8a",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
