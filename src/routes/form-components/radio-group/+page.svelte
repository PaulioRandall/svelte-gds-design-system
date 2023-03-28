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

	import RadioGroup from '$govuk/forms/RadioGroup.svelte'

	import CodeBlock from '$shared/CodeBlock.svelte'
	import StandardPage from '$shared/StandardPage.svelte'
	import Section from '$shared/Section.svelte'
</script>

<StandardPage sticky_menu title="Radio group">
	<BreadCrumbs
		slot="breadcrumbs"
		collapsable
		crumbs="{[
			['/home', 'Home'],
			['/form-components', 'Form components'],
			['/form-components/radio-group', 'Radio group'],
		]}" />

	<List slot="side-menu" spaced>
		<MenuItem bold href="#examples">Examples</MenuItem>
		<List sub_list spaced>
			<MenuItem href="#example-default">Default</MenuItem>
		</List>
		<MenuItem bold href="#interface">Interface</MenuItem>
		<List sub_list spaced>
			<MenuItem href="#interface-props">Props</MenuItem>
		</List>
	</List>

	<Heading id="page-title" h1 xl>
		<Caption xl>Form components</Caption>
		Radio group
	</Heading>

	<Paragraph>
		Official documentation on the <Link
			href="https://design-system.service.gov.uk/components/radios/"
			>GDS Design System 'Radios' component</Link
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
		<RadioGroup
			id="city-field"
			name="city"
			options="{[
				['london', 'London', 'city-london-id'],
				['paris', 'Paris', 'city-paris-id'],
				['madrid', 'Madrid', 'city-madrid-id'],
				['berlin', 'Berlin', 'city-berlin-id'],
			]}" />
		<CodeBlock
			lines="{[
				`<script>`,
				`	import RadioGroup from '$govuk/forms/RadioGroup.svelte'`,
				`</script>`,
				``,
				`<RadioGroup`,
				`	id="city-field"`,
				`	name="city"`,
				`	options="{[`,
				`		['london', 'London', 'city-london-id'],`,
				`		['paris',  'Paris',  'city-paris-id'],`,
				`		['madrid', 'Madrid', 'city-madrid-id'],`,
				`		['berlin', 'Berlin', 'city-berlin-id'],`,
				`	]}" />`,
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
					summary: 'Group ID',
				},
				{
					name: '<code>name<code>',
					type: 'string',
					summary: 'Form field name',
				},
				{
					name: '<code>options<code>',
					type: '[["value", "label", "id"]...]',
					summary: 'List of options',
				},
			]}" />
	</Section>
</StandardPage>
