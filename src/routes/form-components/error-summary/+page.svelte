<script>
	import Link from '$govuk/Link.svelte'
	import Paragraph from '$govuk/Paragraph.svelte'

	import DocsPage from '$shared/DocsPage.svelte'
	import DocsProp from '$shared/DocsProp.svelte'
	import DocsSlot from '$shared/DocsSlot.svelte'
	import DocsExample from '$shared/DocsExample.svelte'

	import ExampleMinimalist from './ExampleMinimalist.svelte'
	import exampleMinimalistCode from './ExampleMinimalist.svelte?raw'
</script>

<DocsPage
	title="Date input"
	group="Form components"
	crumbs="{[
		['/home', 'Home'],
		['/form-components', 'Form components'],
		['/form-components/error-summary', 'Error summary'],
	]}"
	examples="{[['example-minimalist', 'Minimalist']]}">
	<Paragraph lead slot="intro">
		Official documentation: <Link
			href="https://design-system.service.gov.uk/components/error-summary/"
			>GDS Design System 'Error summary' component</Link
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
		<DocsProp name="heading" type="string" summary="Heading text" />
		<DocsProp
			name="disable_auto_focus"
			type="string"
			summary="Disables auto focusing on page load" />
	</svelte:fragment>

	<svelte:fragment slot="slots">
		<DocsSlot
			default_slot
			summary="List of &lt;li&gt; elements, usually each links to a form field in error" />
	</svelte:fragment>
</DocsPage>
