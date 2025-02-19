
import React from 'react';
import './insidelanding.css';

const Insidelanding = () => {
  return (
    <div className="about-us-container">
      <h1>ABOUT US</h1>
      <p className="description">
        Tech Star is one of the best software engineering companies in Nigeria. We help individuals, schools, organizations, and government agencies to actualize their tech goals.
      </p>

      <div className='vision-mision'>
        <h2>Vision</h2>
        <h2>Mission</h2>
      </div>

      <div className="vision-mission-container">
        <h2 className='hide-me'>Vision</h2>
        <div className="vision">
          <p>To be the number one tech hub in Nigeria, by creating an enabling environment for businesses to thrive.</p>
        </div>

        <div className="mission">
          <h2 className='hide-me'>Mission</h2>
          <p>To train individuals and organizations in software engineering courses, and guide them through the process of recruitment for their first job.</p>
        </div>
      </div>

      <p className="satisfaction">
        Your satisfaction is our topmost priority; for more enquiries, <a href="/enquiries">click here</a>.
      </p>
    </div>
  );
};

export default Insidelanding;