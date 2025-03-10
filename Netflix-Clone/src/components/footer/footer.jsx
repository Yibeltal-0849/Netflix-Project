import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./footer.css";

const footer = () => {
  return (
    <div className="footer-outer-container">
      <div className="footer-inner-container">
        <div className="footer-icons">
          <FacebookIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className="footer_data">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Invester Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of use</li>
              <li> Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privace</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="service-code">
          <p>Service code</p>
        </div>
        <div className="copy-write"> &copy; 1997-2024 Netflix, Inc.</div>
      </div>
    </div>
  );
};

export default footer;
