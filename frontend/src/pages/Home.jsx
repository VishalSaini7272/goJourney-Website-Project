import { useState } from "react";
import "./Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import { Link } from "react-router-dom";

const Home = () => {
  const [activeRegion, setActiveRegion] = useState("SOUTH INDIA");

  const regionData = {
    "SOUTH INDIA": [
      "https://media.istockphoto.com/id/507707470/photo/tea-plantation-in-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=bYIgse9Lx7REGTzeCbdXjgvNI_vhDpBVQrAktPPmZ2Q=",
      "https://media.istockphoto.com/id/483015190/photo/boathouses-at-the-kerala-backwaters-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=o46_i44dKTck75k5UaF57I8V7uKBnb7ITWQG5q6dNW8=",
      "https://plus.unsplash.com/premium_photo-1697730334419-fba83fe143b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVubmFyfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1706932642959-97cdde19ef0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFtZXNod2FyYW18ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1697730420879-dc2a8dbaa31f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlbm5haXxlbnwwfHwwfHx8MA%3D%3D",
    ],
    "NORTH INDIA": [
      "https://images.unsplash.com/photo-1526711657229-e7e080ed7aa1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGFqJTIwbWFoYWx8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1599038442598-0bee725c0066?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEFncmF8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1600954700722-b9a768fc9397?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHJhamFzdGhhbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1678261151315-887e2dd253e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuYWxpJTJDJTIwaGltYWNoYWwlMjBwcmFkZXNofGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1597167231350-d057a45dc868?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1hbmFsaSUyQyUyMGhpbWFjaGFsJTIwcHJhZGVzaHxlbnwwfHwwfHx8MA%3D%3D",
    ],
    "WEST INDIA": [
      "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVtYmFpfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1562979314-bee7453e911c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVtYmFpfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z29hfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1697730390320-8412ee5eae82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z29hfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1582972236019-ea4af5ffe587?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z29hfGVufDB8fDB8fHww",
    ],
    "EAST INDIA": [
      "https://plus.unsplash.com/premium_photo-1697730390320-8412ee5eae82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z29hfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1627938823193-fd13c1c867dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZhcmFuYXNpJTIwZ2hhdHxlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1697730418140-064a5b6c2e17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGRhcmplZWxpbmd8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1627938823193-fd13c1c867dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZhcmFuYXNpJTIwZ2hhdHxlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1697730418140-064a5b6c2e17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGRhcmplZWxpbmd8ZW58MHx8MHx8fDA%3D",
    ],
  };
  return (
    <>
      <Header />
      <div className="home">
        {/* -----HERO SLIDER ------*/}
        <div className="slider">
          <div className="slides">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
              alt="Shimla"
            />
            <img
              src="https://images.unsplash.com/photo-1581892197913-fd2e407e698a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEdvYXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Jaipur"
            />
            <img
              src="https://images.unsplash.com/photo-1477587458883-47145ed94245"
              alt="Taj Mahal"
            />
            <img
              src="https://images.unsplash.com/photo-1548013146-72479768bada"
              alt="Kerala"
            />
            <img
              src="https://media.istockphoto.com/id/108327864/photo/jodhpur-blue-city.webp?a=1&b=1&s=612x612&w=0&k=20&c=Di8FklqeGwotZH72qLJvp4pizP0TzuDj5VJ2nqOsUNk="
              alt="Jodhpur"
            />
          </div>

          <div className="hero-text">
            <h1>Explore Incredible India</h1>
            <p>Discover beautiful destinations with curated tour packages</p>
          </div>
        </div>

        {/* -----TOP INDIA TOUR PACKAGES-----*/}
        <section className="section">
          <h1 className="section-title">Top India Tour Packages</h1>
          <hr />
          <h3>Exceeding your travel expectations</h3>

          <div className="tour-grid">
            <div className="tour-card">
              <img
                src="https://images.unsplash.com/photo-1581892197913-fd2e407e698a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEdvYXxlbnwwfHwwfHx8MA%3D%3D"
                alt="shimla"
              />
              <h3>📍Goa Tour</h3>
              <p>5 Days | Starting ₹17,999</p>
              <Link to="/trip/goa">
                <button className="bookNowBtn">Book Now</button>
              </Link>
            </div>

            <div className="tour-card">
              <img
                src="https://media.istockphoto.com/id/1496660180/photo/the-sissu-valley.webp?a=1&b=1&s=612x612&w=0&k=20&c=F_4emd3Hx-GmBOgPDOlMJVb5iwpWFpLt09bCEcd6y5I="
                alt="Shimla"
              />
              <h3>📍Shimla Manali Tour</h3>
              <p>4 Days | Starting ₹16,999</p>
              <Link to="/trip/shimla">
                <button className="bookNowBtn">Book Now</button>
              </Link>
            </div>

            <div className="tour-card">
              <img
                src="https://plus.unsplash.com/premium_photo-1697729438401-fcb4ff66d9a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2VyZWxhfGVufDB8fDB8fHww"
                alt="Kerala"
              />
              <h3>📍Kerala Backwater Tour</h3>
              <p>4 Days | Starting ₹17,499</p>
              <Link to="/trip/kerala">
                <button className="bookNowBtn">Book Now</button>
              </Link>
            </div>

            <div className="tour-card">
              <img
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da"
                alt="Agra"
              />
              <h3>📍Agra tour</h3>
              <p>3 Days | Starting ₹18,499</p>
              <Link to="/trip/agra">
                <button className="bookNowBtn">Book Now</button>
              </Link>
            </div>

            <div className="tour-card">
              <img
                src="https://plus.unsplash.com/premium_photo-1697730277839-440df1a4415f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxlaCUyMGxhZGFraHxlbnwwfHwwfHx8MA%3D%3D"
                alt="leh-ladakh"
              />
              <h3>📍leh-ladakh Tour</h3>
              <p>7 Days | Starting ₹17,499</p>
              <Link to="/trip/leh-ladakh">
                <button className="bookNowBtn">Book Now</button>
              </Link>
            </div>

            <div className="tour-card">
              <img
                src="https://images.unsplash.com/photo-1646772809232-d2b6300c1688?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fERhcmplZWxpbmd8ZW58MHx8MHx8fDA%3D"
                alt="Darjeeling"
              />
              <h3>📍Darjeeling Hill Tour</h3>
              <p>6 Days | Starting ₹18,499</p>
              <Link to="/trip/darjeeling">
                <button className="bookNowBtn">Book Now</button>
              </Link>
            </div>

            <div className="tour-card">
              <img
                src="https://media.istockphoto.com/id/2200798244/photo/closeup-view-of-dhanushkodi-via-drone-image-of-tamil-nadu-india-its-in-the-ramanathapuram.webp?a=1&b=1&s=612x612&w=0&k=20&c=J1svLNsK2WNgZtcb-JcQ3SZ90BKvkPAArhr2oE_pnCQ="
                alt="Rameshwaram"
              />
              <h3>📍Rameshwaram Tour</h3>
              <p>5 Days | Starting ₹17,999</p>
              <Link to="/trip/rameshwaram">
                <button className="bookNowBtn">Book Now</button>
              </Link>
            </div>

            <div className="tour-card">
              <img
                src="https://images.unsplash.com/photo-1558671440-cf07862e7b6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFzc2FtfGVufDB8fDB8fHww"
                alt="assam"
              />
              <h3>📍Assam Tour</h3>
              <p>6 Days | Starting ₹18,499</p>
              <Link to="/trip/assam">
                <button className="bookNowBtn">Book Now</button>
              </Link>
            </div>
          </div>

          <Reviews />
        </section>

        {/* -------DESTINATIONS SECTION ------*/}
        <section className="section">
          <h1 className="section-title">DESTINATIONS</h1>
          <h3>Every corner is easy to access with us</h3>
          <hr />

          {/* REGION OPTIONS */}
          <div className="directions-name">
            {Object.keys(regionData).map((region) => (
              <span
                key={region}
                onMouseEnter={() => setActiveRegion(region)}
                onMouseLeave={() => setActiveRegion("SOUTH INDIA")}
              >
                {region}
              </span>
            ))}
          </div>

          {/* REGION SLIDER (VISIBLE ONLY ON HOVER) */}
          {activeRegion && (
            <div className="region-slider">
              <div className="region-slides">
                {regionData[activeRegion].map((url, i) => (
                  <div className="region-card" key={i}>
                    <img src={url} alt={activeRegion} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
