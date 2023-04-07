<script>
	import RadioButton from '$govuk/forms/RadioButton.svelte'
	import RadioGroup from '$govuk/forms/RadioGroup.svelte'
</script>

<RadioGroup>
	<RadioButton
		name="city"
		input_id="city-london"
		value="london"
		label="London" />
	<RadioButton name="city" input_id="city-paris" value="paris" label="Paris" />
	<RadioButton
		name="city"
		input_id="city-madrid"
		value="madrid"
		label="Madrid" />
	<RadioButton
		name="city"
		input_id="city-berlin"
		value="berlin"
		label="Berlin" />
</RadioGroup>
