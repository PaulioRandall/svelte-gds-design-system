<script>
	import Button from '$govuk/forms/Button.svelte'

	let counter = 0
	const incCounter = (event) => counter++
</script>

<Button onclick="{incCounter}">Counter: {counter}</Button>
