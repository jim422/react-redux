import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToCart, getAllProducts } from '../actions/index'
import { getVisibleProduct } from '../reducers/products'

import ProductItem from '../components/ProductItem'
import ProductList from '../components/ProductList'

const ProductContainer = ({ products, addToCart }) => (
	<ProductList title="Products">
		{products.map(product =>
			<ProductItem
				key={product.id}
				product={product}
				onAddToCartClick={() => addToCart(product.id)}
			/>
		)}
	</ProductList>
)

ProductContainer.propTypes = {
	products: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		inventory: PropTypes.number.isRequired
	})).isRequired,
	addToCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	products: getVisibleProduct(state.products)
})

const mapDispatchToProps = (dispatch) => ({
	addToCart: (id) => dispatch(addToCart(id)),
	getAllProducts: dispatch(getAllProducts())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductContainer)
