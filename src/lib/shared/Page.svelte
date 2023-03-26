<script>
	import Main from '$govuk/Main.svelte'
	import PhaseBanner from '$govuk/PhaseBanner.svelte'
	import WidthContainer from '$govuk/WidthContainer.svelte'

	export let title = ''

	if (title) {
		title = `${title} | Svelte GDS Design System`
	} else {
		title = 'Svelte GDS Design System'
	}
</script>

<WidthContainer title="{title}">
	<PhaseBanner feedbackTo="/feedback" />
	<slot name="breadcrumbs" />
	<Main>
		<slot />
	</Main>
</WidthContainer>
