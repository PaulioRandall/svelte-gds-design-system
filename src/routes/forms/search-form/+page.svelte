<script>
	import Col from '$govuk/Col.svelte'
	import List from '$govuk/List.svelte'
	import MenuItem from '$govuk/MenuItem.svelte'
	import Paragraph from '$govuk/Paragraph.svelte'
	import Row from '$govuk/Row.svelte'

	import SearchForm from '$govuk/forms/SearchForm.svelte'

	import Page from '$shared/Page.svelte'
</script>

<Page title="Form components">
	<Row>
		<Col two_thirds>
			<SearchForm GET="/forms/search-form" />
		</Col>
	</Row>
</Page>
