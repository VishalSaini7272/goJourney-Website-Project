import "./PackageDetails.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const PackageDetails = () => {
  return (
    <>
      <Header />

      <section className="packages-page">
        <div className="packages-header">
          <h1>Our Travel Packages</h1>
          <p>
            <b>Choose the perfect package for your next journey</b>
          </p>
        </div>

        <div className="packages-container">
          {/* Family Package */}
          <div className="package-card">
            <img
              src="https://media.istockphoto.com/id/1429367591/photo/a-family-on-summer-holidays-stands-by-the-swimming-pool-and-enjoys-the-beautiful-sunset.webp?a=1&b=1&s=612x612&w=0&k=20&c=84nsv50sCSJ1lJlfMFKtCS2wud1gSDBwwT-BwLCSHYY= "
              alt="Family Package"
            />
            <div className="package-content">
              <h3>Family Packages</h3>
              <p>
                Enjoy stress-free family vacations with comfortable stays,
                sightseeing and fun activities for all ages.
              </p>
              <Link to="/packages/family" className="explore-btn">
                Explore
              </Link>
            </div>
          </div>

          {/* Honeymoon Package */}
          <div className="package-card">
            <img
              src="https://media.istockphoto.com/id/1293037576/photo/a-hugging-couple-in-white-summer-clothing-stands-on-a-tropical-beach.webp?a=1&b=1&s=612x612&w=0&k=20&c=_RE4aTDLoPAt0iYLzbS8zfW_rQRFMMhxU2Le_bZWRWw="
              alt="Honeymoon Package"
            />
            <div className="package-content">
              <h3>Honeymoon Packages</h3>
              <p>
                Celebrate love with romantic destinations, luxury stays and
                unforgettable experiences.
              </p>
              <Link to="/packages/honeymoon" className="explore-btn">
                Explore
              </Link>
            </div>
          </div>

          {/* Adventure Package */}
          <div className="package-card">
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
              alt="Adventure Package"
            />
            <div className="package-content">
              <h3>Adventure Packages</h3>
              <p>
                Experience thrill and excitement with trekking, rafting, camping
                and adventure tours.
              </p>
              <Link to="/packages/adventure" className="explore-btn">
                Explore
              </Link>
            </div>
          </div>

          {/* Group Tours */}
          <div className="package-card">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac"
              alt="Group Tours"
            />
            <div className="package-content">
              <h3>Group Tours</h3>
              <p>
                Travel together and create memories with guided group tours,
                perfect for friends and communities.
              </p>
              <Link to="/packages/group" className="explore-btn">
                Explore
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PackageDetails;
