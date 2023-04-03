<script>
	import { countTruthy } from '$govuk/util.js'

	export let sm = false
	export let md = false
	export let lg = false
	export let xl = false

	const numOfSizes = countTruthy(sm, md, lg, xl)

	if (numOfSizes < 1) {
		throw new Error('A caption must have a font size prop (sm, md, lg, or xl)')
	}

	if (numOfSizes > 1) {
		throw new Error('A caption cannot have more than one font size prop')
	}
</script>

<span
	class:govuk-caption-s="{sm}"
	class:govuk-caption-m="{md}"
	class:govuk-caption-l="{lg}"
	class:govuk-caption-xl="{xl}">
	<slot />
</span>
