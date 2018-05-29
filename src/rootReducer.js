import { combineReducers } from 'redux'
import todoReducers from './todo/reducers/index.js';
import shoppingCartReducers from './shopping-cart/reducers/index'

export default combineReducers({
	...todoReducers,
	...shoppingCartReducers
})