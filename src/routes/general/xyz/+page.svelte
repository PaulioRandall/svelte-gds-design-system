<script>
	import BreadCrumbs from '$govuk/BreadCrumbs.svelte'
	import Col from '$govuk/Col.svelte'
	import Heading from '$govuk/Heading.svelte'
	import Main from '$govuk/Main.svelte'
	import PageContent from '$govuk/PageContent.svelte'
	import Paragraph from '$govuk/Paragraph.svelte'
	import Row from '$govuk/Row.svelte'
</script>

<PageContent title="Xyz">
	<BreadCrumbs
		collapsable
		crumbs="{[
			['/home', 'Home'],
			['/general', 'General'],
			['/general/xyz', 'Xyz'],
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
</PageContent>
