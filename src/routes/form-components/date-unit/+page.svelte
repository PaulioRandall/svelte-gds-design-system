<script>
	import DocsExample from '$shared/DocsExample.svelte'
	import DocsPage from '$shared/DocsPage.svelte'
	import DocsProp from '$shared/DocsProp.svelte'

	import ExampleMinimalist from './ExampleMinimalist.svelte'
	import exampleCodeMinimalist from './ExampleMinimalist.svelte?raw'
</script>

<DocsPage
	group="Form components"
	title="DateUnit"
	gds_name="DateInput"
	gds_link="https://design-system.service.gov.uk/components/date-input/"
	crumbs="{[
		['/home', 'Home'],
		['/form-components', 'Form components'],
		['/form-components/date-unit', 'DateUnit'],
	]}"
	examples="{[['example-minimalist', 'Minimalist']]}"
	parents="{[['/form-components/date-input', 'DateInput']]}">
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
		<DocsProp required name="name" type="string" summary="Form field name" />
		<DocsProp required name="label" type="string" summary="Label text" />
	</svelte:fragment>
</DocsPage>
