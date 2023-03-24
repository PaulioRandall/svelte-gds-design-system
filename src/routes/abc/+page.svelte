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

	import MenuItem from '$shared/MenuItem.svelte'
	import Section from '$shared/Section.svelte'
	import PageMenuCol from '$shared/PageMenuCol.svelte'

	import SummaryCard from './SummaryCard.svelte'
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
		-->

		<Row>
			<PageMenuCol>
				<List spaced>
					<MenuItem href="#page-title">Page title</MenuItem>
					<MenuItem href="#banners">Banners</MenuItem>
					<MenuItem href="#panels">Panels</MenuItem>
					<MenuItem href="#paragraphs">Paragraphs</MenuItem>
					<MenuItem href="#special-text">Special text</MenuItem>
					<MenuItem href="#lists">Lists</MenuItem>
					<MenuItem href="#tags">Tags</MenuItem>
					<MenuItem href="#tables">Tables</MenuItem>
					<MenuItem href="#tabs">Tabs</MenuItem>
					<MenuItem href="#accordions">Accordions</MenuItem>
					<MenuItem href="#summaries">Summaries</MenuItem>
				</List>
			</PageMenuCol>

			<Col two_thirds>
				<Heading id="page-title" h1 xl>
					<Caption xl>A page title caption</Caption>
					The page title
				</Heading>

				<Section section_break_id="banners">
					<Col full>
						<Heading h2 lg>Banners</Heading>
						<NotificationBanner title="Excuse me">
							<NotificationBannerHeading>
								This is a notification banner content heading.
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
							<li>
								<a href="#main-content">A link to a none existent error.</a>
							</li>
						</ErrorSummary>
					</Col>
				</Section>

				<Section section_break_id="panels">
					<Col full>
						<Heading h2 lg>Panels</Heading>
						<Panel heading="A panel">The panel content</Panel>
					</Col>
				</Section>

				<Section section_break_id="paragraphs">
					<Col full>
						<Heading h2 lg>Paragraphs</Heading>
						<Paragraph lead>Leading paragraph.</Paragraph>
						<Paragraph small>Small paragraph.</Paragraph>
						<Paragraph centre>Centred aligned paragraph.</Paragraph>
						<Paragraph right>Right aligned paragraph.</Paragraph>
						<Paragraph bold>Bold paragraph.</Paragraph>
						<Paragraph override_font_36
							>Font size overriden paragraph.</Paragraph>
					</Col>
				</Section>

				<Section section_break_id="special-text">
					<Col full>
						<Heading h2 lg>Special text</Heading>
						<InsetText>This is inset text.</InsetText>
						<WarningText>This is a warning!</WarningText>

						<Details summary="Here are some details">
							These are the details.
						</Details>
					</Col>
				</Section>

				<Section section_break_id="lists">
					<Col full>
						<Heading h2 lg>Lists</Heading>
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
								No undlerline link <Link no_underline href="/abc/xyz">Xyz</Link
								>.
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
					</Col>
				</Section>

				<Section section_break_id="tags">
					<Col full>
						<Heading h2 lg>Tags</Heading>
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
					</Col>
				</Section>

				<Section section_break_id="tables">
					<Col full>
						<Heading h2 lg>Tables</Heading>
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
					</Col>
				</Section>

				<Section section_break_id="tabs">
					<Col full>
						<Heading h2 lg>Tabs</Heading>
						<Tabs />
					</Col>
				</Section>

				<Section section_break_id="accordions">
					<Col full>
						<Heading h2 lg>Accordions</Heading>
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
				</Section>

				<Section section_break_id="summaries">
					<Col full>
						<Heading h2 lg>Summaries</Heading>
						<SummaryCard name="Alice" age="21" />
						<SummaryCard name="Bob" age="69" />
						<SummaryCard name="Charlie" age="32" />
					</Col>
				</Section>
			</Col>
		</Row>
	</Main>
</PageContent>
