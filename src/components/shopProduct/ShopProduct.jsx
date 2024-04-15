import React from 'react'

function ShopProduct() {
	return (
		<div className='wrapper'>
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
						<img src="./images/card speakers.png" alt="speakers" />
						<h2 className="title">speakers</h2>
						<div className="shop">
							<p>shop</p>
							<i className='fas fa-arrow-right'></i>
						</div>
					</div>
					<div className="card">
						<img src="./images/card earphones.png" alt="earphones" />
						<h2 className="title">earphones</h2>
						<div className="shop">
							<p>shop</p>
							<i className='fas fa-arrow-right'></i>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default ShopProduct