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
	title="RadioGroup"
	gds_name="Radios"
	gds_link="https://design-system.service.gov.uk/components/radios/"
	crumbs="{[
		['/home', 'Home'],
		['/form-components', 'Form components'],
		['/form-components/radio-group', 'RadioGroup'],
	]}"
	examples="{[['example-minimalist', 'Minimalist']]}"
	children="{[['/form-components/radio-button', 'RadioButton']]}"
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
		<DocsProp
			name="id"
			type="string"
			summary="Wrapper element ID (form group)" />
	</svelte:fragment>

	<svelte:fragment slot="slots">
		<DocsSlot required default_slot>
			Series of <Link href="/form-components/radio-button">RadioButton</Link> components
			in the order they are to be presented.
		</DocsSlot>
	</svelte:fragment>
</DocsPage>
