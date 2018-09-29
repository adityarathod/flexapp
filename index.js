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
		version: '1.0.0a24',
		currentView: localStorage.getItem('lastView') || 'checkins',
		error: ''
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
					if (problem) {
						return
					}
					self.isLoggedIn = true
					self.isLoading = false
					storeCredentials()
					self.offerings = json.reverse()
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
	const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

	// Check if there are any navbar burgers
	if ($navbarBurgers.length > 0) {

		// Add a click event on each of them
		$navbarBurgers.forEach(el => {
			el.addEventListener('click', function () {

				// Get the target from the "data-target" attribute
				const target = el.dataset.target;
				const $target = document.getElementById(target);

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