<script>
	import DocsPage from '$shared/DocsPage.svelte'
	import DocsProp from '$shared/DocsProp.svelte'
	import DocsExample from '$shared/DocsExample.svelte'

	import ExampleMinimalist from './ExampleMinimalist.svelte'
	import exampleCodeMinimalist from './ExampleMinimalist.svelte?raw'
</script>

<DocsPage
	group="Form components"
	title="Radios"
	gds_name="Radios"
	gds_link="https://design-system.service.gov.uk/components/radios/"
	crumbs="{[
		['/home', 'Home'],
		['/form-components', 'Form components'],
		['/form-components/radios', 'Radios'],
	]}"
	examples="{[['example-minimalist', 'Minimalist']]}"
	see_also="{[
		['/form-components/radio-group', 'RadioGroup'],
		['/form-components/radio-button', 'RadioButton'],
	]}">
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
		<DocsProp name="id" type="string" summary="RadioGroup ID" />
		<DocsProp required name="name" type="string" summary="Input name" />
		<DocsProp
			required
			name="options"
			type="[['id', 'value', 'label']...]"
			summary="List of options" />
	</svelte:fragment>
</DocsPage>
