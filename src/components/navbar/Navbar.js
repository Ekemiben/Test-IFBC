
import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");

  const handleClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-content">
        {/* Logo Section */}
        <div className="logo-section">Tech Star</div>

        {/* Navigation Links */}
        <div className="nav-links">
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
            {/* <img src="/Sign-in.png" alt="Sign-in" className="profile-image" /> */}
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
