<script>
	import Select from '$govuk/forms/Select.svelte'
</script>

<Select
	name="city"
	options="{[
		['london', 'London'],
		['paris', 'Paris'],
		['madrid', 'Madrid'],
		['berlin', 'Berlin'],
	]}">
	City
</Select>
