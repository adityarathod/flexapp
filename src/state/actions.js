
export const NEW_APPT = 'NEW_APPT'
export const DELETE_APPT = 'DELETE_APPT'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'


export function newAppt() {
	return
}

export function deleteAppt() {
	return
}

export function login(username, password) {
	return {
		type: LOGIN,
		credentials: { username: username, password: password }
	}
}

export function logout() {
	return {
		type: LOGOUT
	}
}