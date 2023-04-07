<script>
	import Link from '$govuk/Link.svelte'

	import DocsPage from '$shared/DocsPage.svelte'
	import DocsProp from '$shared/DocsProp.svelte'
	import DocsSlot from '$shared/DocsSlot.svelte'
	import DocsExample from '$shared/DocsExample.svelte'

	import ExampleMinimalist from './ExampleMinimalist.svelte'
	import exampleCodeMinimalist from './ExampleMinimalist.svelte?raw'
</script>

<DocsPage
	group="Form components"
	title="DateInput"
	gds_name="DateInput"
	gds_link="https://design-system.service.gov.uk/components/date-input/"
	crumbs="{[
		['/home', 'Home'],
		['/form-components', 'Form components'],
		['/form-components/date-input', 'DateInput'],
	]}"
	examples="{[['example-minimalist', 'Minimalist']]}"
	children="{[['/form-components/date-unit', 'DateUnit']]}">
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
		<DocsProp name="id" type="string" summary="Form group element ID" />
	</svelte:fragment>

	<svelte:fragment slot="slots">
		<DocsSlot required default_slot>
			Series of <Link href="/form-components/date-unit">DateUnit</Link> components
			in the order they are to be presented.
		</DocsSlot>
	</svelte:fragment>
</DocsPage>
