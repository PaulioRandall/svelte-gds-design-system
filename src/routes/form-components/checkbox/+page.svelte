<script>
	import DocsPage from '$shared/DocsPage.svelte'
	import DocsProp from '$shared/DocsProp.svelte'
	import DocsExample from '$shared/DocsExample.svelte'

	import ExampleMinimalist from './ExampleMinimalist.svelte'
	import exampleCodeMinimalist from './ExampleMinimalist.svelte?raw'
</script>

<DocsPage
	group="Form components"
	title="Checkbox"
	gds_name="Checkboxes"
	gds_link="https://design-system.service.gov.uk/components/checkboxes/"
	crumbs="{[
		['/home', 'Home'],
		['/form-components', 'Form components'],
		['/form-components/checkbox', 'Checkbox'],
	]}"
	examples="{[['example-minimalist', 'Minimalist']]}"
	parents="{[['/form-components/checkbox-group', 'CheckboxGroup']]}">
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
		<DocsProp name="id" type="string" summary="Input element ID" />
		<DocsProp required name="name" type="string" summary="Form field name" />
		<DocsProp required name="value" type="string" summary="Form field value" />
		<DocsProp required name="label" type="string" summary="Label text" />
	</svelte:fragment>
</DocsPage>
