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
	export let summary // = ""
</script>

<SummaryCard h3 heading="<code>{name}</code>">
	<SummaryList>
		{#if required}
			<SummaryListItem name="Required" />
		{:else}
			<SummaryListItem name="Optional" />
		{/if}
		<SummaryListItem name="Type">
			{@html type}
		</SummaryListItem>
		{#if default_value}
			<SummaryListItem name="Default">
				<span class="quoted">{@html default_value}</span>
			</SummaryListItem>
		{/if}
		{#if allows}
			<SummaryListItem name="Allows">
				<List bullets>
					{#each allows as item}
						<li class="quoted">{@html item}</li>
					{/each}
				</List>
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
</style>
