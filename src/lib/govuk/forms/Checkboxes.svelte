<script>
	import Checkbox from '$govuk/forms/Checkbox.svelte'
	import CheckboxGroup from '$govuk/forms/CheckboxGroup.svelte'

	export let id = undefined // ""
	export let name // = ""

	export let options /* = [
    ["<value>", "<label>", "<id>"]
  ] */

	if (!name) {
		throw new Error('A set of checkboxes must have a name')
	}

	if (!options) {
		throw new Error('A set of checkboxes must have some options')
	}
</script>

<CheckboxGroup id="{id}">
	{#each options as [value, label, optId]}
		<Checkbox name="{name}" value="{value}" label="{label}" id="{optId}" />
	{/each}
</CheckboxGroup>
