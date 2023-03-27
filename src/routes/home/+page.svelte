<script>
	import Heading from '$govuk/Heading.svelte'
	import List from '$govuk/List.svelte'
	import MenuItem from '$govuk/MenuItem.svelte'

	import StandardPage from '$shared/StandardPage.svelte'
</script>

<StandardPage title="Home">
	<Heading h1 xl>Home</Heading>

	<List spaced>
		<MenuItem href="/general">General</MenuItem>
		<MenuItem href="/forms">Forms</MenuItem>
	</List>
</StandardPage>
