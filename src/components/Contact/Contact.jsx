import React, { useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faClock,
  faHeadset,
  faBuilding,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form data:", formData);
  };

  const contactInfo = [
    {
      department: "Customer Support",
      icon: faHeadset,
      email: "support@evanta.com",
      phone: "+1 (555) 123-4567",
      hours: "24/7",
    },
    {
      department: "Sales",
      icon: faBuilding,
      email: "sales@evanta.com",
      phone: "+1 (555) 234-5678",
      hours: "Mon-Fri, 9AM-6PM",
    },
    {
      department: "Technical Support",
      icon: faUserTie,
      email: "tech@evanta.com",
      phone: "+1 (555) 345-6789",
      hours: "Mon-Sun, 8AM-10PM",
    },
    {
      department: "General Inquiries",
      icon: faEnvelope,
      email: "info@evanta.com",
      phone: "+1 (555) 456-7890",
      hours: "Mon-Fri, 9AM-5PM",
    },
  ];

  return (
    <div className="auth-container">
      {/* Grid Lines */}
      <div className="grid-lines">
        <div className="horizontal-lines"></div>
        <div className="vertical-lines"></div>
        {[...Array(20)].map((_, i) => (
          <div key={i} className="grid-line"></div>
        ))}
        {/* Moving Points */}
        <div className="moving-point horizontal"></div>
        <div className="moving-point horizontal"></div>
        <div className="moving-point horizontal"></div>
        <div className="moving-point horizontal"></div>
        <div className="moving-point horizontal"></div>
        <div className="moving-point vertical"></div>
        <div className="moving-point vertical"></div>
        <div className="moving-point vertical"></div>
        <div className="moving-point vertical"></div>
        <div className="moving-point vertical"></div>
      </div>

      <div className="contact-container">
        <div className="contact-header">
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
          <h1>Contact Us</h1>
          <p>Get in touch with our team</p>
        </div>

        <div className="contact-content">
          <div className="contact-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-card">
                <h4>
                  <div className="icon-wrapper">
                    <FontAwesomeIcon
                      icon={info.icon}
                      className="department-icon"
                    />
                  </div>
                  {info.department}
                </h4>
                <div className="contact-info">
                  <div className="contact-item">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="contact-icon"
                    />
                    <a href={`mailto:${info.email}`}>{info.email}</a>
                  </div>
                  <div className="contact-item">
                    <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                    <a href={`tel:${info.phone}`}>{info.phone}</a>
                  </div>
                  <div className="contact-item">
                    <FontAwesomeIcon icon={faClock} className="contact-icon" />
                    <span>{info.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows="4"
              ></textarea>
            </div>

            <button type="submit" className="auth-button">
              <span className="button-glow"></span>
              <span className="button-content">Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
