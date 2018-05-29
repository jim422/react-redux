import _product from './products.json'

const TIMEOUT = 1000

export default {
	getProducts: (cb, timeout) => setTimeout(() => cb(_product), timeout || TIMEOUT),
	buyProducts: (pay, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}