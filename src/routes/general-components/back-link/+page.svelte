<script>
	import DocsExample from '$shared/DocsExample.svelte'
	import DocsPage from '$shared/DocsPage.svelte'
	import DocsProp from '$shared/DocsProp.svelte'
	import DocsSlot from '$shared/DocsSlot.svelte'

	import ExampleMinimalist from './ExampleMinimalist.svelte'
	import exampleCodeMinimalist from './ExampleMinimalist.svelte?raw'

	import ExampleLabel from './ExampleLabel.svelte'
	import exampleCodeLabel from './ExampleLabel.svelte?raw'
</script>

<DocsPage
	group="General components"
	title="Back link"
	gds_name="Back link"
	gds_link="https://design-system.service.gov.uk/components/back-link/"
	crumbs="{[
		['/home', 'Home'],
		['/general-components', 'General components'],
		['/general-components/back-link', 'Back link'],
	]}"
	examples="{[
		['example-minimalist', 'Minimalist'],
		['example-label', 'Label'],
	]}">
	<svelte:fragment slot="examples">
		<DocsExample
			first_example
			id="example-minimalist"
			heading="Minimalist"
			src="{exampleCodeMinimalist}">
			<ExampleMinimalist />
		</DocsExample>

		<DocsExample id="example-label" heading="Label" src="{exampleCodeLabel}">
			<ExampleLabel />
		</DocsExample>
	</svelte:fragment>

	<svelte:fragment slot="props">
		<DocsProp required name="href" type="string">Destintion URL</DocsProp>
	</svelte:fragment>

	<svelte:fragment slot="slots">
		<DocsSlot default_slot default_value="Back">Label text.</DocsSlot>
	</svelte:fragment>
</DocsPage>
