<script>
	import BreadCrumbs from '$govuk/BreadCrumbs.svelte'
	import Caption from '$govuk/Caption.svelte'
	import Heading from '$govuk/Heading.svelte'
	import InsetText from '$govuk/InsetText.svelte'
	import Link from '$govuk/Link.svelte'
	import List from '$govuk/List.svelte'
	import MenuItem from '$govuk/MenuItem.svelte'
	import Paragraph from '$govuk/Paragraph.svelte'
	import Restyle from '$govuk/Restyle.svelte'
	import SectionBreak from '$govuk/SectionBreak.svelte'
	import Table from '$govuk/Table.svelte'

	import ErrorSummary from '$govuk/forms/ErrorSummary.svelte'

	import CodeBlock from '$shared/CodeBlock.svelte'
	import StandardPage from '$shared/StandardPage.svelte'
	import Section from '$shared/Section.svelte'
</script>

<StandardPage sticky_menu title="Error summary">
	<BreadCrumbs
		slot="breadcrumbs"
		collapsable
		crumbs="{[
			['/home', 'Home'],
			['/form-components', 'Form components'],
			['/form-components/error-summary', 'Error summary'],
		]}" />

	<List slot="side-menu" spaced>
		<MenuItem bold href="#examples">Examples</MenuItem>
		<List sub_list spaced>
			<MenuItem href="#example-list-items">List items</MenuItem>
		</List>
		<MenuItem bold href="#interface">Interface</MenuItem>
		<List sub_list spaced>
			<MenuItem href="#interface-props">Props</MenuItem>
			<MenuItem href="#interface-slots">Slots</MenuItem>
		</List>
	</List>

	<Heading id="page-title" h1 xl>
		<Caption xl>Form components</Caption>
		Error summary
	</Heading>

	<Paragraph>
		Official documentation on the <Link
			href="https://design-system.service.gov.uk/components/error-summary/"
			>GDS Design System 'Error summary' component</Link
		>.
	</Paragraph>

	<Section add_top_margin id="examples">
		<Heading h2 lg>Examples</Heading>

		<Heading id="example-list-items" h3 md>List items</Heading>
		<ErrorSummary heading="You screwed up somewhere!">
			<li>
				<a href="#example-list-items">First error.</a>
			</li>
			<li>
				<a href="#example-list-items">Second error.</a>
			</li>
		</ErrorSummary>
		<CodeBlock
			lines="{[
				`<script>`,
				`	import ErrorSummary from '$govuk/forms/ErrorSummary.svelte'`,
				`</script>`,
				``,
				`<ErrorSummary heading="You screwed up somewhere!">`,
				`	<li>`,
				`		<a href="#example-list-items">First error.</a>`,
				`	</li>`,
				`	<li>`,
				`		<a href="#example-list-items">Second error.</a>`,
				`	</li>`,
				`</ErrorSummary>`,
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
				{ key: 'defaultValue', label: 'Default' },
				{ key: 'summary', label: 'Summary' },
			]}"
			records="{[
				{
					name: '<code>heading<code>',
					type: 'string',
					summary: 'Heading text',
				},
				{
					name: '<code>disable_auto_focus<code>',
					type: 'bool',
					defaultValue: 'false',
					summary: 'Disables auto focusing on page load',
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
					summary:
						'List items (&lt;li&gt; elements) usually each linking to the form field in error',
				},
			]}" />
	</Section>
</StandardPage>
