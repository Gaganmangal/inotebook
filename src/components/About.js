// src/About.js
import React from 'react';
import '../About.css'; // Ensure the path is correct

const About = () => {
  return (
    <div className="container">
      <header className="header">
        <h1 className="header-title">About Us</h1>
      </header>
      <div className="content">
        <section className="section">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-text">
            Our mission is to provide the best experience for our users by delivering high-quality, user-friendly applications that solve real-world problems.
          </p>
        </section>
        <section className="section">
          <h2 className="section-title">Our Team</h2>
          <div className="profile-container">
            {/* Profile 1 */}
            <div className="profile-card">
              <img 
                src="https://i.pinimg.com/564x/07/64/93/07649350f0d864cdbedb0f2d701d0340.jpg" 
                alt="Employee 1" 
                className="profile-image" 
              />
              <h4 className="profile-name">John Doe</h4>
              <p className="profile-role">Lead Developer</p>
            </div>
            {/* Profile 2 */}
            <div className="profile-card">
              <img 
                src="https://i.pinimg.com/564x/07/64/93/07649350f0d864cdbedb0f2d701d0340.jpg" 
                alt="Employee 2" 
                className="profile-image" 
              />
              <h4 className="profile-name">Jane Smith</h4>
              <p className="profile-role">Project Manager</p>
            </div>
            {/* Profile 3 */}
            <div className="profile-card">
              <img 
                src="https://i.pinimg.com/564x/07/64/93/07649350f0d864cdbedb0f2d701d0340.jpg" 
                alt="Employee 3" 
                className="profile-image" 
              />
              <h4 className="profile-name">Alice Johnson</h4>
              <p className="profile-role">UX/UI Designer</p>
            </div>
            {/* Profile 4 */}
            <div className="profile-card">
              <img 
                src="https://i.pinimg.com/564x/07/64/93/07649350f0d864cdbedb0f2d701d0340.jpg" 
                alt="Employee 4" 
                className="profile-image" 
              />
              <h4 className="profile-name">Bob Brown</h4>
              <p className="profile-role">Backend Developer</p>
            </div>
          </div>
        </section>
        <section className="section">
          <h2 className="section-title">Company History</h2>
          <p className="section-text">
            Founded in 2010, our company has grown from a small startup into a leading player in the tech industry. Our journey has been marked by milestones and achievements, and we continue to push the boundaries of innovation.
          </p>
        </section>
        <section className="section">
          <h2 className="section-title">Core Values</h2>
          <ul className="section-text">
            <li>Integrity: We adhere to the highest ethical standards in all our business dealings.</li>
            <li>Innovation: We embrace change and strive to deliver creative solutions.</li>
            <li>Customer Focus: We prioritize our customers’ needs and work towards exceeding their expectations.</li>
            <li>Excellence: We are committed to delivering high-quality results in every project.</li>
          </ul>
        </section>
        <section className="section">
          <h2 className="section-title">Our Services</h2>
          <p className="section-text">
            We offer a range of services including web development, mobile application development, and consulting. Our team is equipped to handle projects of various scales and complexities.
          </p>
        </section>
        <section className="section">
          <h2 className="section-title">Testimonials</h2>
          <blockquote className="section-text">
            <p>"The team at this company exceeded our expectations. Their professionalism and expertise were evident throughout the project."</p>
            <footer>- Jane Doe, CEO of TechCorp</footer>
          </blockquote>
          <blockquote className="section-text">
            <p>"A fantastic experience from start to finish. The final product was exactly what we needed and more."</p>
            <footer>- John Smith, Founder of InnovateNow</footer>
          </blockquote>
        </section>
        <section className="section">
          <h2 className="section-title">Careers</h2>
          <p className="section-text">
            We are always on the lookout for talented individuals to join our team. If you are passionate about technology and innovation, check out our <a href="/careers" className="link">careers page</a> for current openings.
          </p>
        </section>
        <section className="section">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-text">
            For any inquiries, please reach out to us at <a href="mailto:info@example.com" className="link">info@example.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
