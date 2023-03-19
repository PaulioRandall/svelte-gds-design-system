<script>
	export let beta = false
	export let feedbackTo = '' // URL
</script>

<div class="govuk-phase-banner">
	<p class="govuk-phase-banner__content">
		<strong class="govuk-tag govuk-phase-banner__content__tag">
			{#if beta}
				beta
			{:else}
				alpha
			{/if}
		</strong>
		<span class="govuk-phase-banner__text">
			This is a new service
			{#if feedbackTo}
				– your <a class="govuk-link" href="{feedbackTo}">feedback</a> will help us
				to improve it.
			{/if}
		</span>
	</p>
</div>
