<script>
	export let id = undefined // ""

	if (!$$slots.default) {
		throw new Error('A DateInput must have at least one slotted DateUnit')
	}
</script>

<div class="govuk-form-group">
	<div id="{id}" class="govuk-date-input">
		<slot />
	</div>
</div>
