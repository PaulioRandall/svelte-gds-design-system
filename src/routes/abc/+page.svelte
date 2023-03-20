<script>
	import BreadCrumbs from '$govuk/BreadCrumbs.svelte'
	import Caption from '$govuk/Caption.svelte'
	import Col from '$govuk/Col.svelte'
	import Heading from '$govuk/Heading.svelte'
	import Link from '$govuk/Link.svelte'
	import List from '$govuk/List.svelte'
	import Main from '$govuk/Main.svelte'
	import Page from '$govuk/Page.svelte'
	import Paragraph from '$govuk/Paragraph.svelte'
	import Row from '$govuk/Row.svelte'

	import PersonCard from './PersonCard.svelte'
</script>

<Page title="Abc">
	<BreadCrumbs
		collapsable
		crumbs="{[
			['/home', 'Home'],
			['/abc', 'Abc'],
		]}" />

	<Main>
		<Heading h1 xl>
			<Caption xl>Group</Caption>
			Abc
		</Heading>

		<Row>
			<Col two_thirds one_half_desktop>
				<Paragraph lead>Leading paragraph.</Paragraph>
				<Paragraph small>Small paragraph.</Paragraph>
				<Paragraph centre>Centred aligned paragraph.</Paragraph>
				<Paragraph right>Right aligned paragraph.</Paragraph>
				<Paragraph bold>Bold paragraph.</Paragraph>
				<Paragraph override_font_36>Font size overriden paragraph.</Paragraph>

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

				<PersonCard name="Alice" age="21" />
				<PersonCard name="Bob" age="69" />
				<PersonCard name="Charlie" age="32" />
			</Col>
		</Row>

		<!-- TODO: Next button -->
	</Main>
</Page>
