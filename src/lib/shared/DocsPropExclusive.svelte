<script>
	import List from '$govuk/List.svelte'
	import SummaryCard from '$govuk/SummaryCard.svelte'
	import SummaryList from '$govuk/SummaryList.svelte'
	import SummaryListItem from '$govuk/SummaryListItem.svelte'

	export let required = false
	export let type = 'bool'
	export let group_name // = ""
	export let props /* = [
		["prop-name", "summary"]
	] */
	export let default_value = undefined // = ""
	export let summary // = ""
</script>

<SummaryCard h3 heading="(Mutually exclusive bool: {group_name})">
	<SummaryList>
		{#if required}
			<SummaryListItem name="Required" />
		{:else}
			<SummaryListItem name="Optional" />
		{/if}
		<SummaryListItem name="Type">
			{@html type}
		</SummaryListItem>
		<SummaryListItem name="Props">
			<List>
				{#each props as [name, summary]}
					<li class="prop">
						<span class="quoted">{name}</span>
						{#if summary}
							&nbsp;<span>({@html summary})</span>
						{/if}
					</li>
				{/each}
			</List>
		</SummaryListItem>
		{#if default_value}
			<SummaryListItem name="Default">
				<span class="quoted">{@html default_value}</span>
			</SummaryListItem>
		{/if}
		<SummaryListItem name="Summary">
			{@html summary}
		</SummaryListItem>
	</SummaryList>
</SummaryCard>

<style>
	.quoted::before,
	.quoted::after {
		content: "'";
	}

	.prop {
		display: flex;
		justify-content: space-between;
	}
</style>
