// src/App.tsx

import athleteMain from "./assets/athlete-main.jpg";
import trackAction from "./assets/track-action.jpg";
import "./App.css";

function App() {
  return (
    <div className="profile-bg" style={{ backgroundImage: `url(${trackAction})` }}>
      <div className="profile-card horizontal-layout">
        <img src={athleteMain} alt="Haariyan David" className="profile-img-large" />
        <div className="profile-info">
          <h1 className="athlete-name">Haariyan David</h1>
          <div className="profile-details">
            <p><strong>Club:</strong> Manx Harriers</p>
            <p><strong>Event:</strong> 100m Sprint</p>
            <p><strong>Personal Best:</strong> 12.6s</p>
          </div>
          <div className="about-me">
            <h3>About Me</h3>
            <p>
              I am a dedicated athlete specializing in the 100m sprint. As a proud member of Manx Harriers, I strive for excellence on and off the track. My passion for athletics drives me to continually improve and inspire others.
            </p>
          </div>
        </div>
      </div>
      <footer className="main-footer">

  <div className="affiliate-logos">
  <a href="https://estr.im/" target="_blank" title="ESTR">
    <img src="/assets/logos/estr.jpg" alt="ESTR" />
  </a>
  <a href="https://iomathletics.com/" target="_blank" title="IOM Athletics">
    <img src="/assets/logos/IOM-Athletics-Logo.jpg" alt="IOM Athletics" />
  </a>
  <a href="http://www.manxharriers.com/" target="_blank" title="Manx Harriers">
    <img src="/assets/logos/manx_harriers.jpg" alt="Manx Harriers" />
  </a>
  <a href="https://performance08.wixsite.com/spsiom" target="_blank" title="SPS">
    <img src="/assets/logos/SPS.png" alt="SPS" />
  </a>
  <a href="https://www.facebook.com/themeadowiom/" target="_blank" title="The Meadows">
    <img src="/assets/logos/the_meadows.jpg" alt="The Meadows" />
  </a>
</div>
<div className="footer-text">
    © 2024 Manx Harriers | Follow us on Instagram @manxharriers
  </div>
</footer>
    </div>
  );
}

export default App;
