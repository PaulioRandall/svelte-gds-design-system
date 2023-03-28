<script>
	export let id = undefined // ""
	export let name // = ""
	export let value // = ""
	export let label // = ""

	if (!name) {
		throw new Error('A radio button must have a name')
	}

	if (!value) {
		throw new Error('A radio button must have a value')
	}

	if (!label) {
		throw new Error('A radio button must have a label')
	}
</script>

<div class="govuk-radios__item">
	<input
		id="{id}"
		class="govuk-radios__input"
		type="radio"
		name="{name}"
		value="{value}" />
	<label class="govuk-label govuk-radios__label" for="{name}">
		{label}
	</label>
</div>
