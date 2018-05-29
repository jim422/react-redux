import React from 'react'
import ProtoTypes from 'prop-types'

const Product = ({ price, quantity, title }) => (
	<div>
		{title} - &#36; {price} { quantity ? `x${quantity}` : null }
	</div>
)

Product.prototype = {
	title: ProtoTypes.string,
	price: ProtoTypes.number,
	quantity: ProtoTypes.number
}

export default Product