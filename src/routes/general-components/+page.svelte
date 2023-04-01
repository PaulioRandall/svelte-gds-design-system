<script>
	import Breadcrumbs from '$govuk/Breadcrumbs.svelte'
	import Caption from '$govuk/Caption.svelte'
	import Heading from '$govuk/Heading.svelte'
	import Link from '$govuk/Link.svelte'
	import List from '$govuk/List.svelte'
	import MenuItem from '$govuk/MenuItem.svelte'
	import Paragraph from '$govuk/Paragraph.svelte'

	import StandardPage from '$shared/StandardPage.svelte'
	import Section from '$shared/Section.svelte'

	import SummaryCard from './SummaryCard.svelte'
</script>

<StandardPage sticky_menu title="General components">
	<Breadcrumbs
		slot="breadcrumbs"
		collapsable
		crumbs="{[
			['/home', 'Home'],
			['/general-components', 'General components'],
		]}" />

	<!--
		TODO:
		+ Pagination
		+ Cookie banner
	-->

	<List slot="side-menu" spaced>
		<MenuItem href="#page-title">Page title</MenuItem>
		<MenuItem href="/general-components/accordion">Accordion</MenuItem>
		<MenuItem href="/general-components/breadcrumbs">Breadcrumbs</MenuItem>
		<MenuItem href="/general-components/details">Details</MenuItem>
		<MenuItem href="/general-components/heading">Heading</MenuItem>
		<MenuItem href="/general-components/inset-text">Inset text</MenuItem>
		<MenuItem href="/general-components/list">List</MenuItem>
		<MenuItem href="/general-components/notification-banner">
			Notification banner
		</MenuItem>
		<MenuItem href="/general-components/panel">Panel</MenuItem>
		<MenuItem href="/general-components/paragraph">Paragraph</MenuItem>
		<MenuItem href="/general-components/table">Table</MenuItem>
		<MenuItem href="/general-components/tabs">Tabs</MenuItem>
		<MenuItem href="/general-components/tag">Tag</MenuItem>
		<MenuItem href="/general-components/warning-text">Warning text</MenuItem>

		<MenuItem href="#summary">Summary</MenuItem>
	</List>

	<Heading id="page-title" h1 xl>
		<Caption xl>A page title caption</Caption>
		The page title
	</Heading>

	<Section id="summary">
		<Heading h3 md>Summary</Heading>
		<SummaryCard name="Alice" age="21" />
		<SummaryCard name="Bob" age="69" />
		<SummaryCard name="Charlie" age="32" />
	</Section>
</StandardPage>
