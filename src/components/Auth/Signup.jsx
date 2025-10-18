import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log("Signup data:", formData);
  };

  return (
    <div className="auth-container">
      <div className="auth-content">
        <div className="auth-header">
          <div className="auth-logo">
            <div className="pyramid-loader">
              <div className="wrapper">
                <span className="side side1"></span>
                <span className="side side2"></span>
                <span className="side side3"></span>
                <span className="side side4"></span>
                <span className="shadow"></span>
              </div>
            </div>
            <h2>EVANTA</h2>
          </div>
          <h1>Create Account</h1>
          <p>Join us and start your journey</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
            <div className="input-line"></div>
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <div className="input-line"></div>
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            <div className="input-line"></div>
          </div>

          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              required
            />
            <div className="input-line"></div>
          </div>

          <div className="form-options">
            <label className="terms">
              <input type="checkbox" required />
              <span>I agree to the Terms & Conditions</span>
            </label>
          </div>

          <button type="submit" className="auth-button">
            <span className="button-glow"></span>
            <span className="button-content">Create Account</span>
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="auth-link">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
