<script>
	// Important! This component requires <li> as slot content.

	export let heading // = ""
</script>

<div class="govuk-error-summary" data-module="govuk-error-summary">
	<div role="alert">
		{#if heading}
			<h2 class="govuk-error-summary__title">
				{@html heading}
			</h2>
		{/if}
		<div class="govuk-error-summary__body">
			<ul class="govuk-list govuk-error-summary__list">
				<slot />
			</ul>
		</div>
	</div>
</div>
