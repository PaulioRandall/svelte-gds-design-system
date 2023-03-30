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
		-->

	<List slot="side-menu" spaced>
		<MenuItem href="/form-components/button">Button</MenuItem>
		<MenuItem href="/form-components/button-group">Button group</MenuItem>
		<MenuItem href="/form-components/checkboxes">Checkboxes</MenuItem>
		<MenuItem href="/form-components/date-input">Date input</MenuItem>
		<MenuItem href="/form-components/error-summary">Error summary</MenuItem>
		<!--<MenuItem href="/form-components/fieldset">Fieldset</MenuItem>-->
		<!--<MenuItem href="/form-components/file-upload">File upload</MenuItem>-->
		<MenuItem href="/form-components/radio-group">Radio group</MenuItem>
		<MenuItem href="/form-components/select">Select</MenuItem>
		<MenuItem href="/form-components/start-button">Start button</MenuItem>
		<MenuItem href="/form-components/text-input">Text input</MenuItem>
		<MenuItem href="/form-components/textarea">Textarea</MenuItem>
	</List>
</StandardPage>
