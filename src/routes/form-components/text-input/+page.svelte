<script>
	import Link from '$govuk/Link.svelte'
	import Paragraph from '$govuk/Paragraph.svelte'

	import DocsExample from '$shared/DocsExample.svelte'
	import DocsPage from '$shared/DocsPage.svelte'
	import DocsProp from '$shared/DocsProp.svelte'
	import DocsSlot from '$shared/DocsSlot.svelte'

	import ExampleMinimalist from './ExampleMinimalist.svelte'
	import exampleMinimalistCode from './ExampleMinimalist.svelte?raw'
</script>

<DocsPage
	title="Text input"
	group="Form components"
	crumbs="{[
		['/home', 'Home'],
		['/form-components', 'Form components'],
		['/form-components/text-input', 'Text input'],
	]}"
	examples="{[['example-minimalist', 'Minimalist']]}">
	<Paragraph lead slot="intro">
		Official documentation: <Link
			href="https://design-system.service.gov.uk/components/text-input/"
			>GDS Design System 'Text input' component</Link
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
		<DocsProp name="id" type="string" summary="Input element ID" />
		<DocsProp name="name" type="string" summary="Form field name" />
	</svelte:fragment>

	<svelte:fragment slot="slots">
		<DocsSlot default_slot summary="Label text" />
	</svelte:fragment>
</DocsPage>
