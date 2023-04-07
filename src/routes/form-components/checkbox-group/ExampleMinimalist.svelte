<script>
	import Checkbox from '$govuk/forms/Checkbox.svelte'
	import CheckboxGroup from '$govuk/forms/CheckboxGroup.svelte'
</script>

<CheckboxGroup>
	<Checkbox name="sandwich-fillings" value="bacon" label="Bacon" />
	<Checkbox name="sandwich-fillings" value="lettuce" label="Lettuce" />
	<Checkbox name="sandwich-fillings" value="tomato" label="Tomato" />
</CheckboxGroup>
