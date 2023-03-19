<script>
	import BreadCrumbs from '$govuk/BreadCrumbs.svelte'
	import GridPage from '$govuk/GridPage.svelte'
	import GridRow from '$govuk/GridRow.svelte'
	import Heading from '$govuk/Heading.svelte'
	import Link from '$govuk/Link.svelte'
	import Main from '$govuk/Main.svelte'
	import Paragraph from '$govuk/Paragraph.svelte'
	import SpanTwoThirds from '$govuk/SpanTwoThirds.svelte'
</script>

<GridPage title="Abc">
	<BreadCrumbs
		collapsable
		crumbs="{[
			['/home', 'Home'],
			['/abc', 'Abc'],
		]}" />

	<Main>
		<Heading h1 xl>Abc</Heading>

		<GridRow>
			<SpanTwoThirds>
				Visit <Link href="/abc/xyz">Xyz</Link>...
			</SpanTwoThirds>
		</GridRow>

		<!-- TODO: Next button -->
	</Main>
</GridPage>
