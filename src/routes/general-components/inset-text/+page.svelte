<script>
	import DocsExample from '$shared/DocsExample.svelte'
	import DocsPage from '$shared/DocsPage.svelte'
	import DocsSlot from '$shared/DocsSlot.svelte'

	import ExampleMinimalist from './ExampleMinimalist.svelte'
	import exampleCodeMinimalist from './ExampleMinimalist.svelte?raw'
</script>

<DocsPage
	group="General components"
	title="Inset text"
	gds_name="Inset text"
	gds_link="https://design-system.service.gov.uk/components/inset-text/"
	crumbs="{[
		['/home', 'Home'],
		['/general-components', 'General components'],
		['/general-components/inset-text', 'Inset text'],
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

	<svelte:fragment slot="slots">
		<DocsSlot default_slot summary="Text content" />
	</svelte:fragment>
</DocsPage>
