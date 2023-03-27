<script>
	import Accordion from '$govuk/Accordion.svelte'
	import AccordionSection from '$govuk/AccordionSection.svelte'
	import BreadCrumbs from '$govuk/BreadCrumbs.svelte'
	import Caption from '$govuk/Caption.svelte'
	import Details from '$govuk/Details.svelte'
	import ErrorSummary from '$govuk/ErrorSummary.svelte'
	import Heading from '$govuk/Heading.svelte'
	import InsetText from '$govuk/InsetText.svelte'
	import Link from '$govuk/Link.svelte'
	import List from '$govuk/List.svelte'
	import MenuItem from '$govuk/MenuItem.svelte'
	import NotificationBanner from '$govuk/NotificationBanner.svelte'
	import NotificationBannerHeading from '$govuk/NotificationBannerHeading.svelte'
	import NotificationBannerLink from '$govuk/NotificationBannerLink.svelte'
	import Panel from '$govuk/Panel.svelte'
	import Paragraph from '$govuk/Paragraph.svelte'
	import Table from '$govuk/Table.svelte'
	import Tag from '$govuk/Tag.svelte'
	import WarningText from '$govuk/WarningText.svelte'

	import StandardPage from '$shared/StandardPage.svelte'
	import Section from '$shared/Section.svelte'

	import SummaryCard from './SummaryCard.svelte'
	import Tabs from './Tabs.svelte'
</script>

