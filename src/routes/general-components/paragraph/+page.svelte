<script>
	import SectionBreak from '$govuk/SectionBreak.svelte'

	import DocsExample from '$shared/DocsExample.svelte'
	import DocsPage from '$shared/DocsPage.svelte'
	import DocsProp from '$shared/DocsProp.svelte'
	import DocsPropExclusive from '$shared/DocsPropExclusive.svelte'
	import DocsSlot from '$shared/DocsSlot.svelte'

	import ExampleMinimalist from './ExampleMinimalist.svelte'
	import exampleCodeMinimalist from './ExampleMinimalist.svelte?raw'

	import ExampleAll from './ExampleAll.svelte'
	import exampleCodeAll from './ExampleAll.svelte?raw'
</script>

<DocsPage
	group="General components"
	title="Paragraph"
	gds_name="Typography"
	gds_link="https://design-system.service.gov.uk/styles/typography/"
	crumbs="{[
		['/home', 'Home'],
		['/general-components', 'General components'],
		['/general-components/paragraph', 'Paragraph'],
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
		<DocsProp
			name="lead"
			type="bool"
			default_value="false"
			summary="Adds styling for a leading paragraph" />
		<DocsProp
			name="small"
			type="bool"
			default_value="false"
			summary="Shrinks the font size a little" />
		<DocsProp
			name="regular"
			type="bool"
			default_value="false"
			summary="Forces regular font size if bold is set by a parent element" />
		<DocsProp
			name="bold"
			type="bool"
			default_value="false"
			summary="Bold font" />
		<DocsProp
			name="left"
			type="bool"
			default_value="false"
			summary="Forces left text alignment if centre or right is set by a parent element" />
		<DocsProp
			name="centre"
			type="bool"
			default_value="false"
			summary="Centre text alignment" />
		<DocsProp
			name="right"
			type="bool"
			default_value="false"
			summary="Right text alignment" />
		<DocsPropExclusive
			group_name="Override font size"
			props="{[
				['override_font_80', '53-80px'],
				['override_font_48', '32-48px'],
				['override_font_36', '24-36px'],
				['override_font_27', '18-27px'],
				['override_font_24', '18-24px'],
				['override_font_19', '16-19px'],
				['override_font_16', '14-16px'],
				['override_font_14', '12-14px'],
			]}"
			summary="Override the font size" />
	</svelte:fragment>

	<svelte:fragment slot="slots">
		<DocsSlot default_slot summary="Paragraph content" />
	</svelte:fragment>
</DocsPage>
