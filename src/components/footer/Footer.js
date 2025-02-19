import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
       
        <div className="footer-section menu-section">
          <ul>
            <li>Home</li>
            <li>Courses</li>
            <li>Home tutoring</li>
            <li>Hire a developer</li>
          </ul>
        </div>
        
        <div className="footer-section address-section">
          <h3>Address:</h3>
          <p>The Cans Amusement Park, Maitama, Abuja, Nigeria.</p>
          <p>Kemtos ICT, Ado junction.</p>
          <p>Matissa Techcom, Kugbaru road, Ado.</p>
        </div>
        
        <div className="footer-section contact-section">
          <h3>Follow us:</h3>
          <div className="social-icons">
            <span>🔗</span>
            <span>🔗</span>
            <span>🔗</span>
          </div>
          <p>+2348107914902</p>
          <p>techsoftware@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
