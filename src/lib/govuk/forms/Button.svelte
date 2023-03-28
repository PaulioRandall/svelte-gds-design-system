<script context="module">
	export const validTypes = ['button', 'reset', 'submit']

	const isValidType = (t) => validTypes.includes(t)
</script>

<script>
	export let id = undefined // ""
	export let name = undefined // ""
	export let type = 'button'
	export let value = undefined // ""

	export let secondary = false
	export let warning = false
	export let disabled = false
	export let prevent_double_clicks = false

	export let onclick = (event) => {}

	if (!isValidType(type)) {
		throw new Error(`The button type '${type}' is not valid`)
	}

	if (secondary && warning) {
		throw new Error('A button cannot be both secondary and a warning')
	}
</script>

<button
	on:click="{onclick}"
	id="{id}"
	name="{name}"
	type="{type}"
	value="{value}"
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
