<script>
	import Breadcrumbs from '$govuk/Breadcrumbs.svelte'
	import BreadcrumbsSegment from '$govuk/BreadcrumbsSegment.svelte'
	import Caption from '$govuk/Caption.svelte'
	import Heading from '$govuk/Heading.svelte'
	import List from '$govuk/List.svelte'
	import MenuItem from '$govuk/MenuItem.svelte'
	import Paragraph from '$govuk/Paragraph.svelte'

	import SideMenuPage from '$shared/SideMenuPage.svelte'
</script>

<SideMenuPage sticky_menu title="General components">
	<Breadcrumbs slot="breadcrumbs" collapsable>
		<BreadcrumbsSegment href="/home">Home</BreadcrumbsSegment>
		<BreadcrumbsSegment href="/form-components"
			>Form components</BreadcrumbsSegment>
	</Breadcrumbs>

	<!--
		TODO:
		+ Pagination
		+ Cookie banner
	-->

	<Heading id="page-title" h1 xl>
		<Caption xl>Svelte components</Caption>
		Form components
	</Heading>

	<List spaced>
		<MenuItem href="/form-components/button">Button</MenuItem>
		<List double_indent>
			<MenuItem href="/form-components/button-group">ButtonGroup</MenuItem>
		</List>
		<MenuItem href="/form-components/checkboxes">Checkboxes</MenuItem>
		<List double_indent>
			<MenuItem href="/form-components/checkbox">Checkbox</MenuItem>
			<MenuItem href="/form-components/checkbox-group">CheckboxGroup</MenuItem>
		</List>
		<MenuItem href="/form-components/date-input">DateInput</MenuItem>
		<List double_indent>
			<MenuItem href="/form-components/date-unit">DateUnit</MenuItem>
		</List>
		<MenuItem href="/form-components/error-summary">ErrorSummary</MenuItem>
		<!--<MenuItem href="/form-components/fieldset">Fieldset</MenuItem>-->
		<!--<MenuItem href="/form-components/file-upload">File upload</MenuItem>-->
		<MenuItem href="/form-components/radios">Radios</MenuItem>
		<List double_indent>
			<MenuItem href="/form-components/radio-group">RadioGroup</MenuItem>
			<MenuItem href="/form-components/radio-button">RadioButton</MenuItem>
		</List>
		<MenuItem href="/form-components/select">Select</MenuItem>
		<MenuItem href="/form-components/start-button">StartButton</MenuItem>
		<MenuItem href="/form-components/text-input">TextInput</MenuItem>
		<MenuItem href="/form-components/textarea">Textarea</MenuItem>
	</List>
</SideMenuPage>
