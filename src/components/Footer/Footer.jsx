import React from "react";
import "./Footer.css";
import Accordion from "react-bootstrap/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const LOGO = process.env.PUBLIC_URL + "/images/TasteBite.png";
  return (
    <div className="footer-box">
      <div className="footer-top">
        <div className="footer-first-part">
          <div className="footer-logo">
            <img src={LOGO}></img>
          </div>
          <div className="footer-text">
            "On the other hand we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment"
          </div>
        </div>
        <div className="footer-second-part">
          <div className="footer-links">
            <div className="links">
              <div>
                <h5>Tastebite</h5>
                <a>About Us</a>
                <a>Careers</a>
                <a>Contact Us</a>
                <a>Feedback</a>
              </div>
              <div>
                <h5>Legal</h5>
                <a>Terms</a>
                <a>Conditions</a>
                <a>Cookies</a>
                <a>Copyright</a>
              </div>
              <div>
                <h5>Follow</h5>
                <a>Facebook</a>
                <a>Twitter</a>
                <a>Instagram</a>
                <a>Youtube</a>
              </div>
            </div>
            <Accordion className="custom-accordion" defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Tastebite</Accordion.Header>
                <Accordion.Body className="links">
                  <a>About Us</a>
                  <a>Careers</a>
                  <a>Contact Us</a>
                  <a>Feedback</a>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Legal</Accordion.Header>
                <Accordion.Body className="links">
                  <a>Terms</a>
                  <a>Conditions</a>
                  <a>Cookies</a>
                  <a>Copyright</a>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Follow</Accordion.Header>
                <Accordion.Body className="links">
                  <a>Facebook</a>
                  <a>Twitter</a>
                  <a>Instagram</a>
                  <a>Youtube</a>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-social">
          <FontAwesomeIcon icon={faFacebook} size="2x" color=" #888888" />
          <FontAwesomeIcon icon={faTwitter} size="2x" color=" #888888" />
          <FontAwesomeIcon icon={faInstagram} size="2x" color=" #888888" />
          <FontAwesomeIcon icon={faYoutube} size="2x" color=" #888888" />
        </div>
        <div className="footer-rights">
          @ 2024 Tastebite - All rights reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
