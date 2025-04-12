import React from 'react';
import './Home.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>DOC AI</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Mission</a></li>
            <li><a href="#">The Team</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Disease Prediction</a></li>
            <li><a href="#">Medicine Information</a></li>
            <li><a href="#">Nutrition Planning</a></li>
            <li><a href="#">IoT Patient Monitoring</a></li>
            <li><a href="#">Doctor Appointments</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Health Articles</a></li>
            <li><a href="#">User Guides</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <ul>
            <li><a href="#">Support</a></li>
            <li><a href="#">Partnerships</a></li>
            <li><a href="#">Media Inquiries</a></li>
            <li><a href="#">Feedback</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 DOC AI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
