import { combineReducers } from 'redux'
import {
	RECEIVE_PRODUCT,
	ADD_TO_CART
} from '../constants/ActionsTypes';

const products = (state, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			return {
				...state,
				inventory: state.inventory - 1
			}
		default:
			return state
	}
}

const byId = (state = {}, action) => {
	switch (action.type) {
		case RECEIVE_PRODUCT:
			return {
				...state,
				...action.products.reduce((obj, product) => {
					obj[product.id] = product
					return obj
				}, {})
			}
		default:
			const { productId } = action
			if (productId) {
				return {
					...state,
					[productId]: products(state[productId], action)
				}
			}
			return state
	}
}

const visibleIds = (state= [], action) => {
	switch (action.type) {
		case RECEIVE_PRODUCT:
			return action.products.map(product => product.id)
		default:
			return state
	}
}

export default combineReducers({
	byId,
	visibleIds
})

export const getProduct = (state, id) => state.byId[id]

export const getVisibleProduct = (state) => {
	console.log(state)
	return state.visibleIds.map(id => getProduct(state, id))
}
