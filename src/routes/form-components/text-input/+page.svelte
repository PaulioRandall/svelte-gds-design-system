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

	import TextInput from '$govuk/forms/TextInput.svelte'

	import CodeBlock from '$shared/CodeBlock.svelte'
	import StandardPage from '$shared/StandardPage.svelte'
	import Section from '$shared/Section.svelte'
</script>

<StandardPage sticky_menu title="Text input">
	<BreadCrumbs
		slot="breadcrumbs"
		collapsable
		crumbs="{[
			['/home', 'Home'],
			['/form-components', 'Form components'],
			['/form-components/text-input', 'Text input'],
		]}" />

	<List slot="side-menu" spaced>
		<MenuItem bold href="#examples">Examples</MenuItem>
		<List sub_list spaced>
			<MenuItem href="#example-default">Default</MenuItem>
		</List>
		<MenuItem bold href="#interface">Interface</MenuItem>
		<List sub_list spaced>
			<MenuItem href="#interface-props">Props</MenuItem>
			<MenuItem href="#interface-slots">Slots</MenuItem>
		</List>
	</List>

	<Heading id="page-title" h1 xl>
		<Caption xl>Form components</Caption>
		Text input
	</Heading>

	<Paragraph>
		Official documentation on the <Link
			href="https://design-system.service.gov.uk/components/text-input/"
			>GDS Design System 'Text input' component</Link
		>.
	</Paragraph>

	<Section add_top_margin id="examples">
		<Heading h2 lg>Examples</Heading>

		<noscript>
			<WarningText>
				Pssst... some examples won't work without JavaScript enabled.
			</WarningText>
		</noscript>

		<Heading id="example-default" h3 md>Default</Heading>
		<TextInput name="full-name">Full name</TextInput>
		<CodeBlock
			lines="{[
				`<script>`,
				`	import TextInput from '$govuk/forms/TextInput.svelte'`,
				`</script>`,
				``,
				`<TextInput name="full-name">`,
				`	Full name`,
				`</TextInput>`,
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
			]}" />

		<SectionBreak md />

		<Table
			id="interface-slots"
			caption_md="Slots"
			headers="{[
				{ key: 'name', label: 'Name' },
				{ key: 'summary', label: 'Summary' },
			]}"
			records="{[
				{
					name: '<code>&lt;default&gt;<code>',
					summary: 'Label text',
				},
			]}" />
	</Section>
</StandardPage>
