<script>
	export let id // = ""
	export let selected = false

	if (!id) {
		throw new Error('A tab panel requires an ID to be linked to')
	}
</script>

<div
	id="{id}"
	class="govuk-tabs__panel"
	class:govuk-tabs__panel--hidden="{!selected}">
	<slot />
</div>
