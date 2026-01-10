import { useNavigate, useLocation } from "react-router-dom";
import "./BookingForm.css";
import { useState } from "react";

const BookingForm = () => {
  const navigate = useNavigate();
  const { state: bookingData } = useLocation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
  });
  const [errors, setErrors] = useState({});

  // safety check:-
  if (!bookingData) {
    return <h2 style={{ textAlign: "center" }}>No booking data found</h2>;
  }
  const validate = () => {
    let newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName =
        "First name is required and must be at least two characters";
    if (!formData.lastName.trim())
      newErrors.lastName =
        "Last name is required and must be at least two characters";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (formData.phoneNumber.length !== 10) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
    }

    if (!formData.address.trim())
      newErrors.address =
        "Address is required and must be at least five characters";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.zipCode.trim()) newErrors.zipCode = "Zip code is required";
    if (!formData.country) newErrors.country = "Please select a country";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      navigate("/payment", {
        state: {
          ...bookingData,
          userDetails: formData,
        },
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  return (
    <>
      <h1 className="mainHeading">Bookings Details</h1>
      <div className="booking-container">
        {/*----TRIP DETAILS----*/}
        <div className="trip-summary-card">
          <h3>Your Trip Details</h3>

          <div className="summary-grid">
            <p>
              <strong>Package:</strong> {bookingData.packageName}
            </p>
            <p>
              <strong>Travel Date:</strong> {bookingData.date || "Not selected"}
            </p>
            <p>
              <strong>Guests:</strong> {bookingData.adults} Adults,{" "}
              {bookingData.children} Children
            </p>
            <p>
              <strong>Total Amount:</strong> ₹
              {bookingData.totalAmount.toFixed(0)}
            </p>
          </div>
        </div>

        {/*----FORM CARD-----*/}
        <div className="booking-card">
          <h2>Personal Information</h2>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="field">
                <label>First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                />
                {errors.firstName && (
                  <p className="error-text">{errors.firstName}</p>
                )}
              </div>

              <div className="field">
                <label>Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                />
                {errors.lastName && (
                  <p className="error-text">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
                {errors.email && <p className="error-text">{errors.email}</p>}
              </div>

              <div className="field">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
                {errors.phoneNumber && (
                  <p className="error-text">{errors.phoneNumber}</p>
                )}
              </div>
            </div>

            <div className="field full">
              <label>Address *</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your street address"
              />
              {errors.address && <p className="error-text">{errors.address}</p>}
            </div>

            <div className="row">
              <div className="field">
                <label>City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter your city"
                />
                {errors.city && <p className="error-text">{errors.city}</p>}
              </div>

              <div className="field">
                <label>ZIP Code *</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  placeholder="Enter ZIP code"
                />
                {errors.zipCode && (
                  <p className="error-text">{errors.zipCode}</p>
                )}
              </div>

              <div className="field">
                <label>Country *</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="">Select country</option>
                  <option value="india">India</option>
                  <option value="usa">USA</option>
                  <option value="china">China</option>
                  <option value="japan">Japan</option>
                  <option value="spain">Spain</option>
                  <option value="france">France</option>
                  <option value="italy">Italy</option>
                  <option value="france">France</option>
                  <option value="australia">Australia</option>
                  <option value="canada">Canada</option>
                  <option value="other">Other</option>
                </select>
                {errors.country && (
                  <p className="error-text">{errors.country}</p>
                )}
              </div>
            </div>

            <div className="field full">
              <label>Special Requirements (Optional)</label>
              <textarea placeholder="Any special requests..."></textarea>
            </div>

            <div className="checkbox">
              <label>
                <input type="checkbox" />
                <span>
                  I agree to the <a href="#">Terms & Conditions</a> and{" "}
                  <a href="#">Privacy Policy</a>
                </span>
              </label>
            </div>

            {/*--------BUTTONS-----*/}
            <div className="btns">
              <button type="button" onClick={() => navigate("/")}>
                Home
              </button>

              <button type="button" onClick={() => navigate(-1)}>
                Back
              </button>

              <button type="submit" className="primary">
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingForm;
