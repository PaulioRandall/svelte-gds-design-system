<script>
	export let full = false
	export let three_quarters = false
	export let two_thirds = false

	export let half = false
	export let one_half = half

	export let third = false
	export let one_third = third

	export let quarter = false
	export let one_quarter = quarter

	const countTruthy = (...values) => {
		let n = 0

		for (const v of values) {
			if (!!v) {
				n++
			}
		}

		return n
	}

	const selectedCount = countTruthy(
		full,
		three_quarters,
		two_thirds,
		half,
		one_half,
		third,
		one_third,
		quarter,
		one_quarter
	)

	if (selectedCount === 0) {
		throw new Error('You must specify a column width')
	} else if (selectedCount > 1) {
		throw new Error('You cannot spcify more than one width')
	}
</script>

<div
	class:govuk-!-width-column-full="{full}"
	class:govuk-!-width-column-three-quarters="{three_quarters}"
	class:govuk-!-width-column-two-thirds="{two_thirds}"
	class:govuk-!-width-column-one-half="{half || one_half}"
	class:govuk-!-width-column-one-third="{third || one_third}"
	class:govuk-!-width-column-one-quarter="{quarter || one_quarter}">
	<slot />
</div>
