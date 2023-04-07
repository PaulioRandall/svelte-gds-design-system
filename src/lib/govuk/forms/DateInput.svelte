<script>
	export let id = undefined // ""

	if (!$$slots.default) {
		throw new Error('A DateInput must have at least one slotted DateUnit')
	}
</script>

<div id="{id}" class="govuk-form-group">
	<div class="govuk-date-input">
		<slot />
	</div>
</div>
