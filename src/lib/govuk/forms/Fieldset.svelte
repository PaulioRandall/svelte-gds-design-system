<script>
	import { countTruthy, findTruthy } from '$govuk/util.js'

	export let name = undefined // = ""

	if (!$$slots.legend) {
		throw new Error('A Fieldset must have a legend (slot="legend")')
	}
</script>

<fieldset name="{name}" class="govuk-fieldset">
	<slot name="legend" />
	<slot />
</fieldset>
