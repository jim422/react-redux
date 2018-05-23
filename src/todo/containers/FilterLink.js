import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions/index'
import Link from '../components/Link.js'

const mapStateToProps = (state, ownProps) => {
	active: ownProps.filter === state.visibilityFilter
};

const mapDispatchToProps = (dispath, ownProps) => {
	onCLick: () => dispath(setVisibilityFilter(ownProps.filter))
};

export default connect(
	mapDispatchToProps,
	mapStateToProps
)(Link)