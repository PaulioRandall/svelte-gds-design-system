<script>
	import RadioButton from '$govuk/forms/RadioButton.svelte'

	export let id = undefined // ""
	export let name // = ""

	export let options /* = [
    ["<value>", "<label>", "<id>"]
  ] */

	if (!name) {
		throw new Error('A radio group must have a name')
	}

	if (!options) {
		throw new Error('A radio group must have some options')
	}
</script>

<div class="govuk-form-group">
	<div id="{id}" class="govuk-radios" data-module="govuk-radios">
		{#each options as [value, label, optId]}
			<RadioButton id="{optId}" name="{name}" value="{value}" label="{label}" />
		{/each}
	</div>
</div>
