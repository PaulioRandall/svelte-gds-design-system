<script>
	// TODO: Think about display override classes
	// - govuk-!-display-block
	// - govuk-!-display-inline
	// - govuk-!-display-inline-block
	// - govuk-!-display-none
	// - govuk-!-display-none-print

	export let full = false
	export let three_quarters = false
	export let two_thirds = false
	export let half = false
	export let one_half = half
	export let third = false
	export let one_third = third
	export let quarter = false
	export let one_quarter = quarter

	export let full_desktop = false
	export let three_quarters_desktop = false
	export let two_thirds_desktop = false
	export let half_desktop = false
	export let one_half_desktop = half_desktop
	export let third_desktop = false
	export let one_third_desktop = third_desktop
	export let quarter_desktop = false
	export let one_quarter_desktop = quarter_desktop

	const countTruthy = (...values) => {
		let n = 0

		for (const v of values) {
			if (!!v) {
				n++
			}
		}

		return n
	}

	const numOfWidths = countTruthy(
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

	const numOfDesktopWidths = countTruthy(
		full_desktop,
		three_quarters_desktop,
		two_thirds_desktop,
		half_desktop,
		one_half_desktop,
		third_desktop,
		one_third_desktop,
		quarter_desktop,
		one_quarter_desktop
	)

	if (numOfWidths + numOfDesktopWidths === 0) {
		throw new Error('You must specify a column width')
	} else if (numOfWidths > 1) {
		throw new Error('You cannot spcify more than one standard column width')
	} else if (numOfDesktopWidths > 1) {
		throw new Error('You cannot spcify more than one desktop column width')
	}
</script>

<div
	class:govuk-grid-column-full="{full}"
	class:govuk-grid-column-three-quarters="{three_quarters}"
	class:govuk-grid-column-two-thirds="{two_thirds}"
	class:govuk-grid-column-one-half="{half || one_half}"
	class:govuk-grid-column-one-third="{third || one_third}"
	class:govuk-grid-column-one-quarter="{quarter || one_quarter}"
	class:govuk-grid-column-full-from-desktop="{full_desktop}"
	class:govuk-grid-column-three-quarters-from-desktop="{three_quarters_desktop}"
	class:govuk-grid-column-two-thirds-from-desktop="{two_thirds_desktop}"
	class:govuk-grid-column-one-half-from-desktop="{half_desktop ||
		one_half_desktop}"
	class:govuk-grid-column-one-third-from-desktop="{third_desktop ||
		one_third_desktop}"
	class:govuk-grid-column-one-quarter-from-desktop="{quarter_desktop ||
		one_quarter_desktop}">
	<slot />
</div>
