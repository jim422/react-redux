import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AddTodoIndex from './todo/AddTodoIndex.js'
import ShoppingCartIndex from './shopping-cart/ShoppingCartIndex.js'
import rootReducer from './rootReducer'

const store = createStore(rootReducer, compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f
));


ReactDOM.render(
	<Provider store={ store }>
		<div>
			<App/>
			<AddTodoIndex />
			<ShoppingCartIndex/>
		</div>
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
