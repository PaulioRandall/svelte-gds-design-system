<script>
	import { page } from '$app/stores'

	import Main from '$govuk/Main.svelte'
	import Page from '$govuk/Page.svelte'
	import Paragraph from '$govuk/Paragraph.svelte'
	import Row from '$govuk/Row.svelte'
	import SpanTwoThirds from '$govuk/SpanTwoThirds.svelte'
</script>

<Page title="{$page.status}">
	<Main autospace>
		<Row>
			<SpanTwoThirds>
				<Paragraph>
					<b>{$page.status}:</b>
					{$page.error.message}
				</Paragraph>
			</SpanTwoThirds>
		</Row>
	</Main>
</Page>
