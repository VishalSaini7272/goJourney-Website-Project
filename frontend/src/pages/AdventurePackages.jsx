import "./AdventurePackages.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const AdventurePackages = () => {
  const navigate = useNavigate();

  const generateTripId = (title) => title.toLowerCase().replace(/\s+/g, "-");
  const packages = [
    {
      title: "Leh Ladakh Adventure Ride",
      image:
        "https://images.unsplash.com/photo-1536295243470-d7cba4efab7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxlaHxlbnwwfHwwfHx8MA%3D%3D",
      days: "7 Days / 6 Nights",
      price: "₹39,999",
      desc: "High-altitude biking, monasteries and breathtaking landscapes.",
    },
    {
      title: "Spiti Valley Road Trip",
      image:
        "https://media.istockphoto.com/id/2234289131/photo/roads-of-nako-with-mountain-view-nako-lahaul-spiti-himachal-pradesh-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=bLWqWZA93AHn5VqYYEN_M_8etiEw0tUFbst7jP1Jz8A=",
      days: "8 Days / 7 Nights",
      price: "₹42,999",
      desc: "Rugged terrain, cold deserts and raw Himalayan beauty.",
    },
    {
      title: "Manali Kasol Trek Adventure",
      image:
        "https://images.unsplash.com/photo-1760716052952-f8218adde8ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fE1hbmFsaSUyMEthc29sJTIwVHJlayUyMEFkdmVudHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      days: "5 Days / 4 Nights",
      price: "₹24,999",
      desc: "Trekking, camping and mountain village vibes.",
    },
    {
      title: "Rishikesh River Rafting",
      image:
        "https://plus.unsplash.com/premium_photo-1661889971049-6f0a39a3476f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmlzaGlrZXNoJTIwUml2ZXIlMjBSYWZ0aW5nfGVufDB8fDB8fHww",
      days: "3 Days / 2 Nights",
      price: "₹14,999",
      desc: "White-water rafting, cliff jumping and camping.",
    },
    {
      title: "Auli Ski Adventure",
      image:
        "https://plus.unsplash.com/premium_photo-1661871501204-7b4ec1a91079?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEF1bGklMjBTa2klMjBBZHZlbnR1cmV8ZW58MHx8MHx8fDA%3D",
      days: "4 Days / 3 Nights",
      price: "₹22,999",
      desc: "Snow skiing, cable cars and Himalayan views.",
    },
    {
      title: "Meghalaya Caving Expedition",
      image:
        "https://plus.unsplash.com/premium_photo-1750491235356-d11cdd6b9ca9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fE1lZ2hhbGF5YSUyMENhdmluZyUyMEV4cGVkaXRpb258ZW58MHx8MHx8fDA%3D",
      days: "6 Days / 5 Nights",
      price: "₹29,999",
      desc: "Caves, waterfalls and lush green landscapes.",
    },
    {
      title: "Jim Corbett Jungle Safari",
      image:
        "https://media.istockphoto.com/id/626467292/photo/open-off-road-cars-on-a-jungle-path.jpg?s=1024x1024&w=is&k=20&c=HqY7czxou-KaBuBV1NfcSB0c97r_wInBpgNFL2ioe54=",
      days: "3 Days / 2 Nights",
      price: "₹16,999",
      desc: "Wildlife safaris, forest stays and nature walks.",
    },
    {
      title: "Bir Billing Paragliding",
      image:
        "https://images.unsplash.com/photo-1611678347071-f67f4b2ee299?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QmlyJTIwQmlsbGluZyUyMFBhcmFnbGlkaW5nfGVufDB8fDB8fHww",
      days: "3 Days / 2 Nights",
      price: "₹18,999",
      desc: "World-famous paragliding experience and hill views.",
    },
    {
      title: "Andaman Scuba Diving",
      image:
        "https://media.istockphoto.com/id/1490908827/photo/female-scuba-diver-taking-a-photo-of-hawksbill-turtle-swimming-over-coral-reef-in-the-blue.jpg?s=1024x1024&w=is&k=20&c=tenyIxQhvxei5KP4-kHascn-Z2xiiacKAkcqVFetzIY=",
      days: "5 Days / 4 Nights",
      price: "₹34,999",
      desc: "Scuba diving, snorkeling and island adventures.",
    },
    {
      title: "Sikkim Trekking Adventure",
      image:
        "https://plus.unsplash.com/premium_photo-1754590179764-0f36db5fcbb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8U2lra2ltJTIwVHJla2tpbmclMjBBZHZlbnR1cmV8ZW58MHx8MHx8fDA%3D",
      days: "6 Days / 5 Nights",
      price: "₹27,999",
      desc: "Mountain treks, monasteries and scenic trails.",
    },
    {
      title: "Desert Camping Jaisalmer",
      image:
        "https://images.unsplash.com/photo-1662879046665-b286adb83aad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RGVzZXJ0JTIwQ2FtcGluZyUyMEphaXNhbG1lcnxlbnwwfHwwfHx8MA%3D%3D",
      days: "2 Days / 1 Night",
      price: "₹12,999",
      desc: "Sand dunes, camel safari and cultural nights.",
    },
    {
      title: "Coorg Adventure Escape",
      image:
        "https://images.unsplash.com/photo-1625456824538-ee965b66e040?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fENvb3JnJTIwQWR2ZW50dXJlJTIwRXNjYXBlfGVufDB8fDB8fHww",
      days: "4 Days / 3 Nights",
      price: "₹21,999",
      desc: "Trekking, waterfalls and coffee plantations.",
    },
  ];

  return (
    <>
      <Header />

      <section className="adventure-page">
        <div className="adventure-header">
          <h1>Adventure Tour Packages</h1>
          <p>🏄Thrilling experiences for the true explorer in you🏄</p>
        </div>

        <div className="adventure-grid">
          {packages.map((pkg, index) => (
            <div className="adventure-card" key={index}>
              <img src={pkg.image} alt={pkg.title} />

              <div className="adventure-content">
                <h3>{pkg.title}</h3>
                <p className="desc">{pkg.desc}</p>

                <div className="adventure-info">
                  <span>⏱ {pkg.days}</span>
                  <span>💰 Starts from {pkg.price}</span>
                </div>

                <button
                  className="adventure-btn"
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

export default AdventurePackages;
