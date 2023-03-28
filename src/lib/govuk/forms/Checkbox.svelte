<script>
	export let id = undefined // ""
	export let name // = ""
	export let value // = ""
	export let label // = ""

	if (!name) {
		throw new Error('A checkbox must have a name')
	}

	if (!value) {
		throw new Error('A checkbox must have a value')
	}

	if (!label) {
		throw new Error('A checkbox must have a label')
	}
</script>

<div class="govuk-checkboxes__item">
	<input
		id="{id}"
		class="govuk-checkboxes__input"
		type="checkbox"
		name="{name}"
		value="{value}" />
	<label class="govuk-label govuk-checkboxes__label" for="{name}">
		{label}
	</label>
</div>
