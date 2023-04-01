<script>
	import SectionBreak from '$govuk/SectionBreak.svelte'

	import DocsExample from '$shared/DocsExample.svelte'
	import DocsPage from '$shared/DocsPage.svelte'
	import DocsProp from '$shared/DocsProp.svelte'
	import DocsPropExclusive from '$shared/DocsPropExclusive.svelte'

	import ExampleMinimalist from './ExampleMinimalist.svelte'
	import exampleCodeMinimalist from './ExampleMinimalist.svelte?raw'
</script>

<DocsPage
	group="General components"
	title="Table"
	gds_name="Lists"
	gds_link="https://design-system.service.gov.uk/components/table/"
	crumbs="{[
		['/home', 'Home'],
		['/general-components', 'General components'],
		['/general-components/table', 'Table'],
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
		<DocsProp name="id" type="string" summary="Table element name" />
		<DocsPropExclusive
			group_name="Caption"
			type="string"
			props="{[['caption_sm'], ['caption_md'], ['caption_lg'], ['caption_xl']]}"
			summary="Adds a caption heading to the table" />
		<DocsProp
			required
			name="headers"
			type="array[{`
				<div class="type-object-brace">{</div>
				<div class="type-object-member">key,</div>
				<div class="type-object-member">label,</div>
				<div class="type-object-member">rowHead</div>
				<div class="type-object-brace">}</div>`}]"
			summary="List of column headers" />
		<DocsProp
			required
			name="records"
			type="array[{`
				<div class="type-object-brace">{</div>
				<div class="type-object-member">"&lt;key&gt;": "&lt;value&gt;"</div>
				<div class="type-object-brace">}</div>`}]"
			summary="List of records" />
	</svelte:fragment>
</DocsPage>

<style>
	:global(.type-object-brace) {
		margin-left: 2ch;
	}

	:global(.type-object-member) {
		margin-left: 4ch;
	}
</style>
