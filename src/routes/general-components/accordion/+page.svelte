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
	title="Accordion"
	gds_name="Accordion"
	gds_link="https://design-system.service.gov.uk/components/accordion/"
	crumbs="{[
		['/home', 'Home'],
		['/general-components', 'General components'],
		['/general-components/accordion', 'Accordion'],
	]}"
	examples="{[['example-minimalist', 'Minimalist']]}"
	children="{[['/general-components/accordion-section', 'Accordion section']]}">
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
		<DocsProp name="id" type="string">Wrapper element ID</DocsProp>
		<DocsProp name="forget_expanded" type="bool" default_value="false">
			If set the accordion collapses when navigating away from the page.
		</DocsProp>
		<DocsProp name="custom_labels" type="object">
			Override interaction labels for links that show and hide content.
		</DocsProp>
	</svelte:fragment>

	<svelte:fragment slot="slots">
		<DocsSlot default_slot>
			Series of <Link href="/general-components/accordion-section"
				>AccordionSection</Link> components.
		</DocsSlot>
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
