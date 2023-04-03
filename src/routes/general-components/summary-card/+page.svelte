<script>
	import DocsExample from '$shared/DocsExample.svelte'
	import DocsPage from '$shared/DocsPage.svelte'
	import DocsProp from '$shared/DocsProp.svelte'
	import DocsPropExclusive from '$shared/DocsPropExclusive.svelte'
	import DocsSlot from '$shared/DocsSlot.svelte'

	import ExampleMinimalist from './ExampleMinimalist.svelte'
	import exampleCodeMinimalist from './ExampleMinimalist.svelte?raw'

	import ExampleActions from './ExampleActions.svelte'
	import exampleCodeActions from './ExampleActions.svelte?raw'
</script>

<DocsPage
	group="General components"
	title="Summary card"
	gds_name="Summary card"
	gds_link="https://design-system.service.gov.uk/components/summary-list/"
	crumbs="{[
		['/home', 'Home'],
		['/general-components', 'General components'],
		['/general-components/summary-card', 'Summary card'],
	]}"
	examples="{[
		['example-minimalist', 'Minimalist'],
		['example-actions', 'Actions'],
	]}">
	<svelte:fragment slot="examples">
		<DocsExample
			first_example
			id="example-minimalist"
			heading="Minimalist"
			src="{exampleCodeMinimalist}">
			<ExampleMinimalist />
		</DocsExample>

		<DocsExample
			id="example-actions"
			heading="Actions"
			src="{exampleCodeActions}">
			<ExampleActions />
		</DocsExample>
	</svelte:fragment>

	<svelte:fragment slot="props">
		<DocsProp name="id" type="string" summary="Wrapper element ID" />
		<DocsProp required name="heading" type="string" summary="Heading text" />
		<DocsPropExclusive
			required
			group_name="Heading element type"
			summary="Type of heading element"
			props="{[['h2'], ['h3'], ['h4']]}" />
	</svelte:fragment>

	<svelte:fragment slot="slots">
		<DocsSlot default_slot summary="A SummaryList component" />
		<DocsSlot
			name="actions"
			summary="A series of SummaryCardAction components" />
	</svelte:fragment>
</DocsPage>
