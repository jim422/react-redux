import combineReducers from 'redux'
import todos from './todos.js'
import visibilityFilters from './visibilityFilter.js'

export default combineReducers(
	todos,
	visibilityFilters
)