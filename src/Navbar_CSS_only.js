import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
	const [showLinks, setShowLinks] = useState(false);

	return (
		<nav className='nav-center'>
			<div className='nav-header'>
				<img src={logo} alt='Logo' className='logo' />
				<button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
					<FaBars />
				</button>
			</div>
			<ul className={`links ${showLinks ? 'show-container' : ''}`}>
				{links.map((link) => {
					const { id, url, text } = link;
					return (
						<li key={id}>
							<a href={url}>{text}</a>
						</li>
					);
				})}
			</ul>
			<ul className='social-icons'>
				{social.map((link) => {
					const { id, url, icon } = link;
					return (
						<li key={id}>
							<a href={url}>{icon}</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Navbar;
