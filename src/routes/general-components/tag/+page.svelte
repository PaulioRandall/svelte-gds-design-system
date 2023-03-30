<script>
	import SectionBreak from '$govuk/SectionBreak.svelte'

	import DocsExample from '$shared/DocsExample.svelte'
	import DocsPage from '$shared/DocsPage.svelte'
	import DocsPropExclusive from '$shared/DocsPropExclusive.svelte'
	import DocsSlot from '$shared/DocsSlot.svelte'

	import ExampleMinimalist from './ExampleMinimalist.svelte'
	import exampleCodeMinimalist from './ExampleMinimalist.svelte?raw'

	import ExampleAll from './ExampleAll.svelte'
	import exampleCodeAll from './ExampleAll.svelte?raw'
</script>

<DocsPage
	group="General components"
	title="Tag"
	gds_name="Tag"
	gds_link="https://design-system.service.gov.uk/components/tag/"
	crumbs="{[
		['/home', 'Home'],
		['/general-components', 'General components'],
		['/general-components/tag', 'tag'],
	]}"
	examples="{[
		['example-minimalist', 'Minimalist'],
		['example-all', 'All'],
	]}">
	<svelte:fragment slot="examples">
		<DocsExample
			id="example-minimalist"
			heading="Minimalist"
			src="{exampleCodeMinimalist}">
			<ExampleMinimalist />
		</DocsExample>

		<SectionBreak md />

		<DocsExample id="example-all" heading="All" src="{exampleCodeAll}">
			<ExampleAll />
		</DocsExample>
	</svelte:fragment>

	<svelte:fragment slot="props">
		<DocsPropExclusive
			group_name="Type"
			props="{[
				['inactive'],
				['fresh', 'new'],
				['active'],
				['pending'],
				['received'],
				['sent'],
				['rejected'],
				['declined'],
				['delayed'],
			]}"
			summary="Summary text" />
	</svelte:fragment>

	<svelte:fragment slot="slots">
		<DocsSlot default_slot summary="Label text" />
	</svelte:fragment>
</DocsPage>
