<script>
	import DocsExample from '$shared/DocsExample.svelte'
	import DocsPage from '$shared/DocsPage.svelte'
	import DocsSlot from '$shared/DocsSlot.svelte'

	import ExampleMinimalist from './ExampleMinimalist.svelte'
	import exampleCodeMinimalist from './ExampleMinimalist.svelte?raw'

	import ExampleLabelMaker from './ExampleLabelMaker.svelte'
	import exampleCodeLabelMaker from './ExampleLabelMaker.svelte?raw'
</script>

<DocsPage
	group="General components"
	title="Tabs"
	gds_name="Tabs"
	gds_link="https://design-system.service.gov.uk/components/tabs/"
	crumbs="{[
		['/home', 'Home'],
		['/general-components', 'General components'],
		['/general-components/tabs', 'Tabs'],
	]}"
	examples="{[
		['example-minimalist', 'Minimalist'],
		['example-label-maker', 'Label maker'],
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
			id="example-label-maker"
			heading="Label maker"
			src="{exampleCodeLabelMaker}">
			<ExampleLabelMaker />
		</DocsExample>
	</svelte:fragment>

	<svelte:fragment slot="slots">
		<DocsSlot name="labels" summary="Series of TabLabel components" />
		<DocsSlot
			name="panels"
			summary="Series of TabPanel components containing the content for each TabLabel" />
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
