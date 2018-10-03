/*
* index.js
* (C) 2018 Aditya Rathod. All rights reserved.
* This file cannot be redistributed without permission.
*/

var app = new Vue({
	el: '#app',
	data: {
		isLoggedIn: false,
		isLoading: false,
		username: localStorage.getItem('username') || '',
		password: localStorage.getItem('password') || '',
		appointments: [],
		offerings: [],
		rememberMe: true,
		// beta starts at commit 41
		version: '1.0.0-beta1',
		currentView: localStorage.getItem('lastView') || 'checkins',
		error: '',
		currentAppointment: {},
		currentAppointmentTeacher: '',
		currentAppointmentTitle: '',
		currentAppointmentComment: '',
		confirmationActive: false,
		teacherMapping: [],
		newAppointment: {
			active: false,
			date: dayjs().format('YYYY-MM-DD'),
			selectedTeacher: null,
			comment: ''
		}
	},
	created: function () {
		if (this.username && this.password) {
			this.login()
		}
		JsBarcode('#idcode', this.username)
	},
	computed: {
		formPayload: function () {
			return {
				username: this.username,
				password: this.password
			}
		},
		currentAppointmentsSorted: function () {
			var appts = this.appointments.filter(appointment => {
				var offDate = dayjs(appointment.start),
					curDate = dayjs()
				var isSameDay = (
					offDate.date() === curDate.date() &&
					offDate.month() === curDate.month() &&
					offDate.year() === curDate.year()
				)
				var isCurrent = isSameDay || !offDate.isBefore(curDate)
				return appointment.title.indexOf('Checked in by') === -1 && isCurrent
			})
			return this.sortAppointments(appts)
		},
		oldAppointmentsSorted: function () {
			var appts = this.appointments.filter(appointment => {
				var offDate = dayjs(appointment.start),
					curDate = dayjs()
				return appointment.title.indexOf('Checked in by') === -1 && offDate.isBefore(curDate)
			})
			return this.sortAppointments(appts)
		},
		currentOfferings: function () {
			return this.offerings.filter(offering => {
				var off = dayjs(offering.offeringDate)
				var cur = dayjs()
				if (off.date() === cur.date() && off.month() === cur.month() && off.year() === cur.year()) {
					return true
				}
				return !off.isBefore(dayjs())
			})
		},

		checkins: function () {
			return this.appointments.filter(appointment => {
				return appointment.title.indexOf('Checked in by') !== -1
			})
		}
	},
	filters: {
		removeStopWords: function (value) {
			var result = value
			var stopWords = [
				{ from: 'You made an ', to: '' },
				{ from: 'Flex Time -', to: 'Flex - ' }
			]
			for (var i = 0; i < stopWords.length; i++) {
				result = result.replace(stopWords[i].from, stopWords[i].to)
			}
			return result.trim()
		},
		capitalize: function (value) {
			if (!value) return ''
			value = value.toString()
			return value.charAt(0).toUpperCase() + value.slice(1)
		},
		decodeEntities: function (html) {
			var txt = document.createElement("textarea")
			txt.innerHTML = html
			return txt.value
		},
		humanizeDate: function (dateStr) {
			return dayjs(dateStr).format('M/D/YY')
		}
	},
	methods: {
		refreshAppts: function () {
			var self = this
			return fetch('https://flextimes.herokuapp.com/irvington/appointments', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(self.formPayload)
			}).then(res => res.json()).then(json => {
				if ('error' in json) {
					switch (json.error) {
						case 'INVALID_CREDENTIALS':
							self.error = 'Your username/password is incorrect.'
							break
						case 'MISSING_CREDENTIALS':
							self.error = 'Please enter in a username and password.'
							break
						default:
							self.error = 'We have no idea what happened.'
					}
				} else {
					self.appointments = json
				}
			})
		},
		login: function () {
			var self = this
			this.isLoading = true
			var problem = false
			fetch('https://flextimes.herokuapp.com/irvington/appointments', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(self.formPayload)
			})
				.then(res => res.json())
				.then(json => {
					if ('error' in json) {
						problem = true
						self.isLoading = false
						switch (json.error) {
							case 'INVALID_CREDENTIALS':
								self.error = 'Your username/password is incorrect.'
								break
							case 'MISSING_CREDENTIALS':
								self.error = 'Please enter in a username and password.'
								break
							default:
								self.error = 'We have no idea what happened.'
						}
					} else {
						self.error = null
						self.isLoggedIn = true
						self.appointments = json
						self.renderBarcode()
					}
				})
			fetch('https://flextimes.herokuapp.com/irvington/offerings', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(self.formPayload)
			})
				.then(res => res.json())
				.then(json => {
					if (problem || json === null) {
						return
					}
					self.isLoggedIn = true
					self.error = null
					self.isLoading = false
					storeCredentials()
					self.offerings = json.reverse()
				})
			fetch('https://flextimes.herokuapp.com/irvington/teachers')
				.then(res => res.json())
				.then(obj => {
					self.teacherMapping = obj
				})
		},
		logout: function () {
			this.isLoggedIn = false
			this.appointments = []
			this.offerings = []
			this.username = ''
			this.password = ''
		},
		renderBarcode: function () {
			JsBarcode('#idcode', this.username)
		},
		switchView: function (view) {
			this.currentView = view

			if (view === 'barcode') {
				this.renderBarcode()
			}

			localStorage.setItem('lastView', view)
		},
		sortAppointments: function (apptsArr) {
			return apptsArr.sort((a, b) => {
				return dayjs(a.start) - dayjs(b.start)
			})
		},
		createOfferingAppt: function () {
			var payload = {
				teacherID: this.currentAppointment.teacherID,
				startDate: this.currentAppointment.startDate,
				eventNum: this.currentAppointment.eventNum,
				username: this.username,
				password: this.password,
				comments: this.currentAppointmentComment ? this.currentAppointmentComment : ''
			}
			var self = this
			this.isLoading = true
			fetch('https://flextimes.herokuapp.com/irvington/makeAppointment', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(payload)
			})
				.catch(err => console.log(err))
				.then(res => {
					self.refreshAppts().then(() => {
						self.isLoading = false
						self.confirmationActive = false
						self.switchView('appts')
						document.body.scrollTop = 0
						document.documentElement.scrollTop = 0
					})
				})
		},
		createNewAppt: function () {
			var payload = {
				username: this.username,
				password: this.password,
				comments: this.newAppointment.comment,
				teacherID: this.newAppointment.selectedTeacher,
				startDate: this.newAppointment.date,
				eventNum: 1
			}
			var self = this
			this.isLoading = true
			fetch('https://flextimes.herokuapp.com/irvington/makeAppointment', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(payload)
			})
				.catch(err => console.log(err))
				.then(res => {
					self.refreshAppts().then(() => {
						self.isLoading = false
						self.newAppointment.active = false
						self.switchView('appts')
						document.body.scrollTop = 0
						document.documentElement.scrollTop = 0
					})
				})
		},
		resetAppointmentModal: function () {
			this.newAppointment.date = dayjs().format('YYYY-MM-DD')
			this.newAppointment.selectedTeacher = null
			this.newAppointment.comment = ''
		},
		displayConfirmationModal: function (teacherID, offeringType, offeringDate, offeringTitle) {
			this.currentAppointment = {
				teacherID: teacherID,
				startDate: offeringDate,
				eventNum: offeringType,
			}
			this.confirmationActive = true
			this.currentAppointmentTeacher = this.teacherMapping.filter(itm => itm.val === teacherID).map(itm => itm.txt).join('')
			this.currentAppointmentTitle = offeringTitle
		},
		deleteAppointment: function (appt) {
			var payload = {
				username: this.username,
				password: this.password,
				apptID: appt.uniqueID
			}
			this.isLoading = true
			var self = this
			if (appt.teacherEvent === 1) {
				alert('Sorry, you can\'t delete teacher-created appointments.')
				this.isLoading = false
			} else {
				fetch('https://flextimes.herokuapp.com/irvington/deleteAppointment', {
					method: 'POST',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(payload)
				})
					.catch(err => console.log(err))
					.then(_res => {
						self.refreshAppts().then(() => {
							self.isLoading = false
							document.body.scrollTop = 0
							document.documentElement.scrollTop = 0
						})
					})
			}
		}
	},
})


