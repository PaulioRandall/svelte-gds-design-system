<script>
	import DocsExample from '$shared/DocsExample.svelte'
	import DocsPage from '$shared/DocsPage.svelte'
	import DocsProp from '$shared/DocsProp.svelte'
	import DocsSlot from '$shared/DocsSlot.svelte'

	import ExampleMinimalist from './ExampleMinimalist.svelte'
	import exampleCodeMinimalist from './ExampleMinimalist.svelte?raw'
</script>

<DocsPage
	group="General components"
	title="Summary list"
	gds_name="Summary list"
	gds_link="https://design-system.service.gov.uk/components/summary-list/"
	crumbs="{[
		['/home', 'Home'],
		['/general-components', 'General components'],
		['/general-components/summary-list', 'Summary list'],
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
		<DocsProp name="id" type="string" summary="Wrapper element ID" />
		<DocsProp
			name="no_border"
			type="bool"
			default_value="false"
			summary="If set removes the borders" />
	</svelte:fragment>

	<svelte:fragment slot="slots">
		<DocsSlot default_slot summary="Series of SummaryListItem components" />
	</svelte:fragment>
</DocsPage>
