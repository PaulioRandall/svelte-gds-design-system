<script>
	import SummaryCard from '$govuk/SummaryCard.svelte'
	import SummaryList from '$govuk/SummaryList.svelte'
	import SummaryListItem from '$govuk/SummaryListItem.svelte'

	export let required = false
	export let default_slot = false
	export let name = undefined // ""
	export let default_value = undefined // = ""

	// TODO: Remove - replace with default slot
	export let summary = ''

	if (default_slot) {
		name = '&lt;default&gt;'
	}
</script>

<SummaryCard h3 heading="<code>{name}</code>">
	<SummaryList>
		{#if required}
			<SummaryListItem name="Required" />
		{/if}
		{#if default_value}
			<SummaryListItem name="Default" use_all_space>
				<span class="quoted">{default_value}</span>
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
