<script>
	import GridPage from '$govuk/GridPage.svelte'
	import GridRow from '$govuk/GridRow.svelte'
	import Heading from '$govuk/Heading.svelte'
	import Main from '$govuk/Main.svelte'
	import Paragraph from '$govuk/Paragraph.svelte'
	import SpanTwoThirds from '$govuk/SpanTwoThirds.svelte'
</script>

<GridPage title="Feedback">
	<Main>
		<Heading h1 xl>Feedback</Heading>

		<GridRow>
			<SpanTwoThirds>
				<Paragraph>A paragraph...</Paragraph>
			</SpanTwoThirds>
		</GridRow>
	</Main>
</GridPage>
