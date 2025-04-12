import React from 'react';
import { Link } from 'react-router-dom';
import DOCAI from '../assets/image/DocHome.png';
import './Home.css';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Welcome to <span>DOC AI</span>
            <br />
            Your Intelligent Healthcare Partner
          </h1>
          <p>
            Experience next-generation AI-powered healthcare with personalized disease prediction, smart medicine recommendations, nutrition planning, and seamless doctor appointments.
          </p>
          <a href="#" className="cta-button">Get Started</a>
        </div>
        <div className="hero-image">
          <img src={DOCAI} alt="AI Doctor Illustration" height="800px" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="section-header">
          <h2>Intelligent Healthcare Solutions</h2>
          <p>
            DOC AI combines advanced artificial intelligence with medical expertise to deliver comprehensive healthcare services tailored to your needs.
          </p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🧠</div>
            <h3>AI Disease Prediction</h3>
            <p>
              Input your symptoms and let our advanced AI analyze and predict potential conditions based on comprehensive medical databases.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💊</div>
            <h3>Smart Medicine Recommendations</h3>
            <p>
              Receive AI-powered medicine recommendations with detailed information on dosage, side effects, and interactions.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🥗</div>
            <h3>Personalized Nutrition</h3>
            <p>
              Get customized diet plans based on your health conditions, preferences, and nutritional requirements.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>IoT Patient Monitoring</h3>
            <p>
              Benefit from real-time health tracking through advanced IoT devices, ensuring continuous care and monitoring.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📅</div>
            <h3>Doctor Appointments</h3>
            <p>
              Easily book virtual or in-person consultations with qualified healthcare professionals through our platform.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Seamless Integration</h3>
            <p>
              Access all your healthcare needs in one place with our user-friendly interface and integrated services.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="section-header">
          <h2>How DOC AI Works</h2>
          <p>
            Our platform simplifies healthcare management through an intuitive process designed with you in mind.
          </p>
        </div>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Create Your Profile</h3>
            <p>
              Sign up and enter your basic health information to personalize your experience.
            </p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Describe Your Symptoms</h3>
            <p>
              Input your symptoms or health concerns for AI-powered analysis and recommendations.
            </p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Receive Insights</h3>
            <p>
              Get detailed health insights, potential diagnoses, and treatment suggestions.
            </p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Connect With Doctors</h3>
            <p>
              Book appointments with specialists based on your health needs and preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="section-header">
          <h2>What Our Users Say</h2>
          <p>
            Hear from people who have experienced the benefits of DOC AI's intelligent healthcare solutions.
          </p>
        </div>
        <div className="testimonials-slider">
          <p className="testimonial-quote">
            "DOC AI's disease prediction was incredibly accurate. The platform suggested I consult a specialist for what I thought was just fatigue, and it turned out to be a condition that required treatment. The early detection made all the difference."
          </p>
          <p className="testimonial-author">- Sarah Johnson, Patient</p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Transform Your Healthcare Experience Today</h2>
        <p>
          Join thousands of users who have already discovered the benefits of AI-powered healthcare management with DOC AI.
        </p>
        <a href="#" className="cta-button">Get Started Now</a>
      </section>

    </>
  );
};

export default Home;
