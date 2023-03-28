<script>
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

	// TODO: Might be worth creating a Radio component
</script>

<div id="{id}" class="govuk-radios" data-module="govuk-radios">
	{#each options as [value, label, optId]}
		<div class="govuk-radios__item">
			<input
				optId="{optId}"
				class="govuk-radios__input"
				type="radio"
				name="{name}"
				value="{value}" />
			<label class="govuk-label govuk-radios__label" for="{name}">
				{label}
			</label>
		</div>
	{/each}
</div>
