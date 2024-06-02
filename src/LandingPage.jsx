import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <img src="https://th.bing.com/th/id/OIP.lG8hsaKm32EqhdkxJ17AgwHaEf?w=276&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Logo" className="logo" />
       <h1 style={{fontWeight:"900",fontSize:"3rem",color:"black"}}>Depression Detection System</h1>
        <nav>
         
          <ul>
            <li><a href="https://www.who.int/news-room/fact-sheets/detail/mental-health-strengthening-our-response">Learn about mental health</a></li>
            {/* <li><a href="#">Resources</a></li>
            <li><a href="#">About Us</a></li> */}
          </ul>
          <button className="login-btn">LOG IN</button>
        </nav>
      </header>
      <main>
        <div className="content">
          <h1>Mental Health Test</h1>
          <p>
            Online screening is one of the quickest and easiest ways to determine whether you are experiencing symptoms of a mental health condition.
            <br />
            <strong>Mental health conditions, such as depression or anxiety, are real, common and treatable. And recovery is possible.</strong>
          </p>
          <Link to="/questionnaire" className="cta-btn">TAKE A MENTAL HEALTH TEST</Link>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
