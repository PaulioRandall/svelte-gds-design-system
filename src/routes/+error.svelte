<script>
	import { page } from '$app/stores'

	import Col from '$govuk/Col.svelte'
	import Main from '$govuk/Main.svelte'
	import Paragraph from '$govuk/Paragraph.svelte'
	import Row from '$govuk/Row.svelte'

	import BasePage from '$shared/BasePage.svelte'
</script>

<BasePage title="{$page.status}">
	<Main autospace>
		<Row>
			<Col width="two-thirds">
				<Paragraph>
					<b>{$page.status}:</b>
					{$page.error.message}
				</Paragraph>
			</Col>
		</Row>
	</Main>
</BasePage>
