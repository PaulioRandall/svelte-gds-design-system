<script>
	import Breadcrumbs from '$govuk/Breadcrumbs.svelte'
	import Heading from '$govuk/Heading.svelte'
	import Paragraph from '$govuk/Paragraph.svelte'

	import StandardPage from '$shared/StandardPage.svelte'
</script>

<StandardPage title="Xyz">
	<Breadcrumbs
		slot="breadcrumbs"
		collapsable
		crumbs="{[
			['/home', 'Home'],
			['/general-components', 'General components'],
			['/general-components/xyz', 'Xyz'],
		]}" />

	<Heading h1 xl>Xyz</Heading>
	<Paragraph>A paragraph...</Paragraph>
</StandardPage>
