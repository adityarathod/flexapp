import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import flexApp from './reducers'

let store = null

if (process.env.NODE_ENV !== 'production') {
    store = createStore(flexApp, compose(
        applyMiddleware(thunkMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ))
} else {
    store = createStore(flexApp, applyMiddleware(thunkMiddleware))
}


export default store;