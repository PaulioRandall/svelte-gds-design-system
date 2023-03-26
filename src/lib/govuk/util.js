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

export const getHeadingElemName = (h1, h2, h3, h4, h5, h6) => {
	if (h1) return 'h1'
	if (h2) return 'h2'
	if (h3) return 'h3'
	if (h4) return 'h4'
	if (h5) return 'h5'
	if (h6) return 'h6'
	return null
}
