<script>
	import { countTruthy } from '$govuk/util.js'

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
	} else if (numOfTypes > 1) {
		throw new Error('You cannot specify more than one heading element type')
	}

	const numOfSizes = countTruthy(sm, md, lg, xl)

	if (numOfSizes < 1) {
		throw new Error('You must specify a heading font size (sm, md, lg, or xl)')
	} else if (numOfSizes > 1) {
		throw new Error('You cannot specify more than one heading font size')
	}
</script>

{#if h1}
	<h1
		id="{id}"
		class:govuk-heading-s="{sm}"
		class:govuk-heading-m="{md}"
		class:govuk-heading-l="{lg}"
		class:govuk-heading-xl="{xl}">
		<slot />
	</h1>
{:else if h2}
	<h2
		id="{id}"
		class:govuk-heading-s="{sm}"
		class:govuk-heading-m="{md}"
		class:govuk-heading-l="{lg}"
		class:govuk-heading-xl="{xl}">
		<slot />
	</h2>
{:else if h3}
	<h3
		id="{id}"
		class:govuk-heading-s="{sm}"
		class:govuk-heading-m="{md}"
		class:govuk-heading-l="{lg}"
		class:govuk-heading-xl="{xl}">
		<slot />
	</h3>
{/if}
