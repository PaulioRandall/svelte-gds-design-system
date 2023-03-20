<script>
	import Paragraph from '$govuk/Paragraph.svelte'
	import Summary from '$govuk/Summary.svelte'
	import SummaryActions from '$govuk/SummaryActions.svelte'
	import SummaryActionsItem from '$govuk/SummaryActionsItem.svelte'
	import SummaryCard from '$govuk/SummaryCard.svelte'
	import SummaryItem from '$govuk/SummaryItem.svelte'

	export let name // = ""
	export let age // = ""
</script>

<SummaryCard heading="{name}">
	<SummaryActions slot="actions">
		<SummaryActionsItem href="/abc/xyz?delete={name}">
			Delete {name}
		</SummaryActionsItem>
		<SummaryActionsItem href="/abc/xyz?edit={name}">
			Edit {name}
		</SummaryActionsItem>
	</SummaryActions>

	<Summary>
		<SummaryItem name="Name">
			<Paragraph>{name}</Paragraph>
		</SummaryItem>
		<SummaryItem name="Age">
			<Paragraph>{age}</Paragraph>
		</SummaryItem>
	</Summary>
</SummaryCard>
