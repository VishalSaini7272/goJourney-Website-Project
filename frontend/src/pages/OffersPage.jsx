import "./OffersPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const OffersPage = () => {
  return (
    <>
      <Header />
      <div className="offer-page">
        <h1 className="offer-title">SPECIAL OFFERS</h1>
        <p className="offer-subtitle">
          Exclusive Deals & Discounts on India Tours
        </p>

        {/* ------MAIN OFFER BOXES----- */}
        <div className="offer-box-container">
          <div className="offer-box">
            <img
              src="https://plus.unsplash.com/premium_photo-1672759267971-b92f09733dc3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2F2ZSUyMHRleHR8ZW58MHx8MHx8fDA%3D"
              alt="Book Early"
            />
            <h3>BOOK EARLY AND SAVE</h3>
            <ul>
              <li>I) Book before 60 days — Save 2.5%</li>
              <li>II) Book before 120 days — Save 5%</li>
            </ul>
          </div>

          <div className="offer-box">
            <img
              src="https://plus.unsplash.com/premium_photo-1728618062261-74d0d5957227?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGF5bWVudCUyMGRpc2NvdW50fGVufDB8fDB8fHww"
              alt="cashback"
            />
            <h3>CASHBACK UPTO 20% </h3>
            <ul>
              <li>Special discount for returning customers</li>
              <li>Loyalty reward on all India tours</li>
            </ul>
          </div>

          <div className="offer-box">
            <img
              src="https://media.istockphoto.com/id/671958362/vector/new-indian-currency-with-symbol.jpg?s=612x612&w=0&k=20&c=r5ZOBACOVXmqMSZ70KXl-zVjFrr3ghTTMWCgQzWZBag="
              alt="Full Payment Discount"
            />
            <h3>FULL PAYMENT DISCOUNT 2.5%</h3>
            <ul>
              <li>Save more on full advance payment</li>
              <li>Applicable on selected travel packages</li>
            </ul>
          </div>

          <div className="offer-box">
            <img
              src="https://media.istockphoto.com/id/2218157320/photo/gold-stopwatch-alert.jpg?s=612x612&w=0&k=20&c=DsyNtD_2QYXhW6z5qLHyb5ReTxWQ13lmznIZb5oGw10="
              alt="Last Minute Deal"
            />
            <h3>LAST MINUTE DEALS</h3>
            <ul>
              <li>Exclusive offers on last-minute bookings</li>
              <li>Up to 10% discount on quick trips</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OffersPage;
