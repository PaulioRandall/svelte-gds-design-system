<script>
	export let heading // = ''
</script>

<div class="govuk-summary-card">
	{#if heading}
		<div class="govuk-summary-card__title-wrapper">
			<h2 class="govuk-summary-card__title">{@html heading}</h2>
			<slot name="actions" />
		</div>
	{/if}
	<div class="govuk-summary-card__content">
		<slot />
	</div>
</div>
