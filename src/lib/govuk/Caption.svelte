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
		throw new Error('You must specify a caption font size (sm, md, lg, or xl)')
	} else if (numOfSizes > 1) {
		throw new Error('You cannot specify more than one caption font size')
	}
</script>

<span
	class:govuk-caption-s="{sm}"
	class:govuk-caption-m="{md}"
	class:govuk-caption-l="{lg}"
	class:govuk-caption-xl="{xl}">
	<slot />
</span>
