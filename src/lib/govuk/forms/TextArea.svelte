<script>
	export let id = undefined // ""
	export let name // = ""
	export let label // = ""
	export let rows = 5

	if (!name) {
		throw new Error('A textarea must have a name')
	}

	if (!label) {
		throw new Error('A textarea must have a label')
	}
</script>

<div class="govuk-form-group">
	<label class="govuk-label" for="{name}">
		{label}
	</label>
	<textarea id="{id}" class="govuk-textarea" name="{name}" rows="{rows}"
	></textarea>
</div>
