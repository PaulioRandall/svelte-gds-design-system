<script>
	import BreadCrumbs from '$govuk/BreadCrumbs.svelte'
	import Col from '$govuk/Col.svelte'
	import Heading from '$govuk/Heading.svelte'
	import Main from '$govuk/Main.svelte'
	import Page from '$govuk/Page.svelte'
	import Paragraph from '$govuk/Paragraph.svelte'
	import Row from '$govuk/Row.svelte'
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
			<Col two_thirds>
				<Paragraph>A paragraph...</Paragraph>
			</Col>
		</Row>

		<!-- TODO: Next button -->
	</Main>
</Page>
