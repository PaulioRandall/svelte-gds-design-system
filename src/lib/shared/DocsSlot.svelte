<script>
	import SummaryCard from '$govuk/SummaryCard.svelte'
	import SummaryList from '$govuk/SummaryList.svelte'
	import SummaryListItem from '$govuk/SummaryListItem.svelte'

	export let default_slot = false
	export let name = undefined // ""
	export let default_value = undefined // = ""
	export let summary // = ""

	if (default_slot) {
		name = '&lt;default&gt;'
	}
</script>

<SummaryCard h3 heading="<code>{name}</code>">
	<SummaryList>
		{#if default_value}
			<SummaryListItem name="Default">
				<span class="quoted">{default_value}</span>
			</SummaryListItem>
		{/if}
		<SummaryListItem name="Summary">
			{summary}
		</SummaryListItem>
	</SummaryList>
</SummaryCard>

<style>
	.quoted::before,
	.quoted::after {
		content: "'";
	}
</style>
