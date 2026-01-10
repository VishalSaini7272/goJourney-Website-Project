import "./ContactUs.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <>
      <Header />

      <div className="contact-page">
        <div className="contact-header">
          <h1>
            Contact <span>go</span>
            <b>Journey</b>
          </h1>
          <p>We’re here to help you plan your perfect journey</p>
        </div>

        <div className="contact-container">
          {/* LEFT INFO */}
          <div className="contact-info">
            <h2>Get in Touch</h2>

            <p>
              Have questions about our tour packages or need custom travel
              assistance? Our team is ready to help you.
            </p>

            <div className="info-box">
              <span>📍</span>
              <p>goJourney Travels, New Delhi, India</p>
            </div>

            <div className="info-box">
              <span>📞</span>
              <p>+91 98765 43210</p>
            </div>

            <div className="info-box">
              <span>✉️</span>
              <p>support@gojourney.in</p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="contact-form">
            <h2>Send Us a Message</h2>

            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>

              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>

              <div className="form-group">
                <input type="tel" placeholder="Phone Number" />
              </div>

              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required />
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
