<script>
	import Summary from '$govuk/Summary.svelte'
	import SummaryCard from '$govuk/SummaryCard.svelte'
	import SummaryItem from '$govuk/SummaryItem.svelte'

	export let default_slot = false
	export let name = undefined // ""
	export let default_value = undefined // = ""
	export let summary // = ""

	if (default_slot) {
		name = '&lt;default&gt;'
	}
</script>

<SummaryCard heading="<code>{name}</code>">
	<Summary>
		{#if default_value}
			<SummaryItem name="Default">
				<span class="quoted">{default_value}</span>
			</SummaryItem>
		{/if}
		<SummaryItem name="Summary">
			{summary}
		</SummaryItem>
	</Summary>
</SummaryCard>

<style>
	.quoted::before,
	.quoted::after {
		content: "'";
	}
</style>
