import React from 'react';
import './Footer.css';
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
	const LOGO = process.env.PUBLIC_URL + '/images/TasteBite.png';
	return (
		<div className="footer-box">
			<div className="footer-top">
				<div className="footer-first-part">
					<div className="footer-logo">
						<img src={LOGO} alt="logo"></img>
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
								<button className="link-style">About Us</button>
								<button className="link-style">Careers</button>
								<button className="link-style">Contact Us</button>
								<button className="link-style">Feedback</button>
							</div>
							<div>
								<h5>Legal</h5>
								<button className="link-style">Terms</button>
								<button className="link-style">Conditions</button>
								<button className="link-style">Cookies</button>
								<button className="link-style">Copyright</button>
							</div>
							<div>
								<h5>Follow</h5>
								<button className="link-style">Facebook</button>
								<button className="link-style">Twitter</button>
								<button className="link-style">Instagram</button>
								<button className="link-style">Youtube</button>
							</div>
						</div>
						<Accordion className="custom-accordion" defaultActiveKey="0">
							<Accordion.Item eventKey="0">
								<Accordion.Header>Tastebite</Accordion.Header>
								<Accordion.Body className="links">
									<button className="link-style">About Us</button>
									<button className="link-style">Careers</button>
									<button className="link-style">Contact Us</button>
									<button className="link-style">Feedback</button>
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="1">
								<Accordion.Header>Legal</Accordion.Header>
								<Accordion.Body className="links">
									<button className="link-style">Terms</button>
									<button className="link-style">Conditions</button>
									<button className="link-style">Cookies</button>
									<button className="link-style">Copyright</button>
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="2">
								<Accordion.Header>Follow</Accordion.Header>
								<Accordion.Body className="links">
									<button className="link-style">Facebook</button>
									<button className="link-style">Twitter</button>
									<button className="link-style">Instagram</button>
									<button className="link-style">Youtube</button>
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
