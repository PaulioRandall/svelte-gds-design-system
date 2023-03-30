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
		['/form-components/date-input', 'Date input'],
	]}"
	examples="{[['example-minimalist', 'Minimalist']]}">
	<Paragraph lead slot="intro">
		Official documentation: <Link
			href="https://design-system.service.gov.uk/components/date-input/"
			>GDS Design System 'Date input' component</Link
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
		<DocsProp name="id" type="string" summary="Wrapper element ID" />
	</svelte:fragment>

	<svelte:fragment slot="slots">
		<DocsSlot
			default_slot
			summary="DateUnit's in the order they are to be presented" />
	</svelte:fragment>
</DocsPage>
