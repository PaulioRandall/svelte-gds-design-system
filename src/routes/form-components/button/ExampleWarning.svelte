<script>
	import Button from '$govuk/forms/Button.svelte'

	let warningText = 'Think carefully before pressing me'
	const changeWarning = (event) => {
		warningText = "I bet you didn't!"
	}
</script>

<Button warning onclick="{changeWarning}">
	{warningText}
</Button>
