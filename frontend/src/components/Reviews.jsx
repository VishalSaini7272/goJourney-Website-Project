import React, { useState } from "react";
import "./Reviews.css";

const reviews = [
  {
    name: "Amit Sharma",
    city: "Delhi",
    review:
      "Our Goa trip with goJourney was perfectly planned. Beachside hotels, smooth transfers, and great local support made the journey stress-free.",
    rating: 5,
  },
  {
    name: "Neha Verma",
    city: "Bangalore",
    review:
      "The Kerala backwater tour was peaceful and beautifully organized. Houseboat stay and local experiences were exactly as promised.",
    rating: 3,
  },
  {
    name: "Rahul Mehta",
    city: "Mumbai",
    review:
      "We booked a Shimla-Manali family tour with goJourney. Snow views, comfortable hotels, and smooth travel made it memorable.",
    rating: 4,
  },
  {
    name: "Pooja Singh",
    city: "Jaipur",
    review:
      "Rajasthan heritage tour was amazing. Jaipur, Jodhpur, and Udaipur were well planned with great guides and heritage stays.",
    rating: 4,
  },
  {
    name: "Sandeep Kumar",
    city: "Chandigarh",
    review:
      "The Leh-Ladakh adventure trip was thrilling and safe. goJourney handled permits, stays, and routes very professionally.",
    rating: 5,
  },
  {
    name: "Anjali Roy",
    city: "Kolkata",
    review:
      "Darjeeling and Gangtok tour was smooth and relaxing. Tea gardens and mountain views were breathtaking.",
    rating: 4,
  },
  {
    name: "Vikram Patel",
    city: "Ahmedabad",
    review:
      "Assam and Meghalaya tour was well coordinated. Local guides, hotels, and transfers were excellent throughout the journey.",
    rating: 5,
  },
  {
    name: "Ramesh Iyer",
    city: "Chennai",
    review:
      "South India temple tour including Rameshwaram and Madurai was spiritually fulfilling and well managed.",
    rating: 4,
  },
  {
    name: "Sunita Joshi",
    city: "Pune",
    review:
      "Varanasi spiritual tour was peaceful and meaningful. Ganga Aarti and boat ride arrangements were perfect.",
    rating: 5,
  },
  {
    name: "Karan Malhotra",
    city: "Gurgaon",
    review:
      "Kashmir tour felt like paradise. Gulmarg and Pahalgam were beautifully planned with great hotel stays.",
    rating: 4,
  },
];

const Reviews = () => {
  const [start, setStart] = useState(0);
  const visibleCards = 3;

  const next = () => {
    setStart((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setStart((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const visibleReviews = [
    ...reviews.slice(start),
    ...reviews.slice(0, start),
  ].slice(0, visibleCards);

  return (
    <div className="reviews-page">
      <h1>Our Happy Clients</h1>
      <p className="sub-text">What our customers say about goJourney</p>

      <div className="reviews-wrapper">
        <button className="arrow" onClick={prev}>
          ❮
        </button>

        <div className="reviews-row">
          {visibleReviews.map((item, index) => (
            <div className="review-card" key={index}>
              <h3>{item.name}</h3>
              <span>{item.city}</span>

              <p className="stars">{"⭐".repeat(item.rating)}</p>

              <p className="review-text">"{item.review}"</p>
            </div>
          ))}
        </div>

        <button className="arrow" onClick={next}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default Reviews;
