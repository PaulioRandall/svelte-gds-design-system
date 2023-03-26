<script>
	import Col from '$govuk/Col.svelte'
	import List from '$govuk/List.svelte'
	import MenuItem from '$govuk/MenuItem.svelte'
	import Paragraph from '$govuk/Paragraph.svelte'
	import Row from '$govuk/Row.svelte'

	import SearchForm from '$govuk/forms/SearchForm.svelte'
	import Fieldset from '$govuk/forms/Fieldset.svelte'
	import Legend from '$govuk/forms/Legend.svelte'

	import Page from '$shared/Page.svelte'
</script>

<Page title="Form components">
	<Row>
		<Col two_thirds>
			<SearchForm GET="/forms/search-form">
				<Fieldset>
					<Legend slot="legend" h1 xl>A legend</Legend>
				</Fieldset>
			</SearchForm>
		</Col>
	</Row>
</Page>
