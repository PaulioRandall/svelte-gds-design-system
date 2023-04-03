<script>
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
	title="List"
	gds_name="Lists"
	gds_link="https://design-system.service.gov.uk/styles/typography/#lists"
	crumbs="{[
		['/home', 'Home'],
		['/general-components', 'General components'],
		['/general-components/list', 'List'],
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
		<DocsPropExclusive group_name="Type" props="{[['bullets'], ['numbers']]}" />
		<DocsProp
			name="spaced"
			type="bool"
			default_value="false"
			summary="Adds additional space between list items" />
		<DocsProp
			name="indent"
			type="bool"
			default_value="false"
			summary="Indents the list items" />
		<DocsProp
			name="sub_list"
			type="bool"
			default_value="false"
			summary="Prefixes '—' to items to indicate they are part of a sub list" />
	</svelte:fragment>

	<svelte:fragment slot="slots">
		<DocsSlot default_slot summary="Ordered series of &lt;li&gt; elements" />
	</svelte:fragment>
</DocsPage>
