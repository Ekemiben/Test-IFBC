




import React, { useState } from "react";
import "./registration.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    profession: "",
    company: "",
    location: "",
    bio: "",
    image: ""
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      }
    });
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("");
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      localStorage.setItem("registrationData", JSON.stringify(formData));
      setSuccessMessage("Registration successful!");
      setFormData({ name: "", profession: "", company: "", location: "", bio: "", image: "" });
    }
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <h2 className="form-caption">Registration Form </h2>
      {Object.keys(formData).map((field) => (
        field !== "image" && (
          <div key={field} className="form-group">
            <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className={errors[field] ? "input-error" : ""}
            />
            {errors[field] && <span className="error-message">{errors[field]}</span>}
          </div>
        )
      ))}
      <div className="form-group">
        <label>Upload Image</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {errors.image && <span className="error-message">{errors.image}</span>}
        {formData.image && <img src={formData.image} alt="Preview" className="image-preview" />}
      </div>
      <button type="submit">Register</button>
      {successMessage && <p className="success-message">{successMessage}</p>}
    </form>
  );
};

export default RegistrationForm;
