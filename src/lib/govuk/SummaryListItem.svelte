<script>
	export let name = ''
	export let change_url = ''
	export let use_all_space = false
</script>

<div
	class="govuk-summary-list__row"
	class:govuk-summary-list__row--no-actions="{!use_all_space && !change_url}">
	{#if name}
		<dt class="govuk-summary-list__key">
			{name}
		</dt>
	{/if}
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
