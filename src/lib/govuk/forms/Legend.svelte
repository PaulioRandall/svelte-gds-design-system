<script>
	import { countTruthy, getHeadingElemName } from '$govuk/util.js'

	export let name = undefined // = ""

	export let h1 = false
	export let h2 = false
	export let h3 = false

	export let sm = false
	export let md = false
	export let lg = false
	export let xl = false

	const numOfLegends = countTruthy(sm, md, lg, xl)

	if (numOfLegends < 1) {
		throw new Error('A fieldset must have a legend')
	}

	if (numOfLegends > 1) {
		throw new Error('A fieldset cannot have more than one legend')
	}

	const headingType = getHeadingElemName(h1, h2, h3)
</script>

<legend
	class="govuk-fieldset__legend"
	class:govuk-fieldset__legend--s="{sm}"
	class:govuk-fieldset__legend--m="{md}"
	class:govuk-fieldset__legend--l="{lg}"
	class:govuk-fieldset__legend--xl="{xl}">
	<svelte:element this="{headingType}" class="govuk-fieldset__heading">
		<slot />
	</svelte:element>
</legend>
