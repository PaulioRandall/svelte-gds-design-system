<script>
	import BreadCrumbs from '$govuk/BreadCrumbs.svelte'
	import Heading from '$govuk/Heading.svelte'
	import Link from '$govuk/Link.svelte'
	import Main from '$govuk/Main.svelte'
	import Page from '$govuk/Page.svelte'
	import Paragraph from '$govuk/Paragraph.svelte'
	import Row from '$govuk/Row.svelte'
	import SpanTwoThirds from '$govuk/SpanTwoThirds.svelte'
	import Summary from '$govuk/Summary.svelte'
	import SummaryActions from '$govuk/SummaryActions.svelte'
	import SummaryActionsItem from '$govuk/SummaryActionsItem.svelte'
	import SummaryCard from '$govuk/SummaryCard.svelte'
	import SummaryItem from '$govuk/SummaryItem.svelte'

	import PersonCard from './PersonCard.svelte'
</script>

<Page title="Abc">
	<BreadCrumbs
		collapsable
		crumbs="{[
			['/home', 'Home'],
			['/abc', 'Abc'],
		]}" />

	<Main>
		<Heading h1 xl>Abc</Heading>

		<Row>
			<SpanTwoThirds>
				<Paragraph>
					Visit <Link href="/abc/xyz">Xyz</Link>...
				</Paragraph>

				<PersonCard name="Alice" age="21" />
				<PersonCard name="Bob" age="69" />
				<PersonCard name="Charlie" age="32" />
			</SpanTwoThirds>
		</Row>

		<!-- TODO: Next button -->
	</Main>
</Page>
