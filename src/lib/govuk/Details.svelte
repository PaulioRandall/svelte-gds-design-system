<script>
	export let summary // = ""

	if (!summary) {
		throw new Error('A details toggle must have some summary text')
	}
</script>

<details class="govuk-details" data-module="govuk-details">
	<summary class="govuk-details__summary">
		<span class="govuk-details__summary-text">
			{summary}
		</span>
	</summary>
	<div class="govuk-details__text">
		<slot />
	</div>
</details>
