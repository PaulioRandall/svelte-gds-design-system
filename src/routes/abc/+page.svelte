<script>
	import Accordion from '$govuk/Accordion.svelte'
	import AccordionSection from '$govuk/AccordionSection.svelte'
	import BreadCrumbs from '$govuk/BreadCrumbs.svelte'
	import Caption from '$govuk/Caption.svelte'
	import Col from '$govuk/Col.svelte'
	import Details from '$govuk/Details.svelte'
	import ErrorSummary from '$govuk/ErrorSummary.svelte'
	import Heading from '$govuk/Heading.svelte'
	import InsetText from '$govuk/InsetText.svelte'
	import Link from '$govuk/Link.svelte'
	import List from '$govuk/List.svelte'
	import Main from '$govuk/Main.svelte'
	import NotificationBanner from '$govuk/NotificationBanner.svelte'
	import NotificationBannerHeading from '$govuk/NotificationBannerHeading.svelte'
	import NotificationBannerLink from '$govuk/NotificationBannerLink.svelte'
	import PageContent from '$govuk/PageContent.svelte'
	import Panel from '$govuk/Panel.svelte'
	import Paragraph from '$govuk/Paragraph.svelte'
	import Row from '$govuk/Row.svelte'
	import SectionBreak from '$govuk/SectionBreak.svelte'
	import Table from '$govuk/Table.svelte'
	import Tag from '$govuk/Tag.svelte'
	import WarningText from '$govuk/WarningText.svelte'

	import PersonCard from './PersonCard.svelte'
	import Tabs from './Tabs.svelte'
</script>

<PageContent title="Abc">
	<BreadCrumbs
		collapsable
		crumbs="{[
			['/home', 'Home'],
			['/abc', 'Abc'],
		]}" />

	<Main>
		<!--
			TODO:
			+ Error summary
			+ Pagination
			+ Cookie banner
			+ Forms
				+ Error message
			  + Button
			  + Character count
			  + Checkboxes
			  + Data input
			  + Fieldset
			  + File upload
			  + Radios
			  + Select
			  + Text input
			  + Textarea

			REDO:
			+ Summary list?
			+ Notification banner?
		-->

		<Row>
			<Col two_thirds one_half_desktop>
				<NotificationBanner title="Excuse me">
					<NotificationBannerHeading>
						This is a notification banner heading.
					</NotificationBannerHeading>
					<Paragraph>
						And here is a notification banner link <NotificationBannerLink
							href="/abc/xyz"
							>Xyz
						</NotificationBannerLink>.
					</Paragraph>
				</NotificationBanner>

				<NotificationBanner success title="Success">
					<Paragraph>Well done.</Paragraph>
				</NotificationBanner>

				<ErrorSummary heading="You screwed up somewhere!">
					<li>This component takes &lt;li&gt; elements.</li>
					<li><a href="#">A link to a none existent error.</a></li>
				</ErrorSummary>
			</Col>
		</Row>

		<Heading h1 xl>
			<Caption xl>Group</Caption>
			Abc
		</Heading>

		<Row>
			<Col two_thirds one_half_desktop>
				<Panel heading="A panel">The panel content</Panel>

				<Paragraph lead>Leading paragraph.</Paragraph>
				<Paragraph small>Small paragraph.</Paragraph>
				<Paragraph centre>Centred aligned paragraph.</Paragraph>
				<Paragraph right>Right aligned paragraph.</Paragraph>
				<Paragraph bold>Bold paragraph.</Paragraph>
				<Paragraph override_font_36>Font size overriden paragraph.</Paragraph>

				<SectionBreak lg show_line />

				<InsetText>This is inset text.</InsetText>
				<WarningText>This is a warning!</WarningText>

				<Details summary="Here are some details">
					These are the details.
				</Details>

				<SectionBreak lg show_line />

				<List bullets spaced>
					<li>
						Link <Link href="/abc/xyz">Xyz</Link>.
					</li>
					<li>
						Invert link color <span
							style="background: var(--color-blue); padding: 5px;">
							<Link invert_color href="/abc/xyz">Xyz.</Link>
						</span>
					</li>
					<li>
						No undlerline link <Link no_underline href="/abc/xyz">Xyz</Link>.
					</li>
					<li>
						Link to frequently changing content
						<Link dynamic_page href="/abc/xyz">Xyz</Link>.
					</li>
					<li>
						Link that opens in a new tab
						<Link as_new_tab href="/abc/xyz">Xyz</Link>.
					</li>
				</List>

				<SectionBreak lg show_line />

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

				<SectionBreak md />

				<PersonCard name="Alice" age="21" />
				<PersonCard name="Bob" age="69" />
				<PersonCard name="Charlie" age="32" />

				<Tabs />

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
			</Col>
		</Row>

		<!-- TODO: Next button -->
	</Main>
</PageContent>
