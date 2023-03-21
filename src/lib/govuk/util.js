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
