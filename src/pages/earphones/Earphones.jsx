import React from 'react'

import './Earphones.css'

function Earphones() {
	return (
		<div className='wrapper'>
			<div className="header-earphones">
				<h1>Earphones</h1>
			</div>


			{/* cards:shop item */}
			<section className="cards">
				<div className="container">
					<div className="card">
						<img src="./images/card headphones.png" alt="headphones" />
						<h2 className="title">headphones</h2>
						<div className="shop">
							<p>shop</p>
							<i className='fas fa-arrow-right'></i>
						</div>
					</div>
					<div className="card">
						<img src="./images/card headphones.png" alt="headphones" />
						<h2 className="title">headphones</h2>
						<div className="shop">
							<p>shop</p>
							<i className='fas fa-arrow-right'></i>
						</div>
					</div>
					<div className="card">
						<img src="./images/card headphones.png" alt="headphones" />
						<h2 className="title">headphones</h2>
						<div className="shop">
							<p>shop</p>
							<i className='fas fa-arrow-right'></i>
						</div>
					</div>
				</div>
			</section>

			<div className='wrapper'>
			{/* bring earphones section */}
			<section className="bring-earphones">
					<div className="container">
						<div className="about">
							<h1>Bringing you the <span>best</span> audio gear</h1>
							<p>
								Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
							</p>
						</div>
						<div className="image">
							<img src="./images/Bitmap.png" alt="" />
						</div>
					</div>
				</section>
		</div>
		</div>
	)
}

export default Earphones