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
	title="Accordion"
	gds_name="Accordion"
	gds_link="https://design-system.service.gov.uk/components/accordion/"
	crumbs="{[
		['/home', 'Home'],
		['/general-components', 'General components'],
		['/general-components/accordion', 'Accordion'],
	]}"
	examples="{[['example-minimalist', 'Minimalist']]}"
	sub_components="{[['#', 'Accordion section']]}">
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
			name="forget_expanded"
			type="bool"
			default_value="false"
			summary="If set the accordion collapses when navigating away from the page" />
		<DocsProp
			name="custom_labels"
			type="object"
			summary="Custom interaction labels for showing and hiding content" />
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
