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

	import Button from '$govuk/forms/Button.svelte'

	import CodeBlock from '$shared/CodeBlock.svelte'
	import StandardPage from '$shared/StandardPage.svelte'
	import Section from '$shared/Section.svelte'

	let counter = 0
	const incCounter = (event) => counter++

	let warningText = 'Think carefully before pressing me'
	const changeWarning = (event) => {
		warningText = "I bet you didn't!"
	}
</script>

<StandardPage sticky_menu title="Button">
	<BreadCrumbs
		slot="breadcrumbs"
		collapsable
		crumbs="{[
			['/home', 'Home'],
			['/form-components', 'Form components'],
			['/form-components/button', 'Button'],
		]}" />

	<List slot="side-menu" spaced>
		<MenuItem bold href="#examples">Examples</MenuItem>
		<List sub_list spaced>
			<MenuItem href="#example-default">Default</MenuItem>
			<MenuItem href="#example-secondary">Secondary</MenuItem>
			<MenuItem href="#example-warning">Warning</MenuItem>
			<MenuItem href="#example-disabled">Disabled</MenuItem>
		</List>
		<MenuItem bold href="#interface">Interface</MenuItem>
		<List sub_list spaced>
			<MenuItem href="#interface-props">Props</MenuItem>
			<MenuItem href="#interface-slots">Slots</MenuItem>
		</List>
	</List>

	<Heading id="page-title" h1 xl>
		<Caption xl>Forms</Caption>
		Button
	</Heading>

	<Paragraph>
		Official documentation on <Link
			href="https://design-system.service.gov.uk/components/button/"
			>GDS Design System 'Button' components</Link
		>.
	</Paragraph>

	<Section add_top_margin id="examples">
		<Heading h2 lg>Examples</Heading>

		<noscript>
			<WarningText>
				Pssst... these examples won't work without JavaScript enabled.
			</WarningText>
		</noscript>

		<Heading id="example-default" h3 md>Default</Heading>
		<Button onclick="{incCounter}">Counter: {counter}</Button>
		<CodeBlock
			lines="{[
				`<script>`,
				`	import Button from '$govuk/forms/Button.svelte'`,
				``,
				`	let counter = 0`,
				`	const incCounter = (event) => counter++`,
				`</script>`,
				``,
				`<Button onclick={incCounter}>`,
				`	Counter: {counter}`,
				`</Button>`,
			]}" />

		<SectionBreak md />

		<Heading id="example-secondary" h3 md>Secondary</Heading>
		<Button secondary onclick="{incCounter}">Counter: {counter}</Button>
		<CodeBlock
			lines="{[
				`<script>`,
				`	import Button from '$govuk/forms/Button.svelte'`,
				``,
				`	let counter = 0`,
				`	const incCounter = (event) => counter++`,
				`</script>`,
				``,
				`<Button secondary onclick={incCounter}>`,
				`	Counter: {counter}`,
				`</Button>`,
			]}" />

		<SectionBreak md />

		<Heading id="example-warning" h3 md>Warning</Heading>
		<Button warning prevent_double_clicks onclick="{changeWarning}">
			{warningText}
		</Button>
		<CodeBlock
			lines="{[
				`<script>`,
				`	import Button from '$govuk/forms/Button.svelte'`,
				``,
				`	let warningText = "Think carfully before pressing me!"`,
				`	const changeWarning = (event) => {`,
				`		warningText = "I bet you didn't!"`,
				`	}`,
				`</script>`,
				``,
				`<Button`,
				`	warning`,
				`	prevent_double_clicks`,
				`	onclick={changeWarning}>`,
				`	{warningText}`,
				`</Button>`,
			]}" />

		<SectionBreak md />

		<Heading id="example-disabled" h3 md>Disabled</Heading>
		<Button disabled>Can't touch this</Button>
		<CodeBlock
			lines="{[
				`<script>`,
				`	import Button from '$govuk/forms/Button.svelte'`,
				`</script>`,
				``,
				`<Button disabled>Can't touch this</Button>`,
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
					name: '<code>name<code>',
					type: 'string',
					summary: 'Name of the button',
				},
				{
					name: '<code>type<code>',
					type: 'string',
					defaultValue: '"button"',
					summary: 'Type of the button. Either "button", "reset", or "submit"',
				},
				{
					name: '<code>value<code>',
					type: 'string',
					summary: 'Sets the value attribute',
				},
				{
					name: '<code>secondary<code>',
					type: 'bool',
					defaultValue: 'false',
					summary: 'True if it is a secondary button',
				},
				{
					name: '<code>warning</code>',
					type: 'bool',
					defaultValue: 'false',
					summary: 'True if pressing the button can have serious consequences',
				},
				{
					name: '<code>disabled</code>',
					type: 'bool',
					defaultValue: 'false',
					summary: 'Ture if the button is disabled',
				},
				{
					name: '<code>prevent_double_clicks</code>',
					type: 'bool',
					defaultValue: 'false',
					summary: 'True to enable double click protection',
				},
				{
					name: '<code>onclick</code>',
					type: 'function(event)',
					summary: 'Function called each time the button is clicked',
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
					summary: 'Button text',
				},
			]}" />
	</Section>
</StandardPage>
