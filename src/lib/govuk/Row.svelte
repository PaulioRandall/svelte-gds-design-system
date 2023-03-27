<script>
	export let type = 'div' // Must be a standard HTML block element
	export let id = undefined // ""
	export let c = ''
</script>

<svelte:element this="{type}" id="{id}" class="govuk-grid-row {c}">
	<slot />
</svelte:element>
