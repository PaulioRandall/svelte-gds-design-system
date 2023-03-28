<script>
	export let id = undefined // ""
	export let name // = ""

	if (!name) {
		throw new Error('A text input must have a name')
	}
</script>

<label class="govuk-label" for="{name}">
	<slot />
</label>
<input class="govuk-input" id="{id}" name="{name}" type="text" />
