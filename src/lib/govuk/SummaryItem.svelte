<script>
	export let changeUrl = ''
	export let name // = ""
</script>

<div
	class="govuk-summary-list__row"
	class:govuk-summary-list__row--no-actions="{!changeUrl}">
	<dt class="govuk-summary-list__key">
		{name}
	</dt>
	<dd class="govuk-summary-list__value">
		<slot />
	</dd>
	{#if changeUrl}
		<dd class="govuk-summary-list__actions">
			<a class="govuk-link" href="{changeUrl}">
				Change<span class="govuk-visually-hidden"> {name.toLowerCase()}</span>
			</a>
		</dd>
	{/if}
</div>
