<script>
	import { countTruthy, findTruthy } from '$govuk/util.js'

	export let id = undefined // ""

	export let caption_sm = ''
	export let caption_md = ''
	export let caption_lg = ''
	export let caption_xl = ''

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

	const numOfCaptions = countTruthy(
		caption_sm,
		caption_md,
		caption_lg,
		caption_xl
	)

	if (numOfCaptions > 1) {
		throw new Error('A table cannot have more than one caption')
	}

	const caption = findTruthy(caption_sm, caption_md, caption_lg, caption_xl)
</script>

<table id="{id}" class="govuk-table">
	{#if caption}
		<caption
			class="govuk-table__caption"
			class:govuk-table__caption--s="{caption_sm}"
			class:govuk-table__caption--m="{caption_md}"
			class:govuk-table__caption--l="{caption_lg}"
			class:govuk-table__caption--xl="{caption_xl}">
			{@html caption}
		</caption>
	{/if}

	<thead class="govuk-table__head">
		<tr class="govuk-table__row">
			{#each headers as { label, numeric, width }}
				<th
					scope="col"
					class="govuk-table__header"
					class:govuk-table__header--numeric="{numeric}"
					class:govuk-!-width-three-quarters="{width === 'three_quarters'}"
					class:govuk-!-width-two-thirds="{width === 'two_thirds'}"
					class:govuk-!-width-one-half="{width === 'half' ||
						'width' === 'one_half'}"
					class:govuk-!-width-one-third="{width === 'third' ||
						width === 'one_third'}"
					class:govuk-!-width-one-quarter="{width === 'quarter' ||
						width === 'one_quarter'}">
					{@html label}
				</th>
			{/each}
		</tr>
	</thead>

	<tbody class="govuk-table__body">
		{#each records as r}
			<tr class="govuk-table__row">
				{#each headers as { key, rowHead, numeric }}
					{@const value = r[key] ? r[key] : ''}
					{#if rowHead}
						<th
							scope="row"
							class="govuk-table__header"
							class:govuk-table__cell--numeric="{numeric}">
							{@html value}
						</th>
					{:else}
						<td
							class="govuk-table__cell"
							class:govuk-table__cell--numeric="{numeric}">
							{@html value}
						</td>
					{/if}
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
