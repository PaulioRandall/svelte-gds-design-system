<script>
	import { countTruthy } from '$govuk/util.js'

	export let id = undefined // ""

	export let md = false
	export let lg = false
	export let xl = false

	export let show_line = false

	const numOfSizes = countTruthy(md, lg, xl)

	if (numOfSizes > 1) {
		throw new Error(
			'A section break cannot have more than one size [sm (default), md, lg, xl]'
		)
	}
</script>

<hr
	id="{id}"
	class="govuk-section-break"
	class:govuk-section-break--m="{md}"
	class:govuk-section-break--l="{lg}"
	class:govuk-section-break--xl="{xl}"
	class:govuk-section-break--visible="{show_line}" />
