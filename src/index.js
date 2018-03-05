import React from 'react'
import ReactDOM from 'react-dom'

import App from './containers/App'

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import reducers from './reducers'
import sagas from './sagas'

import 'typeface-roboto'

// import registerServiceWorker from './registerServiceWorker'

const history = createHistory()
const historyMiddleware = routerMiddleware(history)

const sagaMiddleware = createSagaMiddleware()
// redux devtools
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
const store = createStore(
	combineReducers({
		app: reducers,
		router: routerReducer,
	}),
	composeEnhancers(applyMiddleware(
		sagaMiddleware,
		historyMiddleware
	))
)

sagaMiddleware.run(sagas)

const muiTheme = createMuiTheme()

ReactDOM.render(
	<Provider store={ store }>
		<ConnectedRouter history={ history }>
			<MuiThemeProvider theme={ muiTheme }>
				<App/>
			</MuiThemeProvider>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root'),
)

// registerServiceWorker()
