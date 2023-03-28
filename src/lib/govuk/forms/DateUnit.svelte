<script>
	export let id = undefined // = ""
	export let name // = ""
	export let label // = ""

	if (!name) {
		throw new Error('A date unit must have a form field name')
	}

	if (!label) {
		throw new Error('A date unit must have a label')
	}
</script>

<div class="govuk-date-input__item">
	<div class="govuk-form-group">
		<label class="govuk-label govuk-date-input__label" for="{name}">
			{label}
		</label>
		<input
			id="{id}"
			class="govuk-input govuk-date-input__input govuk-input--width-2"
			name="{name}"
			type="text"
			inputmode="numeric" />
	</div>
</div>
