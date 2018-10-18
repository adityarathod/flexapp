import { NEW_APPT, DELETE_APPT, LOGIN, LOGOUT } from './actions';


const initialState = {
    isLoggedIn: false,
    isLoading: false,
    username: localStorage.getItem('username') || '',
    password: localStorage.getItem('password') || '',
    error: ''
}

function flexApp(state = initialState, action) {

}