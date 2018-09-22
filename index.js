var app = new Vue({
	el: '#app',
	data: {
		isLoggedIn: false,
		isLoading: false,
		username: '',
		password: '',
		appointments: [],
		offerings: []
	},
	computed: {
		formPayload: () => {
			return {
				username: app.username,
				password: app.password
			}
		},
		appointmentsSorted: () => {
			return app.appointments.sort((a, b) => {
				return -Date.parse(b.start) + Date.parse(a.start)
			})
		}
	},
	filters: {
		removeStopWords: (value) => {
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
		capitalize: (value) => {
			if (!value) return ''
			value = value.toString()
			console.log(value.charAt(0))
			return value.charAt(0).toUpperCase() + value.slice(1)
		},
		decodeEntities: (html) => {
			var txt = document.createElement("textarea");
			txt.innerHTML = html;
			return txt.value;
		}
	},
	methods: {
		login: () => {
			app.isLoading = true
			fetch('https://flextimes.herokuapp.com/irvington/appointments', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(app.formPayload)
			})
				.then(res => res.json())
				.then(json => {
					app.isLoggedIn = true
					app.appointments = json
				})
			fetch('https://flextimes.herokuapp.com/irvington/offerings', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(app.formPayload)
			})
				.then(res => res.json())
				.then(json => {
					app.isLoggedIn = true
					app.isLoading = false
					app.offerings = json.reverse()
				})
		},
		logout: () => {
			app.isLoggedIn = false
			app.appointments = []
			app.offerings = []
		}
	}
})



// navbar toggle
document.addEventListener('DOMContentLoaded', () => {

	// Get all "navbar-burger" elements
	const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

	// Check if there are any navbar burgers
	if ($navbarBurgers.length > 0) {

		// Add a click event on each of them
		$navbarBurgers.forEach(el => {
			el.addEventListener('click', () => {

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