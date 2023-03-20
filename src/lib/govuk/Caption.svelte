<script>
	export let sm = false
	export let md = false
	export let lg = false
	export let xl = false

	const countTruthy = (...values) => {
		let n = 0

		for (const v of values) {
			if (!!v) {
				n++
			}
		}

		return n
	}

	const numOfSizes = countTruthy(sm, md, lg, xl)
	if (numOfSizes < 1) {
		throw new Error('A caption must have a font size (sm, md, lg, or xl)')
	} else if (numOfSizes > 1) {
		throw new Error('A caption cannot have more than one font size')
	}
</script>

<span
	class:govuk-caption-s="{sm}"
	class:govuk-caption-m="{md}"
	class:govuk-caption-l="{lg}"
	class:govuk-caption-xl="{xl}">
	<slot />
</span>
