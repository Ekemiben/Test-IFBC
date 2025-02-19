import React, { useState } from "react";
import "./application.css";

const Application = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    stack: "",
    duration: "",
    experience: "",
    location: "",
    description: "",
  });
  
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem("registrationData", JSON.stringify(formData));
      setSuccessMessage("Registration successful!");
    }
  };

  return (
    <div className="form-container">
      <h2>Apply Here</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
        {errors.fullName && <span className="error">{errors.fullName}</span>}

        <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
        {errors.phone && <span className="error">{errors.phone}</span>}

        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
        {errors.email && <span className="error">{errors.email}</span>}

        <select name="stack" value={formData.stack} onChange={handleChange}>
          <option value="">Select Stack</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Full Stack">Full Stack</option>
        </select>
        {errors.stack && <span className="error">{errors.stack}</span>}

        <select name="duration" value={formData.duration} onChange={handleChange}>
          <option value="">Select Duration</option>
          <option value="3 months">3 Months</option>
          <option value="6 months">6 Months</option>
          <option value="1 year">1 Year</option>
        </select>
        {errors.duration && <span className="error">{errors.duration}</span>}

        <select name="experience" value={formData.experience} onChange={handleChange}>
          <option value="">Select Experience Level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>
        </select>
        {errors.experience && <span className="error">{errors.experience}</span>}

        <input type="text" name="location" placeholder="Preferred Location" value={formData.location} onChange={handleChange} />
        {errors.location && <span className="error">{errors.location}</span>}

        <textarea name="description" placeholder="Brief Description" value={formData.description} onChange={handleChange}></textarea>
        {errors.description && <span className="error">{errors.description}</span>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Application;