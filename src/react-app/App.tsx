// src/App.tsx

import athleteMain from "./assets/athlete-main.jpg";
import trackAction from "./assets/track-action.jpg";
import estr from "./assets/estr.png";
import iomathletics from "./assets/IOM-Athletics-Logo.png";
import manxharriers from "./assets/manx_harriers.jpg";
import sps from "./assets/SPS.png";
import themeadows from "./assets/the_meadows.jpg";
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
            <h4>My Journey</h4>
            <p>
            My journey as a 100m sprinter is just getting started, and I'm tackling every challenge with fierce determination. As a proud member of the Manx Harriers, I thrive on pushing my limits. My personal best of 12.6s isn't just a number—it's a benchmark, and I'm on a mission to bring that time down with every training session.<br/>
            <h4>My Goals</h4>
            I am focused on disciplined training to refine my form and technique, with the clear objective of lowering my personal best. My ultimate goal is not only to achieve my own success but also to inspire others through my dedication and progress on the track.
            </p>
          </div>
        </div>
      </div>
      <footer className="main-footer">

  <div className="affiliate-logos">
  <a href="https://estr.im/" target="_blank" title="ESTR">
    <img src={estr} alt="ESTR" />
  </a>
  <a href="https://iomathletics.com/" target="_blank" title="IOM Athletics">
    <img src={iomathletics} alt="IOM Athletics" />
  </a>
  <a href="http://www.manxharriers.com/" target="_blank" title="Manx Harriers">
    <img src={manxharriers} alt="Manx Harriers" />
  </a>
  <a href="https://performance08.wixsite.com/spsiom" target="_blank" title="SPS">
    <img src={sps} alt="SPS" />
  </a>
  <a href="https://www.facebook.com/themeadowiom/" target="_blank" title="The Meadows">
    <img src={themeadows} alt="The Meadows" />
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
