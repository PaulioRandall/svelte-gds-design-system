<script>
	import BreadCrumbs from '$govuk/BreadCrumbs.svelte'
	import Col from '$govuk/Col.svelte'
	import Heading from '$govuk/Heading.svelte'
	import Paragraph from '$govuk/Paragraph.svelte'
	import Row from '$govuk/Row.svelte'

	import Page from '$shared/Page.svelte'
</script>

<Page title="Xyz">
	<BreadCrumbs
		slot="breadcrumbs"
		collapsable
		crumbs="{[
			['/home', 'Home'],
			['/general', 'General'],
			['/general/xyz', 'Xyz'],
		]}" />

	<Heading h1 xl>Xyz</Heading>

	<Row>
		<Col two_thirds>
			<Paragraph>A paragraph...</Paragraph>
		</Col>
	</Row>
</Page>
