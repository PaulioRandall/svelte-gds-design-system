<script>
	export let md = false
	export let lg = false
	export let xl = false

	export let show_line = false

	const countTruthy = (...values) => {
		let n = 0

		for (const v of values) {
			if (!!v) {
				n++
			}
		}

		return n
	}

	const numOfSizes = countTruthy(md, lg, xl)
	if (numOfSizes > 1) {
		throw new Error(
			'A section break cannot have more than one size [sm (default), md, lg, xl]'
		)
	}
</script>

<hr
	class="govuk-section-break"
	class:govuk-section-break--m="{md}"
	class:govuk-section-break--l="{lg}"
	class:govuk-section-break--xl="{xl}"
	class:govuk-section-break--visible="{show_line}" />
