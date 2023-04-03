<script>
	import Link from '$govuk/Link.svelte'

	import DocsExample from '$shared/DocsExample.svelte'
	import DocsPage from '$shared/DocsPage.svelte'
	import DocsPropExclusive from '$shared/DocsPropExclusive.svelte'
	import DocsSlot from '$shared/DocsSlot.svelte'

	import ExampleMinimalist from './ExampleMinimalist.svelte'
	import exampleCodeMinimalist from './ExampleMinimalist.svelte?raw'
</script>

<DocsPage
	group="General components"
	title="Caption"
	gds_name="Caption"
	gds_link="https://design-system.service.gov.uk/styles/typography/#headings-with-captions"
	crumbs="{[
		['/home', 'Home'],
		['/general-components', 'General components'],
		['/general-components/caption', 'Caption'],
	]}"
	examples="{[['example-minimalist', 'Minimalist']]}">
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
		<DocsPropExclusive
			required
			props="{[
				['sm', 'small'],
				['md', 'medium'],
				['lg', 'large'],
				['xl', 'extra large'],
			]}">
			Caption font size.
		</DocsPropExclusive>
	</svelte:fragment>

	<svelte:fragment slot="slots">
		<DocsSlot required default_slot>Caption text.</DocsSlot>
	</svelte:fragment>
</DocsPage>
