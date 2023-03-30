<script>
	import List from '$govuk/List.svelte'
	import Summary from '$govuk/Summary.svelte'
	import SummaryCard from '$govuk/SummaryCard.svelte'
	import SummaryItem from '$govuk/SummaryItem.svelte'

	export let group_name // = ""
	export let props /* = [
		["prop-name", "summary"]
	] */
	export let default_value = undefined // = ""
	export let summary // = ""
</script>

<SummaryCard
	heading="<i>{'&lt;' + group_name + '&gt;'}</i> &nbsp;&nbsp;(pick one)">
	<Summary>
		<SummaryItem name="Props">
			<List>
				{#each props as [name, summary]}
					<li class="prop">
						<span class="quoted">{name}</span>
						{#if summary}
							<span>({summary})</span>
						{/if}
					</li>
				{/each}
			</List>
		</SummaryItem>
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

	.prop {
		display: flex;
		justify-content: space-between;
	}
</style>
