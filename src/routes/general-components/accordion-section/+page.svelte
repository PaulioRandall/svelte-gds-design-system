<script>
	import DocsExample from '$shared/DocsExample.svelte'
	import DocsPage from '$shared/DocsPage.svelte'
	import DocsProp from '$shared/DocsProp.svelte'
	import DocsSlot from '$shared/DocsSlot.svelte'

	import ExampleMinimalist from './ExampleMinimalist.svelte'
	import exampleCodeMinimalist from './ExampleMinimalist.svelte?raw'

	import ExampleSummary from './ExampleSummary.svelte'
	import exampleCodeSummary from './ExampleSummary.svelte?raw'
</script>

<DocsPage
	group="General components"
	title="Accordion section"
	gds_name="Accordion"
	gds_link="https://design-system.service.gov.uk/components/accordion/"
	crumbs="{[
		['/home', 'Home'],
		['/general-components', 'General components'],
		['/general-components/accordion-section', 'Accordion section'],
	]}"
	examples="{[['example-minimalist', 'Minimalist']]}"
	parents="{[['/general-components/accordion', 'Accordion']]}">
	<svelte:fragment slot="examples">
		<DocsExample
			first_example
			id="example-minimalist"
			heading="Minimalist"
			src="{exampleCodeMinimalist}">
			<ExampleMinimalist />
		</DocsExample>

		<DocsExample
			id="example-summary"
			heading="Summary"
			src="{exampleCodeSummary}">
			<ExampleSummary />
		</DocsExample>
	</svelte:fragment>

	<svelte:fragment slot="props">
		<DocsProp required name="heading" type="string">Heading text.</DocsProp>
		<DocsProp name="id" type="string">Wrapper element ID</DocsProp>
		<DocsProp name="summary" type="string">
			Summary text shown below the heading. Always visible.
		</DocsProp>
	</svelte:fragment>

	<svelte:fragment slot="slots">
		<DocsSlot default_slot>Main content of the accordion section.</DocsSlot>
	</svelte:fragment>
</DocsPage>
