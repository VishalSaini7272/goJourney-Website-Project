import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./ConfirmationPage.css";

//  Random ID generate:-
const generateId = (prefix, length = 8) => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = prefix;
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

const ConfirmationPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [bookingId] = useState(() => generateId("BK"));
  const [confirmationNo] = useState(() => generateId("TRG"));

  if (!state) {
    return <h2 style={{ textAlign: "center" }}>No booking data found</h2>;
  }

  return (
    <div className="confirmation-page">
      <div className="confirmation-card">
        {/* ---- SUCCESS ICON---*/}
        <div className="success-icon">✔</div>

        <h2>Booking Confirmed!</h2>
        <p className="sub-text">
          Thank you for choosing goJourney. Your trip has been successfully
          booked.
        </p>

        {/* -----BOOKING DETAILS-----*/}
        <div className="details-box">
          <h2>Booking Details</h2>

          <div className="detail-row">
            <span>Booking ID</span>
            <span>{bookingId}</span>
          </div>

          <div className="detail-row">
            <span>Confirmation Number</span>
            <span>{confirmationNo}</span>
          </div>

          <div className="detail-row">
            <span>Package</span>
            <span>{state.packageName}</span>
          </div>

          <div className="detail-row">
            <span>Travel Date</span>
            <span>{state.date || "N/A"}</span>
          </div>

          <div className="detail-row">
            <span>Guests</span>
            <span>
              {state.adults} Adults, {state.children} Children
            </span>
          </div>

          <div className="detail-row total">
            <span>Total Paid</span>
            <span>₹{state.totalAmount.toFixed(0)}</span>
          </div>
        </div>

        <div className="guest-box">
          <h3>Primary Guest</h3>
          <p>
            <strong>Name:</strong> {state.userDetails?.firstName}{" "}
            {state.userDetails?.lastName}
          </p>
          <p>
            <strong>Email:</strong> {state.userDetails?.email}
          </p>
          <p>
            <strong>Phone:</strong> {state.userDetails?.phoneNumber}
          </p>
        </div>

        <div className="next-box">
          <h4>What’s Next?</h4>
          <ul>
            <li>
              You’ll receive a confirmation email shortly with your e-tickets
            </li>
            <li>Our travel coordinator will contact you within 24 hours</li>
            <li>Check your email for detailed itinerary and packing list</li>
            <li>Ensure your passport is valid for at least 6 months</li>
          </ul>
        </div>

        {/* -----BUTTONS----*/}
        <div className="btns">
          <button className="outline">Download Confirmation</button>
          <button className="primary" onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>

        <p className="footer-text">
          Questions about your booking? Contact us at support@gojourney.com
        </p>
      </div>
    </div>
  );
};

export default ConfirmationPage;
