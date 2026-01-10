import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and About */}
        <div className="footer-section">
          <h2>
            <span className="lobo">go</span>
            <b>Journey</b>
          </h2>
          <p>
            Your trusted partner for India travel. Explore family trips, solo
            adventures, and custom tour packages across India with ease.
          </p>

          <div className="footer-social">
            <a href="https://www.facebook.com/" target="_blank">
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/accounts/login/?hl=en"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a href="https://x.com/" target="_blank">
              <FaTwitter />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/packageDetails">Tour Packages</a>
            </li>
            <li>
              <a href="#">Family Tours</a>
            </li>
            <li>
              <a href="#">Group Tours</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            <FaMapMarkerAlt /> New Delhi, India
          </p>
          <p>
            <FaPhone /> +91 98765 43210
          </p>
          <p>
            <FaEnvelope /> support@gojourney.com
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} goJourney. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
