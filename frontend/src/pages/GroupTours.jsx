import "./GroupTours.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const GroupTours = () => {
  const navigate = useNavigate();

  const generateTripId = (title) => title.toLowerCase().replace(/\s+/g, "-");

  const packages = [
    {
      title: "Golden Triangle Group Tour",
      image:
        "https://media.istockphoto.com/id/999959958/photo/young-people-jumping-inside-ocean-in-summer-excursion-day-happy-friends-diving-from-sailing.webp?a=1&b=1&s=612x612&w=0&k=20&c=amTfIc3By8ehUsAHSGlDVgoXob7SKhTBbBF6xqN0AOE=",
      days: "5 Days / 4 Nights",
      price: "₹17,999",
      desc: "Explore Delhi, Agra and Jaipur with guided group tours.",
    },
    {
      title: "Rajasthan Heritage Group Tour",
      image:
        "https://media.istockphoto.com/id/2201970414/photo/bustling-camel-fair-in-pushkar.webp?a=1&b=1&s=612x612&w=0&k=20&c=AZ7-O80V3MXelT6JVFdJpwE26ii8iLL6ejQYkwnVb8s=",
      days: "7 Days / 6 Nights",
      price: "₹29,999",
      desc: "Forts, palaces and cultural heritage with group travel.",
    },
    {
      title: "Kerala Backwater Group Tour",
      image:
        "https://plus.unsplash.com/premium_photo-1697729442042-c071ef0415b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEtlcmFsYSUyMEJhY2t3YXRlciUyMEdyb3VwJTIwVG91cnxlbnwwfHwwfHx8MA%3D%3D",
      days: "6 Days / 5 Nights",
      price: "₹24,999",
      desc: "Houseboats, greenery and scenic backwaters.",
    },
    {
      title: "Goa Group Fun Trip",
      image:
        "https://media.istockphoto.com/id/1796133385/photo/happy-senior-indian-couple-with-beautiful-young-daughter-enjoying-vacation-at-beach.jpg?s=612x612&w=0&k=20&c=_QezV8q5_gWg3Fp9n0l83q2Blc90SZ4MXBOJjgMkEEA=",
      days: "4 Days / 3 Nights",
      price: "₹18,999",
      desc: "Beaches, nightlife and water sports with friends.",
    },
    {
      title: "Himachal Group Adventure",
      image:
        "https://plus.unsplash.com/premium_photo-1661963229272-1a5ab149c1db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SGltYWNoYWwlMjBHcm91cCUyMEFkdmVudHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      days: "6 Days / 5 Nights",
      price: "₹22,999",
      desc: "Hill stations and thrilling mountain journeys.",
    },
    {
      title: "Kashmir Group Delight",
      image:
        "https://media.istockphoto.com/id/2157050691/photo/beautiful-landscapes-of-anang-kel-a-beautiful-valley-in-azad-kashmir-pakistan.webp?a=1&b=1&s=612x612&w=0&k=20&c=EMh5vMQkr4DpuDp-g12NV2uNauAti4vftZgvjrlNFbk=",
      days: "5 Days / 4 Nights",
      price: "₹27,999",
      desc: "Snow valleys and scenic landscapes.",
    },
    {
      title: "North East Group Explorer",
      image:
        "https://media.istockphoto.com/id/1945388523/photo/tourists-enjoy-a-ropeway-cable-car-gondola-ride-over-gangtok-city-during-sunset-amazing.jpg?s=612x612&w=0&k=20&c=XsViY_qqh_9-QDRqEL05VDHx_-xSWwPaJWmWkTvOe6Y=",
      days: "8 Days / 7 Nights",
      price: "₹41,999",
      desc: "Unexplored nature and vibrant cultures.",
    },
    {
      title: "Char Dham Yatra Group",
      image:
        "https://media.istockphoto.com/id/1190683564/photo/kedarnath-dham-uttrakhand.webp?a=1&b=1&s=612x612&w=0&k=20&c=ifx54XwhWdC4tptxhCmJbZ003K-Bg3IvZU0_mXHyvXk=",
      days: "10 Days / 9 Nights",
      price: "₹49,999",
      desc: "Sacred pilgrimage journey with group support.",
    },
    {
      title: "Vaishno Devi Group Tour",
      image:
        "https://images.unsplash.com/photo-1719377678477-0fb3638ec482?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dmFpc2hubyUyMGRldml8ZW58MHx8MHx8fDA%3D",
      days: "4 Days / 3 Nights",
      price: "₹16,999",
      desc: "Spiritual tour with guided arrangements.",
    },
    {
      title: "Leh Ladakh Group Tour",
      image:
        "https://images.unsplash.com/photo-1641796562024-cc00f1bcbd30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fExlaCUyMExhZGFraCUyMEdyb3VwJTIwVG91cnxlbnwwfHwwfHx8MA%3D%3D",
      days: "7 Days / 6 Nights",
      price: "₹39,999",
      desc: "High-altitude adventure with group bonding.",
    },
    {
      title: "South India Group Temple Tour",
      image:
        "https://images.unsplash.com/photo-1660463835177-bc6329055a6d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U291dGglMjBJbmRpYSUyMEdyb3VwJTIwVGVtcGxlJTIwVG91cnxlbnwwfHwwfHx8MA%3D%3D",
      days: "8 Days / 7 Nights",
      price: "₹32,999",
      desc: "Cultural and spiritual exploration.",
    },
    {
      title: "Jim Corbett Group Safari",
      image:
        "https://images.unsplash.com/photo-1542085215-673021bf5caa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEppbSUyMENvcmJldHQlMjBHcm91cCUyMFNhZmFyaXxlbnwwfHwwfHx8MA%3D%3D",
      days: "3 Days / 2 Nights",
      price: "₹14,999",
      desc: "Wildlife safari and jungle adventure.",
    },
  ];

  return (
    <>
      <Header />

      <section className="group-page">
        <div className="group-header">
          <h1>Group Tour Packages</h1>
          <p>Travel together, create memories forever</p>
        </div>

        <div className="group-grid">
          {packages.map((pkg, index) => (
            <div className="group-card" key={index}>
              <img src={pkg.image} alt={pkg.title} />

              <div className="group-content">
                <h3>{pkg.title}</h3>
                <p className="desc">{pkg.desc}</p>

                <div className="group-info">
                  <span>⏱ {pkg.days}</span>
                  <span>💰 Starts from {pkg.price}</span>
                </div>

                <button
                  className="group-btn"
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

export default GroupTours;
