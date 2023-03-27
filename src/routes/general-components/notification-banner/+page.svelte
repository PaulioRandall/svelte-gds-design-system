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

	import CodeBlock from '$shared/CodeBlock.svelte'
	import StandardPage from '$shared/StandardPage.svelte'
	import Section from '$shared/Section.svelte'
</script>

<StandardPage sticky_menu title="Notification banner">
	<BreadCrumbs
		slot="breadcrumbs"
		collapsable
		crumbs="{[
			['/home', 'Home'],
			['/general-components', 'General components'],
			['/general-components/notification-banner', 'Notification banner'],
		]}" />

	<List slot="side-menu" spaced>
		<MenuItem bold href="#usage">Usage</MenuItem>
		<List sub_list spaced>
			<MenuItem href="#props">Props</MenuItem>
			<MenuItem href="#slots">Slots</MenuItem>
			<MenuItem href="#sub-components">Sub components</MenuItem>
		</List>
		<MenuItem bold href="#examples">Examples</MenuItem>
		<List sub_list spaced>
			<MenuItem href="#auto-focus-example">Auto focus</MenuItem>
			<MenuItem href="#disabled-auto-focus">Disabling auto focus</MenuItem>
			<MenuItem href="#success-banners">Success banners</MenuItem>
			<MenuItem href="#links">Links</MenuItem>
		</List>
	</List>

	<Heading id="page-title" h1 xl>
		<Caption xl>General components</Caption>
		Notification banner
	</Heading>

	<InsetText>
		<Restyle bold>Authors note:</Restyle> I'm not happy with the use of sub components
		but I've yet to come up with a better solution. Notification banners should be
		short and to the point. I'd like a component design that mirrors that. The pain
		lies in the requirement for special modifier classes such as
		<code>govuk-notification-banner__heading</code>
		and <code>govuk-notification-banner__link</code>.
	</InsetText>

	<Section add_top_margin id="usage">
		<Heading h2 lg>Usage</Heading>

		<Table
			id="props"
			caption_md="Props"
			headers="{[
				{ key: 'name', label: 'Name' },
				{ key: 'type', label: 'Type' },
				{ key: 'summary', label: 'Summary' },
			]}"
			records="{[
				{
					name: '<code>title<code>',
					type: 'string',
					summary: 'Specifies the title that runs along the top of the banner',
				},
				{
					name: '<code>disable_auto_focus</code>',
					type: 'bool',
					summary: 'Disables auto focus when the page loads',
				},
				{
					name: '<code>success</code>',
					type: 'bool',
					summary: 'The banner is a success message',
				},
			]}" />

		<SectionBreak md />

		<Table
			id="slots"
			caption_md="Slots"
			headers="{[
				{ key: 'name', label: 'Name' },
				{ key: 'summary', label: 'Summary' },
			]}"
			records="{[
				{
					name: '<code>default<code>',
					summary: 'The banner content',
				},
			]}" />

		<SectionBreak md />

		<Table
			id="sub-components"
			caption_md="Sub components"
			headers="{[
				{ key: 'name', label: 'Name' },
				{ key: 'summary', label: 'Summary' },
			]}"
			records="{[
				{
					name: '<code>NotificationBannerHeading<code>',
					summary: 'A heading within the banner content',
				},
				{
					name: '<code>NotificationBannerLink<code>',
					summary: 'A link within the banner content',
				},
			]}" />
	</Section>

	<Section add_top_margin id="examples">
		<Heading h2 lg>Examples</Heading>

		<Heading id="auto-focus-example" h3 md>Auto focus</Heading>
		<NotificationBanner disable_auto_focus title="Excuse me">
			<NotificationBannerHeading>Auto focus</NotificationBannerHeading>
			<Paragraph>
				Pages with notification banners will grab the page's focus so that users
				will be taken to it and accessibility tools will begin reading its
				message first.
			</Paragraph>
		</NotificationBanner>
		<CodeBlock
			lines="{[
				`<script>`,
				`	import NotificationBanner from '$govuk/NotificationBanner.svelte'`,
				`	import NotificationBannerHeading from '$govuk/NotificationBannerHeading.svelte'`,
				`	import Paragraph from '$govuk/Paragraph.svelte'`,
				`</script>`,
				``,
				`<NotificationBanner title="Excuse me">`,
				`	<NotificationBannerHeading>`,
				`		Auto focus`,
				`	</NotificationBannerHeading>`,
				`	<Paragraph>`,
				`		Pages with notification banners will grab the page's`,
				`		focus so that users will be taken to it and accessibility`,
				`		tools will begin reading its message first.`,
				`	</Paragraph>`,
				`</NotificationBanner>`,
			]}" />

		<SectionBreak md />

		<Heading id="disabled-auto-focus" h3 md>Disabled auto focus</Heading>
		<NotificationBanner disable_auto_focus title="Disabled auto focus">
			<Paragraph>Auto focus? Not for this notification banner.</Paragraph>
		</NotificationBanner>
		<CodeBlock
			lines="{[
				`<NotificationBanner disable_auto_focus title="Disabled auto focus">`,
				`	<Paragraph>`,
				`		Auto focus? Not for this notification banner.`,
				`	</Paragraph>`,
				`</NotificationBanner>`,
			]}" />

		<SectionBreak md />

		<Heading id="success-banners" h3 md>Success banners</Heading>
		<NotificationBanner disable_auto_focus success title="Success">
			<Paragraph>Well done. You did something.</Paragraph>
		</NotificationBanner>
		<CodeBlock
			lines="{[
				`<NotificationBanner success title="Success">`,
				`	<Paragraph>`,
				`		Well done. You did something.`,
				`	</Paragraph>`,
				`</NotificationBanner>`,
			]}" />

		<SectionBreak md />

		<Heading id="links" h3 md>Links in banner</Heading>
		<NotificationBanner disable_auto_focus title="Links in banners">
			<Paragraph>
				For some reason there is a special CSS class for banner links. Here is a
				<NotificationBannerLink href="/general-components">
					notification banner link
				</NotificationBannerLink> that takes you back to the general components page.
			</Paragraph>
		</NotificationBanner>
		<CodeBlock
			lines="{[
				`<NotificationBanner disable_auto_focus title="Links in banners">`,
				`	<Paragraph>`,
				`		For some reason there is a special CSS class for banner links.`,
				`		Here is a <NotificationBannerLink href="/general-components"> notification`,
				`		banner link </NotificationBannerLink> that takes you back to`,
				`		the general components page.`,
				`	</Paragraph>`,
				`</NotificationBanner>`,
			]}" />
	</Section>
</StandardPage>