<StandardPage title="General components">
	<BreadCrumbs
		slot="breadcrumbs"
		collapsable
		crumbs="{[
			['/home', 'Home'],
			['/general', 'General'],
		]}" />

	<!--
		TODO:
		+ Pagination
		+ Cookie banner
	-->

	<List slot="side-menu" spaced>
		<MenuItem href="#page-title">Page title</MenuItem>
		<MenuItem href="#banner">Banner</MenuItem>
		<MenuItem href="#panel">Panel</MenuItem>
		<MenuItem bold href="#text">Text</MenuItem>
		<List spaced sub_list>
			<MenuItem href="#paragraph">Paragraph</MenuItem>
			<MenuItem href="#special-text">Special text</MenuItem>
			<MenuItem href="#tag">Tag</MenuItem>
		</List>
		<MenuItem bold href="#structured-information"
			>Structured information</MenuItem>
		<List spaced sub_list>
			<MenuItem href="#list">List</MenuItem>
			<MenuItem href="#table">Table</MenuItem>
			<MenuItem href="#tabs">Tabs</MenuItem>
			<MenuItem href="#accordion">Accordion</MenuItem>
			<MenuItem href="#summary">Summary</MenuItem>
		</List>
	</List>

	<Heading id="page-title" h1 xl>
		<Caption xl>A page title caption</Caption>
		The page title
	</Heading>

	<Section section_break_id="banner">
		<Heading h2 lg>Banner</Heading>
		<NotificationBanner title="Excuse me">
			<NotificationBannerHeading>
				This is a notification banner content heading.
			</NotificationBannerHeading>
			<Paragraph>
				And here is a notification banner link <NotificationBannerLink
					href="/general/xyz"
					>Xyz
				</NotificationBannerLink>.
			</Paragraph>
		</NotificationBanner>

		<NotificationBanner success title="Success">
			<Paragraph>Well done.</Paragraph>
		</NotificationBanner>

		<ErrorSummary heading="You screwed up somewhere!">
			<li>This component takes &lt;li&gt; elements.</li>
			<li>
				<a href="#main-content">A link to a none existent error.</a>
			</li>
		</ErrorSummary>
	</Section>

	<Section section_break_id="panel">
		<Heading h2 lg>Panel</Heading>
		<Panel heading="A panel">The panel content</Panel>
	</Section>

	<Section section_break_id="text">
		<Heading h2 lg>Text</Heading>
	</Section>

	<Section no_break row_id="paragraph">
		<Heading h3 md>Paragraph</Heading>
		<Paragraph lead>Leading paragraph.</Paragraph>
		<Paragraph small>Small paragraph.</Paragraph>
		<Paragraph centre>Centred aligned paragraph.</Paragraph>
		<Paragraph right>Right aligned paragraph.</Paragraph>
		<Paragraph bold>Bold paragraph.</Paragraph>
		<Paragraph override_font_36>Font size overriden paragraph.</Paragraph>
	</Section>

	<Section section_break_id="special-text">
		<Heading h3 md>Special text</Heading>
		<InsetText>This is inset text.</InsetText>
		<WarningText>This is a warning!</WarningText>

		<Details summary="Here are some details">These are the details.</Details>
	</Section>

	<Section section_break_id="tag">
		<Heading h3 md>Tag</Heading>
		<List>
			<li><Tag>Completed</Tag></li>
			<li><Tag inactive>Inactive</Tag></li>
			<li><Tag fresh>New (fresh)</Tag></li>
			<li><Tag active>Active</Tag></li>
			<li><Tag pending>Pending</Tag></li>
			<li><Tag received>Received</Tag></li>
			<li><Tag sent>Sent</Tag></li>
			<li><Tag rejected>Rejected</Tag></li>
			<li><Tag declined>Declined</Tag></li>
			<li><Tag delayed>Delayed</Tag></li>
		</List>
	</Section>

	<Section section_break_id="structured-information">
		<Heading h2 lg>Structured information</Heading>
	</Section>

	<Section no_break row_id="list">
		<Heading h3 md>List</Heading>
		<List bullets spaced>
			<li>
				Link <Link href="/general/xyz">Xyz</Link>.
			</li>
			<li>
				Invert link color <span
					style="background: var(--color-blue); padding: 5px;">
					<Link invert_color href="/general/xyz">Xyz.</Link>
				</span>
			</li>
			<li>
				No undlerline link <Link no_underline href="/general/xyz">Xyz</Link>.
			</li>
			<li>
				Link to frequently changing content
				<Link dynamic_page href="/general/xyz">Xyz</Link>.
			</li>
			<li>
				Link that opens in a new tab
				<Link as_new_tab href="/general/xyz">Xyz</Link>.
			</li>
			<MenuItem href="/general/xyz">A menu item component</MenuItem>
		</List>
	</Section>

	<Section section_break_id="table">
		<Heading h3 md>Table</Heading>
		<Table
			caption_md="Monthly costs"
			headers="{[
				{ key: 'duration', label: 'Duration', rowHead: true },
				{ key: 'notes', label: 'Notes' },
				{ key: 'cost', label: 'Cost', numeric: true },
			]}"
			records="{[
				{
					duration: '1 Month',
					notes: 'Shortest but least cost effective',
					cost: '£3.50',
				},
				{ duration: '3 months', cost: '£10' },
				{ duration: '6 months', cost: '£18' },
				{
					duration: '12 months',
					notes: 'Most cost effective',
					cost: '£32',
				},
			]}" />
	</Section>

	<Section section_break_id="tabs">
		<Heading h3 md>Tabs</Heading>
		<Tabs />
	</Section>

	<Section section_break_id="accordion">
		<Heading h3 md>Accordion</Heading>
		<Accordion id="accordion-example">
			<AccordionSection heading="Abc" summary="Abc summary">
				Abc content.
			</AccordionSection>
			<AccordionSection heading="Efg" summary="Efg summary">
				Efg content.
			</AccordionSection>
			<AccordionSection heading="Xyz" summary="Xyz summary">
				Xyz content.
			</AccordionSection>
		</Accordion>
	</Section>

	<Section section_break_id="summary">
		<Heading h3 md>Summary</Heading>
		<SummaryCard name="Alice" age="21" />
		<SummaryCard name="Bob" age="69" />
		<SummaryCard name="Charlie" age="32" />
	</Section>
</StandardPage>
