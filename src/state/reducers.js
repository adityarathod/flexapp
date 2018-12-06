import {
    LOGIN_IS_LOADING,
    OFFERINGS_IS_LOADING,
    OFFERINGS_SUCCESS,
    LOGIN_SUCCESS,
    CHANGE_TAB,
    LOGIN_FAILURE,
    OFFERINGS_FAILURE,
    SAVE_CREDENTIALS
} from './actions';
import { Object } from 'core-js';


const initialState = {
    ui: {
        isLoggedIn: false,
        isLoading: false,
        error: null,
        currentTab: 'today'
    },
    credentials: {
        username: localStorage.getItem('username') || '',
        password: localStorage.getItem('password') || '',
    },
    isLoggedIn: false,
    loadingOfferings: false,
    offerings: [],
    appointments: {}
}

function flexApp(state = initialState, action) {
    switch (action.type) {
        case CHANGE_TAB:
            return Object.assign({}, state, {
                ui: Object.assign({}, state.ui, {
                    currentTab: action.to
                })
            })
        case OFFERINGS_IS_LOADING:
            return Object.assign({}, state, {
                loadingOfferings: true
            })
        case LOGIN_IS_LOADING:
            return Object.assign({}, state, {
                ui: Object.assign({}, state.ui, {
                    isLoading: action.isLoading
                })
            })
        case OFFERINGS_FAILURE:
        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                ui: Object.assign({}, state.ui, {
                    error: action.error
                }),
                isLoggedIn: false
            })
        case SAVE_CREDENTIALS:
            return Object.assign({}, state, {
                ui: Object.assign({}, state.ui, {
                    username: action.credentials.username,
                    password: action.credentials.password
                })
            })
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                ui: Object.assign({}, state.ui, {
                    error: null
                }),
                isLoggedIn: true,
                appointments: action.appointments
            })
        case OFFERINGS_SUCCESS:
            return Object.assign({}, state, {
                offerings: action.offerings,
                loadingOfferings: false
            })
        default:
            return state
    }
}
export default flexApp;