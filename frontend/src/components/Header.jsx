import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    alert("Logged out successfully");
    navigate("/"); // (home page after logout)
  };

  return (
    <header className="header">
      <div className="nav-container">
        {/* Logo */}
        <h1 className="logo">
          go<b>Journey</b>
        </h1>

        {/* Menu */}
        <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/packageDetails" onClick={() => setMenuOpen(false)}>
              Packages
            </Link>
          </li>
          <li>
            <Link to="/offersPage" onClick={() => setMenuOpen(false)}>
              Offers
            </Link>
          </li>
          <li>
            <Link to="/contactUs" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>

          {/* Auth Section */}
          {!token ? (
            <>
              <li>
                <Link to="/login" onClick={() => setMenuOpen(false)}>
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" onClick={() => setMenuOpen(false)}>
                  Signup
                </Link>
              </li>
            </>
          ) : (
            <li className="profile-wrapper">
              {/* Profile Icon */}
              <div
                className="profile-icon"
                onClick={() => setProfileOpen(!profileOpen)}
              >
                <FaUserCircle size={28} />
              </div>

              {/* Dropdown */}
              {profileOpen && (
                <div className="profile-dropdown">
                  <p className="profile-name">Name: {user?.name}</p>
                  <p className="profile-email">Email: {user?.email}</p>

                  <button className="logout-btn" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}
            </li>
          )}
        </ul>

        {/* Mobile Icon */}
        <div
          className="mobile-menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Header;
