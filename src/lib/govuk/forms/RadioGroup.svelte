<script>
	export let id = undefined // ""

	if (!$$slots.default) {
		throw new Error('A RadioGroup must have at least one slotted RadioButton')
	}
</script>

<div id="{id}" class="govuk-form-group">
	<div class="govuk-radios" data-module="govuk-radios">
		<slot />
	</div>
</div>
