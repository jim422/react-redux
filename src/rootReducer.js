import { combineReducers } from 'redux'
import todoReducers from './todo/reducers/index.js';

export default combineReducers({
	...todoReducers
})