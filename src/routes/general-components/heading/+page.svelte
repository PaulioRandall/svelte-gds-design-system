<script>
	import Paragraph from '$govuk/Paragraph.svelte'
	import SectionBreak from '$govuk/SectionBreak.svelte'

	import DocsExample from '$shared/DocsExample.svelte'
	import DocsPage from '$shared/DocsPage.svelte'
	import DocsProp from '$shared/DocsProp.svelte'
	import DocsPropExclusive from '$shared/DocsPropExclusive.svelte'
	import DocsSlot from '$shared/DocsSlot.svelte'

	import ExampleMinimalist from './ExampleMinimalist.svelte'
	import exampleCodeMinimalist from './ExampleMinimalist.svelte?raw'
</script>

<DocsPage
	group="General components"
	title="Heading"
	crumbs="{[
		['/home', 'Home'],
		['/general-components', 'General components'],
		['/general-components/heading', 'Heading'],
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
		<DocsProp name="id" type="string" summary="Element ID" />
		<DocsPropExclusive
			group_name="Element type"
			summary="Type of heading element"
			props="{[['h1'], ['h2'], ['h3']]}" />
		<DocsPropExclusive
			group_name="Font size"
			summary="Font size of the heading"
			props="{[
				['sm', 'small'],
				['md', 'medium'],
				['lg', 'large'],
				['xl', 'extra large'],
			]}" />
	</svelte:fragment>

	<svelte:fragment slot="slots">
		<DocsSlot default_slot summary="Heading text" />
	</svelte:fragment>
</DocsPage>
