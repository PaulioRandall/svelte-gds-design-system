<script>
	import BreadCrumbs from '$govuk/BreadCrumbs.svelte'
	import Heading from '$govuk/Heading.svelte'
	import Link from '$govuk/Link.svelte'
	import Main from '$govuk/Main.svelte'
	import Page from '$govuk/Page.svelte'
	import Paragraph from '$govuk/Paragraph.svelte'
	import Row from '$govuk/Row.svelte'
	import SpanTwoThirds from '$govuk/SpanTwoThirds.svelte'
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
				Visit <Link href="/abc/xyz">Xyz</Link>...
			</SpanTwoThirds>
		</Row>

		<!-- TODO: Next button -->
	</Main>
</Page>
