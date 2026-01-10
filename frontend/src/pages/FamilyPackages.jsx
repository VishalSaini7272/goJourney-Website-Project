import "./FamilyPackages.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const FamilyPackages = () => {
  const navigate = useNavigate();

  const generateTripId = (title) => title.toLowerCase().replace(/\s+/g, "-");

  const packages = [
    {
      title: "Kerala Family Holiday",
      image:
        "https://media.istockphoto.com/id/472560436/photo/houseboat-in-southern-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=J0QsYF5M2-22Vvu72d2wEU_9VdVWReUBsA5ooFizrWo=",
      days: "6 Days / 5 Nights",
      price: "₹24,999",
      desc: "Relaxing backwaters, houseboat stay and scenic beauty.",
    },
    {
      title: "Kashmir Family Delight",
      image:
        "https://images.unsplash.com/photo-1643449416258-5c8e7ec598b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2FzaG1pciUyMHZhbGxleXxlbnwwfHwwfHx8MA%3D%3D",
      days: "5 Days / 4 Nights",
      price: "₹29,999",
      desc: "Snow valleys, gondola rides and breathtaking views.",
    },
    {
      title: "Rajasthan Royal Tour",
      image:
        "https://plus.unsplash.com/premium_photo-1661962388409-eb7a041606fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFqYXN0aGFufGVufDB8fDB8fHww ",
      days: "7 Days / 6 Nights",
      price: "₹34,999",
      desc: "Explore forts, palaces and rich cultural heritage.",
    },
    {
      title: "Andaman Beach Tour",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      days: "5 Days / 4 Nights",
      price: "₹39,999",
      desc: "Crystal-clear beaches and peaceful island vibes.",
    },
    {
      title: "Himachal Family Escape",
      image:
        "https://plus.unsplash.com/premium_photo-1661952578770-79010299a9f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGltYWNoYWx8ZW58MHx8MHx8fDA%3D",
      days: "6 Days / 5 Nights",
      price: "₹22,999",
      desc: "Cool weather, hill stations and mountain views.",
    },
    {
      title: "Goa Family Fun Trip",
      image:
        "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEdvYXxlbnwwfHwwfHx8MA%3D%3D",
      days: "4 Days / 3 Nights",
      price: "₹19,999",
      desc: "Beach fun, water sports and leisure time.",
    },
    {
      title: "Golden Temple Tour",
      image:
        "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8R29sZGVuJTIwVGVtcGxlfGVufDB8fDB8fHww",
      days: "5 Days / 4 Nights",
      price: "₹18,999",
      desc: "Delhi, Agra & Jaipur iconic sightseeing.",
    },
    {
      title: "South Tirupati Balaji Temple Tour",
      image:
        "https://images.unsplash.com/photo-1710863805685-73058473ce7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFRyaXJ1cGF0aSUyMGJhbGFqaSUyMHRlbXBsZXxlbnwwfHwwfHx8MA%3D%3D",
      days: "7 Days / 6 Nights",
      price: "₹31,999",
      desc: "Spiritual journey through famous temples.",
    },
    {
      title: "Ooty Tour",
      image:
        "https://media.istockphoto.com/id/537064629/photo/tea-plantations-around-the-emerald-lake-in-ooty.webp?a=1&b=1&s=612x612&w=0&k=20&c=E5yKr6mXwi14CtvU0iMmESgJLbZagJbfwz-dqABsE24=",
      days: "5 Days / 4 Nights",
      price: "₹25,999",
      desc: "Hill stations, tea gardens and pleasant weather.",
    },
    {
      title: "Mussoorie & Nainital",
      image:
        "https://images.unsplash.com/photo-1667029838861-2fe3a590a1d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TmFpbml0YWx8ZW58MHx8MHx8fDA%3D",
      days: "4 Days / 3 Nights",
      price: "₹21,999",
      desc: "Peaceful hills, lakes and scenic views.",
    },
    {
      title: "North East Explorer",
      image: "https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8",
      days: "8 Days / 7 Nights",
      price: "₹42,999",
      desc: "Unexplored beauty of Northeast India.",
    },
    {
      title: "Varanasi Spiritual Tour",
      image:
        "https://images.unsplash.com/photo-1766056586808-987b0ab63cdd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8VmFyYW5hc2klMjBTcGlyaXR1YWwlMjBUb3VyfGVufDB8fDB8fHww",
      days: "3 Days / 2 Nights",
      price: "₹14,999",
      desc: "Ganga Aarti, temples and spiritual vibes.",
    },
  ];

  return (
    <>
      <Header />

      <section className="family-page">
        <div className="family-header">
          <h1>Family Tour Packages</h1>
          <p>🧑‍🤝‍🧑Perfect holidays designed for memorable family moments🧑‍🤝‍🧑</p>
        </div>

        <div className="family-grid">
          {packages.map((pkg, index) => (
            <div className="family-card" key={index}>
              <img src={pkg.image} alt={pkg.title} />

              <div className="family-content">
                <h3>{pkg.title}</h3>
                <p className="desc">{pkg.desc}</p>

                <div className="family-info">
                  <span>⏱ {pkg.days}</span>
                  <span>💰 Starts from {pkg.price}</span>
                </div>

                <button
                  className="family-btn"
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

export default FamilyPackages;
