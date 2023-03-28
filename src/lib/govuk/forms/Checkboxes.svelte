<script>
	import Checkbox from '$govuk/forms/Checkbox.svelte'

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

<div id="{id}" class="govuk-checkboxes" data-module="govuk-checkboxes">
	{#each options as [value, label, optId]}
		<Checkbox name="{name}" value="{value}" label="{label}" id="{optId}" />
	{/each}
</div>
