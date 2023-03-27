<script>
	import BreadCrumbs from '$govuk/BreadCrumbs.svelte'
	import Caption from '$govuk/Caption.svelte'
	import Heading from '$govuk/Heading.svelte'
	import InsetText from '$govuk/InsetText.svelte'
	import Link from '$govuk/Link.svelte'
	import List from '$govuk/List.svelte'
	import MenuItem from '$govuk/MenuItem.svelte'
	import NotificationBanner from '$govuk/NotificationBanner.svelte'
	import NotificationBannerHeading from '$govuk/NotificationBannerHeading.svelte'
	import NotificationBannerLink from '$govuk/NotificationBannerLink.svelte'
	import Paragraph from '$govuk/Paragraph.svelte'
	import Restyle from '$govuk/Restyle.svelte'
	import SectionBreak from '$govuk/SectionBreak.svelte'
	import Table from '$govuk/Table.svelte'

	import StartButton from '$govuk/forms/StartButton.svelte'

	import CodeBlock from '$shared/CodeBlock.svelte'
	import StandardPage from '$shared/StandardPage.svelte'
	import Section from '$shared/Section.svelte'
</script>

<StandardPage sticky_menu title="Start button">
	<BreadCrumbs
		slot="breadcrumbs"
		collapsable
		crumbs="{[
			['/home', 'Home'],
			['/form-components', 'Form components'],
			['/form-components/start-button', 'Start button'],
		]}" />

	<List slot="side-menu" spaced>
		<MenuItem bold href="#examples">Examples</MenuItem>
		<List sub_list spaced>
			<MenuItem href="#example-default">Default</MenuItem>
			<MenuItem href="#example-custom-text">Custom text</MenuItem>
		</List>
		<MenuItem bold href="#interface">Interface</MenuItem>
		<List sub_list spaced>
			<MenuItem href="#interface-props">Props</MenuItem>
			<MenuItem href="#interface-slots">Slots</MenuItem>
		</List>
	</List>

	<Heading id="page-title" h1 xl>
		<Caption xl>Forms</Caption>
		Start button
	</Heading>

	<InsetText>
		<Restyle bold>TODO:</Restyle> More props are probably going to be needed including
		an option to prevent default and click handling.
	</InsetText>

	<Paragraph>
		Official documentation on <Link
			href="https://design-system.service.gov.uk/components/button/"
			>GDS Design System 'Button' components</Link
		>.
	</Paragraph>

	<Section add_top_margin id="examples">
		<Heading h2 lg>Examples</Heading>

		<Heading id="example-default" h3 md>Default</Heading>
		<StartButton href="/form-components/start-button" />
		<CodeBlock
			lines="{[
				`<script>`,
				`	import StartButton from '$govuk/forms/StartButton.svelte'`,
				`</script>`,
				``,
				`<StartButton href="/form-components/start-button" />`,
			]}" />

		<SectionBreak md />

		<Heading id="example-custom-text" h3 md>Custom text</Heading>
		<StartButton href="/form-components/start-button">Go</StartButton>
		<CodeBlock
			lines="{[
				`<script>`,
				`	import StartButton from '$govuk/forms/StartButton.svelte'`,
				`</script>`,
				``,
				`<StartButton href="/form-components/start-button">`,
				`	Go`,
				`</StartButton>`,
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
					name: '<code>href<code>',
					type: 'string',
					summary: 'Destination URL',
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
