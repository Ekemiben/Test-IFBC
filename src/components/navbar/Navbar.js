

import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (path) => {
    setActiveLink(path);
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-content">
        {/* Logo Section */}
        <div className="logo-section">Tech Star</div>

        {/* Hamburger Icon (Visible only on mobile) */}
        <div className="hamburger-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <ul>
            {[
              { name: "Home", path: "/" },
              { name: "Professionals", path: "/professionals" },
              { name: "Registration", path: "/registration" },
            ].map((item) => (
              <li
                key={item.path}
                onClick={() => handleClick(item.path)}
                className={activeLink === item.path ? "active" : ""}
              >
                <a href={item.path} className={`nav-link ${activeLink === item.path ? "active-link" : ""}`}>
                  <p>{item.name}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* User Profile Section */}
        <div className="user-profile">
          <div className="profile-info">
            <div className="profile-details">
              <span className="profile-name">Name of the person</span>
              <p className="profile-title">Title of the professional</p>
            </div>
          </div>
          <div className="profile-actions"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;