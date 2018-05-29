import React from 'react'
import PropTypes from 'prop-types'

import Product from './Product'

const ProductItem = ({ product, onAddToCartClick }) => (
	<div style={{ marginBottom: 20 }}>
		<Product
			title={product.title}
			price={product.price}
			quantity={product.quantity}
		/>
		<button
			onClick={onAddToCartClick}
			disabled={product.inventory > 0 ? '' : 'disabled'}
		>
			{product.inventory > 0 ? 'Add to Cart' : 'Sold Out'}
		</button>
	</div>
)

ProductItem.propTypes = {
	product: PropTypes.shape({
		title: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		inventory: PropTypes.number.isRequired
	}).isRequired,
	onAddToCartClick: PropTypes.func.isRequired
}

export default ProductItem