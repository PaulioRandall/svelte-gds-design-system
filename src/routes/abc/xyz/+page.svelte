<script>
	import BreadCrumbs from '$govuk/BreadCrumbs.svelte'
	import Heading from '$govuk/Heading.svelte'
	import Main from '$govuk/Main.svelte'
	import Page from '$govuk/Page.svelte'
	import Paragraph from '$govuk/Paragraph.svelte'
	import Row from '$govuk/Row.svelte'
	import SpanTwoThirds from '$govuk/SpanTwoThirds.svelte'
</script>

<Page title="Xyz">
	<BreadCrumbs
		collapsable
		crumbs="{[
			['/home', 'Home'],
			['/abc', 'Abc'],
			['/abc/xyz', 'Xyz'],
		]}" />

	<Main>
		<Heading h1 xl>Xyz</Heading>

		<Row>
			<SpanTwoThirds>
				<Paragraph>A paragraph...</Paragraph>
			</SpanTwoThirds>
		</Row>

		<!-- TODO: Next button -->
	</Main>
</Page>
