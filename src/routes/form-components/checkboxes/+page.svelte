<script>
	import SectionBreak from '$govuk/SectionBreak.svelte'

	import DocsPage from '$shared/DocsPage.svelte'
	import DocsProp from '$shared/DocsProp.svelte'
	import DocsSlot from '$shared/DocsSlot.svelte'
	import DocsExample from '$shared/DocsExample.svelte'

	import ExampleMinimalist from './ExampleMinimalist.svelte'
	import exampleCodeMinimalist from './ExampleMinimalist.svelte?raw'
</script>

<DocsPage
	group="Form components"
	title="Checkboxes"
	gds_name="Checkboxes"
	gds_link="https://design-system.service.gov.uk/components/checkboxes/"
	crumbs="{[
		['/home', 'Home'],
		['/form-components', 'Form components'],
		['/form-components/checkboxes', 'Checkboxes'],
	]}"
	examples="{[['example-minimalist', 'Minimalist']]}">
	<svelte:fragment slot="examples">
		<DocsExample
			id="example-minimalist"
			heading="Minimalist"
			src="{exampleCodeMinimalist}">
			<ExampleMinimalist />
		</DocsExample>
	</svelte:fragment>

	<svelte:fragment slot="props">
		<DocsProp name="id" type="string" summary="Group ID" />
		<DocsProp name="name" type="string" summary="Form field name" />
		<DocsProp name="label" type="string" summary="Label text" />
		<DocsProp
			name="options"
			type="[['value', 'label', 'id']...]"
			summary="List of options" />
	</svelte:fragment>
</DocsPage>
