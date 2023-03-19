<script>
	import BreadCrumbs from '$govuk/BreadCrumbs.svelte'
	import GridPage from '$govuk/GridPage.svelte'
	import GridRow from '$govuk/GridRow.svelte'
	import Heading from '$govuk/Heading.svelte'
	import Main from '$govuk/Main.svelte'
	import Paragraph from '$govuk/Paragraph.svelte'
	import SpanTwoThirds from '$govuk/SpanTwoThirds.svelte'
</script>

<GridPage title="Xyz">
	<BreadCrumbs
		collapsable
		crumbs="{[
			['/home', 'Home'],
			['/abc', 'Abc'],
			['/abc/xyz', 'Xyz'],
		]}" />

	<Main>
		<Heading h1 xl>Xyz</Heading>

		<GridRow>
			<SpanTwoThirds>
				<Paragraph>A paragraph...</Paragraph>
			</SpanTwoThirds>
		</GridRow>

		<!-- TODO: Next button -->
	</Main>
</GridPage>
