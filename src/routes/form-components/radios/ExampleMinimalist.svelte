<script>
	import Radios from '$govuk/forms/Radios.svelte'
</script>

<Radios
	name="city"
	options="{[
		['city-london', 'london', 'London'],
		['city-paris', 'paris', 'Paris'],
		['city-madrid', 'madrid', 'Madrid'],
		['city-berlin', 'berlin', 'Berlin'],
	]}" />
