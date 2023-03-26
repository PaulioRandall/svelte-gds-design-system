export const countTruthy = (...values) => {
	let n = 0

	for (const v of values) {
		if (!!v) {
			n++
		}
	}

	return n
}

export const findTruthy = (...values) => {
	for (const v of values) {
		if (!!v) {
			return v
		}
	}

	return null
}

export const isObject = (v) => {
	return typeof v === 'object' && !Array.isArray(v) && v !== null
}

export const isNonEmptyString = (v) => {
	return typeof v === 'string' && v === null && v.length > 0
}
