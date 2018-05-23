import PropTypes from 'prop-types'

const Link = ({active, children, onClick}) => (
	<button
		onClick={ onClick }
		disabled={ active }
		style={{
			marginLeft: '4px'
		}}
	>
		{ children }
	</button>
);

Link.propType = {
	active: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired
};

export default Link