import { NEW_APPT, DELETE_APPT, LOGIN, LOGOUT, CHANGE_TAB } from './actions';
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
}

function flexApp(state = initialState, action) {
    switch (action.type) {
        case CHANGE_TAB:
            return Object.assign({}, state, {
                ui: Object.assign({}, state.ui, {
                    currentTab: action.to
                })
            })
        default:
            return state
    }
}
export default flexApp;