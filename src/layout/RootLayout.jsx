import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

function RootLayout() {
	return (
		<div className='wrapper'>
			{/* header section*/}
			<header>
				<div className="container">
					<div className="logo">audiophlie</div>
					{/* navbar section*/}
					<nav>
						<li><NavLink to='/'>home</NavLink></li>
						<li><NavLink to='headphones'>headphones</NavLink></li>
						<li><NavLink to="speakers">speakers</NavLink></li>
						<li><NavLink to="earphones">earphones</NavLink></li>
					</nav>
					<div className="header-cart">
						<i className="fa-solid fa-cart-shopping"></i>
					</div>
				</div>
			</header>
			{/* main section */}
			<main>
				<Outlet />
			</main>
			{/* footer section */}
			<footer>
				<div className="container">
					<div className="footer-navbar">
						<div className="logo">audiophlie</div>
						{/* navbar section*/}
						<nav>
							<li><NavLink to='/'>home</NavLink></li>
							<li><NavLink to='headphones'>headphones</NavLink></li>
							<li><NavLink to="speakers">speakers</NavLink></li>
							<li><NavLink to="earphones">earphones</NavLink></li>
						</nav>
					</div>
					<div className="footer-main">
						<p>
							Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
						</p>
						<div className="social-networks">
							<i className='fab fa-facebook'></i>
							<i className='fab fa-twitter'></i>
							<i className='fab fa-instagram'></i>
						</div>
					</div>
					<div className="footer-end">
						<p>Created by Muhammaddiyor</p>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default RootLayout