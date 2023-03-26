<script>
	import { countTruthy, getHeadingElemName } from '$govuk/util.js'

	export let id = undefined // ""

	export let h1 = false
	export let h2 = false
	export let h3 = false

	export let sm = false
	export let md = false
	export let lg = false
	export let xl = false

	const numOfTypes = countTruthy(h1, h2, h3)

	if (numOfTypes < 1) {
		throw new Error('You must specify a heading element type (h1, h2, or h3)')
	}

	if (numOfTypes > 1) {
		throw new Error('You cannot specify more than one heading element type')
	}

	const numOfSizes = countTruthy(sm, md, lg, xl)

	if (numOfSizes < 1) {
		throw new Error('You must specify a heading font size (sm, md, lg, or xl)')
	}

	if (numOfSizes > 1) {
		throw new Error('You cannot specify more than one heading font size')
	}

	const headingType = getHeadingElemName(h1, h2, h3)
</script>

<svelte:element
	this="{headingType}"
	id="{id}"
	class:govuk-heading-s="{sm}"
	class:govuk-heading-m="{md}"
	class:govuk-heading-l="{lg}"
	class:govuk-heading-xl="{xl}">
	<slot />
</svelte:element>
