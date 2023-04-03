<script>
	export let href // = ""
	export let label // = ""
	export let hidden_text = ''

	if (!href) {
		throw new Error('A SummaryCardAction must have a href prop')
	}

	if (!label) {
		throw new Error('A SummaryCardAction must have a label prop')
	}
</script>

<li class="govuk-summary-card__action">
	<a class="govuk-link" href="{href}">
		{@html label}
		{#if hidden_text}
			<span class="govuk-visually-hidden"> {hidden_text}</span>
		{/if}
	</a>
</li>
