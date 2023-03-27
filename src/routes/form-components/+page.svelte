<script>
	import List from '$govuk/List.svelte'
	import MenuItem from '$govuk/MenuItem.svelte'
	//import Paragraph from '$govuk/Paragraph.svelte'

	import StandardPage from '$shared/StandardPage.svelte'
</script>

<StandardPage title="Form components">
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

	<List slot="side-menu" spaced>
		<MenuItem href="/form-components/search-form">Search form</MenuItem>
	</List>
</StandardPage>
