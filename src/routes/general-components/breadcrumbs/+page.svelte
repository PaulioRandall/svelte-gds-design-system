<script>
	import Link from '$govuk/Link.svelte'

	import DocsExample from '$shared/DocsExample.svelte'
	import DocsPage from '$shared/DocsPage.svelte'
	import DocsProp from '$shared/DocsProp.svelte'
	import DocsSlot from '$shared/DocsSlot.svelte'

	import ExampleMinimalist from './ExampleMinimalist.svelte'
	import exampleCodeMinimalist from './ExampleMinimalist.svelte?raw'
</script>

<DocsPage
	group="General components"
	title="Breadcrumbs"
	gds_name="Breadcrumbs"
	gds_link="https://design-system.service.gov.uk/components/breadcrumbs/"
	crumbs="{[
		['/home', 'Home'],
		['/general-components', 'General components'],
		['/general-components/breadcrumbs', 'Breadcrumbs'],
	]}"
	children="{[
		['/general-components/breadcrumbs-segment', 'Breadcrumbs segment'],
	]}"
	examples="{[['example-minimalist', 'Minimalist']]}">
	<svelte:fragment slot="examples">
		<DocsExample
			first_example
			id="example-minimalist"
			heading="Minimalist"
			src="{exampleCodeMinimalist}">
			<ExampleMinimalist />
		</DocsExample>
	</svelte:fragment>

	<svelte:fragment slot="props">
		<DocsProp name="collapsable" type="bool" default_value="false">
			If set only shows the first and last crumbs when displaying on small
			screens.
		</DocsProp>
		<DocsProp name="crumbs" type="[['href', 'label']...]">
			List of breadcrumbs with the home page first and the current page last.
		</DocsProp>
	</svelte:fragment>

	<svelte:fragment slot="slots">
		<DocsSlot required default_slot>
			Serise of <Link href="/general-components/breadcrumbs-segment"
				>Breadcrumbs segment</Link> components.
		</DocsSlot>
	</svelte:fragment>
</DocsPage>
