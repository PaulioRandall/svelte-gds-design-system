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
	title="CheckboxGroup"
	gds_name="Checkboxes"
	gds_link="https://design-system.service.gov.uk/components/checkboxes/"
	crumbs="{[
		['/home', 'Home'],
		['/form-components', 'Form components'],
		['/form-components/checkbox-group', 'CheckboxGroup'],
	]}"
	examples="{[['example-minimalist', 'Minimalist']]}"
	children="{[['/form-components/checkbox', 'Checkbox']]}">
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
	</svelte:fragment>

	<svelte:fragment slot="slots">
		<DocsSlot default_slot>
			Series of <Link href="/form-components/checkbox">Checkbox</Link> components.
		</DocsSlot>
	</svelte:fragment>
</DocsPage>
