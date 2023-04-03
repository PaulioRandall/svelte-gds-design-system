<script>
	import SectionBreak from '$govuk/SectionBreak.svelte'

	import DocsExample from '$shared/DocsExample.svelte'
	import DocsPage from '$shared/DocsPage.svelte'
	import DocsProp from '$shared/DocsProp.svelte'
	import DocsSlot from '$shared/DocsSlot.svelte'

	import ExampleMinimalist from './ExampleMinimalist.svelte'
	import exampleCodeMinimalist from './ExampleMinimalist.svelte?raw'

	import ExampleCustomText from './ExampleCustomText.svelte'
	import exampleCodeCustomText from './ExampleCustomText.svelte?raw'
</script>

<DocsPage
	group="Form components"
	title="Start button"
	gds_name="Button"
	gds_link="https://design-system.service.gov.uk/components/button/"
	crumbs="{[
		['/home', 'Home'],
		['/form-components', 'Form components'],
		['/form-components/start-button', 'Start button'],
	]}"
	examples="{[
		['example-minimalist', 'Minimalist'],
		['example-custom-text', 'Custom text'],
	]}">
	<svelte:fragment slot="examples">
		<DocsExample
			first_example
			id="example-minimalist"
			heading="Minimalist"
			src="{exampleCodeMinimalist}">
			<ExampleMinimalist />
		</DocsExample>

		<DocsExample
			id="example-custom-text"
			heading="Custom text"
			src="{exampleCodeCustomText}">
			<ExampleCustomText />
		</DocsExample>
	</svelte:fragment>

	<svelte:fragment slot="props">
		<DocsProp name="href" type="string" summary="URL to the first form page" />
	</svelte:fragment>

	<svelte:fragment slot="slots">
		<DocsSlot default_slot default_value="Start now" summary="Button text" />
	</svelte:fragment>
</DocsPage>
