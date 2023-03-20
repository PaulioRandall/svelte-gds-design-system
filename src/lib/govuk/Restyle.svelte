<script>
	export let regular = false
	export let bold = false

	if (regular && bold) {
		throw new Error(
			'Text (Restyle) cannot be both regular and bold at the same time'
		)
	}
</script>

<span
	class:govuk-!-font-weight-regular="{regular}"
	class:govuk-!-font-weight-bold="{bold}">
	<slot />
</span>
