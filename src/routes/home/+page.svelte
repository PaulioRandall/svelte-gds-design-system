<script>
	import Col from '$govuk/Col.svelte'
	import Heading from '$govuk/Heading.svelte'
	import Link from '$govuk/Link.svelte'
	import List from '$govuk/List.svelte'
	import Main from '$govuk/Main.svelte'
	import MenuItem from '$govuk/MenuItem.svelte'
	import Row from '$govuk/Row.svelte'

	import Page from '$shared/Page.svelte'
</script>

<Page title="Home">
	<Main>
		<Heading h1 xl>Home</Heading>

		<Row>
			<Col two_thirds>
				<List spaced>
					<MenuItem href="/general">General</MenuItem>
					<MenuItem href="/forms">Forms</MenuItem>
				</List>
			</Col>
		</Row>
	</Main>
</Page>
