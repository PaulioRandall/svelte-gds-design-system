<script>
	import Col from '$govuk/Col.svelte'
	import List from '$govuk/List.svelte'
	import MenuItem from '$govuk/MenuItem.svelte'
	import Paragraph from '$govuk/Paragraph.svelte'
	import Row from '$govuk/Row.svelte'

	import Page from '$shared/Page.svelte'
	import PageMenuCol from '$shared/PageMenuCol.svelte'
</script>

<Page title="Form components">
	<!--
			TODO:
			+ Pagination
			+ Cookie banner
			+ Forms
				+ Error message
			  + Button
			  + Character count
			  + Checkboxes
			  + Data input
			  + Fieldset
			  + File upload
			  + Radios
			  + Select
			  + Text input
			  + Textarea
		-->

	<Row>
		<PageMenuCol>
			<List spaced>
				<MenuItem href="/forms/search-form">Search form</MenuItem>
			</List>
		</PageMenuCol>

		<Col two_thirds />
	</Row>
</Page>
