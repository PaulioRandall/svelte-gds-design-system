<script>
	import Breadcrumbs from '$govuk/Breadcrumbs.svelte'
	import Caption from '$govuk/Caption.svelte'
	import Heading from '$govuk/Heading.svelte'
	import List from '$govuk/List.svelte'
	import MenuItem from '$govuk/MenuItem.svelte'
	import Paragraph from '$govuk/Paragraph.svelte'

	import StandardPage from '$shared/StandardPage.svelte'
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

	<Heading id="page-title" h1 xl>
		<Caption xl>Svelte components</Caption>
		General components
	</Heading>

	<List spaced>
		<MenuItem href="/general-components/accordion">Accordion</MenuItem>
		<List sub_list>
			<MenuItem href="/general-components/accordion-section"
				>Accordion section</MenuItem>
		</List>
		<MenuItem href="/general-components/back-link">Back link</MenuItem>
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
		<MenuItem href="/general-components/summary-card">Summary card</MenuItem>
		<MenuItem href="/general-components/summary-list">Summary list</MenuItem>
		<MenuItem href="/general-components/table">Table</MenuItem>
		<MenuItem href="/general-components/tabs">Tabs</MenuItem>
		<MenuItem href="/general-components/tag">Tag</MenuItem>
		<MenuItem href="/general-components/warning-text">Warning text</MenuItem>
	</List>
</StandardPage>
