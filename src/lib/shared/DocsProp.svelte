<script>
	import List from '$govuk/List.svelte'
	import SummaryCard from '$govuk/SummaryCard.svelte'
	import SummaryList from '$govuk/SummaryList.svelte'
	import SummaryListItem from '$govuk/SummaryListItem.svelte'

	export let required = false
	export let name // = ""
	export let type // = ""
	export let default_value = undefined // = ""
	export let allows = undefined // = [""]

	// TODO: Remove - replace with default slot
	export let summary = ''
</script>

<SummaryCard h3 heading="<code>{name}</code>">
	<SummaryList>
		{#if required}
			<SummaryListItem name="Required" />
		{/if}
		<SummaryListItem name="Type" use_all_space>
			{@html type}
		</SummaryListItem>
		{#if default_value}
			<SummaryListItem name="Default" use_all_space>
				<span class="quoted">{@html default_value}</span>
			</SummaryListItem>
		{/if}
		{#if allows}
			<SummaryListItem name="Allows" use_all_space>
				<List bullets>
					{#each allows as item}
						<li>{@html item}</li>
					{/each}
				</List>
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
</style>
