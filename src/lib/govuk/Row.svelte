<script>
	export let classes = ''

	export let type = 'div' // Must be a standard HTML block element
	export let id = undefined // ""
</script>

<svelte:element this="{type}" id="{id}" class="govuk-grid-row {classes}">
	<slot />
</svelte:element>
