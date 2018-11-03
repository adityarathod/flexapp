import { createStore } from 'redux';
import flexApp from './reducers'

let store = null

if (process.env.NODE_ENV !== 'production') {
    store = createStore(flexApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
} else {
    store = createStore(flexApp)
}


export default store;