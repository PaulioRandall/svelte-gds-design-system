<script>
	import RadioButton from '$govuk/forms/RadioButton.svelte'
	import RadioGroup from '$govuk/forms/RadioGroup.svelte'

	export let id = undefined // ""
	export let name // = ""

	export let options /* = [
    ["<id>", "<value>", "<label>"]
  ] */

	if (!name) {
		throw new Error('Radios must have a name')
	}

	if (!options) {
		throw new Error('Radios must have some options')
	}
</script>

<RadioGroup id="{id}">
	{#each options as [inputId, value, label]}
		<RadioButton
			input_id="{inputId}"
			name="{name}"
			value="{value}"
			label="{label}" />
	{/each}
</RadioGroup>
