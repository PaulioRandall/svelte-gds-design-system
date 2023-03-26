<script>
	import Col from '$govuk/Col.svelte'
	import List from '$govuk/List.svelte'
	import Main from '$govuk/Main.svelte'
	import MenuItem from '$govuk/MenuItem.svelte'
	import PageContent from '$govuk/PageContent.svelte'
	import Paragraph from '$govuk/Paragraph.svelte'
	import Row from '$govuk/Row.svelte'

	import PageMenuCol from '$shared/PageMenuCol.svelte'
</script>

<PageContent title="Form components">
	<Main>
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
					<!--
						<MenuItem href="#page-title">Page title</MenuItem>
					-->
				</List>
			</PageMenuCol>

			<Col two_thirds />
		</Row>
	</Main>
</PageContent>
