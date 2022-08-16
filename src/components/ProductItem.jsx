import React from 'react'
import addToCart from '@icons/bt_add_to_cart.svg'
import '@styles/ProductItem.scss';

const bikeImage = "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

export const ProductItem = () => {
  return (
    <div className="ProductItem">
			<img src={bikeImage} alt="" />
			<div className="product-info">
				<div>
					<p>$120,00</p>
					<p>Bike</p>
				</div>
				<figure>
					<img src={addToCart} alt="add to card" />
				</figure>
			</div>
		</div>
  )
}
