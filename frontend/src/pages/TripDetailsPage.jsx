import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./TripDetailsPage.css";

const TripDetailsPage = () => {
  const { tripId } = useParams();
  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [showGuests, setShowGuests] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const [selectedPackage, setSelectedPackage] = useState({
    name: "Standard",
    price: 18999, // per adult price
  });

  /* ------PRICE LOGIC----*/

  const basePrice =
    adults * selectedPackage.price + children * selectedPackage.price * 0.5;

  const gst = basePrice * 0.18;
  const total = basePrice + gst;

  return (
    <div className="trip-page">
      <h1>Trip Details</h1>

      {/* -----DATE & GUESTS-----*/}
      <div className="summary-card">
        <div className="summary-item">
          <label>Travel Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="summary-item guest-box">
          <label>Guests</label>
          <div
            className="guest-input"
            onClick={() => setShowGuests(!showGuests)}
          >
            {adults} Adults • {children} Children
          </div>

          {showGuests && (
            <div className="guest-dropdown">
              <div className="guest-row">
                <span>Adults</span>
                <div>
                  <button onClick={() => setAdults(Math.max(1, adults - 1))}>
                    −
                  </button>
                  <span>{adults}</span>
                  <button onClick={() => setAdults(adults + 1)}>+</button>
                </div>
              </div>

              <div className="guest-row">
                <span>Children</span>
                <div>
                  <button
                    onClick={() => setChildren(Math.max(0, children - 1))}
                  >
                    −
                  </button>
                  <span>{children}</span>
                  <button onClick={() => setChildren(children + 1)}>+</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ------ PACKAGES --------*/}
      <h2 className="section-title">Choose Your Package</h2>

      <div className="packages">
        <div
          className={`package ${
            selectedPackage.name === "Standard" ? "active" : ""
          }`}
          onClick={() => setSelectedPackage({ name: "Standard", price: 18999 })}
        >
          <h3>Standard Package</h3>
          <h4>₹18,999 / Adult</h4>
          <p className="package-desc">
            Basic accommodations with essential amenities
          </p>
          <ul>
            <li>Hotel accommodation</li>
            <li>Airport transfers</li>
            <li>Breakfast</li>
            <li>City tour</li>
          </ul>
        </div>

        <div
          className={`package ${
            selectedPackage.name === "Premium" ? "active" : ""
          }`}
          onClick={() => setSelectedPackage({ name: "Premium", price: 24999 })}
        >
          <h3>Premium Package</h3>
          <h4>₹24,999 / Adult</h4>
          <p className="package-desc">
            Enhanced experience with premium amenities
          </p>
          <ul>
            <li>4-star hotel</li>
            <li>All meals</li>
            <li>Private transfers</li>
            <li>Guided tours</li>
            <li>Travel insurance</li>
          </ul>
        </div>

        <div
          className={`package ${
            selectedPackage.name === "Luxury" ? "active" : ""
          }`}
          onClick={() => setSelectedPackage({ name: "Luxury", price: 39999 })}
        >
          <h3>Luxury Package</h3>
          <h4>₹39,999 / Adult</h4>
          <p className="package-desc">Ultimate luxury travel experience</p>
          <ul>
            <li>5-star resort</li>
            <li>All meals & drinks</li>
            <li>Private car</li>
            <li>Personal guide</li>
            <li>Spa access</li>
            <li>Premium insurance</li>
          </ul>
        </div>
      </div>

      {/* --------PRICE SUMMARY------ */}
      <div className="price-summary">
        <p>
          Base Price <span>₹{basePrice.toFixed(0)}</span>
        </p>
        <p>
          GST (18%) <span>₹{gst.toFixed(0)}</span>
        </p>
        <hr />
        <h3>
          Total Amount <span>₹{total.toFixed(0)}</span>
        </h3>
      </div>

      {/* -------BUTTONS-----*/}
      <div className="buttons">
        <button onClick={() => navigate("/")}>Home</button>
        <button
          onClick={() =>
            navigate(`/booking/${tripId}`, {
              state: {
                tripId,
                date,
                adults,
                children,
                packageName: selectedPackage.name,
                pricePerAdult: selectedPackage.price,
                totalAmount: total,
              },
            })
          }
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default TripDetailsPage;
