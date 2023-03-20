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

	const noneSelected =
		!full &&
		!three_quarters &&
		!two_thirds &&
		!half &&
		!one_half &&
		!third &&
		!one_third &&
		!quarter &&
		!one_quarter

	if (noneSelected) {
		throw new Error('You must specify a column width')
	}
</script>

<div
	class:govuk-grid-column-full="{full}"
	class:govuk-grid-column-three-quarters="{three_quarters}"
	class:govuk-grid-column-two-thirds="{two_thirds}"
	class:govuk-grid-column-one-half="{half || one_half}"
	class:govuk-grid-column-one-third="{third || one_third}"
	class:govuk-grid-column-one-quarter="{quarter || one_quarter}">
	<slot />
</div>
