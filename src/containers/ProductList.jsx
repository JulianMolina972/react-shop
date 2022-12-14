import React from 'react';
import useGetProducts from '@hooks/useGetProducts';
import { ProductItem } from '@components/ProductItem';
import '@styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

export const ProductList = () => {
	const products = useGetProducts(API);
	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product => (
					<ProductItem key={product.id} product={product} />
				))}
			</div>
		</section>
	);
}

