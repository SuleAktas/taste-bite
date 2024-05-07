import React from "react";
import "./Footer.css";
import Accordion from "react-bootstrap/Accordion";

function Footer() {
  return (
    <div className="footer-box">
      <div className="footer-logo"></div>
      <div className="footer-text">
        "On the other hand we denounce with righteous indignation and dislike
        men who are so beguiled and demoralized by the charms of pleasure of the
        moment"
      </div>
      <div className="footer-links">
        <Accordion className="custom-accordion" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Tastebite</Accordion.Header>
            <Accordion.Body>
              <span>About Us</span>
              <span>Careers</span>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Legal</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <div className="footer-social"></div>
      <div className="footer-rights">
        @ 2024 Tastebite - All rights reserved
      </div>
    </div>
  );
}

export default Footer;
