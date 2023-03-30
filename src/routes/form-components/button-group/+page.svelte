<script>
	import SectionBreak from '$govuk/SectionBreak.svelte'

	import DocsPage from '$shared/DocsPage.svelte'
	import DocsProp from '$shared/DocsProp.svelte'
	import DocsSlot from '$shared/DocsSlot.svelte'
	import DocsExample from '$shared/DocsExample.svelte'

	import ExampleMinimalist from './ExampleMinimalist.svelte'
	import exampleCodeMinimalist from './ExampleMinimalist.svelte?raw'

	import ExampleLinks from './ExampleLinks.svelte'
	import exampleCodeLinks from './ExampleLinks.svelte?raw'
</script>

<DocsPage
	group="Form components"
	title="Button group"
	gds_name="Button group"
	gds_link="https://design-system.service.gov.uk/components/button/"
	crumbs="{[
		['/home', 'Home'],
		['/form-components', 'Form components'],
		['/form-components/button-group', 'Button group'],
	]}"
	examples="{[
		['example-minimalist', 'Minimalist'],
		['example-links', 'Links'],
	]}">
	<svelte:fragment slot="examples">
		<DocsExample
			id="example-minimalist"
			heading="Minimalist"
			src="{exampleCodeMinimalist}">
			<ExampleMinimalist />
		</DocsExample>

		<SectionBreak md />

		<DocsExample id="example-links" heading="Links" src="{exampleCodeLinks}">
			<ExampleLinks />
		</DocsExample>
	</svelte:fragment>

	<svelte:fragment slot="props">
		<DocsProp name="id" type="string" summary="Wrapper element ID" />
	</svelte:fragment>

	<svelte:fragment slot="slots">
		<DocsSlot
			default_slot
			summary="Buttons and Links in the order they are to be displayed" />
	</svelte:fragment>
</DocsPage>
