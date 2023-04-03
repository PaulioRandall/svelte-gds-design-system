<script>
	import SummaryCard from '$govuk/SummaryCard.svelte'
	import SummaryCardAction from '$govuk/SummaryCardAction.svelte'
	import SummaryList from '$govuk/SummaryList.svelte'
	import SummaryListItem from '$govuk/SummaryListItem.svelte'
</script>

<SummaryCard h4 heading="Customer">
	<svelte:fragment slot="actions">
		<SummaryCardAction href="#example-actions" label="Update" />
		<SummaryCardAction href="#example-actions" label="Delete" />
	</svelte:fragment>

	<SummaryList>
		<SummaryListItem name="Name">Alice</SummaryListItem>
		<SummaryListItem name="Age">32</SummaryListItem>
		<SummaryListItem name="Occupation">Nurse</SummaryListItem>
	</SummaryList>
</SummaryCard>
