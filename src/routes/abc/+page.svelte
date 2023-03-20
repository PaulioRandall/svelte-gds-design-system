<script>
	import BreadCrumbs from '$govuk/BreadCrumbs.svelte'
	import Col from '$govuk/Col.svelte'
	import Heading from '$govuk/Heading.svelte'
	import Link from '$govuk/Link.svelte'
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
		<Heading h1 xl>Abc</Heading>

		<Row>
			<Col one_half two_thirds_desktop>
				<Paragraph>
					Visit <Link href="/abc/xyz">Xyz</Link>...
				</Paragraph>

				<PersonCard name="Alice" age="21" />
				<PersonCard name="Bob" age="69" />
				<PersonCard name="Charlie" age="32" />
			</Col>
		</Row>

		<!-- TODO: Next button -->
	</Main>
</Page>
