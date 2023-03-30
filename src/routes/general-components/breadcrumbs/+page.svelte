<script>
	import SectionBreak from '$govuk/SectionBreak.svelte'

	import DocsExample from '$shared/DocsExample.svelte'
	import DocsPage from '$shared/DocsPage.svelte'
	import DocsProp from '$shared/DocsProp.svelte'

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
	examples="{[['example-minimalist', 'Minimalist']]}">
	<svelte:fragment slot="examples">
		<DocsExample
			id="example-minimalist"
			heading="Minimalist"
			src="{exampleCodeMinimalist}">
			<ExampleMinimalist />
		</DocsExample>
	</svelte:fragment>

	<svelte:fragment slot="props">
		<DocsProp
			name="collapsable"
			type="bool"
			default_value="false"
			summary="If set only shows the first and last crumbs on small screens" />
		<DocsProp
			name="crumbs"
			type="[['href', 'label']...]"
			summary="List of breadcrumbs with the current page appearing last" />
	</svelte:fragment>
</DocsPage>
