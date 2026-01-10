import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import "./PaymentPage.css";

const PaymentPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation(); // Booking Data

  const [formData, setFormData] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    cardName: "",
    billingAddress: "",
  });

  const [errors, setErrors] = useState({});

  if (!state) {
    return <h2 style={{ textAlign: "center" }}>No payment data found</h2>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.cardNumber) newErrors.cardNumber = "Card number is required";
    else if (formData.cardNumber.replace(/\s/g, "").length !== 16)
      newErrors.cardNumber = "Card number must be 16 digits";

    if (!formData.expiry) newErrors.expiry = "Expiry date is required";

    if (!formData.cvv) newErrors.cvv = "CVV is required";
    else if (formData.cvv.length !== 3) newErrors.cvv = "CVV must be 3 digits";

    if (!formData.cardName.trim())
      newErrors.cardName = "Cardholder name is required";

    if (!formData.billingAddress.trim())
      newErrors.billingAddress = "Billing address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    navigate("/confirmation", {
      state: {
        ...state, //booking data
      },
    });
  };

  return (
    <div className="payment-page">
      <div className="payment-card">
        <h2 className="secure-title">🔒 Secure Payment</h2>

        {/* -----Order Summary----*/}
        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>{state.packageName}</span>
            <span>₹{state.totalAmount.toFixed(0)}</span>
          </div>
          <hr />
          <div className="summary-total">
            <span>Total Amount</span>
            <span>₹{state.totalAmount.toFixed(0)}</span>
          </div>
        </div>

        {/* ------ Payment Form ---- */}
        <h2>Payment Method</h2>
        <div className="cardDetails">
          <h4>💳 Credit/Debit Card</h4>
          <p>We accept Visa, Mastercard, and American Express</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label>Card Number *</label>
          <input
            type="text"
            name="cardNumber"
            placeholder="1234 5678 9012 3456"
            value={formData.cardNumber}
            onChange={handleChange}
            maxLength={16}
          />
          {errors.cardNumber && <p className="error">{errors.cardNumber}</p>}

          <div className="row">
            <div>
              <label>Expiry Date *</label>
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={formData.expiry}
                onChange={handleChange}
                maxLength={5}
                inputMode="numeric"
              />
              {errors.expiry && <p className="error">{errors.expiry}</p>}
            </div>

            <div>
              <label>CVV *</label>
              <input
                type="password"
                name="cvv"
                placeholder="123"
                value={formData.cvv}
                onChange={handleChange}
                maxLength={3}
              />
              {errors.cvv && <p className="error">{errors.cvv}</p>}
            </div>
          </div>

          <label>Cardholder Name *</label>
          <input
            type="text"
            name="cardName"
            placeholder="Name as it appears on card"
            value={formData.cardName}
            onChange={handleChange}
            minLength={3}
          />
          {errors.cardName && <p className="error">{errors.cardName}</p>}

          <label>Billing Address *</label>
          <input
            type="text"
            name="billingAddress"
            placeholder="Enter billing address"
            value={formData.billingAddress}
            onChange={handleChange}
          />
          {errors.billingAddress && (
            <p className="error">{errors.billingAddress}</p>
          )}

          <div className="secure-note">
            <p>Secure Payment</p>
            🔒 Your payment information is encrypted and secure. We do not store
            your card details.
          </div>

          <div className="btns">
            <button type="button" onClick={() => navigate("/")}>
              Home
            </button>
            <button type="button" onClick={() => navigate(-1)}>
              Back
            </button>
            <button type="submit" className="primary">
              Pay ₹{state.totalAmount.toFixed(0)}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
