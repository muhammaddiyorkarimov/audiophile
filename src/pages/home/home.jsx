import React from 'react'

// css
import './Home.css'
// components
import BringAudioGear from '../../components/bringAudioGear/ringAudioGear'
import ShopProduct from '../../components/shopProduct/ShopProduct'

function Home() {
	return (
		<div className='Home'>
			{/* header product */}
			<section className='header-product'>
				<div className="container">
					<div className="about">
						<span>new product</span>
						<h1>XX99 Mark II <br /> Headphones</h1>
						<p>
							Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
						</p>
						<button>see product</button>
					</div>
				</div>
			</section>

			{/* cards:shop item */}
			<ShopProduct/>

			{/* zx9 speaker */}
			<section className="zx9speaker">
				<div className="container">
					<div className="image">
						<img src="./images/zx9 speaker.png" alt="" />
					</div>
					<div className="about">
						<h1>zx9 speaker</h1>
						<p>
							Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
						</p>
						<button>see product</button>
					</div>
				</div>
			</section>

			{/* zx7 speaker */}
			<div className="zx7speaker">
				<div className="container">
					<div className="about image">
						<h1>zx7 speaker</h1>
						<button>see product</button>
					</div>
				</div>
			</div>

			{/* YX1 EARPHONES */}
			<div className="yx1earphones">
				<div className="container">
					<div className="image">
						<img src="./images/yx1 earphones.png" alt="" />
					</div>
					<div className="about">
						<h1>YX1 EARPHONES</h1>
						<button>see product</button>
					</div>
				</div>
			</div>
			{/* bring audio gear */}
			<BringAudioGear/>
		</div>
	)
}

export default Home