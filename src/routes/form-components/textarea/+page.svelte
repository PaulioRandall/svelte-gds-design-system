<script>
	import BreadCrumbs from '$govuk/BreadCrumbs.svelte'
	import Caption from '$govuk/Caption.svelte'
	import Heading from '$govuk/Heading.svelte'
	import Link from '$govuk/Link.svelte'
	import List from '$govuk/List.svelte'
	import MenuItem from '$govuk/MenuItem.svelte'
	import Paragraph from '$govuk/Paragraph.svelte'
	import SectionBreak from '$govuk/SectionBreak.svelte'
	import Table from '$govuk/Table.svelte'
	import WarningText from '$govuk/WarningText.svelte'

	import TextArea from '$govuk/forms/TextArea.svelte'

	import CodeBlock from '$shared/CodeBlock.svelte'
	import StandardPage from '$shared/StandardPage.svelte'
	import Section from '$shared/Section.svelte'
</script>

<StandardPage sticky_menu title="Textarea">
	<BreadCrumbs
		slot="breadcrumbs"
		collapsable
		crumbs="{[
			['/home', 'Home'],
			['/form-components', 'Form components'],
			['/form-components/textarea', 'Textarea'],
		]}" />

	<List slot="side-menu" spaced>
		<MenuItem bold href="#examples">Examples</MenuItem>
		<List sub_list spaced>
			<MenuItem href="#example-minimalist">Minimalist</MenuItem>
			<MenuItem href="#example-rows">Rows</MenuItem>
		</List>
		<MenuItem bold href="#interface">Interface</MenuItem>
		<List sub_list spaced>
			<MenuItem href="#interface-props">Props</MenuItem>
		</List>
	</List>

	<Heading id="page-title" h1 xl>
		<Caption xl>Form components</Caption>
		Textarea
	</Heading>

	<Paragraph>
		Official documentation on the <Link
			href="https://design-system.service.gov.uk/components/textarea/"
			>GDS Design System 'Textarea' component</Link
		>.
	</Paragraph>

	<Section add_top_margin id="examples">
		<Heading h2 lg>Examples</Heading>

		<noscript>
			<WarningText>
				Pssst... some examples won't work without JavaScript enabled.
			</WarningText>
		</noscript>

		<Heading id="example-minimalist" h3 md>Minimalist</Heading>
		<TextArea name="more-details" label="Any more details?" />
		<CodeBlock
			lines="{[
				`<script>`,
				`	import TextArea from '$govuk/forms/TextArea.svelte'`,
				`</script>`,
				``,
				`<TextArea`,
				`	name="more-details"`,
				`	label="Any more details?" />`,
			]}" />

		<SectionBreak md />

		<Heading id="example-rows" h3 md>Rows</Heading>
		<TextArea name="more-details" label="Any more details?" rows="3" />
		<CodeBlock
			lines="{[
				`<script>`,
				`	import TextArea from '$govuk/forms/TextArea.svelte'`,
				`</script>`,
				``,
				`<TextArea`,
				`	name="more-details"`,
				`	label="Any more details?"`,
				`	rows="3"/>`,
			]}" />
	</Section>

	<Section add_top_margin id="interface">
		<Heading h2 lg>Interface</Heading>

		<Table
			id="interface-props"
			caption_md="Props"
			headers="{[
				{ key: 'name', label: 'Name' },
				{ key: 'type', label: 'Type' },
				{ key: 'summary', label: 'Summary' },
			]}"
			records="{[
				{
					name: '<code>id<code>',
					type: 'string',
					summary: 'Input element ID',
				},
				{
					name: '<code>name<code>',
					type: 'string',
					summary: 'Form field name',
				},
				{
					name: '<code>label<code>',
					type: 'string',
					summary: 'Label text',
				},
				{
					name: '<code>rows<code>',
					type: 'integer',
					summary: 'Number of rows to show by default',
				},
			]}" />
	</Section>
</StandardPage>
