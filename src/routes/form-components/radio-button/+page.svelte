<script>
	import Link from '$govuk/Link.svelte'

	import DocsPage from '$shared/DocsPage.svelte'
	import DocsProp from '$shared/DocsProp.svelte'
	import DocsExample from '$shared/DocsExample.svelte'

	import ExampleMinimalist from './ExampleMinimalist.svelte'
	import exampleCodeMinimalist from './ExampleMinimalist.svelte?raw'
</script>

<DocsPage
	group="Form components"
	title="RadioButton"
	gds_name="Radios"
	gds_link="https://design-system.service.gov.uk/components/radios/"
	crumbs="{[
		['/home', 'Home'],
		['/form-components', 'Form components'],
		['/form-components/radio-button', 'RadioButton'],
	]}"
	examples="{[['example-minimalist', 'Minimalist']]}"
	parents="{[['/form-components/radio-group', 'RadioGroup']]}"
	see_also="{[['/form-components/radios', 'Radios']]}">
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
		<DocsProp required name="input_id" type="string" summary="Input ID" />
		<DocsProp required name="name" type="string" summary="Input name" />
		<DocsProp required name="value" type="string" summary="Input value" />
		<DocsProp required name="label" type="string" summary="Label text" />
	</svelte:fragment>
</DocsPage>
