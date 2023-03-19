<script>
	import GridPage from '$govuk/GridPage.svelte'
	import GridRow from '$govuk/GridRow.svelte'
	import Heading from '$govuk/Heading.svelte'
	import Link from '$govuk/Link.svelte'
	import Main from '$govuk/Main.svelte'
	import Paragraph from '$govuk/Paragraph.svelte'
	import SpanTwoThirds from '$govuk/SpanTwoThirds.svelte'
</script>

<GridPage title="Home">
	<Main>
		<Heading h1 xl>Home</Heading>

		<GridRow>
			<SpanTwoThirds>
				<Paragraph>
					Visit <Link href="/abc">Abc</Link>...
				</Paragraph>
			</SpanTwoThirds>
		</GridRow>
	</Main>
</GridPage>
