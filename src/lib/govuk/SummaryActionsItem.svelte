<script>
	export let href // = ""
	export let hidden // = ""
</script>

<li class="govuk-summary-card__action">
	<a class="govuk-link" href="{href}">
		<slot />
		{#if hidden}
			<span class="govuk-visually-hidden"> {hidden}</span>
		{/if}
	</a>
</li>
