import fetch from 'cross-fetch';



export const NEW_APPT = 'NEW_APPT'
export const DELETE_APPT = 'DELETE_APPT'

export const LOGIN = 'LOGIN'
export const LOGIN_IS_LOADING = 'LOGIN_IS_LOADING'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const SAVE_CREDENTIALS = 'SAVE_CREDENTIALS'

export const LOGOUT = 'LOGOUT'
export const CHANGE_TAB = 'CHANGE_TAB'


export function newAppt(isOffering, comment = '', teacherID, startDate, eventNum = 1) {
	return {
		type: NEW_APPT,
		appointmentData: {
			isOffering: isOffering,
			comment: comment,
			teacherID: teacherID,
			startDate: startDate,
			eventNum: eventNum
		}
	}
}

export function deleteAppt() {
	return
}

export function saveCredentials(credentials) {
	localStorage.setItem('username', credentials.username)
	localStorage.setItem('password', credentials.password)
	return {
		type: SAVE_CREDENTIALS,
		credentials: credentials
	}
}

export function login(credentials) {
	return dispatch => {
		dispatch(loginIsLoading(true))
		fetch('https://flextimes.herokuapp.com/irvington/appointments', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(credentials)
		})
			.then(res => {
				dispatch(loginIsLoading(false))
				if (!res.ok) {
					dispatch(loginFailure(res.statusText))
					throw Error(res.statusText)
				}
				return res
			})
			.then(res => res.json())
			.then(json => {
				if ('error' in json) {
					dispatch(loginFailure(json.error))
					throw Error(json.error)
				}
				dispatch(saveCredentials(credentials))
				dispatch(loginSuccess(json))
			})
			.catch(() => { })
	}
}

export function loginIsLoading(bool) {
	return {
		type: LOGIN_IS_LOADING,
		isLoading: bool
	}
}

export function loginSuccess(appointments) {
	return {
		type: LOGIN_SUCCESS,
		appointments: appointments
	}
}

export function loginFailure(error) {
	return {
		type: LOGIN_FAILURE,
		error: error
	}
}

export function logout() {
	return {
		type: LOGOUT
	}
}

export function changeTab(to) {
	return {
		type: CHANGE_TAB,
		to: to
	}
}