<script>
	import List from '$govuk/List.svelte'
	import Summary from '$govuk/Summary.svelte'
	import SummaryCard from '$govuk/SummaryCard.svelte'
	import SummaryItem from '$govuk/SummaryItem.svelte'

	export let required = false
	export let name // = ""
	export let type // = ""
	export let default_value = undefined // = ""
	export let allows = undefined // = [""]
	export let summary // = ""
</script>

<SummaryCard heading="<code>{name}</code>">
	<Summary>
		{#if required}
			<SummaryItem name="Required" />
		{:else}
			<SummaryItem name="Optional" />
		{/if}
		<SummaryItem name="Type">
			{@html type}
		</SummaryItem>
		{#if default_value}
			<SummaryItem name="Default">
				<span class="quoted">{@html default_value}</span>
			</SummaryItem>
		{/if}
		{#if allows}
			<SummaryItem name="Allows">
				<List bullets>
					{#each allows as item}
						<li class="quoted">{@html item}</li>
					{/each}
				</List>
			</SummaryItem>
		{/if}
		<SummaryItem name="Summary">
			{@html summary}
		</SummaryItem>
	</Summary>
</SummaryCard>

<style>
	.quoted::before,
	.quoted::after {
		content: "'";
	}
</style>