function storeCredentials() {
	if (app.rememberMe) {
		localStorage.setItem('username', app.username)
		localStorage.setItem('password', app.password)
	} else {
		localStorage.setItem('username', null)
		localStorage.setItem('password', null)
	}
}


// navbar toggle
document.addEventListener('DOMContentLoaded', function () {

	// Get all "navbar-burger" elements
	var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

	// Check if there are any navbar burgers
	if ($navbarBurgers.length > 0) {

		// Add a click event on each of them
		$navbarBurgers.forEach(el => {
			el.addEventListener('click', function () {

				// Get the target from the "data-target" attribute
				var target = el.dataset.target;
				var $target = document.getElementById(target);

				// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
				el.classList.toggle('is-active');
				$target.classList.toggle('is-active');

			});
		});
	}

});

document.addEventListener('gesturestart', function (e) {
	e.preventDefault();
});

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js').then(function (reg) {
		console.log('Successfully registered service worker', reg);
	}).catch(function (err) {
		console.warn('Error whilst registering service worker', err);
	});
}

function iOSVersion() {
	if (/iP(hone|od|ad)/.test(navigator.platform)) {
		var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
		return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
	}
}

if (iOSVersion() && iOSVersion()[0] < 11) {
	alert('This app does not support iOS versions before iOS 11. A fix is coming soon, but in the meantime, please update your phone.')
}