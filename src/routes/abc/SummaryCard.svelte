<script>
	import Paragraph from '$govuk/Paragraph.svelte'
	import Summary from '$govuk/Summary.svelte'
	import SummaryActionItem from '$govuk/SummaryActionItem.svelte'
	import SummaryActions from '$govuk/SummaryActions.svelte'
	import SummaryCard from '$govuk/SummaryCard.svelte'
	import SummaryItem from '$govuk/SummaryItem.svelte'

	export let name // = ""
	export let age // = ""
</script>

<SummaryCard heading="{name}">
	<SummaryActions slot="actions">
		<SummaryActionItem href="/abc/xyz?delete={name}">
			Delete {name}
		</SummaryActionItem>
		<SummaryActionItem href="/abc/xyz?edit={name}">
			Edit {name}
		</SummaryActionItem>
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
