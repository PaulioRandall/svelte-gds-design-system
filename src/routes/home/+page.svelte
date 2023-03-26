<script>
	import Col from '$govuk/Col.svelte'
	import Heading from '$govuk/Heading.svelte'
	import Link from '$govuk/Link.svelte'
	import List from '$govuk/List.svelte'
	import Main from '$govuk/Main.svelte'
	import PageContent from '$govuk/PageContent.svelte'
	import Row from '$govuk/Row.svelte'

	import MenuItem from '$shared/MenuItem.svelte'
</script>

<PageContent title="Home">
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
</PageContent>
