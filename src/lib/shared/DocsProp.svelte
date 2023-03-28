<script>
	import List from '$govuk/List.svelte'
	import Summary from '$govuk/Summary.svelte'
	import SummaryCard from '$govuk/SummaryCard.svelte'
	import SummaryItem from '$govuk/SummaryItem.svelte'

	export let name // = ""
	export let type // = ""
	export let default_value = undefined // = ""
	export let allows = undefined // = [""]
	export let summary // = ""
</script>

<SummaryCard heading="<code>{name}</code>">
	<Summary>
		<SummaryItem name="Type">
			{type}
		</SummaryItem>
		{#if default_value}
			<SummaryItem name="Default">
				{default_value}
			</SummaryItem>
		{/if}
		{#if allows}
			<SummaryItem name="Allows">
				<List bullets>
					{#each allows as item}
						<li>{item}</li>
					{/each}
				</List>
			</SummaryItem>
		{/if}
		<SummaryItem name="Summary">
			{summary}
		</SummaryItem>
	</Summary>
</SummaryCard>
