<script>
	export let id = undefined // ""
	export let name // = ""

	export let options /* = [
    ["<value>", "<label>"]
  ] */

	if (!name) {
		throw new Error('A select (dropdown) must have a name')
	}

	if (!options) {
		throw new Error('A select (dropdown) must have some options')
	}
</script>

<div class="govuk-form-group">
	<label class="govuk-label" for="{name}">
		<slot />
	</label>
	<select id="{id}" class="govuk-select" name="{name}">
		{#each options as [value, label]}
			<option value="{value}">{label}</option>
		{/each}
	</select>
</div>
