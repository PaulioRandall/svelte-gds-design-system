<script>
	export let id = undefined // ""

	if (!$$slots.default) {
		throw new Error('A ButtonGroup must have some slotted Buttons or Links')
	}
</script>

<div id="{id}" class="govuk-button-group">
	<slot />
</div>
