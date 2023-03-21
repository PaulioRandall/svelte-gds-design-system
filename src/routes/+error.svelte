<script>
	import { page } from '$app/stores'

	import Col from '$govuk/Col.svelte'
	import Main from '$govuk/Main.svelte'
	import PageContent from '$govuk/PageContent.svelte'
	import Paragraph from '$govuk/Paragraph.svelte'
	import Row from '$govuk/Row.svelte'
</script>

<PageContent title="{$page.status}">
	<Main autospace>
		<Row>
			<Col two_thirds>
				<Paragraph>
					<b>{$page.status}:</b>
					{$page.error.message}
				</Paragraph>
			</Col>
		</Row>
	</Main>
</PageContent>
