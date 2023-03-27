<script>
	import BreadCrumbs from '$govuk/BreadCrumbs.svelte'
	import Caption from '$govuk/Caption.svelte'
	import Heading from '$govuk/Heading.svelte'
	import InsetText from '$govuk/InsetText.svelte'
	import List from '$govuk/List.svelte'
	import MenuItem from '$govuk/MenuItem.svelte'
	import NotificationBanner from '$govuk/NotificationBanner.svelte'
	import NotificationBannerHeading from '$govuk/NotificationBannerHeading.svelte'
	import NotificationBannerLink from '$govuk/NotificationBannerLink.svelte'
	import Paragraph from '$govuk/Paragraph.svelte'
	import Restyle from '$govuk/Restyle.svelte'
	import SectionBreak from '$govuk/SectionBreak.svelte'
	import Table from '$govuk/Table.svelte'

	import Button from '$govuk/forms/Button.svelte'

	import CodeBlock from '$shared/CodeBlock.svelte'
	import StandardPage from '$shared/StandardPage.svelte'
	import Section from '$shared/Section.svelte'
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
			<MenuItem href="#example-prevent-double-clicks"
				>Prevent double clicks</MenuItem>
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

	<!--
	<InsetText>
		<Restyle bold>Authors note:</Restyle> I'm not happy with the use of sub components
		but I've yet to come up with a better solution. Notification banners should be
		short and to the point. I'd like a component design that mirrors that. The pain
		lies in the requirement for special modifier classes such as
		<code>govuk-notification-banner__heading</code>
		and <code>govuk-notification-banner__link</code>.
	</InsetText>
-->

	<Section add_top_margin id="examples">
		<Heading h2 lg>Examples</Heading>

		<Heading id="example-default" h3 md>Default</Heading>
		<Button>Press me</Button>
		<CodeBlock
			lines="{[
				`<script>`,
				`	import Button from '$govuk/forms/Button.svelte'`,
				`</script>`,
				``,
				`<Button>Press me</Button>`,
			]}" />

		<SectionBreak md />

		<Heading id="example-secondary" h3 md>Secondary</Heading>
		<Button secondary>Press me</Button>
		<CodeBlock
			lines="{[
				`<script>`,
				`	import Button from '$govuk/forms/Button.svelte'`,
				`</script>`,
				``,
				`<Button secondary>Press me</Button>`,
			]}" />

		<SectionBreak md />

		<Heading id="example-warning" h3 md>Warning</Heading>
		<Button warning>Think carfully before pressing me!</Button>
		<CodeBlock
			lines="{[
				`<script>`,
				`	import Button from '$govuk/forms/Button.svelte'`,
				`</script>`,
				``,
				`<Button warning>Press me!</Button>`,
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

		<SectionBreak md />

		<Heading id="example-prevent-double-clicks" h3 md>
			Prevent double clicks
		</Heading>
		<Button prevent_double_clicks>Double click protected</Button>
		<CodeBlock
			lines="{[
				`<script>`,
				`	import Button from '$govuk/forms/Button.svelte'`,
				`</script>`,
				``,
				`<Button prevent_double_clicks>Press me!</Button>`,
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
					name: '<code>secondary<code>',
					type: 'bool',
					summary: 'True if it is a secondary button',
				},
				{
					name: '<code>warning</code>',
					type: 'bool',
					summary: 'True if pressing the button can have serious consequences',
				},
				{
					name: '<code>disabled</code>',
					type: 'bool',
					summary: 'Ture if the button is disabled',
				},
				{
					name: '<code>prevent_double_clicks</code>',
					type: 'bool',
					summary: 'True to enable double click protection',
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
