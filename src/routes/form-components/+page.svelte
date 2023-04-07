<script>
	import Breadcrumbs from '$govuk/Breadcrumbs.svelte'
	import Breadcrumb from '$govuk/Breadcrumb.svelte'
	import Caption from '$govuk/Caption.svelte'
	import Heading from '$govuk/Heading.svelte'
	import List from '$govuk/List.svelte'
	import MenuItem from '$govuk/MenuItem.svelte'
	import Paragraph from '$govuk/Paragraph.svelte'

	import SideMenuPage from '$shared/SideMenuPage.svelte'
</script>

<SideMenuPage sticky_menu title="General components">
	<Breadcrumbs slot="breadcrumbs" collapsable>
		<Breadcrumb href="/home">Home</Breadcrumb>
		<Breadcrumb href="/form-components">Form components</Breadcrumb>
	</Breadcrumbs>

	<!--
		TODO:
		+ Pagination
		+ Cookie banner
	-->

	<Heading id="page-title" h1 xl>
		<Caption xl>Svelte components</Caption>
		General components
	</Heading>

	<List spaced>
		<MenuItem href="/form-components/button">Button</MenuItem>
		<List double_indent>
			<MenuItem href="/form-components/button-group">Button group</MenuItem>
		</List>
		<MenuItem href="/form-components/checkboxes">Checkboxes</MenuItem>
		<MenuItem href="/form-components/date-input">Date input</MenuItem>
		<List double_indent>
			<MenuItem href="/form-components/date-unit">Date unit</MenuItem>
		</List>
		<MenuItem href="/form-components/error-summary">Error summary</MenuItem>
		<!--<MenuItem href="/form-components/fieldset">Fieldset</MenuItem>-->
		<!--<MenuItem href="/form-components/file-upload">File upload</MenuItem>-->
		<MenuItem href="/form-components/radio-group">Radio group</MenuItem>
		<MenuItem href="/form-components/select">Select</MenuItem>
		<MenuItem href="/form-components/start-button">Start button</MenuItem>
		<MenuItem href="/form-components/text-input">Text input</MenuItem>
		<MenuItem href="/form-components/textarea">Textarea</MenuItem>
	</List>
</SideMenuPage>
