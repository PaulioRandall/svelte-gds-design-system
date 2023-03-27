<script>
	export let secondary = false
	export let warning = false
	export let disabled = false
	export let prevent_double_clicks = false

	export let onclick = (event) => {}

	if (secondary && warning) {
		throw new Error('A button cannot be both secondary and a warning')
	}
</script>

<button
	on:click="{onclick}"
	class="govuk-button"
	class:govuk-button--secondary="{secondary}"
	class:govuk-button--warning="{warning}"
	class:govuk-button--disabled="{disabled}"
	aria-disabled="{disabled ? 'true' : undefined}"
	disabled="{disabled ? 'disabled' : undefined}"
	data-prevent-double-click="{prevent_double_clicks ? 'true' : undefined}"
	data-module="govuk-button">
	<slot />
</button>
