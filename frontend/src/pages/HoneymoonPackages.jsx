import "./HoneymoonPackages.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const HoneymoonPackages = () => {
  const navigate = useNavigate();

  const generateTripId = (title) => title.toLowerCase().replace(/\s+/g, "-");

  const packages = [
    {
      title: "Portblair With Havelock and Neil Island",
      image:
        "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D",
      days: "6 Days / 5 Nights",
      price: "₹29,999",
      desc: "Backwaters, houseboat stay and candlelight dinners.",
    },
    {
      title: "Hyderabad With Ramoji Film City",
      image:
        "https://images.unsplash.com/photo-1615790456401-4cab86cd2408?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UmFtb2ppJTIwRmlsbSUyMENpdHl8ZW58MHx8MHx8fDA%3D",
      days: "5 Days / 4 Nights",
      price: "₹34,999",
      desc: "Ramoji Film City is an integrated film studio facility located right outside of Hyderabad, India. ",
    },
    {
      title: "Goa Beach Honeymoon",
      image:
        "https://plus.unsplash.com/premium_photo-1697729701846-e34563b06d47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R29hfGVufDB8fDB8fHww",
      days: "4 Days / 3 Nights",
      price: "₹24,999",
      desc: "Sunset beaches, luxury resorts and nightlife.",
    },
    {
      title: "Shimla Manali Honeymoon",
      image:
        "https://images.unsplash.com/photo-1600065755981-a7f7f560ab04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hpbWxhfGVufDB8fDB8fHww",
      days: "6 Days / 5 Nights",
      price: "₹27,999",
      desc: "Snow points, cozy stays and mountain romance.",
    },
    {
      title: "Andaman Island Honeymoon",
      image:
        "https://plus.unsplash.com/premium_photo-1668883188861-39974ed9ad99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YW5kYW1hbiUyMGFuZCUyMG5pY29iYXIlMjBpc2xhbmRzfGVufDB8fDB8fHww",
      days: "5 Days / 4 Nights",
      price: "₹42,999",
      desc: "Crystal beaches, private moments and island luxury.",
    },
    {
      title: "Udaipur Royal Honeymoon",
      image:
        "https://images.unsplash.com/photo-1633702738734-443da2c18f3c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dWRhaXB1cnxlbnwwfHwwfHx8MA%3D%3D",
      days: "4 Days / 3 Nights",
      price: "₹31,999",
      desc: "Palace stays, lakes and royal experiences.",
    },
    {
      title: "Jaipur-Bikaner-Jaisalmer-Jodhpur-Udaipur",
      image:
        "https://images.unsplash.com/photo-1713349881676-594b95a5742b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGphaXNhbG1lcnxlbnwwfHwwfHx8MA%3D%3D",
      days: "5 Days / 4 Nights",
      price: "₹28,999",
      desc: "Jaisalmer is a former medieval trading center and a princely state in the western Indian state of Rajasthan, in the heart of the Thar Desert. ",
    },
    {
      title: "Darjeeling Gangtok Honeymoon",
      image:
        "https://plus.unsplash.com/premium_photo-1697730400710-9e565f54869e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2FuZ3Rva3xlbnwwfHwwfHx8MA%3D%3D",
      days: "6 Days / 5 Nights",
      price: "₹33,999",
      desc: "Himalayan views, monasteries and romance.",
    },
    {
      title: "Leh Ladakh Honeymoon",
      image:
        "https://images.unsplash.com/photo-1577809497158-073b1f0f8187?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGVofGVufDB8fDB8fHww",
      days: "7 Days / 6 Nights",
      price: "₹39,999",
      desc: "Adventure romance amidst stunning landscapes.",
    },
    {
      title: "Mumbai Darshan",
      image:
        "https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bXVtYmFpfGVufDB8fDB8fHww",
      days: "3 Days / 2 Nights",
      price: "₹20,999",
      desc: "Peaceful and historical misty mornings and love.",
    },
    {
      title: "Jaipur Heritage Honeymoon",
      image:
        "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFpcHVyfGVufDB8fDB8fHww",
      days: "3 Days / 2 Nights",
      price: "₹19,999",
      desc: "Pink city charm, forts and royal vibes.",
    },
    {
      title: "Assam-Meghalaya",
      image:
        "https://media.istockphoto.com/id/1160316403/photo/tea-plantation.webp?a=1&b=1&s=612x612&w=0&k=20&c=IzEQqkk1w3j-i_2qnUIchqzkxz1bK6tlDQ9WwKfhhAs=",
      days: "3 Days / 2 Nights",
      price: "₹26,999",
      desc: "Private houseboats and beauty natures.",
    },
  ];

  return (
    <>
      <Header />

      <section className="honeymoon-page">
        <div className="honeymoon-header">
          <h1>Honeymoon Tour Packages</h1>
          <p>❤️Romantic journeys crafted for unforgettable beginnings❤️</p>
        </div>

        <div className="honeymoon-grid">
          {packages.map((pkg, index) => (
            <div className="honeymoon-card" key={index}>
              <img src={pkg.image} alt={pkg.title} />

              <div className="honeymoon-content">
                <h3>{pkg.title}</h3>
                <p className="desc">{pkg.desc}</p>

                <div className="honeymoon-info">
                  <span>⏱ {pkg.days}</span>
                  <span>💰 Starts from {pkg.price}</span>
                </div>

                <button
                  className="honeymoon-btn"
                  onClick={() => {
                    const tripId = generateTripId(pkg.title);

                    navigate(`/trip/${tripId}`, {
                      state: {
                        tripId,
                        title: pkg.title,
                        image: pkg.image,
                        description: pkg.desc,
                        days: pkg.days,
                        basePrice: parseInt(pkg.price.replace(/[₹,]/g, "")),
                      },
                    });
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HoneymoonPackages;
