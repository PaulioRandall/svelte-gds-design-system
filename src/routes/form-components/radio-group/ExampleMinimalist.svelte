<script>
	import RadioGroup from '$govuk/forms/RadioGroup.svelte'
</script>

<RadioGroup
	name="city"
	options="{[
		['london', 'London', 'city-london-id'],
		['paris', 'Paris', 'city-paris-id'],
		['madrid', 'Madrid', 'city-madrid-id'],
		['berlin', 'Berlin', 'city-berlin-id'],
	]}" />
