import React from 'react';
import './About.css';

const AboutPage = () => {
  // Data for dynamic rendering
  const approachCards = [
    {
      icon: '🧠',
      title: 'AI-Driven',
      description: 'Our system utilizes machine learning algorithms trained on extensive medical databases to provide accurate health insights and predictions based on user symptoms.'
    },
    {
      icon: '🩺',
      title: 'Medically Informed',
      description: 'We work closely with healthcare professionals to ensure our technology adheres to medical standards and delivers clinically relevant information.'
    },
    {
      icon: '🔄',
      title: 'User-Centered',
      description: 'Every feature is designed with user experience in mind, making advanced healthcare technology intuitive and accessible to everyone.'
    },
    {
      icon: '🔒',
      title: 'Security-Focused',
      description: 'Patient data protection is paramount. Our platform employs robust security measures to ensure sensitive health information remains private and protected.'
    }
  ];

  const teamMembers = [
    {
      name: 'Prince Kumar Singh',
      role: 'Project Lead & Developer',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Poonam Kumari',
      role: 'Engineer',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Muhriz Ali',
      role: 'Medical Advisor',
      image: '/api/placeholder/300/300'
    },
  ];

  const projectStats = [
    { number: '15K+', label: 'Medical Data Points' },
    { number: '98%', label: 'Prediction Accuracy' },
    { number: '5', label: 'Integrated Services' },
    { number: '24/7', label: 'Availability' }
  ];

  const techStack = [
    { icon: '🧠', name: 'TensorFlow' },
    { icon: '🐍', name: 'Python' },
    { icon: '⚛️', name: 'React' },
    { icon: '☁️', name: 'AWS' },
    { icon: '📊', name: 'MongoDB' },
    { icon: '📡', name: 'IoT Sensors' },
  ];

  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header">
        <h1>About <span>DOC AI</span></h1>
        <p>Revolutionizing healthcare through AI innovation and technology</p>
      </section>
      
      {/* Vision Section */}
      <section className="vision-section">
        <div className="vision-container">
          <div className="vision-content">
            <h2 className="section-title">Our Vision</h2>
            <p className="section-text">DOC AI emerged from a simple yet powerful idea: healthcare enhanced by artificial intelligence can be more accurate, accessible, and personalized. Our vision is to create a world where quality healthcare is available to everyone through technology.</p>
            <p className="section-text">We're developing an integrated platform that combines AI-driven disease prediction, smart medicine recommendations, personalized nutrition planning, and IoT monitoring into one seamless experience. By bridging the gap between patients and healthcare providers, we aim to transform how people engage with and receive medical care.</p>
            <p className="section-text">Whether you're a patient seeking more convenient healthcare options or a medical professional looking for innovative tools to enhance your practice, DOC AI is designed with your needs in mind.</p>
          </div>
          <div className="vision-image">
            <img src="/api/placeholder/450/300" alt="DOC AI Vision" />
          </div>
        </div>
      </section>
      
      {/* Innovation Approach */}
      <section className="innovation-approach">
        <div className="approach-container">
          <h2 className="section-title">Our Approach to Healthcare Innovation</h2>
          <p className="section-text">We believe in healthcare technology that's both cutting-edge and practical. Our development process combines technical expertise with real-world medical insights to create solutions that make a difference.</p>
          
          <div className="approach-cards">
            {approachCards.map((card, index) => (
              <div className="approach-card" key={index}>
                <div className="approach-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="team-section">
        <div className="team-header">
          <h2>The Team Behind DOC AI</h2>
          <p>A diverse group of developers, healthcare specialists, and designers working together to create the future of digital healthcare</p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <img className="member-image" src={member.image} alt={`${member.name}`} />
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Project Stats */}
      <section className="project-stats">
        <div className="stats-container">
          <h2 className="section-title">DOC AI: By the Numbers</h2>
          <p className="section-text">Our progress so far in building a next-generation healthcare solution</p>
          
          <div className="stats-grid">
            {projectStats.map((stat, index) => (
              <div className="stat-item" key={index}>
                <div className="stat-number">{stat.number}</div>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Technology Stack */}
      <section className="tech-stack">
        <div className="tech-container">
          <div className="tech-header">
            <h2>Our Technology Stack</h2>
            <p className="section-text">The powerful technologies behind our healthcare platform</p>
          </div>
          
          <div className="tech-grid">
            {techStack.map((tech, index) => (
              <div className="tech-item" key={index}>
                <div className="tech-icon">{tech.icon}</div>
                <p className="tech-name">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Join/Contact Section */}
      <section className="join-section">
        <h2>Join the Healthcare Revolution</h2>
        <p>Whether you're interested in a partnership, want to provide feedback, or just want to learn more about DOC AI, we'd love to connect with you.</p>
        <div className="action-buttons">
          <a href="#" className="primary-btn">Contact Us</a>
          <a href="#" className="secondary-btn">View Demo</a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;