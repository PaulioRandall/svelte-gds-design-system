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

	// TODO: remove -replace with default slot
	export let summary = ''
</script>

<SummaryCard h3 heading="&nbsp;">
	<SummaryList>
		{#if required}
			<SummaryListItem name="Required" />
		{/if}
		<SummaryListItem name="Pick one" use_all_space>
			<List>
				{#each props as [name, summary]}
					<li class="prop">
						{name}
						{#if summary}
							&nbsp;<span>({@html summary})</span>
						{/if}
					</li>
				{/each}
			</List>
		</SummaryListItem>
		<SummaryListItem name="Type" use_all_space>
			{@html type}
		</SummaryListItem>
		{#if default_value}
			<SummaryListItem name="Default" use_all_space>
				<span class="quoted">{@html default_value}</span>
			</SummaryListItem>
		{/if}
		<SummaryListItem name="Summary" use_all_space>
			{#if $$slots.default}
				<slot />
			{:else}
				{@html summary}
			{/if}
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
