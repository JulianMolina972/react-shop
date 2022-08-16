import React from 'react'
import closeIcon from '@icons/icon_close.png';
import '@styles/OrderItem.scss';

const bikeImage = "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

export const OrderItem = () => {
  return (
    <div className="OrderItem">
			<figure>
				<img src={bikeImage} alt="bike" />
			</figure>
			<p>Bike</p>
			<p>$30,00</p>
			<img src={closeIcon} alt="close" />
		</div>
  )
}
