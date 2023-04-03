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
	examples="{[['example-minimalist', 'Minimalist']]}">
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
		<DocsProp name="id" type="string" summary="Wrapper element ID" />
		<DocsProp required name="heading" type="string" summary="Section heading" />
		<DocsProp
			name="summary"
			type="string"
			summary="Summary always visible below heading" />
	</svelte:fragment>

	<svelte:fragment slot="slots">
		<DocsSlot default_slot summary="Series of AccordionSection components" />
	</svelte:fragment>
</DocsPage>

<style>
	:global(.type-object-brace) {
		margin-left: 2ch;
	}

	:global(.type-object-member) {
		margin-left: 4ch;
	}
</style>
