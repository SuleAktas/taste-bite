import React from 'react';
import './Header.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Search from './components/Search/Search';

function Header() {
	const LOGO = process.env.PUBLIC_URL + '/images/TasteBite.png';

	const [isOpen, setIsOpen] = useState(false);

	const openNav = () => {
		setIsOpen(true);
	};

	const closeNav = () => {
		setIsOpen(false);
	};
	const [showSearch, setShowSearchComponent] = useState(false);

	const handleClick = () => {
		setShowSearchComponent(true);
	};

	const handleClose = () => {
		setShowSearchComponent(false);
	};

	return (
		<div className="header-box">
			<img className="header-logo" src={LOGO} alt="logo"></img>
			<div className="links-wider-page">
				<Link to="/">Home</Link>
				<Link to="/blog">Blog</Link>
				<Link to="/categories">Categories</Link>
				<Link to="/buy">Buy</Link>
			</div>
			<div className="wider-page-icons">
				<FontAwesomeIcon
					icon={faSearch}
					size="xl"
					onClick={handleClick}
					style={{
						cursor: 'pointer',
					}}
				/>
				<FontAwesomeIcon icon={faCircleUser} size="xl" />
			</div>
			<div className="header-buttons">
				<FontAwesomeIcon
					icon={faSearch}
					size="xl"
					onClick={handleClick}
					style={{
						cursor: 'pointer',
					}}
				/>
				<FontAwesomeIcon icon={faBars} size="xl" onClick={openNav} />
			</div>

			{showSearch && (
				<div className="search-overlay">
					<div className="search-container">
						<Search onClose={handleClose} />
					</div>
				</div>
			)}
			<div
				id="mySidenav"
				className={`sidenav ${isOpen ? 'open' : ''}`}
				style={{ width: isOpen ? '250px' : '0' }}
			>
				<button className="closebtn " onClick={closeNav}>
					&times;
				</button>
				<Link to="/">Home</Link>
				<Link to="/blog">Blog</Link>
				<Link to="/categories">Categories</Link>
				<Link to="/buy">Buy</Link>
			</div>
		</div>
	);
}

export default Header;
