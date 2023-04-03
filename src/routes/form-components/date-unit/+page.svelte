<script>
	import DocsExample from '$shared/DocsExample.svelte'
	import DocsPage from '$shared/DocsPage.svelte'
	import DocsProp from '$shared/DocsProp.svelte'

	import ExampleMinimalist from './ExampleMinimalist.svelte'
	import exampleCodeMinimalist from './ExampleMinimalist.svelte?raw'
</script>

<DocsPage
	group="Form components"
	title="Date unit"
	gds_name="Date input"
	gds_link="https://design-system.service.gov.uk/components/date-input/"
	crumbs="{[
		['/home', 'Home'],
		['/form-components', 'Form components'],
		['/form-components/date-unit', 'Date unit'],
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

	<svelte:fragment slot="props">
		<DocsProp name="id" type="string" summary="Wrapper element ID" />
		<DocsProp name="name" type="string" summary="Form field name" />
		<DocsProp name="label" type="string" summary="Label text" />
	</svelte:fragment>
</DocsPage>
