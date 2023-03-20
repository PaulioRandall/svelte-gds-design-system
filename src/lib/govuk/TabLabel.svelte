<script>
	export let id // = ""
	export let selected = false

	if (!id) {
		throw new Error('A tab menu item requires an ID to link to')
	}
</script>

<li
	class="govuk-tabs__list-item"
	class:govuk-tabs__list-item--selected="{selected}">
	<a class="govuk-tabs__tab" href="#{id}">
		<slot />
	</a>
</li>
