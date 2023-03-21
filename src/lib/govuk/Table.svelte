<script>
	export let caption = ''

	export let headers /* = [
    {
      key: "",
      label: "",
      rowHead?: false,
    }
  ] */

	export let records /* = [
    {
      <key>: "<value>"
    }
  ] */

	if (!headers) {
		throw new Error('A table must have headers')
	}

	if (!records) {
		throw new Error('A table must have at least one record')
	}
</script>

<table class="govuk-table">
	{#if caption}
		<caption class="govuk-table__caption govuk-table__caption--m">
			{@html caption}
		</caption>
	{/if}

	<thead class="govuk-table__head">
		<tr class="govuk-table__row">
			{#each headers as { label }}
				<th scope="col" class="govuk-table__header">{@html label}</th>
			{/each}
		</tr>
	</thead>

	<tbody class="govuk-table__body">
		{#each records as r}
			<tr class="govuk-table__row">
				{#each headers as { key, rowHead }}
					{@const value = r[key] ? r[key] : ''}
					{#if rowHead}
						<th scope="row" class="govuk-table__header">{@html value}</th>
					{:else}
						<td class="govuk-table__cell">{@html value}</td>
					{/if}
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
