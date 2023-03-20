<script>
	import Heading from '$govuk/Heading.svelte'
	import Link from '$govuk/Link.svelte'
	import Main from '$govuk/Main.svelte'
	import Page from '$govuk/Page.svelte'
	import Paragraph from '$govuk/Paragraph.svelte'
	import Row from '$govuk/Row.svelte'
	import SpanTwoThirds from '$govuk/SpanTwoThirds.svelte'
</script>

<Page title="Home">
	<Main>
		<Heading h1 xl>Home</Heading>

		<Row>
			<SpanTwoThirds>
				<Paragraph>
					Visit <Link href="/abc">Abc</Link>...
				</Paragraph>
			</SpanTwoThirds>
		</Row>
	</Main>
</Page>
