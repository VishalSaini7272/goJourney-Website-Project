import Header from "../components/Header";
import Footer from "../components/Footer";
import "./About.css";

const About = () => {
  return (
    <>
      <Header />

      <section className="about-container">
        <div className="about-content">
          <h1>
            go<b>Journey</b>
          </h1>
          <p>
            Welcome to goJourney, your trusted companion for exploring the
            incredible beauty, culture, and diversity of India. We are a
            passionate travel platform dedicated to helping travellers discover
            unforgettable experiences—whether you're planning a family vacation,
            a solo adventure, a romantic escape, or a customized tour across
            India.
          </p>

          <p>
            At goJourney, we believe that every journey tells a story, and we’re
            here to make yours extraordinary.
          </p>

          <hr />

          <h3>Who We Are</h3>
          <p>
            goJourney is a small but dedicated travel service built with one
            vision: to make India travel simple, affordable, and memorable for
            everyone.
          </p>
          <p>
            Our team consists of travel enthusiasts who have spent years
            exploring destinations across India. With this real-world
            experience, we curate tour packages that combine comfort, adventure,
            and authenticity.
          </p>

          <hr />

          <h3>What We Offer</h3>

          <ul className="offer-list">
            <li>✔ India-Only Tour Packages</li>
            <li>✔ Family Tour Packages</li>
            <li>✔ Solo Travel Packages</li>
            <li>✔ Custom & Budget-Friendly Packages</li>
            <li>✔ Transparent Pricing</li>
            <li>✔ Easy Booking Process</li>
          </ul>

          <hr />

          <h3>Our Mission</h3>
          <p>
            Our mission is to deliver hassle-free, joyful, and memorable travel
            experiences across India.
          </p>
          <p>
            We want to inspire people to travel more and make exploring India
            easier for everyone—from first-time travellers to seasoned
            adventurers.
          </p>

          <hr />

          <h3>Why Choose goJourney?</h3>

          <ul className="why-list">
            <li>🌍 Expertly Crafted Packages</li>
            <li>✨ Affordable Prices</li>
            <li>🤝 Trusted Service</li>
            <li>📞 Dedicated Support</li>
          </ul>

          <hr />

          <h3>Join the Journey</h3>
          <p>
            Whether you’re dreaming of a peaceful mountain stay, a beach
            holiday, an adventure trip, or a cultural tour, goJourney is here to
            guide you every step of the way.
          </p>
          <p className="closing-text">
            Let’s create your next unforgettable travel story—with{" "}
            <span>goJourney</span>.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
