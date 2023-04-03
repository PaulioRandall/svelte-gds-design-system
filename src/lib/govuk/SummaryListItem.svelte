<script>
	export let change_url = ''
	export let name // = ""

	if (!name) {
		throw new Error('A SummaryListItem must have a name prop')
	}
</script>

<div
	class="govuk-summary-list__row"
	class:govuk-summary-list__row--no-actions="{!change_url}">
	<dt class="govuk-summary-list__key">
		{name}
	</dt>
	<dd class="govuk-summary-list__value">
		<slot />
	</dd>
	{#if change_url}
		<dd class="govuk-summary-list__actions">
			<a class="govuk-link" href="{change_url}">
				Change<span class="govuk-visually-hidden"> {name.toLowerCase()}</span>
			</a>
		</dd>
	{/if}
</div>
