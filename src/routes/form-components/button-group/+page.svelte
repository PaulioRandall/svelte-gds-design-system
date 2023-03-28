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

	import ButtonGroup from '$govuk/forms/ButtonGroup.svelte'
	import Button from '$govuk/forms/Button.svelte'

	import CodeBlock from '$shared/CodeBlock.svelte'
	import StandardPage from '$shared/StandardPage.svelte'
	import Section from '$shared/Section.svelte'
</script>

<StandardPage sticky_menu title="Button group">
	<BreadCrumbs
		slot="breadcrumbs"
		collapsable
		crumbs="{[
			['/home', 'Home'],
			['/form-components', 'Form components'],
			['/form-components/button-group', 'Button group'],
		]}" />

	<List slot="side-menu" spaced>
		<MenuItem bold href="#examples">Examples</MenuItem>
		<List sub_list spaced>
			<MenuItem href="#example-minimalist">Minimalist</MenuItem>
			<MenuItem href="#example-links">Links</MenuItem>
		</List>
		<MenuItem bold href="#interface">Interface</MenuItem>
		<List sub_list spaced>
			<MenuItem href="#interface-props">Props</MenuItem>
			<MenuItem href="#interface-slots">Slots</MenuItem>
		</List>
	</List>

	<Heading id="page-title" h1 xl>
		<Caption xl>Form components</Caption>
		Button group
	</Heading>

	<Paragraph>
		Official documentation on the <Link
			href="https://design-system.service.gov.uk/components/button/"
			>GDS Design System 'Button group' wrapper</Link
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
		<ButtonGroup>
			<Button>Tweedle-dee</Button>
			<Button>Tweedle-dum</Button>
		</ButtonGroup>
		<CodeBlock
			lines="{[
				`<script>`,
				`	import ButtonGroup from '$govuk/forms/ButtonGroup.svelte'`,
				`	import Button from '$govuk/forms/Button.svelte'`,
				`</script>`,
				``,
				`<ButtonGroup>`,
				`	<Button>Tweedle-dee</Button>`,
				`	<Button>Tweedle-dum</Button>`,
				`</ButtonGroup>`,
			]}" />

		<SectionBreak md />

		<Heading id="example-links" h3 md>Links</Heading>
		<ButtonGroup>
			<Button>Tweedle-dee</Button>
			<Link href="#example-links">Tweedle-dum</Link>
		</ButtonGroup>
		<CodeBlock
			lines="{[
				`<script>`,
				`	import ButtonGroup from '$govuk/forms/ButtonGroup.svelte'`,
				`	import Button from '$govuk/forms/Button.svelte'`,
				`	import Link from '$govuk/Link.svelte'`,
				`</script>`,
				``,
				`<ButtonGroup>`,
				`	<Button>Tweedle-dee</Button>`,
				`	<Link href="#example-links">Tweedle-dum</Link>`,
				`</ButtonGroup>`,
			]}" />
	</Section>

	<Section add_top_margin id="interface">
		<Heading h2 lg>Interface</Heading>

		<Table
			id="interface-props"
			caption_md="Props"
			headers="{[
				{ key: 'name', label: 'Name' },
				{ key: 'summary', label: 'Summary' },
			]}"
			records="{[
				{
					name: '<code>id=""<code>',
					summary: 'Wrapper element ID',
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
					summary: 'Buttons and Links',
				},
			]}" />
	</Section>
</StandardPage>
