<script>
	import Link from '$govuk/Link.svelte'
	import Paragraph from '$govuk/Paragraph.svelte'
	import SectionBreak from '$govuk/SectionBreak.svelte'

	import DocsPage from '$shared/DocsPage.svelte'
	import DocsProp from '$shared/DocsProp.svelte'
	import DocsSlot from '$shared/DocsSlot.svelte'
	import DocsExample from '$shared/DocsExample.svelte'

	import ExampleMinimalist from './ExampleMinimalist.svelte'
	import exampleMinimalistCode from './ExampleMinimalist.svelte?raw'
</script>

<DocsPage
	title="Checkboxes"
	group="Form components"
	crumbs="{[
		['/home', 'Home'],
		['/form-components', 'Form components'],
		['/form-components/checkboxes', 'Checkboxes'],
	]}"
	examples="{[['example-minimalist', 'Minimalist']]}">
	<Paragraph lead slot="intro">
		Official documentation: <Link
			href="https://design-system.service.gov.uk/components/checkboxes/"
			>GDS Design System 'checkboxes' component</Link
		>.
	</Paragraph>

	<svelte:fragment slot="examples">
		<DocsExample
			id="example-minimalist"
			heading="Minimalist"
			src="{exampleMinimalistCode}">
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
