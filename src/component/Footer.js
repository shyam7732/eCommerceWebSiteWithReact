import React from "react";
import "./Css/footer.css"
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h1>Ecommerce</h1>
            <p>Your slogan or tagline here</p>
          </div>
          <div className="footer-links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/ecommerce">Products</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <p>Follow us on social media:</p>
            <div className="social-icons">
              <Link to="#">
                <FacebookIcon/> 
              </Link>
              <Link to="#">
               <TwitterIcon/>
              </Link>
              <Link to="#">
                <InstagramIcon/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
