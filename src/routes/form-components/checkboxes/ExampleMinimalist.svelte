<script>
	import Checkboxes from '$govuk/forms/Checkboxes.svelte'
</script>

<Checkboxes
	name="sandwich-fillings"
	options="{[
		['bacon', 'Bacon'],
		['lettuce', 'Lettuce'],
		['tomato', 'Tomato'],
	]}" />
