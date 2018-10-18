
export const NEW_APPT = 'NEW_APPT'
export const DELETE_APPT = 'DELETE_APPT'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'


export function newAppt(isOffering, comment = '', teacherID, startDate, eventNum = 1) {
	return {
		type: 'NEW_APPT',
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