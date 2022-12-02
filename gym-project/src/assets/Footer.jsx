import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <h1>are you ready for changes?</h1>
          <button className="footer-btn">join us</button>
        </div>
        <div className="footer-bottom">
          <div className="footer-item">
            <div className="footer-hours">
              <h3>opening hours</h3>
              <p>monday - friday: 6:00 - 22:00</p>
              <p>saturday : 9:00 - 19:00</p>
              <p>sunday : 9:00 - 14:00</p>
            </div>
            <div className="footer-contact">
              <h3>contact</h3>
              <p>phone: +48 123 456 789</p>
              <p>email: floreascafitness@gmail.com</p>
              <p>address: strada vrancioa 5, Bucharest, Romania </p>
            </div>
          </div>
          <div className="footer-socials">
            <h3>follow us</h3>
            <div className="footer-socials-icons">
              <i className="fab fa-facebook-f">
                <FaFacebookF />
              </i>
              <i className="fab fa-instagram">
                <FaInstagram />
              </i>
              <i className="fab fa-twitter">
                <FaTwitter />
              </i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
