<script>
	import Link from '$govuk/Link.svelte'
	import Paragraph from '$govuk/Paragraph.svelte'
	import SectionBreak from '$govuk/SectionBreak.svelte'

	import ButtonGroup from '$govuk/forms/ButtonGroup.svelte'
	import Button from '$govuk/forms/Button.svelte'

	import DocsPage from '$shared/DocsPage.svelte'
	import DocsProp from '$shared/DocsProp.svelte'
	import DocsSlot from '$shared/DocsSlot.svelte'
	import DocsExample from '$shared/DocsExample.svelte'

	import ExampleMinimalist from './ExampleMinimalist.svelte'
	import exampleMinimalistCode from './ExampleMinimalist.svelte?raw'

	import ExampleLinks from './ExampleLinks.svelte'
	import exampleLinksCode from './ExampleLinks.svelte?raw'
</script>

<DocsPage
	title="Button group"
	group="Form components"
	crumbs="{[
		['/home', 'Home'],
		['/form-components', 'Form components'],
		['/form-components/button-group', 'Button group'],
	]}"
	examples="{[
		['example-minimalist', 'Minimalist'],
		['example-links', 'Links'],
	]}">
	<Paragraph slot="intro">
		Official documentation on the <Link
			href="https://design-system.service.gov.uk/components/button/"
			>GDS Design System 'Button group' wrapper</Link
		>.
	</Paragraph>

	<svelte:fragment slot="examples">
		<DocsExample
			id="example-minimalist"
			heading="Minimalist"
			src="{exampleMinimalistCode}">
			<ExampleMinimalist />
		</DocsExample>

		<SectionBreak md />

		<DocsExample id="example-links" heading="Links" src="{exampleLinksCode}">
			<ExampleLinks />
		</DocsExample>
	</svelte:fragment>

	<svelte:fragment slot="props">
		<DocsProp name="id" type="string" summary="Wrapper element ID" />
	</svelte:fragment>

	<svelte:fragment slot="slots">
		<DocsSlot
			default_slot
			summary="Buttons and Links in the order they are to be displayed" />
	</svelte:fragment>
</DocsPage>
