<script>
	export let heading // = ''
</script>

<div class="govuk-summary-card">
	<div class="govuk-summary-card__title-wrapper">
		<h2 class="govuk-summary-card__title">{@html heading}</h2>
		<slot name="actions" />
	</div>
	<div class="govuk-summary-card__content">
		<slot />
	</div>
</div>
