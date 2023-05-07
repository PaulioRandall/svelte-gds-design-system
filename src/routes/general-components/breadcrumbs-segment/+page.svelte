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
	title="Breadcrumbs segment"
	gds_name="Breadcrumbs"
	gds_link="https://design-system.service.gov.uk/components/breadcrumbs/"
	crumbs="{[
		['/home', 'Home'],
		['/general-components', 'General components'],
		['/general-components/breadcrumbs-segment', 'Breadcrumbs segment'],
	]}"
	parents="{[['/general-components/breadcrumbs', 'Breadcrumbs']]}"
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
		<DocsProp required name="href" type="string">
			Link to the named page.
		</DocsProp>
	</svelte:fragment>

	<svelte:fragment slot="slots">
		<DocsSlot required default_slot>Label text.</DocsSlot>
	</svelte:fragment>
</DocsPage>
