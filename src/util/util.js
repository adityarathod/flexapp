import dayjs from 'dayjs';

export function formatApptName(value) {
	var result = value
	var stopWords = [
		{ from: 'You made an ', to: '' },
		{ from: 'Flex Time -', to: 'Flex - ' }
	]
	for (var i = 0; i < stopWords.length; i++) {
		result = result.replace(stopWords[i].from, stopWords[i].to)
	}
	result = result.split('for Flex -')[0] + 'for FLEX'
	return capitalizeFirstLetter(result.trim())
}

export function capitalizeFirstLetter(str) {
	return str[0].toUpperCase() + str.substring(1)
}

export function findCheckins(arr) {
	return arr.filter(itm => {
		return itm.title.indexOf('Checked in by') !== -1
	})
}

export function sortAppointmentsReverse(arr) {
	return arr.sort((a, b) => {
		return dayjs(a.start) - dayjs(b.start)
	}).reverse()
}

export function prettifyDate(dateStr) {
	return dayjs(dateStr).format('dddd, MMMM D')
}

export function todaysDate() {
	return prettifyDate(dayjs())
}