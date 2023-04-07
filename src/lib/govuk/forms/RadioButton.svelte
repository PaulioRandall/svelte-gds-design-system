<script>
	export let id = undefined // ""
	export let input_id // ""
	export let name // = ""
	export let value // = ""
	export let label // = ""

	if (!input_id) {
		throw new Error('A RadioButton must have an input_id')
	}

	if (!name) {
		throw new Error('A RadioButton must have a name')
	}

	if (!value) {
		throw new Error('A RadioButton must have a value')
	}

	if (!label) {
		throw new Error('A RadioButton must have a label')
	}
</script>

<div class="govuk-radios__item">
	<input
		class="govuk-radios__input"
		type="radio"
		id="{input_id}"
		name="{name}"
		value="{value}" />
	<label class="govuk-label govuk-radios__label" for="{input_id}">
		{label}
	</label>
</div>
