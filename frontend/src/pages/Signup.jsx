import { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";
import Header from '../components/Header'
import Footer from '../components/Footer'


const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const res = await fetch("http://localhost:5000/api/auth/register", {
      const res = await fetch("https://gojourney-website-project-backend.onrender.com/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Signup Successful! Please Login.");
        setFormData({ name: "", email: "", password: "" });
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log("Server Error", error);
    }
  };

  return (
    <>
    <Header />
    
    <div className="auth-container">
      <div className="auth-box">
        <h2>Sign Up</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button className="btn" type="submit">
            Create Account
          </button>
        </form>

        <p className="switch-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Signup;
