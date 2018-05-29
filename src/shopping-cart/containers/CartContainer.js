import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout } from '../actions/index'
import { getTotal, getCartProducts } from '../reducers/index'
import Cart from '../components/Cart'

const CartContainer = ({ products, total, checkout }) => (
	<Cart
		products={products}
		total={total}
		onCheckoutClick={() => checkout(products)}
	/>
)

CartContainer.propTypes = {
	products: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		quantity: PropTypes.number.isRequired
	})).isRequired,
	total: PropTypes.string,
	checkout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	products: getCartProducts(state),
	total: getTotal(state)
})

const mapDispatchToProps = (dispatch) => ({
	checkout: (products) => dispatch(checkout(products))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CartContainer)